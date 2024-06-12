import "dotenv/config";
import express from "express";
import fetch from "node-fetch";


const app = express();
const port = process.env.PORT || 3001;

const bookings = [
    {
        id: 1,
        hotelId: 1,
        roomId: 1,
        startDate: "2021-01-01",
        endDate: "2021-01-05",
    },
    {
        id: 2,
        hotelId: 2,
        roomId: 2,
        startDate: "2021-02-01",
        endDate: "2021-02-05",
    },
    {
        id: 3,
        hotelId: 3,
        roomId: 3,
        startDate: "2021-03-01",
        endDate: "2021-03-05",
    },
];



const fetchHotels = async () => {
    const response = await fetch(`${process.env.HOTEL_SERVICE_URL}`);
    if (!response.ok) {
        throw new Error("Failed to fetch hotels");
    }
    return response.json();
};

const getBookingDetails = async () => {
    const hotels = await fetchHotels();
    return bookings.map((booking) => {
        const hotelDetails = hotels.find((hotel) => hotel.id === booking.hotelId);
        return {
            bookingId: booking.id,
            hotelName: hotelDetails.name,
            country: hotelDetails.country,
            startDate: booking.startDate,
            endDate: booking.endDate,
        };
    });
};


app.get("/bookings", async (req, res) => {
    try {
        const bookings = await getBookingDetails();
        res.json(bookings);
    } catch (error) {
        console.error("Error fetching bookings details:", error);
        res.status(500).send("Failed to fetch bookings details");
    }
});

app.listen(port, () => {
    console.log(`Booking Service running at http://localhost:${port}`);
});