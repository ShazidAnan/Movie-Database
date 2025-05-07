import express from 'express';
import Movie from '../models/Movie.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// 📌 Public: Get all movies
router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch movies', error: err.message });
  }
});

// 📌 Public: Get single movie by ID
router.get('/:id', async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).json({ message: 'Movie not found' });
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching movie', error: err.message });
  }
});

// 🔒 Protected: Add a new movie
router.post('/', authMiddleware, async (req, res) => {
  const { title, genre, director, releaseYear } = req.body;

  if (!title || !genre || !director || !releaseYear) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newMovie = new Movie({ title, genre, director, releaseYear });
    await newMovie.save();
    res.status(201).json({ message: 'Movie added successfully', movie: newMovie });
  } catch (err) {
    res.status(500).json({ message: 'Failed to add movie', error: err.message });
  }
});

// 🔒 Protected: Update movie
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedMovie) return res.status(404).json({ message: 'Movie not found' });
    res.status(200).json({ message: 'Movie updated', movie: updatedMovie });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update movie', error: err.message });
  }
});

// 🔒 Protected: Delete movie
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const deletedMovie = await Movie.findByIdAndDelete(req.params.id);
    if (!deletedMovie) return res.status(404).json({ message: 'Movie not found' });
    res.status(200).json({ message: 'Movie deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete movie', error: err.message });
  }
});

export default router;
