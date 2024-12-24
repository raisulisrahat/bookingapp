import React, { useState } from 'react';

const CarForms = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [dropoffDate, setDropoffDate] = useState('');
  const [carType, setCarType] = useState('Sedan');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Car Rental Details:\nPickup Location: ${pickupLocation}\nPickup Date: ${pickupDate}\nDrop-off Date: ${dropoffDate}\nCar Type: ${carType}`);
  };

  return (
    <div>
    <form onSubmit={handleSubmit} className="space-y-7">
      <div className="form-control">
        <label className="label">Pickup Location</label>
        <input 
          type="text" 
          className="input input-bordered w-full"
          placeholder="City, Airport, etc."
          value={pickupLocation}
          onChange={(e) => setPickupLocation(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label className="label">Pickup Date</label>
        <input 
          type="date" 
          className="input input-bordered w-full"
          value={pickupDate}
          onChange={(e) => setPickupDate(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label className="label">Drop-off Date</label>
        <input 
          type="date" 
          className="input input-bordered w-full"
          value={dropoffDate}
          onChange={(e) => setDropoffDate(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label className="label">Car Type</label>
        <select 
          className="select select-bordered w-full" 
          value={carType}
          onChange={(e) => setCarType(e.target.value)}>
          <option value="Sedan">Sedan</option>
          <option value="SUV">SUV</option>
          <option value="Hatchback">Hatchback</option>
        </select>
      </div>

      <button type="submit" className="btn btn-primary w-full">Search</button>
    </form>
    </div>
  );
};

export default CarForms;
