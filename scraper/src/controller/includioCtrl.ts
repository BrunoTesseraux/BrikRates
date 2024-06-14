import { Request, Response } from 'express';
import { ScraperService } from '../service';
import { IScrapedPrice } from '../models/interfaces/Interfaces';

/**
 * Controller function to scrape data from the Includio service and save it to the database.
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @returns {Promise<void>} - A Promise that resolves when the scraping and saving is complete.
 */
export const includioCtrl = {
    async scrape(_: Request, res: Response) {
        try {
            // Scrape data from the services
            const scrapedPriceData: IScrapedPrice[] = await ScraperService.getIncludio.scrapeAndReturn();
            
            console.log("/CTRL/ Hotel-Details", scrapedPriceData);

            // Save to database using the service
            const savedPrices = await ScraperService.postIncludio.post(scrapedPriceData);
            
            res.json({ success: true, savedPrices });
        } catch (error) {
            const typedError = error as Error;
            console.error('Fehler beim Scrapen der Website:', typedError);
            res.status(500).json({ error: 'Fehler beim Scrapen der Website', details: typedError.message });
        }
    }
};