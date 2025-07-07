import React from 'react';

const days = [
  { label: 'Sun', date: 23 },
  { label: 'Mon', date: 24 },
  { label: 'Tue', date: 25 },
  { label: 'Wed', date: 26 },
  { label: 'Thu', date: 27 },
  { label: 'Fri', date: 28 },
  { label: 'Sat', date: 1 },
];

const events = [
  { day: 2, start: 9, end: 12, title: 'Project Deadline - Charlie', user: 'Brine', color: 'bg-orange-200', icon: true },
  { day: 2, start: 15, end: 20, title: 'Project Deadline - Alice', user: 'Brine', color: 'bg-blue-200', icon: true },
  { day: 2, start: 21, end: 24, title: 'Yoga Class - Alice', user: 'Brine', color: 'bg-orange-200', icon: true },
  { day: 5, start: 9, end: 15, title: 'Project Deadline - Charlie', user: 'Brine', color: 'bg-orange-200', icon: true },
  { day: 6, start: 9, end: 15, title: 'Project Deadline - Charlie', user: 'Brine', color: 'bg-orange-200', icon: true },
];

const hours = Array.from({ length: 24 }, (_, i) => {
  const hour = (i % 12) + 1;
  const period = i < 12 ? 'AM' : 'PM';
  return `${hour}${period}`;
});

function WeekView() {
  return (
    <div className="w-full flex flex-col h-full overflow-hidden ">
      {/* Days Header */}
      <div className="grid grid-cols-[40px_repeat(7,1fr)] bg-white text-center text-xs text-gray-400 sticky top-0  border-2 border-b-gray-400 w-full m-0 p-0 overflow-hidden">
        {/* First empty cell with right border and a bit of space */}
        <div className="py-2 bg-white border-r-2 border-gray-400"></div>
        {/* 7 day cells */}
        {days.map((d, i) => (
          <div key={i} className="py-2 bg-white">
            <div className={i === 2 ? 'text-pink-500 font-semibold' : ''}>{d.label}</div>
            <div className={`text-base font-semibold mt-1 ${i === 2 ? 'bg-pink-500 text-white rounded-full w-7 h-7 mx-auto flex items-center justify-center' : ''}`}>{d.date}</div>
          </div>
        ))}
      </div>
      {/* Time + Events Grid (Scrollable) */}
      <div className="grid grid-cols-[40px_repeat(7,1fr)] relative flex-1 overflow-y-scroll scrollbar-none  border-b-2 border-b-gray-400" >
        {/* Time Labels */}
        <div className="flex flex-col text-xs text-gray-400  bg-white border-x-2 border-x-gray-400">
          {hours.map((label, idx) => (
            <div key={label} className="h-12 flex items-start justify-end pr-1 w-full pt-1">{label}</div>
          ))}
        </div>
        {/* Event Columns */}
        {days.map((_, dayIdx) => (
          <div key={dayIdx} className="relative border-r-2  border-r-gray-400 border-b-gray-400 w-full ">
            {/* Placeholder for events */}
            {events.filter(e => e.day === dayIdx).map((e, i) => (
              <div
                key={i}
                className={`absolute  right-0.5 ${e.color || 'bg-pink-200'} rounded-md shadow px-1 py-1 text-xs font-medium  text-black flex flex-col items-start overflow-y-auto event-scrollbar-hide`}
                style={{
                  top: `${(e.start - 1) * 3}rem`,
                  height: `${(e.end - e.start) * 3}rem`,
                  maxWidth: '100%',
                  boxSizing: 'border-box',
                  maxHeight: '100%',
                  scrollbarWidth: 'none', /* Firefox */
                  msOverflowStyle: 'none', /* IE and Edge */
                }}
               
              >
                {e.icon && <span className="text-sm text-left">🎵</span>}
                <span className="leading-tight w-full text-left whitespace-normal break-words">{e.title}</span>
                <span className="text-xs text-gray-500 w-full text-left whitespace-normal break-words">{e.user}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeekView; 