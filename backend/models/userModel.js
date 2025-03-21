import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type: String,
    },
    cartData:{
        type: Object,
        default:{},
    }
})

userSchema.pre("save", function (next) {
    const date = new Date();
    this.date = date.toLocaleString("en-GB", { timeZone: "Asia/Kolkata" });
    next();
});

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;