import Hotel from "../../../models/Hotel";
import { IPriceRecord, IScrapedPrice } from "../../../models/interfaces/Interfaces";
import PriceRecord from "../../../models/PriceRecord";
import RoomType from "../../../models/RoomType";
import { isHotel, isRoomType } from "./utils/typeGuards";
import { Types } from "mongoose";

export const postIncludio = {
    async post(scrapedPriceData: IScrapedPrice[]): Promise<IPriceRecord[]> {
        try {
            const hotelName = 'Includio Regensburg';
            const hotel = await Hotel.findOne({ name: hotelName }).exec();
            if (!hotel || !isHotel(hotel)) throw new Error('Hotel nicht gefunden');

            const savedPrices: IPriceRecord[] = [];

            for (const data of scrapedPriceData) {
                const roomType = await RoomType.findOne({ name: data.typ }).exec();
                if (!roomType || !isRoomType(roomType)) throw new Error(`Zimmertyp ${data.typ} nicht gefunden`);

                const priceData: any = {
                    hotel: hotel._id as Types.ObjectId,
                    roomType: roomType._id as Types.ObjectId,
                    pricePerNight: data.pricePerNight,
                    dateScraped: new Date(data.date),
                    priceIn30Days: data.priceIn30Days
                };

                const priceRecord = new PriceRecord(priceData);
                const savedPrice = await priceRecord.save();
                savedPrices.push(savedPrice.toObject());
            }

            return savedPrices;
        } catch (error) {
            const typedError = error as Error;
            console.error('Fehler beim Speichern der Daten in der Datenbank:', typedError);
            throw new Error('Speichern der Daten in der Datenbank fehlgeschlagen: ' + typedError.message);
        }
    }
};