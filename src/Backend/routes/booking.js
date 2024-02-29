const express = require("express");
const router = express.Router();
const booking = require("../controllers/booking.controller")

router.get("/", booking.getBookings);
router.post("/", booking.createBooking); 
router.get("/one/:id", booking.getBooking);
router.get("/personal/:day/:month/:me", booking.getBookingDayPersonal); 
router.get("/reserve/:day/:month/:service/:profesional", booking.getBookingDay);
router.put("/:id",booking.editBooking);
router.delete("/:id", booking.deleteBooking);



module.exports = router 