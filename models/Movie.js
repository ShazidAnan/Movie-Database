import mongoose from 'mongoose';  // Import Mongoose

// Define the schema for the Movie model
const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  director: { type: String, required: true },
  genre: { type: String, required: true },
  releaseYear: { type: Number, required: true }
});

// Create the Movie model using the schema
const Movie = mongoose.model('Movie', movieSchema);

// Export the Movie model
export default Movie;
