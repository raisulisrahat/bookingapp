// src/components/BookingForm.js

import React, { useState } from 'react';

const HotelForms = () => {
  const [destination, setDestination] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState(2);
  const [rooms, setRooms] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hotel Booking Details:\nDestination: ${destination}\nCheck-In: ${checkInDate}\nCheck-Out: ${checkOutDate}\nRooms: ${rooms}\nGuests: ${guests}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="form-control">
        <label className="label">Destination</label>
        <input 
          type="text" 
          className="input input-bordered w-full"
          placeholder="City, Hotel, Resort, Area"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label className="label">Check-In Date</label>
        <input 
          type="date" 
          className="input input-bordered w-full"
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label className="label">Check-Out Date</label>
        <input 
          type="date" 
          className="input input-bordered w-full"
          value={checkOutDate}
          onChange={(e) => setCheckOutDate(e.target.value)}
        />
      </div>

      <div className="flex space-x-4">
        <div className="form-control w-1/2">
          <label className="label">Rooms</label>
          <input 
            type="number" 
            className="input input-bordered w-full"
            min="1"
            value={rooms}
            onChange={(e) => setRooms(e.target.value)}
          />
        </div>

        <div className="form-control w-1/2">
          <label className="label">Guests</label>
          <input 
            type="number" 
            className="input input-bordered w-full"
            min="1"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          />
        </div>
      </div>

      <button type="submit" className="btn btn-primary w-full">Search</button>
    </form>
  );
};

export default HotelForms;