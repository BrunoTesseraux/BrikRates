
import { Schema, model, Document, Types } from 'mongoose';

interface IHotelSettings {
  hotel: Types.ObjectId;
  settings: {
    color: string;
    priceColor30Days: string;
    notifications: boolean;
    preferredRoomTypes: string[];
    // Weitere hotelspezifische Einstellungen
  };
}

interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  settings: {
    theme: string;
    colorScheme: string;
    // Weitere allgemeine Einstellungen
  };
  watchedHotels: IHotelSettings[];
}

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
