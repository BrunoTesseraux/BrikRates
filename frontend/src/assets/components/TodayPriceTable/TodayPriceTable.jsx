import React, { useState } from 'react';
import "./TodayPriceTable.scss"

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return `${day}.${month}.${year}`;
};

const TodaPriceTable = () => {

    const [visibleRoomTypes, setVisibleRoomTypes] = useState(() => {
        // Initialize visibleRoomTypes with only "Single Room" set to true
        const initialVisible = {};
        initialVisible['Single Room'] = true;
        return initialVisible;
    });
    const toggleRoomType = (roomType) => {
        setVisibleRoomTypes(prevState => ({
            ...prevState,
            [roomType]: !prevState[roomType]
        }));
    };

    const company = [
        {
            "hotelName": "Grand Hotel",
            "location": "New York",
            "color": "#FF5733",
            "roomTypes": [
                {
                    "roomType": "Single Room",
                    "priceData": [
                        { "date": "2024-06-10", "priceToday": 100, "priceInOneMonth": 120 },
                    ]
                },
                {
                    "roomType": "Double Room",
                    "priceData": [
                        { "date": "2024-06-10", "priceToday": 150, "priceInOneMonth": 170 },
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
                    ]
                },
                {
                    "roomType": "Double Room",
                    "priceData": [
                        { "date": "2024-06-10", "priceToday": 250, "priceInOneMonth": 270 },
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
                        { "date": "2024-06-10", "priceToday": 305, "priceInOneMonth": 325 },
                    ]
                },
                {
                    "roomType": "Double Room",
                    "priceData": [
                        { "date": "2024-06-10", "priceToday": 350, "priceInOneMonth": 370 },
                    ]
                }
            ]
        },
        {
            "hotelName": "City Center Inn",
            "location": "Los Angeles",
            "color": "#FF33A5",
            "roomTypes": [
                {
                    "roomType": "Single Room",
                    "priceData": [
                        { "date": "2024-06-10", "priceToday": 180, "priceInOneMonth": 200 },
                    ]
                },
                {
                    "roomType": "Double Room",
                    "priceData": [
                        { "date": "2024-06-10", "priceToday": 220, "priceInOneMonth": 240 },
                    ]
                },
                {
                    "roomType": "Suite",
                    "priceData": [
                        { "date": "2024-06-10", "priceToday": 300, "priceInOneMonth": 320 },
                    ]
                }
            ]
        },
        {
            "hotelName": "Mountain Retreat",
            "location": "Denver",
            "color": "#33A5FF",
            "roomTypes": [
                {
                    "roomType": "Single Room",
                    "priceData": [
                        { "date": "2024-06-10", "priceToday": 150, "priceInOneMonth": 170 },
                    ]
                },
                {
                    "roomType": "Double Room",
                    "priceData": [
                        { "date": "2024-06-10", "priceToday": 200, "priceInOneMonth": 220 },
                    ]
                },
                {
                    "roomType": "Deluxe Suite",
                    "priceData": [
                        { "date": "2024-06-10", "priceToday": 400, "priceInOneMonth": 420 },
                    ]
                },
                {
                    "roomType": "Penthouse",
                    "priceData": [
                        { "date": "2024-06-10", "priceToday": 600, "priceInOneMonth": 650 },
                    ]
                }
            ]
        },
        {
            "hotelName": "Beachside Bungalows",
            "location": "Malibu",
            "color": "#FF5733",
            "roomTypes": [
                {
                    "roomType": "Bungalow",
                    "priceData": [
                        { "date": "2024-06-10", "priceToday": 500, "priceInOneMonth": 550 },
                    ]
                },
                {
                    "roomType": "Luxury Bungalow",
                    "priceData": [
                        { "date": "2024-06-10", "priceToday": 800, "priceInOneMonth": 850 },
                    ]
                }
            ]
        }
    ];

    const allRoomTypes = Array.from(new Set(company.flatMap(hotel => hotel.roomTypes.map(room => room.roomType))));

    return (
        <div className="tagestabelle">
            <h1>Your prices for {formatDate(company[0].roomTypes[0].priceData[0].date)}</h1>
            <table>
                <thead>
                    <tr>
                        <th>Hotel</th>
                        {company.map(hotel => (
                            <th key={hotel.hotelName}>{hotel.hotelName}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {allRoomTypes.map(roomType => (
                        <React.Fragment key={roomType}>
                            <tr onClick={() => toggleRoomType(roomType)} className="clickable">
                                <td>{roomType}</td>
                                {company.map(hotel => {
                                    const room = hotel.roomTypes.find(r => r.roomType === roomType);
                                    return (
                                        <td key={hotel.hotelName + roomType}>
                                            {room ? room.roomType : '-'}
                                        </td>
                                    );
                                })}
                            </tr>
                            {visibleRoomTypes[roomType] && (
                                <>
                                    <tr className="prices">
                                        <td>Current Price</td>
                                        {company.map(hotel => {
                                            const room = hotel.roomTypes.find(r => r.roomType === roomType);
                                            return (
                                                <td key={hotel.hotelName + roomType + 'priceToday'}>
                                                    {room ? room.priceData[0].priceToday : '-'}
                                                </td>
                                            );
                                        })}
                                    </tr>
                                    <tr className="prices">
                                        <td>Price in One Month</td>
                                        {company.map(hotel => {
                                            const room = hotel.roomTypes.find(r => r.roomType === roomType);
                                            return (
                                                <td key={hotel.hotelName + roomType + 'priceInOneMonth'}>
                                                    {room ? room.priceData[0].priceInOneMonth : '-'}
                                                </td>
                                            );
                                        })}
                                    </tr>
                                </>
                            )}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TodaPriceTable;