import React, { createContext, useState } from 'react';

// Beispielantwort der Hotels
const exampleResponse = [
    {
        "hotelName": "Grand Hotel",
        "location": "New York",
        "color": "#FF5733",
        "roomTypes": [
            {
                "roomType": "Single Room",
                "priceData": [
                    { "date": "2024-06-10", "priceToday": 100, "priceInOneMonth": 120 },
                    { "date": "2024-06-11", "priceToday": 110, "priceInOneMonth": 125 },
                    { "date": "2024-06-12", "priceToday": 105, "priceInOneMonth": 122 },
                    { "date": "2024-06-13", "priceToday": 108, "priceInOneMonth": 124 },
                    { "date": "2024-06-14", "priceToday": 112, "priceInOneMonth": 127 }
                ]
            },
            {
                "roomType": "Double Room",
                "priceData": [
                    { "date": "2024-06-10", "priceToday": 150, "priceInOneMonth": 170 },
                    { "date": "2024-06-11", "priceToday": 155, "priceInOneMonth": 175 },
                    { "date": "2024-06-12", "priceToday": 152, "priceInOneMonth": 172 },
                    { "date": "2024-06-13", "priceToday": 158, "priceInOneMonth": 178 },
                    { "date": "2024-06-14", "priceToday": 160, "priceInOneMonth": 180 }
                ]
            }
        ]
    },
    {
        "hotelName": "Ocean View Resort",
        "location": "Miami",
        "color": "#33FF57",
        "roomTypes": [
            {
                "roomType": "Single Room",
                "priceData": [
                    { "date": "2024-06-10", "priceToday": 200, "priceInOneMonth": 220 },
                    { "date": "2024-06-11", "priceToday": 205, "priceInOneMonth": 225 },
                    { "date": "2024-06-12", "priceToday": 210, "priceInOneMonth": 230 },
                    { "date": "2024-06-13", "priceToday": 215, "priceInOneMonth": 235 },
                    { "date": "2024-06-14", "priceToday": 220, "priceInOneMonth": 240 }
                ]
            },
            {
                "roomType": "Double Room",
                "priceData": [
                    { "date": "2024-06-10", "priceToday": 250, "priceInOneMonth": 270 },
                    { "date": "2024-06-11", "priceToday": 255, "priceInOneMonth": 275 },
                    { "date": "2024-06-12", "priceToday": 260, "priceInOneMonth": 280 },
                    { "date": "2024-06-13", "priceToday": 265, "priceInOneMonth": 285 },
                    { "date": "2024-06-14", "priceToday": 270, "priceInOneMonth": 290 }
                ]
            }
        ]
    },
    {
        "hotelName": "Alpine Lodge",
        "location": "Swiss Alps",
        "color": "#3357FF",
        "roomTypes": [
            {
                "roomType": "Single Room",
                "priceData": [
                    { "date": "2024-06-10", "priceToday": 300, "priceInOneMonth": 320 },
                    { "date": "2024-06-11", "priceToday": 305, "priceInOneMonth": 325 },
                    { "date": "2024-06-12", "priceToday": 310, "priceInOneMonth": 330 },
                    { "date": "2024-06-13", "priceToday": 315, "priceInOneMonth": 335 },
                    { "date": "2024-06-14", "priceToday": 320, "priceInOneMonth": 340 }
                ]
            },
            {
                "roomType": "Double Room",
                "priceData": [
                    { "date": "2024-06-10", "priceToday": 350, "priceInOneMonth": 370 },
                    { "date": "2024-06-11", "priceToday": 355, "priceInOneMonth": 375 },
                    { "date": "2024-06-12", "priceToday": 360, "priceInOneMonth": 380 },
                    { "date": "2024-06-13", "priceToday": 365, "priceInOneMonth": 385 },
                    { "date": "2024-06-14", "priceToday": 370, "priceInOneMonth": 390 }
                ]
            }
        ]
    }
];

const fetchedDataContext = createContext();

const FetchedDataProvide = ({ children }) => {
    const [fetchedData, setFetchedData] = useState(exampleResponse);

    // Hier könnten zusätzliche Zustände und Funktionen für das Management der Hotels hinzugefügt werden

    return (
        <fetchedDataContext.Provider value={{ fetchedData }}>
            {children}
        </fetchedDataContext.Provider>
    );
};

export { fetchedDataContext, FetchedDataProvide };