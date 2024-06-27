import { IScrapedPrice } from '../../../models/interfaces/Interfaces';
import puppeteer from 'puppeteer';
import { utils } from '../../../service/utils';

export const includioScrapeFunction = async (url: string): Promise<IScrapedPrice[]> => {
    const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2' });

    const result = await page.evaluate(() => {
        const priceElements = document.querySelectorAll('.grid-item');
        return Array.from(priceElements).map(priceElement => {
            const element = priceElement as HTMLElement;
            let inseratText = element ? element.innerText : 'Preis nicht gefunden';
            console.log(inseratText);
            return {
                inseratText
            };
        });
    });

    await browser.close();

    return result.map(item => utils.processScrapedData(item.inseratText));
};