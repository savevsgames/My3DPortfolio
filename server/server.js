import express from "express";
// import path from 'node:path';
// import db from './config/connection.js';
import routes from "./routes/index.js";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 3001;

// Ensure paths are resolved correctly
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware to parse request body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from the React build
app.use(express.static(path.join(__dirname, "../client/dist")));

// Routes
app.use(routes);

// Catch-all route to serve React app for unknown paths
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`🌍 Server is running on http://localhost:${PORT}`);
});
