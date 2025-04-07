const express = require('express');
const { Router } = require("express");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { userModel, UserModel } = require('./db.js');
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

        res.status(201).json({ message: "Signup succeeded" });
    } catch (e) {
        console.error("Signup Error:", e); // log it!
        res.status(500).json({ message: "Signup failed" });
    }
});


userRouter.post('/login', async (req, res) => {
    const {email, password} = req.body;

    const user = await UserModel.findOne({
        email
    });

    if(!user){
        res.status(403).json({
            message : "user doesnt exist"
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

module.exports = {
    userRouter : userRouter
}