
import { Schema, model} from 'mongoose';
import {  IPriceRecord } from './interfaces/Interfaces';

const priceSchema = new Schema<IPriceRecord>({
  hotel: { type: Schema.Types.ObjectId, ref: 'Hotel' },
  roomType: { type: Schema.Types.ObjectId, ref: 'RoomType' },
  pricePerNight: String,
  dateScraped: { type: Date, default: Date.now },
  priceIn30Days: String
});

const PriceRecord = model<IPriceRecord>('PriceRecord', priceSchema);

export default PriceRecord;
