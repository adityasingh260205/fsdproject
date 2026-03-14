const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db');

const authRoutes = require('./routes/authRoutes');
const templeRoutes = require('./routes/templeRoutes');
const slotRoutes = require('./routes/slotRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const donationRoutes = require('./routes/donationRoutes');
const transportRoutes = require('./routes/transportRoutes');
const transportBookingRoutes = require('./routes/transportBookingRoutes');

dotenv.config();
connectDB();

const app = express();

app.use(express.json()); 
app.use(cors({
    origin: ['http://localhost:5173', 'https://darshaneasefrontend.onrender.com'], 
    credentials: true
})); // This allows your future frontend URL to talk to this backend

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Health check route so Render knows the API is up
app.get('/', (req, res) => {
    res.json({ message: 'DarshanEase API is running smoothly...' });
});

app.use('/api/auth', authRoutes);
app.use('/api/temples', templeRoutes);
app.use('/api/slots', slotRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/donations', donationRoutes);
app.use('/api/transport', transportRoutes);
app.use('/api/transport-bookings', transportBookingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});