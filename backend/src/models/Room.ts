
import { Schema, model, Document, Types } from 'mongoose';

interface IRoom extends Document {
  hotel: Types.ObjectId;
  roomType: Types.ObjectId;
  pricePerNight: number;
  dateScraped: Date;
  priceIn30Days: number;
}

const roomSchema = new Schema<IRoom>({
  hotel: { type: Schema.Types.ObjectId, ref: 'Hotel' },
  roomType: { type: Schema.Types.ObjectId, ref: 'RoomType' },
  pricePerNight: Number,
  dateScraped: { type: Date, default: Date.now },
  priceIn30Days: Number
});

const Room = model<IRoom>('Room', roomSchema);

export default Room;
