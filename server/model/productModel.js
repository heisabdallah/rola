import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please provide a part name"],
    },
    make: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
},
{ timestamps: true },
)

const Product = models.Product || model("Product", ProductSchema)

export default Product;