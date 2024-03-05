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
    { // this object will be "parsed" into an Event Object
      title: calendar_items, // a property!
      start: '2024-03-04', // a property!
      // end: '2018-09-02' // a property! ** see important note below about 'end' **
    },
    { // this object will be "parsed" into an Event Object
      title: calendar_items, // a property!
      start: '2024-03-02', // a property!
      // end: '2018-09-02' // a property! ** see important note below about 'end' **
    }
  ],
  eventRender: function(info) {
    element.css("font-size", "2em");
    element.css("padding", "5px");
    element.css("border-radius", "20px");
  }
});
calendar.render();