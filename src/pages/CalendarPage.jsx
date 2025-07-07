import React, { useState } from 'react';
import DayView from '../components/DayView';
import WeekView from '../components/WeekView';
import MonthView from '../components/MonthView';

const days = [
  { label: 'Sun', date: 23 },
  { label: 'Mon', date: 24 },
  { label: 'Tue', date: 25 },
  { label: 'Wed', date: 26 },
  { label: 'Thu', date: 27 },
  { label: 'Fri', date: 28 },
  { label: 'Sat', date: 1 },
];

function CalendarPage() {
  const [view, setView] = useState('week');

  return (
    <div className="h-screen bg-white flex flex-col items-center w-full max-w-md mx-auto shadow-lg relative min-h-0">
      {/* Header */}
      <div className="w-full flex items-center justify-between px-4 py-3 bg-white relative ">
        <span className="text-3xl font-bold font-serif text-black">
          Calendar
        </span>
        <button className="text-pink-500 font-medium text-sm  ">+ New event</button>
      </div>
      {/* Tabs */}
      <div className="w-full flex  mt-3 mb-2 sticky top-0 ">
        <div className="flex  w-full bg-gray-50  overflow-hidden">
          <button
            className={`py-1 mx-1 flex-1/3 my-1 not-first:font-medium focus:outline-none transition-all ${view === 'day' ? 'bg-white text-black font-semibold rounded' : 'text-gray-500'}`}
            onClick={() => setView('day')}
          >
            Daily
          </button>
          <button
            className={` py-1 mx-1 flex-1/3 my-1 font-medium focus:outline-none transition-all ${view === 'week' ? 'bg-white text-black font-semibold  rounded' : 'text-gray-500'}`}
            onClick={() => setView('week')}
          >
            Weekly
          </button>
          <button
            className={` py-1 mx-1 flex-1/3 my-1 font-medium focus:outline-none transition-all ${view === 'month' ? 'bg-white text-black font-semibold rounded' : 'text-gray-500'}`}
            onClick={() => setView('month')}
          >
            Monthly
          </button>
        </div>
      </div>
      {/* Calendar Content */}
      <div className="w-full mt-3 flex-1 flex flex-col min-h-0">
        <div className="flex flex-col flex-1 min-h-0">
          {view === 'day' && <DayView />}
          {view === 'week' && <WeekView/>}
          {view === 'month' && <MonthView />}
        </div>
      </div>
    </div>
  );
}

export default CalendarPage; 