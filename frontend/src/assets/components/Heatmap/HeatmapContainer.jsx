import HeatmapChart from "./Heatmap";

const mockData = [
    {
        "hotelName": "Grand Hotel",
        "location": "New York",
        "color": "#FF5733",
        "roomTypes": [
            {
                "roomType": "Single Room",
                "priceData": [
                    { "date": "2024-06-10", "price": 230, "priceInOneMonth": 150 },
                    { "date": "2024-06-11", "price": 120, "priceInOneMonth": 150 },
                    { "date": "2024-06-12", "price": 120, "priceInOneMonth": 150 },
                    { "date": "2024-06-13", "price": 120, "priceInOneMonth": 150 },
                    { "date": "2024-06-14", "price": 130, "priceInOneMonth": 160 },
                    { "date": "2024-06-15", "price": 130, "priceInOneMonth": 160 },
                    { "date": "2024-06-16", "price": 130, "priceInOneMonth": 160 },
                    { "date": "2024-06-17", "price": 130, "priceInOneMonth": 160 },
                    { "date": "2024-06-18", "price": 120, "priceInOneMonth": 150 },
                    { "date": "2024-06-19", "price": 120, "priceInOneMonth": 150 },
                    { "date": "2024-06-20", "price": 120, "priceInOneMonth": 150 },
                    { "date": "2024-06-21", "price": 120, "priceInOneMonth": 150 },
                    { "date": "2024-06-22", "price": 130, "priceInOneMonth": 160 },
                    { "date": "2024-06-23", "price": 130, "priceInOneMonth": 160 },
                    { "date": "2024-06-24", "price": 130, "priceInOneMonth": 160 },
                    { "date": "2024-06-25", "price": 130, "priceInOneMonth": 160 },
                    { "date": "2024-06-26", "price": 120, "priceInOneMonth": 150 },
                    { "date": "2024-06-27", "price": 120, "priceInOneMonth": 150 },
                    { "date": "2024-06-28", "price": 120, "priceInOneMonth": 150 },
                    { "date": "2024-06-29", "price": 120, "priceInOneMonth": 150 },
                    { "date": "2024-06-30", "price": 130, "priceInOneMonth": 160 },
                    { "date": "2024-07-01", "price": 130, "priceInOneMonth": 160 },
                    { "date": "2024-07-02", "price": 130, "priceInOneMonth": 160 },
                    { "date": "2024-07-03", "price": 130, "priceInOneMonth": 160 },
                    { "date": "2024-07-04", "price": 120, "priceInOneMonth": 150 },
                    { "date": "2024-07-05", "price": 120, "priceInOneMonth": 150 },
                    { "date": "2024-07-06", "price": 120, "priceInOneMonth": 150 },
                    { "date": "2024-07-07", "price": 120, "priceInOneMonth": 150 },
                    { "date": "2024-07-08", "price": 130, "priceInOneMonth": 160 },
                    { "date": "2024-07-09", "price": 130, "priceInOneMonth": 160 },
                    { "date": "2024-07-10", "price": 130, "priceInOneMonth": 160 }
                ]
            },
            {
                "roomType": "Double Room",
                "priceData": [
                    { "date": "2024-06-10", "price": 230, "priceInOneMonth": 210 },
                    { "date": "2024-06-11", "price": 120, "priceInOneMonth": 210 },
                    { "date": "2024-06-12", "price": 180, "priceInOneMonth": 210 },
                    { "date": "2024-06-13", "price": 180, "priceInOneMonth": 210 },
                    { "date": "2024-06-14", "price": 190, "priceInOneMonth": 220 },
                    { "date": "2024-06-15", "price": 190, "priceInOneMonth": 220 },
                    { "date": "2024-06-16", "price": 190, "priceInOneMonth": 220 },
                    { "date": "2024-06-17", "price": 190, "priceInOneMonth": 220 },
                    { "date": "2024-06-18", "price": 180, "priceInOneMonth": 210 },
                    { "date": "2024-06-19", "price": 180, "priceInOneMonth": 210 },
                    { "date": "2024-06-20", "price": 180, "priceInOneMonth": 210 },
                    { "date": "2024-06-21", "price": 180, "priceInOneMonth": 210 },
                    { "date": "2024-06-22", "price": 190, "priceInOneMonth": 220 },
                    { "date": "2024-06-23", "price": 190, "priceInOneMonth": 220 },
                    { "date": "2024-06-24", "price": 190, "priceInOneMonth": 220 },
                    { "date": "2024-06-25", "price": 190, "priceInOneMonth": 220 },
                    { "date": "2024-06-26", "price": 180, "priceInOneMonth": 210 },
                    { "date": "2024-06-27", "price": 180, "priceInOneMonth": 210 },
                    { "date": "2024-06-28", "price": 180, "priceInOneMonth": 210 },
                    { "date": "2024-06-29", "price": 180, "priceInOneMonth": 210 },
                    { "date": "2024-06-30", "price": 190, "priceInOneMonth": 220 },
                    { "date": "2024-07-01", "price": 190, "priceInOneMonth": 220 },
                    { "date": "2024-07-02", "price": 190, "priceInOneMonth": 220 },
                    { "date": "2024-07-03", "price": 190, "priceInOneMonth": 220 },
                    { "date": "2024-07-04", "price": 180, "priceInOneMonth": 210 },
                    { "date": "2024-07-05", "price": 180, "priceInOneMonth": 210 },
                    { "date": "2024-07-06", "price": 180, "priceInOneMonth": 210 },
                    { "date": "2024-07-07", "price": 180, "priceInOneMonth": 210 },
                    { "date": "2024-07-08", "price": 190, "priceInOneMonth": 220 },
                    { "date": "2024-07-09", "price": 190, "priceInOneMonth": 220 },
                    { "date": "2024-07-10", "price": 190, "priceInOneMonth": 220 }
                ]
            }
        ]
    },
    {
        "hotelName": "Luxury Plaza Hotel",
        "location": "New York",
        "color": "#3366FF",
        "roomTypes": [
            {
                "roomType": "Single Room",
                "priceData": [
                    { "date": "2024-06-10", "price": 230, "priceInOneMonth": 170 },
                    { "date": "2024-06-11", "price": 120, "priceInOneMonth": 170 },
                    { "date": "2024-06-12", "price": 140, "priceInOneMonth": 170 },
                    { "date": "2024-06-13", "price": 140, "priceInOneMonth": 170 },
                    { "date": "2024-06-14", "price": 150, "priceInOneMonth": 180 },
                    { "date": "2024-06-15", "price": 150, "priceInOneMonth": 180 },
                    { "date": "2024-06-16", "price": 150, "priceInOneMonth": 180 },
                    { "date": "2024-06-17", "price": 150, "priceInOneMonth": 180 },
                    { "date": "2024-06-18", "price": 140, "priceInOneMonth": 170 },
                    { "date": "2024-06-19", "price": 140, "priceInOneMonth": 170 },
                    { "date": "2024-06-20", "price": 140, "priceInOneMonth": 170 },
                    { "date": "2024-06-21", "price": 140, "priceInOneMonth": 170 },
                    { "date": "2024-06-22", "price": 150, "priceInOneMonth": 180 },
                    { "date": "2024-06-23", "price": 150, "priceInOneMonth": 180 },
                    { "date": "2024-06-24", "price": 150, "priceInOneMonth": 180 },
                    { "date": "2024-06-25", "price": 150, "priceInOneMonth": 180 },
                    { "date": "2024-06-26", "price": 140, "priceInOneMonth": 170 },
                    { "date": "2024-06-27", "price": 140, "priceInOneMonth": 170 },
                    { "date": "2024-06-28", "price": 140, "priceInOneMonth": 170 },
                    { "date": "2024-06-29", "price": 140, "priceInOneMonth": 170 },
                    { "date": "2024-06-30", "price": 150, "priceInOneMonth": 180 },
                    { "date": "2024-07-01", "price": 150, "priceInOneMonth": 180 },
                    { "date": "2024-07-02", "price": 150, "priceInOneMonth": 180 },
                    { "date": "2024-07-03", "price": 150, "priceInOneMonth": 180 },
                    { "date": "2024-07-04", "price": 140, "priceInOneMonth": 170 },
                    { "date": "2024-07-05", "price": 140, "priceInOneMonth": 170 },
                    { "date": "2024-07-06", "price": 140, "priceInOneMonth": 170 },
                    { "date": "2024-07-07", "price": 140, "priceInOneMonth": 170 },
                    { "date": "2024-07-08", "price": 150, "priceInOneMonth": 180 },
                    { "date": "2024-07-09", "price": 150, "priceInOneMonth": 180 },
                    { "date": "2024-07-10", "price": 150, "priceInOneMonth": 180 }
                ]
            },
            {
                "roomType": "Double Room",
                "priceData": [
                    { "date": "2024-06-10", "price": 230, "priceInOneMonth": 230 },
                    { "date": "2024-06-11", "price": 120, "priceInOneMonth": 230 },
                    { "date": "2024-06-12", "price": 200, "priceInOneMonth": 230 },
                    { "date": "2024-06-13", "price": 200, "priceInOneMonth": 230 },
                    { "date": "2024-06-14", "price": 210, "priceInOneMonth": 240 },
                    { "date": "2024-06-15", "price": 210, "priceInOneMonth": 240 },
                    { "date": "2024-06-16", "price": 210, "priceInOneMonth": 240 },
                    { "date": "2024-06-17", "price": 210, "priceInOneMonth": 240 },
                    { "date": "2024-06-18", "price": 200, "priceInOneMonth": 230 },
                    { "date": "2024-06-19", "price": 200, "priceInOneMonth": 230 },
                    { "date": "2024-06-20", "price": 200, "priceInOneMonth": 230 },
                    { "date": "2024-06-21", "price": 200, "priceInOneMonth": 230 },
                    { "date": "2024-06-22", "price": 210, "priceInOneMonth": 240 },
                    { "date": "2024-06-23", "price": 210, "priceInOneMonth": 240 },
                    { "date": "2024-06-24", "price": 210, "priceInOneMonth": 240 },
                    { "date": "2024-06-25", "price": 210, "priceInOneMonth": 240 },
                    { "date": "2024-06-26", "price": 200, "priceInOneMonth": 230 },
                    { "date": "2024-06-27", "price": 200, "priceInOneMonth": 230 },
                    { "date": "2024-06-28", "price": 200, "priceInOneMonth": 230 },
                    { "date": "2024-06-29", "price": 200, "priceInOneMonth": 230 },
                    { "date": "2024-06-30", "price": 210, "priceInOneMonth": 240 },
                    { "date": "2024-07-01", "price": 210, "priceInOneMonth": 240 },
                    { "date": "2024-07-02", "price": 210, "priceInOneMonth": 240 },
                    { "date": "2024-07-03", "price": 210, "priceInOneMonth": 240 },
                    { "date": "2024-07-04", "price": 200, "priceInOneMonth": 230 },
                    { "date": "2024-07-05", "price": 200, "priceInOneMonth": 230 },
                    { "date": "2024-07-06", "price": 200, "priceInOneMonth": 230 },
                    { "date": "2024-07-07", "price": 200, "priceInOneMonth": 230 },
                    { "date": "2024-07-08", "price": 210, "priceInOneMonth": 240 },
                    { "date": "2024-07-09", "price": 210, "priceInOneMonth": 240 },
                    { "date": "2024-07-10", "price": 210, "priceInOneMonth": 240 }
                ]
            }
        ]
    }
];

