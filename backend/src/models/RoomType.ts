
import { Schema, model, Document } from 'mongoose';

interface IRoomType extends Document {
  name: string;
  description: string;
  size: string;
  // Weitere statische Informationen
}

const roomTypeSchema = new Schema<IRoomType>({
  name: { type: String, required: true },
  description: String,
  size: String,
  // Weitere statische Informationen
});

const RoomType = model<IRoomType>('RoomType', roomTypeSchema);

export default RoomType;
