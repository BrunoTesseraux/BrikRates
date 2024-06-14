import express from 'express';
import { ScraperContoller } from '../controller';

const ScrapeRouter = express
.Router()
.post('/includio', ScraperContoller.includioCtrl.scrape);

export default ScrapeRouter;