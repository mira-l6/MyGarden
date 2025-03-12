import express from "express";
import mongoose from 'mongoose';

import 'dotenv/config';
import router from './routes.js';

const app = express();

try {
    const uri = "mongodb://localhost:27017/plantDB"
    await mongoose.connect(process.env.DB_URI);

    console.log('Successfully connected to DB');

} catch (err) {
    console.log(err.message);
}

app.use(express.urlencoded());
app.use(router);

app.listen(3000, () => {
    console.log('Server is listening on http://localhost:3000...');
})