import Hotel from "../models/Hotel";
import { IPriceRecord, IScrapedPrice } from "../models/interfaces/Interfaces";
import PriceRecord from "../models/PriceRecord";
import RoomType from "../models/RoomType";
import { Types } from "mongoose";

export const postScrapedData = async (hotelName: string, scrapedPriceData: IScrapedPrice[]): Promise<IPriceRecord[]> => {
    const hotel = await Hotel.findOne({ name: hotelName }).exec();
    if (!hotel) throw new Error('Hotel nicht gefunden');

    const savedPrices: IPriceRecord[] = [];

    for (const data of scrapedPriceData) {
        const roomType = await RoomType.findOne({ name: data.typ }).exec();
        if (!roomType) throw new Error(`Zimmertyp ${data.typ} nicht gefunden`);

        const priceData: any = {
            hotel: hotel._id as Types.ObjectId,
            roomType: roomType._id as Types.ObjectId,
            pricePerNight: data.pricePerNight,
            dateScraped: new Date(data.date),
            priceIn30Days: data.priceIn30Days
        };
console.log(priceData);

        const priceRecord = new PriceRecord(priceData);
        const savedPrice = await priceRecord.save();
        savedPrices.push(savedPrice.toObject());
    }

    return savedPrices;
};