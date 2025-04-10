const express = require('express');
const { Router } = require("express");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { UserModel } = require('./db.js');
const { JWT_SECRET } = require('./config.js');
const cors = require('cors');
const app = express();
const userRouter = Router();

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());

userRouter.get('/', cors(), async (req, res) => {
    res.json()
})

userRouter.post('/signup', async (req, res) => {
    const { email, password, conPassword } = req.body;

    if (!email || !password || !conPassword) {
        return res.status(400).json({ message: "All fields are required" });
    }

    if (password !== conPassword) {
        return res.status(400).json({ message: "Passwords do not match" });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        await UserModel.create({
            email,
            password: hashedPassword,
            followedLeagues: [],
            followedTeams: []
        });

        const user = await UserModel.findOne({
            email
        });

        const token = jwt.sign({
            id : user._id
        }, JWT_SECRET);

        res.json({
            token : token
        })
    } catch (e) {
        console.error("Signup Error:", e); 
        res.status(500).json({ message: "Account exist, Login" });
    }
});


userRouter.post('/login', async (req, res) => {
    const {email, password} = req.body;

    const user = await UserModel.findOne({
        email
    });

    if(!user){
        res.status(403).json({
            message : "User doesn't exist, Sign up"
        })
        return;
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if(passwordMatch){
        const token = jwt.sign({
            id : user._id
        }, JWT_SECRET);

        res.json({
            token : token
        })
    } else {
        res.status(403).json({
            message : "incorrect credentials"
        })
    }
});

userRouter.get('/me', async (req, res) => {
    const token = req.headers.token; 

    try {
        const decodedInfo = jwt.verify(token, JWT_SECRET);
        const id = decodedInfo.id;

        const user = await UserModel.findOne({ _id : id });

        res.json({ user });
    } catch (e) {
        res.status(403).json({
            message: "User not found or token invalid"
        });
    }
});


module.exports = {
    userRouter : userRouter
}