import { IHotelConfig } from '../models/interfaces/Interfaces';
import { includioScrapeFunction } from "./scaperFunctions/BaWü/includio";


const hotelConfigs: IHotelConfig[] = [
    {
        name: "Includio",
        url: "https://onepagebooking.com/includio?arrival={arrival}&departure={departure}&lang=de&adults=1&rooms=1&children=0",
        city: "Regensburg",
        scrapeFunction: includioScrapeFunction
    },
];

export default hotelConfigs;

