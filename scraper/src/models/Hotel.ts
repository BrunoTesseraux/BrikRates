
import { Schema, model, Document } from 'mongoose';
import { IHotel } from './interfaces/Interfaces';


const hotelSchema = new Schema<IHotel>({
  name: { type: String, required: true },
  address: String,
  website: String,
  // Weitere statische Informationen
});

const Hotel = model<IHotel>('Hotel', hotelSchema);

export default Hotel;
