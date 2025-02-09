import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  // Female Users
  {
    email: "ava.wilson@example.com",
    fullName: "Ava Wilson",
    password: "123456",
    profilePic: "https://avatar.iran.liara.run/public/girl",
  },
  {
    email: "isabella.brown@example.com",
    fullName: "Isabella Brown",
    password: "123456",
    profilePic: "https://avatar.iran.liara.run/public/girl",
  },
  {
    email: "mia.johnson@example.com",
    fullName: "Mia Johnson",
    password: "123456",
    profilePic: "https://avatar.iran.liara.run/public/girl",
  },
  {
    email: "charlotte.williams@example.com",
    fullName: "Charlotte Williams",
    password: "123456",
    profilePic: "https://avatar.iran.liara.run/public/girl",
  },
  {
    email: "amelia.garcia@example.com",
    fullName: "Amelia Garcia",
    password: "123456",
    profilePic: "https://avatar.iran.liara.run/public/girl",
  },

  // Male Users
  {
    email: "james.anderson@example.com",
    fullName: "James Anderson",
    password: "123456",
    profilePic: "https://avatar.iran.liara.run/public/boy",
  },
  {
    email: "william.clark@example.com",
    fullName: "William Clark",
    password: "123456",
    profilePic: "https://avatar.iran.liara.run/public/boy",
  },
  {
    email: "benjamin.taylor@example.com",
    fullName: "Benjamin Taylor",
    password: "123456",
    profilePic: "https://avatar.iran.liara.run/public/boy",
  },
  {
    email: "lucas.moore@example.com",
    fullName: "Lucas Moore",
    password: "123456",
    profilePic: "https://avatar.iran.liara.run/public/boy",
  },
  {
    email: "henry.jackson@example.com",
    fullName: "Henry Jackson",
    password: "123456",
    profilePic: "https://avatar.iran.liara.run/public/boy",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

seedDatabase();