const processHotelData = (hotelData) => {
    const dailyPrices = {};
  
    hotelData.forEach(hotel => {
      hotel.roomTypes.forEach(roomType => {
        roomType.priceData.forEach(priceEntry => {
          const date = priceEntry.date;
          if (!dailyPrices[date]) {
            dailyPrices[date] = { total: 0, count: 0 };
          }
          dailyPrices[date].total += priceEntry.price;
          dailyPrices[date].count += 1;
        });
      });
    });
  
    const averagePrices = {};
    Object.keys(dailyPrices).forEach(date => {
      averagePrices[date] = dailyPrices[date].total / dailyPrices[date].count;
    });
  
    return averagePrices;
  };
  
  const formatHeatmapData = (averagePrices) => {
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const startDate = new Date('2024-06-10'); // Starting from the first date in your mock data
  
    const weeklyData = [];
  
    for (let week = 0; week < 5; week++) { // Adjust the number of weeks as needed
      const weekData = { name: `Week ${week + 1}`, data: [] };
  
      for (let day = 0; day < 7; day++) {
        const currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + week * 7 + day);
        const dateString = currentDate.toISOString().split('T')[0];
        const dayOfWeek = daysOfWeek[day];
        const avgPrice = averagePrices[dateString] || 0;
  
        weekData.data.push({ x: dayOfWeek, y: avgPrice });
      }
  
      weeklyData.push(weekData);
    }
  
    return weeklyData;
  };

const HeatmapContainer = () => {

    const averagePrices = processHotelData(mockData);
    const data = formatHeatmapData(averagePrices);

    return ( 
      <div>
        <h1>Heatmap Einzelzimmer</h1>
        <HeatmapChart data={data}/>
        </div>
     );
}
 
export default HeatmapContainer;