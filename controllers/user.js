const User = require('../model/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
    try {
        console.log(req.body);
        const user = await User.findOne({ username: req.body.username });
        !user && res.status(404).json("User not exist!");
        user && console.log(user);

        const validate =  bcrypt.compare(req.body.password, user.password);
        !validate && res.status(401).json("Wrong credentials");

        const {password, ...userInfo} = user._doc;
        const token = jwt.sign(
            userInfo,
            process.env.TOKEN_KEY
        );
        
        validate && res.status(200).json({ token });
    } catch (error) {
        res.status(500).json(error);
    }
}