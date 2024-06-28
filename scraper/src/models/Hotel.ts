
import { Schema, model } from 'mongoose';
import { IHotel } from './interfaces/Interfaces';


const hotelSchema = new Schema<IHotel>({
  name: { type: String, required: true },
  city: { type: String, required: true },
  url: { type: String, required: true },
});

const Hotel = model<IHotel>('Hotel', hotelSchema);

export default Hotel;
