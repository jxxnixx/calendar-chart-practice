"use client";

import { useRef } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";

const Calendar = () => {
  const calendarRef = useRef<FullCalendar>(null);

  return (
    <FullCalendar
      plugins={[
        resourceTimelinePlugin,
        dayGridPlugin,
        timeGridPlugin,
        interactionPlugin,
      ]}
      headerToolbar={{
        left: "prev,today,next addEvent",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
      }}
      customButtons={{
        addEvent: {
          text: "add event",
          click: () => {
            const newEvent = {
              title: "event new",
              start: "2024-08-04T11:00:00",
              end: "2024-08-04T12:00:00",
            };
            calendarRef.current?.getApi().addEvent(newEvent);
          },
        },
      }}
      ref={calendarRef}
      initialView='dayGridMonth'
      locale='en-GB'
      eventTimeFormat={{
        hour: "numeric",
        minute: "2-digit",
        meridiem: false,
      }}
      aspectRatio={1.8}
      nowIndicator={true}
      editable={true}
      selectable={true}
      selectMirror={true}
      windowResizeDelay={100}
      // expandRows={true}
      // navLinks={true}
      // dayMaxEvents={true}
      // initialEvents={[
      //   {
      //     title: "nice event",
      //     start: new Date(),
      //     end: new Date(),
      //     allDay: true,
      //   },
      // ]}
      events={[
        {
          title: "All Day Event",
          start: "2024-08-01",
        },
        {
          title: "Long Event",
          start: "2024-08-07",
          end: "2024-08-10",
        },
        {
          groupId: "999",
          title: "Repeating Event",
          start: "2024-08-09T16:00:00",
        },
        {
          groupId: "999",
          title: "Repeating Event",
          start: "2024-08-16T16:00:00",
        },
        {
          title: "Conference",
          start: "2024-08-11",
          end: "2024-08-13",
        },
        {
          title: "Meeting",
          start: "2024-08-12T10:30:00",
          end: "2024-08-12T12:30:00",
        },
        {
          title: "Lunch",
          start: "2024-08-12T12:00:00",
        },
        {
          title: "Meeting",
          start: "2024-08-12T14:30:00",
        },
        {
          title: "Happy Hour",
          start: "2024-08-12T17:30:00",
        },
        {
          title: "Dinner",
          start: "2024-08-12T20:00:00",
        },
        {
          title: "Birthday Party",
          start: "2024-08-13T07:00:00",
        },
        {
          title: "Click for Google",
          url: "http://google.com/",
          start: "2024-08-28",
        },
      ]}
    />
  );
};

export default Calendar;
