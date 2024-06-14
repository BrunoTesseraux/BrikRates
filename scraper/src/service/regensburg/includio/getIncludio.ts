import puppeteer from "puppeteer";
import { IScrapedPrice } from "../../../models/interfaces/Interfaces";
import { utils } from "./utils";
import { dateUtils } from '../../../utils/index';


const scrapeData = async (arrivalDate: Date, daysAhead: number): Promise<IScrapedPrice[]> => {
    const departureDate = dateUtils.addDays(arrivalDate, daysAhead);
    const url = utils.generateUrl(arrivalDate, departureDate);
    console.log(`Generated URL for arrival ${dateUtils.formatDate(arrivalDate)} and departure ${dateUtils.formatDate(departureDate)}: ${url}`);

    try {
        const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
        const page = await browser.newPage();
        await page.goto(url, { waitUntil: 'networkidle2' });

        const result = await page.evaluate(() => {
            const priceElements = document.querySelectorAll('.grid-item');
            return Array.from(priceElements).map(priceElement => {
                const element = priceElement as HTMLElement;
                let inseratText = element ? element.innerText : 'Preis nicht gefunden';
                console.log(inseratText); // Debugging output
                return {
                    inseratText
                };
            });
        });

        await browser.close();

        const processedPrices = result.map(item => utils.processScrapedData(item.inseratText));
        console.log(`Scraped data for arrival ${dateUtils.formatDate(arrivalDate)} and departure ${dateUtils.formatDate(departureDate)}:`, processedPrices);

        return processedPrices;
    } catch (error) {
        const typedError = error as Error;
        console.error(`Error during scraping data for arrival ${dateUtils.formatDate(arrivalDate)} and departure ${dateUtils.formatDate(departureDate)}:`, typedError);
        throw new Error(`Scraping data failed for arrival ${dateUtils.formatDate(arrivalDate)} and departure ${dateUtils.formatDate(departureDate)}: ` + typedError.message);
    }
};

export const getIncludio = {
    scrapeAndReturn: async (): Promise<IScrapedPrice[]> => {
        const today = new Date();
        const nextMonth = dateUtils.addMonths(today, 1);

        const pricesToday = await scrapeData(today, 1);  // Heute + 1 Tag
        const pricesNextMonth = await scrapeData(nextMonth, 1);  // Nächster Monat + 1 Tag

        console.log("Prices today:", pricesToday);
        console.log("Prices next month:", pricesNextMonth);

        // Kombinieren der gescrapten Daten basierend auf dem Zimmertyp
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

        console.log("Combined prices:", combinedPrices);

        return combinedPrices;
    }
};