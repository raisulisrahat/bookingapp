import React, { useState } from 'react';
import CarForms from './CarForms';
import HotelForms from './HotelForms';
import FlightForms from './FlightForms';
import TrainForms from './TrainForms';
import BusForms from './BusForms';
import Icon from '@mdi/react';
import { mdiBedOutline, mdiAirplane, mdiCarBack, mdiBus, mdiTrain  } from '@mdi/js';

const BookingTabs = () => {
  const [activeTab, setActiveTab] = useState('hotel');

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full max-w-4xl p-8 glass shadow-lg rounded-lg">
        {/* Tabs */}
        <div className="tabs tabs-boxed mb-6">
          <button
              className={`tab ${activeTab === 'car' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('car')}><Icon path={mdiCarBack} size={1}/>
            <span className='px-3'>Car</span>
          </button>
          <button
              className={`tab ${activeTab === 'bus' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('bus')}><Icon path={mdiBus} size={1}/>
            <span className='px-3'>Bus</span>
          </button>
          <button
              className={`tab ${activeTab === 'train' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('train')}><Icon path={mdiTrain} size={1}/>
            <span className='px-3'>Train</span>
          </button>
          <button
              className={`tab ${activeTab === 'hotel' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('hotel')}><Icon path={mdiBedOutline} size={1}/>
            <span className='px-3'>Hotel</span>
          </button>
          <button
              className={`tab ${activeTab === 'flight' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('flight')}><Icon path={mdiAirplane} size={1}/>
            <span className='px-3'>Flight</span>
          </button>
        </div>

        {/* Content */}
        <div>
          {activeTab === 'car' && <CarForms/>}
          {activeTab === 'bus' && <BusForms/>}
          {activeTab === 'train' && <TrainForms/>}
          {activeTab === 'hotel' && <HotelForms/>}
          {activeTab === 'flight' && <FlightForms/>}
        </div>
      </div>
    </div>
  );
};

export default BookingTabs;
