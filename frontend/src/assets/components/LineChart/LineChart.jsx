import { useContext, useState } from 'react';
import HotelMenu from './HotelMenu';
import ReactApexChart from 'react-apexcharts';
import './LineChart.scss';
import { fetchedDataContext} from '../../ExapleContext'; // Adjust path as per your file structure

const LineChart = () => {
    const { fetchedData } = useContext(fetchedDataContext) ;
    console.log(fetchedData);
    const [selectedHotels, setSelectedHotels] = useState(
        fetchedData.map(hotel => ({
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
        const hotel = fetchedData.find(hotel => hotel.hotelName === hotelName);
        return hotel ? hotel.color : "";
    };

    const categories = fetchedData.length > 0
        ? (fetchedData[0].roomTypes ? fetchedData[0].roomTypes[0].priceData : fetchedData[0].priceData).map(item => item.date)
        : [];

    const chartData = fetchedData
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
                offsetX: 0,
                offsetY: 500
            }
        }
    };

    return (
        <div className="line-chart">
            <h1>Line Chart</h1>
            <HotelMenu
                fetchedData={fetchedData} // Pass fetchedData to HotelMenu if needed
                selectedHotels={selectedHotels}
                handleHotelToggle={handleHotelToggle}
                handleColorChange={handleColorChange}
            />
            <div className='chart'>
            <ReactApexChart options={options} series={chartData} width={750} height={500} />
            </div>
        </div>
    );
};

export default LineChart;