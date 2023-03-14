import { Schema, model, models } from "mongoose";

const FeedbackSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
    },
    email: {
        type: email,
        required: true,
    },
    message: {
        type: String,
        required: true,
    }
})

const Feedback = models.Feedback || model("Feedback", FeedbackSchema)

export default Feedback;