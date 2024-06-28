import cron from 'node-cron';
import { postScrapedData } from '../service/postService';
import { scrapeHotelData } from '../service/scraperService';
import hotelConfigs from '../configHotel.ts/configs';
import { IHotel } from '../models/interfaces/Interfaces';
const scrapeAndSave = async (hotel: IHotel): Promise<void> => {
    try {
        const scrapedHotelData = await scrapeHotelData(hotel);
        await postScrapedData(hotel.name, scrapedHotelData);
    } catch (error) {
        const err = error as Error;
        console.error(`Fehler beim Scrapen und Speichern der Daten für ${hotel.name}:`, err);
    }
};

export const scheduleScrapingJobs = () => {
    const times = ['0 5 * * *', '32 11 * * *'];
    times.forEach(time => {
        cron.schedule(time, async () => {
            for (const hotel of hotelConfigs) {
                await scrapeAndSave(hotel);
            }
        });
    });
};