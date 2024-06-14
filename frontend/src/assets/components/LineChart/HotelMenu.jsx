const HotelMenu = ({
    fetchedData,
    selectedHotels,
    handleHotelToggle,
    handleColorChange
}) => {
    return (
        <div className="hotel-menu">
            {fetchedData.map((hotel) => (
                <div key={hotel.hotelName}>
                    <input
                        type="checkbox"
                        id={hotel.hotelName}
                        checked={selectedHotels.some((selectedHotel) => selectedHotel.name === hotel.hotelName)}
                        onChange={(e) => handleHotelToggle(hotel.hotelName, e.target.checked)}
                    />
                    <label htmlFor={hotel.hotelName}>{hotel.hotelName}</label>
                    <input
                        type="color"
                        value={selectedHotels.find((selectedHotel) => selectedHotel.name === hotel.hotelName)?.color || hotel.color}
                        onChange={(e) => handleColorChange(hotel.hotelName, e.target.value)}
                    />
                </div>
            ))}
        </div>
    );
};

export default HotelMenu;