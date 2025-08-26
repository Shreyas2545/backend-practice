// require('dotenv').config({path:'./env'})

// import mongoose from "mongoose";
// import {DB_NAME} from "../constants" used for 1st approach

// import express from "express";
// const app = express();

import connectDB from "./db/index.js";
import dotenv from "dotenv";
dotenv.config({
    path:'./env'
})

connectDB();


/*  1st approach
;(async ()=>{
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error",(error)=>{
        console.log("Error : ",error)
        throw error
       }) 

       app.listen(`app is listening on port ${process.env.PORT}`);

    } catch (error) {
        console.log("ERROR : ",error)
        throw error;
    }
})()
*/

