// src/controller/testScrapeController.ts
import { Request, Response } from 'express';
import hotelConfigs from '../configHotel.ts/configs';
import { scrapeHotelData } from '../service/scaperService';

export const testScrapeController = async (req: Request, res: Response) => {
    const hotelName = req.params.hotelName;
    const hotelConfig = hotelConfigs.find(hotel => hotel.name === hotelName);

    if (!hotelConfig) {
        return res.status(404).json({ error: 'Hotel not found' });
    }

    try {
        const scrapedPriceData = await scrapeHotelData(hotelConfig);
        res.json({ success: true, scrapedPriceData });
    } catch (error) {
        const typedError = error as Error;
        console.error(`Fehler beim Scrapen der Website für ${hotelName}:`, typedError);
        res.status(500).json({ error: 'Fehler beim Scrapen der Website', details: typedError.message });
    }
};