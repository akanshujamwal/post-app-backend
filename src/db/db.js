require('dotenv').config()
const mongoose = require('mongoose')

const {MONGO_URL} = process.env


async function connectDB(){
await mongoose.connect(MONGO_URL)
}


module.exports = connectDB