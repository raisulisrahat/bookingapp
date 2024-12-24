import React, { useState } from 'react';

const BusForms = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropLocation, setDropLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [dropoffDate, setDropoffDate] = useState('');
  const [busType, setBusType] = useState('AC Bus');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bus Ticket Details:\nPickup Location: ${pickupLocation}\nDrop Location: ${dropLocation}\nPickup Date: ${pickupDate}\nDrop-off Date: ${dropoffDate}\nBus Type: ${busType}`);
  };

  return (
    <div>
    <form onSubmit={handleSubmit} className="space-y-7">
      <div className="form-control">
        <label className="label">Pickup Location</label>
        <input
          type="text"
          className="input input-bordered w-full"
          placeholder="From City"
          value={pickupLocation}
          onChange={(e) => setPickupLocation(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label className="label">Drop Location</label>
        <input
          type="text"
          className="input input-bordered w-full"
          placeholder="To City."
          value={dropLocation}
          onChange={(e) => setDropLocation(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label className="label">Journy Date</label>
        <input
          type="date"
          className="input input-bordered w-full"
          value={pickupDate}
          onChange={(e) => setPickupDate(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label className="label">Return Date</label>
        <input
          type="date"
          className="input input-bordered w-full"
          value={dropoffDate}
          onChange={(e) => setDropoffDate(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label className="label">Bus Type</label>
        <select
          className="select select-bordered w-full"
          value={busType}
          onChange={(e) => setBusType(e.target.value)}>
          <option value="Sedan">AC Bus</option>
          <option value="SUV">Non AC Bus</option>
          <option value="Hatchback">Business Class Bus</option>
        </select>
      </div>

      <button type="submit" className="btn btn-primary w-full">Search</button>
    </form>
    </div>
  );
};

export default BusForms;