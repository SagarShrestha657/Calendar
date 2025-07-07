import React from 'react';


const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// Generate days for the month view: Jan 26 - Mar 1 (35 days)
const daysArray = [];
let date = new Date(2025, 0, 26); // Jan 26, 2025
for (let i = 0; i < 35; i++) {
  daysArray.push({
    date: new Date(date),
    day: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear(),
  });
  date.setDate(date.getDate() + 1);
}

// Task types definition
const taskTypes = [
  { icon: '🎵', label: 'Music' },
  { icon: '🏀', label: 'Sport' },
  { icon: '👥', label: 'Meeting' },
];

// Background colors for days with tasks
const bgColors = [
  'bg-orange-200',
  'bg-blue-200',
];

// Predefined tasks for specific dates
const predefinedTasks = {
  // February 2025
  '2025-2-1': [taskTypes[0]], // Music on Feb 1
  '2025-2-5': [taskTypes[1]], // Sport on Feb 5
  '2025-2-10': [taskTypes[2]], // Meeting on Feb 10
  '2025-2-14': [taskTypes[0], taskTypes[2]], // Music and Meeting on Feb 14
  '2025-2-20': [taskTypes[1], taskTypes[0]], // Sport and Music on Feb 20
  '2025-2-25': [taskTypes[2]], // Meeting on Feb 25
};

// Function to get background color based on task type
function getBgColorForTasks(tasks) {
  if (tasks.length === 0) return '';
  
  // Assign specific colors based on task type
  if (tasks.some(t => t.label === 'Music')) return 'bg-orange-200';
  if (tasks.some(t => t.label === 'Sport')) return 'bg-blue-200';
  return 'bg-orange-200'; // Default color
}

const daysWithTasks = daysArray.map((d) => {
  const dateKey = `${d.year}-${d.month + 1}-${d.day}`;
  const tasks = predefinedTasks[dateKey] || [];
  
  return { 
    ...d, 
    tasks, 
    bgColor: tasks.length > 0 ? getBgColorForTasks(tasks) : ''
  };
});


function MonthView() {
  return (
    <div className="w-full h-full flex flex-col -mt-3 text-gray-400 text-xl overflow-hidden">
      <div className="flex px-1 flex-row">
        <h2 className="font-bold text-3xl text-black flex-2/3 flex-row text-left ">
          <span className="font-extrabold pl-5 font-serif">February</span>
          <span className="pl-2 font-serif font-medium">2025</span>
        </h2>
        <div className='flex-1/3 justify-end flex'>
          <button className="text-xl   text-black text-right pr-8 font-bold">&lt;</button>
          <button className="text-xl  text-black text-right pr-4 font-bold">&gt;</button>
        </div>
      </div>
      {/* 7-column grid: header row for week days, 6 rows for weeks */}
      <div className="grid grid-cols-7 w-full bg-white">
        {weekDays.map((d) => (
          <div key={d} className="py-2 text-center font-semibold text-base text-gray-500">{d}</div>
        ))}
      </div>
      {/* 6 rows for weeks with numbers and tasks */}
      <div className="grid grid-cols-7 gap-1 w-full flex-1 overflow-y-scroll scrollbar-none p-1">
        {daysWithTasks.map((d, i) => (
          <div key={i} className={`h-24 ${d.bgColor ? `${d.bgColor} p-1 flex flex-col rounded shadow-sm` : 'bg-white p-1 flex flex-col'} mb-2`}>
            <span className={`text-xs font-semibold w-full text-center ${d.month === 0 ? 'text-gray-400' : 'text-black'}`}>{d.day}</span>
            <div className="flex flex-col items-center justify-center w-full mt-3 space-y-1">
              {d.tasks.map((task, idx) => (
                <span key={idx} title={task.label} className="text-lg w-full text-center">{task.icon}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MonthView;