import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import movieRoutes from './routes/movieRoutes.js';

dotenv.config();  // Load environment variables

const app = express();
app.use(express.json());  // Parse incoming JSON requests

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection failed:', err));

// Authentication routes
app.use('/api/auth', authRoutes);

// Movie routes
app.use('/api/movies', movieRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
