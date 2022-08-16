const express = require('express');
const dotenv = require('dotenv');
const chats = require('./data/dummyData');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes')
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();
dotenv.config();
connectDB();

// to get json data from frontend
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello');
});

// Error Handling middlewares
// app.use(notFound);
// app.use(errorHandler);

app.use('/api/user', userRoutes)

app.listen(process.env.PORT || 5000, console.log(`server is running on ${process.env.port || 5000}`))