import { dateUtils } from "../../../../utils";


export const generateUrl = (arrivalDate: Date, departureDate: Date): string => {
    const formattedArrivalDate = dateUtils.formatDate(arrivalDate);
    const formattedDepartureDate = dateUtils.formatDate(departureDate);

    console.log(`Arrival date: ${formattedArrivalDate}, Departure date: ${formattedDepartureDate}`);
    
    return `https://onepagebooking.com/includio?arrival=${formattedArrivalDate}&departure=${formattedDepartureDate}&lang=de&adults=1&rooms=1&children=0`;
};