import express from "express";

const app = express();


const hotels = [
    {
        id: "1",
        name: "Hotel Sunshine",
        country: "USA"
    },
    {
        id: "2",
        name: "Hotel Moonlight",
        country: "Canada"
    },
    {
        id: "3",
        name: "Hotel Starlight",
        country: "UK"
    },

];
const PORT = 3000

app.get("/hotels", async (req, res) => {
    res.json(hotels);
});

app.listen(PORT, () => {
    console.log(`Hotel Service listens on ${PORT}`);
});
