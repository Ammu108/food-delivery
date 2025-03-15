import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const login = async (req, res) => {

    const { email, password } = req.body;

    try {
        
        const user = await userModel.findOne({email})
        if(!user){
            return res.json({success:false, message: "user doesn't exist"});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.json({success:false, message:"Invalid Credentials"})
        }

        const token = createToken(user._id)
        return res.json({success: true, token, user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            picture:user.picture,
        }})

    } catch (error) {
        console.log(error)
        return res.json({success:false, message: "error"})
    }

}

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}

const registerUser = async (req, res) => {

    const { name, password, email } = req.body;

    try {

        const userExists = await userModel.findOne({ email });
        if (userExists) {
            return res.json({ success: false, message: "user Already Exists" });
        }

        if (!validator.isEmail(email)) {
            return res.json({ sucess: false, message: "Enter The Valid Email." })
        }

        if (password.length < 6) {
            return res.json({ success: false, message: "Enter a strong password" })
        }

        // hashing the passsword
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword,
            date: new Date(),
        })

        const user = await newUser.save();
        const token = createToken(user._id);

        res.json({
            sucess: true, token, user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                picture: user.picture,
            }
        })

    } catch (error) {
        console.log(error)
        return res.json({ sucess: false, message: "error" })
    }
}

export { registerUser, login };