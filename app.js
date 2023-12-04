// const express = require("express");
import "dotenv/config";
import express from "express";
import HelloRoutes from "./hello.js";
import Lab5 from "./Lab55.js";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import UserRoutes from "./users/routes.js";
import cors from "cors";
import mongoose from "mongoose";
// const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/kanbas' || 'mongodb+srv://caiirene:Caiailin1998@cluster5610.845pk72.mongodb.net/?retryWrites=true&w=majority'
// mongoose.connect(CONNECTION_STRING);
mongoose.connect("mongodb://127.0.0.1:27017/kanbas");
import session from "express-session";
import "dotenv/config";


const app = express();
app.use(cors({
    credentials: true,
    origin: "http://localhost:3000",
    origin: process.env.FRONTEND_URL
}));

const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
    };
}
app.use(session(sessionOptions));

app.use(express.json());


UserRoutes(app);
ModuleRoutes(app);

ModuleRoutes(app);
CourseRoutes(app);
Lab5(app);
HelloRoutes(app);

app.listen(process.env.PORT || 4000);
//change mongodb://localhost:27017