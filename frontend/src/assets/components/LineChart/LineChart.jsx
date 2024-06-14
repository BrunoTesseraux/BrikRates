import React, { useState } from 'react';
import HotelMenu from './HotelMenu';
import Chart from 'react-apexcharts'; // Importing the Chart library component
import './LineChart.scss';

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

const LineChart = () => {
    const [selectedHotels, setSelectedHotels] = useState(
        exampleResponse.map(hotel => ({
            name: hotel.hotelName,
            color: hotel.color
        }))
    );

    const handleHotelToggle = (hotelName, checked) => {
        setSelectedHotels(prevSelectedHotels => {
            if (checked) {
                return [...prevSelectedHotels, { name: hotelName, color: getColor(hotelName) }];
            } else {
                return prevSelectedHotels.filter(hotel => hotel.name !== hotelName);
            }
        });
    };

    const handleColorChange = (hotelName, newColor) => {
        setSelectedHotels(prevSelectedHotels => {
            return prevSelectedHotels.map(hotel => {
                if (hotel.name === hotelName) {
                    return { ...hotel, color: newColor };
                }
                return hotel;
            });
        });
    };

    const getColor = (hotelName) => {
        const hotel = exampleResponse.find(hotel => hotel.hotelName === hotelName);
        return hotel ? hotel.color : "";
    };

    const categories = exampleResponse.length > 0
        ? (exampleResponse[0].roomTypes ? exampleResponse[0].roomTypes[0].priceData : exampleResponse[0].priceData).map(item => item.date)
        : [];

    const chartData = exampleResponse
        .filter(hotel => selectedHotels.some(selectedHotel => selectedHotel.name === hotel.hotelName))
        .flatMap(hotel => {
            if (hotel.roomTypes) {
                return hotel.roomTypes.flatMap(roomType => [
                    {
                        name: `${hotel.hotelName} (${roomType.roomType}) - Today`,
                        data: roomType.priceData.map(dataItem => dataItem.priceToday),
                        color: selectedHotels.find(selectedHotel => selectedHotel.name === hotel.hotelName)?.color || hotel.color
                    },
                    {
                        name: `${hotel.hotelName} (${roomType.roomType}) - In One Month`,
                        data: roomType.priceData.map(dataItem => dataItem.priceInOneMonth),
                        color: selectedHotels.find(selectedHotel => selectedHotel.name === hotel.hotelName)?.color || hotel.color
                    }
                ]);
            } else {
                return [
                    {
                        name: `${hotel.hotelName} - Today`,
                        data: hotel.priceData.map(dataItem => dataItem.priceToday),
                        color: selectedHotels.find(selectedHotel => selectedHotel.name === hotel.hotelName)?.color || hotel.color
                    },
                    {
                        name: `${hotel.hotelName} - In One Month`,
                        data: hotel.priceData.map(dataItem => dataItem.priceInOneMonth),
                        color: selectedHotels.find(selectedHotel => selectedHotel.name === hotel.hotelName)?.color || hotel.color
                    }
                ];
            }
        });

    const options = {
        chart: {
            id: "line-chart",
            toolbar: {
                show: false,
                tools: {
                    download: false
                }
            },
            zoom: {
                enabled: false
            }
        },
        xaxis: {
            categories
        },
        colors: chartData.map(item => item.color),
        tooltip: {
            fixed: {
                enabled: true,
                position: 'topRight', 
                offsetX: 50,
                offsetY: 0
            }
        }
    };

    return (
        <div className="chart-container">
            <h1>Line Chart</h1>
            <HotelMenu
                exampleResponse={exampleResponse}
                selectedHotels={selectedHotels}
                handleHotelToggle={handleHotelToggle}
                handleColorChange={handleColorChange}
            />
            <Chart options={options} series={chartData} type="line" />
        </div>
    );
};

export default LineChart;