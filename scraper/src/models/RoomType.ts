
import { Schema, model, Document } from 'mongoose';
import { IRoomType } from './interfaces/Interfaces';

const roomTypeSchema = new Schema<IRoomType>({
  name: { type: String, required: true },
  description: String,
  size: String,
  // Weitere statische Informationen
});

const RoomType = model<IRoomType>('RoomType', roomTypeSchema);

export default RoomType;
