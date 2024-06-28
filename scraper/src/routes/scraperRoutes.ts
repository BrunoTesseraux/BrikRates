import express from 'express';
import {  scrapeAndSave } from '../controller/hotelConttroller';


const ScrapeRouter = express
.Router()
.post('/:hotelName', scrapeAndSave)

export default ScrapeRouter;