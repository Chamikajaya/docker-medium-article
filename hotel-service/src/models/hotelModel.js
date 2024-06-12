import { Schema, model } from "mongoose";

const hotelSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },

});

const Hotel = model("Hotel", hotelSchema);
export default Hotel;