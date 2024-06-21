import express from 'express';
import { hotelController } from '../controller/hotelConttroller';
import { testScrapeController } from '../controller/textCtrl';

const ScrapeRouter = express
.Router()
.post('/:hotelName', hotelController)
.get('/:hotelName', testScrapeController)

export default ScrapeRouter;