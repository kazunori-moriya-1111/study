import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

let calendarEl = document.getElementById('calendar');
let calendar = new Calendar(calendarEl, {
  plugins: [ dayGridPlugin, timeGridPlugin, listPlugin ],
  initialView: 'dayGridMonth',
  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,listWeek'
  },
  events: [
    {
      title: calendar_items,
      start: '2024-02-04',
      classNames: ['minus']
    },
    {
      title: calendar_items,
      start: '2024-03-02',
      classNames: ['plus']
    },
    {
      title: calendar_items,
      start: '2024-03-04',
      classNames: ['minus']
    },
  ]
});
calendar.render();