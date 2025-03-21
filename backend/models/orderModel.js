import mongoose from "mongoose"

const orderSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    street:{
        type: String,
        required: true,
    },
    city:{
        type: String,
        required: true,
    },
    state:{
        type: String,
        required: true,
    },
    zipCode:{
        type: String,
        required: true,
    },
    country:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true,
    },
    amount:{
        type: String,
    },
    paymentMethod:{
        type: String,
    },
    status:{
        type: String,
        required: true,
    },
    date:{
        type: String,
    },
    cartData:{
        type: Object,
        default:{},
    },
})

orderSchema.pre("save", function (next) {
    const date = new Date();
    this.date = date.toLocaleString("en-GB", { timeZone: "Asia/Kolkata" });
    next();
});

const orderModel = mongoose.models.order || mongoose.model("order", orderSchema);
export default orderModel;