import { connect } from "mongoose";
import Hotel from "../models/hotelModel";

const hotels = [
    {
        id: 1,
        name: "Hotel Sunshine",
        country: "USA"
    },
    {
        id: 2,
        name: "Hotel Moonlight",
        country: "Canada"
    },
    {
        id: 3,
        name: "Hotel Starlight",
        country: "UK"
    },

];

const seedDatabase = async () => {
    console.log("Seeding the database with initial hotel data...");
    await Book.insertMany(hotels);
    console.log("Database seeded successfully");
};

const checkHotelsExist = async () => {
    const hotelsExist = await Hotel.countDocuments();
    if (hotelsExist === 0) {
        await seedDatabase();
    } else {
        console.log("Hotels already exist in the database.");
    }
};

const connectToDatabase = async () => {
    try {
        await connect(process.env.DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected: " + process.env.DATABASE_URL);
        await checkBooksExist();
    } catch (err) {
        console.error("MongoDB connection error:", err);
    }
};

export default connectToDatabase;