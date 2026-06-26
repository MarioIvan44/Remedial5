/**
 * fields: 
 * clientId
 * orderDate
 * sparePart
 * total
 * status

 */

import { Schema, model } from "mongoose"

const ordersSchema = new Schema({
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },
    orderDate: {
        type: Date,
        default: Date.now
    },
    sparePart: {
        type: String,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ["pending", "shipped", "delivered"],
        default: "pending"
    }
}, {
    timestamps: true,
    strict: false
})

export default model("Orders", ordersSchema)
