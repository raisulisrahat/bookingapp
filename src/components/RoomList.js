// src/components/RoomList.js
import React from 'react';

const rooms = [
  { id: 1, name: 'Deluxe Room', price: 120 },
  { id: 2, name: 'Standard Room', price: 80 },
  { id: 3, name: 'Suite', price: 150 },
];

const RoomList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {rooms.map((room) => (
        <div key={room.id} className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{room.name}</h2>
            <p>Price: ${room.price} per night</p>
            <button className="btn btn-primary glass">Book Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoomList;
