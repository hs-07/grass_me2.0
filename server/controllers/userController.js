const User = require("../model/userModel");
const bcrypt = require("bcrypt");


module.exports.register = async (req,res,next) => {
try {
    const {username, email, password, number} = req.body;
const usernameCheck = await User.findOne({ username });
if(usernameCheck)
return res.json({msg: "Username already used", status: false});

const emailCheck = await User.findOne({email});
if(emailCheck)
return res.json({msg: "Email already used", status: false});

const hashPassword = await bcrypt.hash(password, 10);
const user = await User.create({
    email,
    username,
    password: hashPassword,
    number,
});
delete user.password;
return res.json({ status: true, user });
} catch (error) {
    next(error);
}
};