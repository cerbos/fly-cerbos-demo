import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import {authRouter, courseRouter} from './routes/index.js';
import {errorHandler} from './middlewares/index.js';

// Create Express app
const app = express();

// Global Middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/auth', authRouter); // Authentication routes
app.use('/courses', courseRouter); // Courses routes

// error handling middleware
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}...`);
});
