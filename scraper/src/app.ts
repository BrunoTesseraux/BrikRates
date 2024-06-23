import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import ScrapeRouter from './routes/scraperRoutes';
import { scheduleScrapingJobs } from './auto/cronJob';
// import autoScrape from './auto/index';

dotenv.config();

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/scrape', ScrapeRouter);
app.use('/api/test-scrape', ScrapeRouter);

scheduleScrapingJobs()

export { app };