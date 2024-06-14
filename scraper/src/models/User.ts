
import { Schema, model, Document, Types } from 'mongoose';
import { IHotelSettings, IUser } from './interfaces/Interfaces';


const hotelSettingsSchema = new Schema<IHotelSettings>({
  hotel: { type: Schema.Types.ObjectId, ref: 'Hotel' },
  settings: {
    color: String,
    priceColor30Days: String,
    notifications: { type: Boolean, default: true },
    preferredRoomTypes: [String],
    // Weitere hotelspezifische Einstellungen
  }
});

const userSchema = new Schema<IUser>({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  settings: {
    theme: { type: String, default: 'light' },
    colorScheme: { type: String, default: 'blue' },
    // Weitere allgemeine Einstellungen
  },
  watchedHotels: [hotelSettingsSchema]
});

const User = model<IUser>('User', userSchema);

export default User;
