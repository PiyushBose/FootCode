const express = require('express');
const { Router } = require("express");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { UserModel } = require('./db.js');
const { JWT_SECRET } = require('./config.js');
const cors = require('cors');
const { z } = require('zod');
const { signupSchema, loginSchema, followSchema } = require('./zodSchemas.js');

const app = express();
const userRouter = Router();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

userRouter.get('/', cors(), async (req, res) => {
    res.json({ message: "User endpoint working" });
});

userRouter.post('/signup', async (req, res) => {
    const parsed = signupSchema.safeParse(req.body);

    if (!parsed.success) {
        return res.status(400).json({ message: parsed.error.errors[0].message });
    }

    const { email, password, conPassword } = parsed.data;

    if (password !== conPassword) {
        return res.status(400).json({ message: "Passwords do not match" });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const initialLeagues = [
            2001, 2002, 2003, 2014, 2015, 2017, 2019, 2021
        ].map(id => ({ id, followed: false }));

        await UserModel.create({
            email,
            password: hashedPassword,
            followedLeagues: initialLeagues
        });

        const user = await UserModel.findOne({ email });
        const token = jwt.sign({ id: user._id }, JWT_SECRET);

        res.json({ token });
    } catch (e) {
        console.error("Signup Error:", e);
        res.status(500).json({ message: "Account may already exist. Please login." });
    }
});

userRouter.post('/login', async (req, res) => {
    const parsed = loginSchema.safeParse(req.body);

    if (!parsed.success) {
        return res.status(400).json({ message: parsed.error.errors[0].message });
    }

    const { email, password } = parsed.data;

    const user = await UserModel.findOne({ email });

    if (!user) {
        return res.status(403).json({ message: "User doesn't exist, please sign up." });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
        const token = jwt.sign({ id: user._id }, JWT_SECRET);
        res.json({ token });
    } else {
        res.status(403).json({ message: "Incorrect credentials" });
    }
});

userRouter.get('/me', async (req, res) => {
    const token = req.headers.token;

    try {
        const decodedInfo = jwt.verify(token, JWT_SECRET);
        const id = decodedInfo.id;

        const user = await UserModel.findById(id).select("-password");

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json({ user });
    } catch (e) {
        res.status(403).json({ message: "Invalid or expired token" });
    }
});

const verifyToken = (req, res, next) => {
    const token = req.headers.token;
    
    if (!token) {
        return res.status(401).json({ message: 'Access Denied: No token provided' });
    }
    
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Access Denied: Invalid token' });
    }
};

userRouter.post('/follow', verifyToken, async (req, res) => {
    const parsed = followSchema.safeParse(req.body);

    if (!parsed.success) {
        return res.status(400).json({ message: parsed.error.errors[0].message });
    }

    const { leagueId, follow } = parsed.data;
    const userId = req.user.id;

    try {
        const user = await UserModel.findById(userId);
        
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const leagueIndex = user.followedLeagues.findIndex(league => league.id === leagueId);

        if (leagueIndex === -1) {
            user.followedLeagues.push({ id: leagueId, followed: follow });
        } else {
            user.followedLeagues[leagueIndex].followed = follow;
        }

        await user.save();

        res.status(200).json({ message: 'Follow status updated successfully', followedLeagues: user.followedLeagues });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = {
    userRouter
};
