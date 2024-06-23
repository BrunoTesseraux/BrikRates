
// import express from 'express';
// import User from '../models/User';
// import PriceRecord from '../models/PriceRecord';
// import Hotel from '../models/Hotel';
// import RoomType from '../models/RoomType';

// const router = express.Router();

// // GET user watched hotels with settings and room data
// router.get('/:userId/watched-hotels', async (req, res) => {
//   try {
//     const user = await User.findById(req.params.userId).populate({
//       path: 'watchedHotels.hotel',
//       select: 'name address website'
//     });

//     if (!user) {
//       return res.status(404).send('User not found');
//     }

//     const hotelIds = user.watchedHotels.map(h => h.hotel._id);
//     const prices = await PriceRecord.find({ hotel: { $in: hotelIds } }).populate('RoomType');

//     // Aggregiere Daten für das Frontend
//     const data = user.watchedHotels.map(watchedHotel => {
//       const hotelPrices = prices.filter(price => price.hotel.equals(watchedHotel.hotel._id));
//       return {
//         hotel: watchedHotel.hotel.name,
//         address: watchedHotel.hotel.address,
//         settings: watchedHotel.settings,
//         rooms: hotelPrices.map(price => ({
//           roomType: price.roomType.name,
//           size: price.roomType.size,
//           currentPrice: price.pricePerNight,
//           priceIn30Days: price.priceIn30Days,
//           dateScraped: price.dateScraped
//         }))
//       };
//     });

//     res.json(data);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

// // ADD or UPDATE user hotel settings
// router.put('/:userId/hotel-settings/:hotelId', async (req, res) => {
//   try {
//     const user = await User.findById(req.params.userId);
//     if (!user) {
//       return res.status(404).send('User not found');
//     }

//     const hotelIndex = user.watchedHotels.findIndex(h => h.hotel.equals(req.params.hotelId));
//     if (hotelIndex === -1) {
//       user.watchedHotels.push({
//         hotel: req.params.hotelId,
//         settings: req.body.settings
//       });
//     } else {
//       user.watchedHotels[hotelIndex].settings = req.body.settings;
//     }

//     await user.save();
//     res.json(user);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

// export default router;
