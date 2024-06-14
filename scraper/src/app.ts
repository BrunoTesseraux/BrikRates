import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import ScrapeRouter from './routes/scraperRoutes';
// import autoScrape from './auto/index';

dotenv.config();

const app = express();

app.use(morgan('dev'));
app.use(express.json());

// Automatischdes Scrapen
// autoScrape.regensburg.includio();


// Routen definieren
app.get('/', (req, res) => {
    res.send('Seerver is running!');
    });
app.use('/api/scrape', ScrapeRouter);

export { app };