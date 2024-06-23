// src/controller/scrapeController.ts
import { Request, Response } from 'express';
import hotelConfigs from '../configHotel.ts/configs';
import { scrapeHotelData } from '../service/scaperService';
import { IScrapedPrice } from '../models/interfaces/Interfaces';
import { postScrapedData } from '../service/postScrapedData';


export const hotelController = async (req: Request, res: Response) => {
    const hotelName = req.params.hotelName;
    const hotelConfig = hotelConfigs.find(hotel => hotel.name === hotelName);

    if (!hotelConfig) {
        return res.status(404).json({ error: 'Hotel not found' });
    }

    try {
        const scrapedPriceData: IScrapedPrice[] = await scrapeHotelData(hotelConfig);
        console.log("/CTRL/ Hotel-Details", scrapedPriceData);

        const savedPrices = await postScrapedData.post(hotelConfig.name, scrapedPriceData);
        res.json({ success: true, savedPrices });
    } catch (error) {
        const typedError = error as Error;
        console.error('Fehler beim Scrapen der Website:', typedError);
        res.status(500).json({ error: 'Fehler beim Scrapen der Website', details: typedError.message });
    }
};