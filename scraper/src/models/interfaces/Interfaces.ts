import { Types, Document } from 'mongoose';

export interface IHotel extends Document {
  name: string;
  address: string;
  website: string;
}

export interface IPriceRecord extends Document {
  hotel: Types.ObjectId;
  roomType: Types.ObjectId;
  pricePerNight: string;
  dateScraped: Date;
  priceIn30Days: string;
}

export interface IRoomType extends Document {
  name: string;
  description: string;
  size: string;
}

export interface IHotelSettings {
  hotel: Types.ObjectId;
  settings: {
    color: string;
    priceColor30Days: string;
    notifications: boolean;
    preferredRoomTypes: string[];
  };
}

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  settings: {
    theme: string;
    colorScheme: string;
  };
  watchedHotels: IHotelSettings[];
}

export interface IScrapedPrice {
  typ: string; // room type
  size: string;
  pricePerNight: string;
  date: Date;
  priceIn30Days: string;
}

export interface IHotelConfig {
    name: string;
    url: string;
    city: string;
    scrapeFunction: (url: string) => Promise<IScrapedPrice[]>;
}