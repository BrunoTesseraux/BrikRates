import { IHotel } from '../models/interfaces/Interfaces';

const hotelConfigs: IHotel[] = [
    {
        name: "Includio",
        city: "Regensburg",
        url: "https://onepagebooking.com/includio?arrival={arrival}&departure={departure}&lang=de&adults=1&rooms=1&children=0",
    } as IHotel
];

export default hotelConfigs;