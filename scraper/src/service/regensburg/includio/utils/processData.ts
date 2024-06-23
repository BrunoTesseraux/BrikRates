import { IScrapedPrice } from "../../../../models/interfaces/Interfaces";



export const processScrapedData = (inseratText: string): IScrapedPrice => {
    const regex = /(DOPPELZIMMER\s+[A-Z\s+\-]+|FAMILIENZIMMER)\s*\n*\s*(\d+\s*m²)\s*\n*\s*ab\s*(\d+,\d{2})\s*€/;

    const parts = regex.exec(inseratText);

    const typ = parts ? parts[1].trim() : 'Typ nicht gefunden';
    const size = parts ? parts[2].trim() : 'Größe nicht gefunden';
    const price = parts ? parts[3].trim().replace(',', '.') : '0.00'; // Preis als string verarbeiten und Komma durch Punkt ersetzen
    const pricePerNight = parseFloat(price).toFixed(2); // string in number umwandeln und auf 2 Dezimalstellen begrenzen
    const date = new Date();

    return {
        typ, // room type
        size,
        pricePerNight,
        date,
        priceIn30Days: '' // Wir werden dieses Feld später in `getIncludio` ausfüllen
    };
};