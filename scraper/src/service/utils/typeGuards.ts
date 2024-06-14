import { IHotel, IRoomType } from "../../models/interfaces/Interfaces";

export function isHotel(object: any): object is IHotel {
    return 'name' in object && 'address' in object && 'website' in object;
}

export function isRoomType(object: any): object is IRoomType {
    return 'name' in object && 'description' in object && 'size' in object;
}