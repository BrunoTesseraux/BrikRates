import { Request, Response } from 'express';
import { scrapeHotelData } from '../service/scraperService';
import { postScrapedData } from '../service/postService';
import hotelConfigs from '../configHotel.ts/configs';

export const scrapeAndSave = async (req: Request, res: Response): Promise<void> => {
    const { hotelName } = req.params;

    const hotel = hotelConfigs.find(h => h.name === hotelName);
    if (!hotel) {
        res.status(404).send(`Hotel ${hotelName} not found in configuration`);
        return;
    }

    try {
        const scrapedHotelData = await scrapeHotelData(hotel);
        await postScrapedData(hotel.name, scrapedHotelData);
        res.status(200).json({
            message: 'Scraping and saving data successful',
            data: scrapedHotelData
        });
    } catch (error) {
        const err = error as Error;
        if (!res.headersSent) {
            res.status(500).send(`Error during scraping and saving data: ${err.message}`);
        }
    }
};