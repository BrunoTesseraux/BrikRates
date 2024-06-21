import cron from 'node-cron';
import { IHotelConfig } from '../models/interfaces/Interfaces';
import { scrapeHotelData } from '../service/scaperService';
import { postScrapedData } from '../service/postScrapedData';
import hotelConfigs from '../configHotel.ts/configs';

const scrapeAndSave = async (hotel: IHotelConfig): Promise<void> => {
    try {
        const scrapedHotelData = await scrapeHotelData(hotel);
        await postScrapedData.post(hotel.name, scrapedHotelData);
    } catch (error) {
        console.error(`Fehler beim Scrapen und Speichern der Daten für ${hotel.name}:`, error);
    }
};

export const scheduleScrapingJobs = () => {
    const times = ['0 5 * * *', '41 20 * * *'];
    times.forEach(time => {
        cron.schedule(time, async () => {
            for (const hotel of hotelConfigs) {
                await scrapeAndSave(hotel);
            }
        });
    });
};