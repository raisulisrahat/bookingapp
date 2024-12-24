import React, { useState } from 'react';

const FlightForms = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [classType, setClassType] = useState('Economy');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Flight Booking Details:\nFrom: ${from}\nTo: ${to}\nDeparture Date: ${departureDate}\nReturn Date: ${returnDate}\nPassengers: ${passengers}\nClass: ${classType}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="form-control">
        <label className="label">From</label>
        <input 
          type="text" 
          className="input input-bordered w-full"
          placeholder="Departure City"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label className="label">To</label>
        <input 
          type="text" 
          className="input input-bordered w-full"
          placeholder="Arrival City"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label className="label">Departure Date</label>
        <input 
          type="date" 
          className="input input-bordered w-full"
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label className="label">Return Date</label>
        <input 
          type="date" 
          className="input input-bordered w-full"
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
        />
      </div>

      <div className="flex space-x-4">
        <div className="form-control w-1/2">
          <label className="label">Passengers</label>
          <input 
            type="number" 
            className="input input-bordered w-full"
            min="1"
            value={passengers}
            onChange={(e) => setPassengers(e.target.value)}
          />
        </div>

        <div className="form-control w-1/2">
          <label className="label">Class</label>
          <select 
            className="select select-bordered w-full"
            value={classType}
            onChange={(e) => setClassType(e.target.value)}>
            <option value="Economy">Economy</option>
            <option value="Business">Business</option>
            <option value="First Class">First Class</option>
          </select>
        </div>
      </div>

      <button type="submit" className="btn btn-primary w-full">Search</button>
    </form>
  );
};

export default FlightForms;
