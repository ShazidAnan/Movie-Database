// Filename: api-routes.js 
// Initialize express router 
import express from 'express' 
const router = express.Router() 
const app = express() 
app.use(express.json()); 

import bodyParser from "body-parser" 
app.use(bodyParser.urlencoded({ 
extended: true 
})); 
app.use(bodyParser.json()) 

import apiRoutes from "./routes/api-routes.js" 

app.use('/api', apiRoutes); 

const PORT = process.env.PORT || 3000
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