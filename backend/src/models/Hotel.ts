
import { Schema, model, Document } from 'mongoose';

interface IHotel extends Document {
  name: string;
  address: string;
  website: string;
  // Weitere statische Informationen
}

const hotelSchema = new Schema<IHotel>({
  name: { type: String, required: true },
  address: String,
  website: String,
  // Weitere statische Informationen
});

const Hotel = model<IHotel>('Hotel', hotelSchema);

export default Hotel;
