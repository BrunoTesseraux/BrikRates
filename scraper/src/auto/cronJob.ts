// src/cronJob.ts
import cron from 'node-cron';
import { IHotelConfig } from '../models/interfaces/Interfaces';
import { scrapeHotelData } from '../service/scaperService';
import { postScrapedData } from '../service/postScrapedData';
import hotelConfigs from '../configHotel.ts/configs';

const maxAttempts = 5;

const retryScrapeAndSave = async (hotel: IHotelConfig): Promise<void> => {
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            console.log(`Scraping attempt ${attempt} for ${hotel.name} at ${new Date()}`);
            const scrapedHotelData = await scrapeHotelData(hotel);

            if (!scrapedHotelData || scrapedHotelData.length === 0) {
                throw new Error('Scraped data is empty.');
            }

            const savedHotel = await postScrapedData.post(hotel.name, scrapedHotelData);

            if (!savedHotel || savedHotel.length === 0) {
                throw new Error('Saved hotel data is empty.');
            }

            console.log(`Saved hotel data for ${hotel.name}:`, savedHotel);
            return;

        } catch (error) {
            console.error(`Attempt ${attempt} failed for ${hotel.name}:`, error);
            if (attempt === maxAttempts) {
                console.error(`Max attempts reached. Failed to scrape and save data for ${hotel.name}.`);
                throw error;
            }
            await new Promise(res => setTimeout(res, 5000));
        }
    }
};

export const scheduleScrapingJobs = () => {
    const times = ['0 5 * * *', '54 18 * * *'];
    times.forEach(time => {
        cron.schedule(time, async () => {
            for (const hotel of hotelConfigs) {
                try {
                    await retryScrapeAndSave(hotel);
                } catch (error) {
                    console.error(`Fehler beim automatisierten Scrapen der Website für ${hotel.name}:`, error);
                }
            }
        });
    });
};
