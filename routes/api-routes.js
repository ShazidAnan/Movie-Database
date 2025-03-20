// Filename: api-routes.js 
// Initialize express router 
import express from 'express' 
const router = express.Router() 
// Set default API response 
router.get('/', function (req, res) { 
res.json({ 
status: 'API is Working', 
message: 'Welcome to my REST API!' 
}); 
}); 
// Import controllers here 
// define routes here 
// Export API routes. As it is the only export, we make it the default. 
export default router;