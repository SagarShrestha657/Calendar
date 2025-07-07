import React, { useState } from 'react';

const weekDays = [
  { label: 'Sun', date: 23 },
  { label: 'Mon', date: 24 },
  { label: 'Tue', date: 25 },
  { label: 'Wed', date: 26 },
  { label: 'Thu', date: 27 },
  { label: 'Fri', date: 28 },
  { label: 'Sat', date: 1 },
];

// Demo event data for each day (keyed by date)
const eventsByDate = {
  23: [
    {
      start: '9:00 AM',
      end: '10:00 AM',
      title: 'Team Standup',
      user: 'Brine',
      icon: '🎤',
      userIcon: '✨',
    },
  ],
  24: [
    {
      start: '2:00 PM',
      end: '3:00 PM',
      title: 'Design Review',
      user: 'Brine',
      icon: '🎨',
      userIcon: '✨',

    },
  ],
  25: [
    {
      start: '8:00 AM',
      end: '4:00 PM',
      title: 'Project Deadline - Charlie',
      user: 'Brine',
      icon: '🎵',
      userIcon: '✨',

    },
    {
      start: '10:00 PM',
      end: '5:00 AM',
      title: 'Project Deadline - Charlie',
      user: 'Brine',
      icon: '🕹️',
      userIcon: '✨',

    },
  ],
  26: [],
  27: [],
  28: [
    {
      start: '1:00 PM',
      end: '2:00 PM',
      title: 'Lunch with Team',
      user: 'Brine',
      icon: '🍔',
      userIcon: '✨',

    },
  ],
  1: [],
};

function DayView() {
  // Default to Tuesday (25)
  const [selectedDay, setSelectedDay] = useState(weekDays[2]);
  const events = eventsByDate[selectedDay.date] || [];

  return (
    <div className="w-full h-full flex flex-col">
      {/* Week Row */}
      <div className="grid grid-cols-7 gap-0 bg-white  text-center text-xs text-gray-600 sticky top-0 z-10">
        {weekDays.map((d, i) => {
          const isSelected = d.date === selectedDay.date;
          return (
            <button
              key={i}
              className={`focus:outline-none transition-colors m-2 pt-1 duration-150 ${isSelected ? 'bg-pink-100 text-pink-500 shadow-sm rounded-sm' : ''}`}
              onClick={() => setSelectedDay(d)}
            >
              <div className={`text-xs font-semibold ${isSelected ? 'text-pink-500 ' : 'text-gray-600'}`}>{d.label}</div>
              <div className={`text-base mt-1 ${isSelected ? 'text-pink-500' : 'text-black'}`}>{d.date}</div>
              {isSelected ? (
                <div className="flex justify-center my-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-500 inline-block"></span>
                </div>
              ) :
                <div className="flex justify-center my-1">
                  <span className="w-1.5 h-1.5 "></span>
                </div>
              }

            </button>
          );
        })}
      </div>
      {/* Event Cards */}
      <div className="flex flex-col gap-4 py-2 px-2 bg-white flex-1 overflow-y-auto hide-scrollbar">
        {events.length === 0 && (
          <div className="text-center text-gray-300 text-lg mt-10">No events for this day</div>
        )}
        {events.map((event, idx) => (
          <div
            key={idx}
            className={`relative rounded-2xl shadow p-5 flex flex-col  min-h-[110px] bg-orange-200`}
          >
            {/* Time */}
            <div className="flex items-center gap-1 text-xs text-gray-500 font-medium">
              <span className="w-2 h-2 rounded-full bg-blue-400 inline-block "></span>
              {event.start} - {event.end}
            </div>
            {/* Title and Icon */}
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xl">{event.icon}</span>
              <span className="font-semibold text-lg text-black">{event.title}</span>
            </div>
            {/* User */}
            <div className="flex items-center gap-2 text-sm  text-gray-500 mt-0.5">
              <span className="text-lg ">{event.userIcon}</span>
              {event.user}
            </div>
            {/* 3-dot menu */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
              <span className="w-1 h-1 bg-gray-400 rounded-full block mb-0.5"></span>
              <span className="w-1 h-1 bg-gray-400 rounded-full block mb-0.5"></span>
              <span className="w-1 h-1 bg-gray-400 rounded-full block"></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DayView;