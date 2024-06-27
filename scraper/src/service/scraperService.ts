// src/service/scraperService.ts

import puppeteer from 'puppeteer';
import { IHotel, IScrapedPrice } from '../models/interfaces/Interfaces';
import { dateUtils } from '../utils';
import { includioScrapeFunction } from '../configHotel.ts/scaperFunctions/BaWü/includio';


const scrapeData = async (hotel: IHotel, arrivalDate: Date, daysAhead: number): Promise<IScrapedPrice[]> => {
    const departureDate = dateUtils.addDays(arrivalDate, daysAhead);
    const url = hotel.url.replace("{arrival}", dateUtils.formatDate(arrivalDate)).replace("{departure}", dateUtils.formatDate(departureDate));

    console.log(url);
    return includioScrapeFunction(url);
};

export const scrapeHotelData = async (hotel: IHotel): Promise<IScrapedPrice[]> => {
    const today = new Date();
    const nextMonth = dateUtils.addMonths(today, 1);

    const pricesToday = await scrapeData(hotel, today, 1);
    const pricesNextMonth = await scrapeData(hotel, nextMonth, 1);

    const combinedPrices = pricesToday.map(todayPrice => {
        const futurePrice = pricesNextMonth.find(price => price.typ === todayPrice.typ);
        return {
            typ: todayPrice.typ,
            size: todayPrice.size,
            pricePerNight: todayPrice.pricePerNight,
            date: todayPrice.date,
            priceIn30Days: futurePrice ? futurePrice.pricePerNight : 'nicht verfügbar'
        };
    });

    return combinedPrices;
};