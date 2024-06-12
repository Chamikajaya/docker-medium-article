import "dotenv/config";
import express from "express";
import Hotel from "./models/hotelModel";
import connectToDatabase from "./database/mongodb";


const app = express();
connectToDatabase();



const PORT = 3000




app.get("/hotels", async (req, res) => {
    const hotels = await Hotel.find({});
    res.json(hotels);
});

app.listen(PORT, () => {
    console.log(`Hotel Service listens on ${PORT}`);
});
