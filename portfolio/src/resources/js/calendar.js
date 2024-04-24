import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

let calendarEl = document.getElementById('calendar');
let calendar = new Calendar(calendarEl, {
  plugins: [ dayGridPlugin, timeGridPlugin, listPlugin],
  initialView: 'dayGridMonth',
  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: ''
  },
  events: json_array.map(function (row){return JSON.parse(row)}),
  datesSet: function(info){
    // fullcalendarのprev/next/todayボタンがクリックされた時
    sessionStorage.setItem('currentStart',info.view.currentStart)
    document.getElementById('result').click()
  }
});
calendar.render();