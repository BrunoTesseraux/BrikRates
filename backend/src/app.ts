import morgan from 'morgan';
import dotenv from 'dotenv';
import express from 'express';
// import autoScrape from './auto/index';

dotenv.config();

const app = express();

app.use(morgan('dev'));
app.use(express.json());

// Automatischdes Scrapen
// autoScrape.regensburg.includio();

// Routen definieren
app.get('/', (_, res) => {
    res.send('Seerver is running!');
});

export { app };