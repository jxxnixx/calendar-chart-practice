'use client';

import { useRef, useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import { staticData } from '../data';
import { PushAlert } from '../type';

interface CalendarEvent {
  title: string;
  start: string;
  end: string;
}

// 문자열에서 날짜와 시간을 파싱하여 ISO 8601 형식으로 변환하는 함수
const convertToISOFormat = (dateString: string): string => {
  const [datePart, timePart] = dateString.split(' ');
  const [year, month, day] = datePart.split('.').map(Number);
  let [hour, minute] = timePart
    .replace('pm', '')
    .replace('am', '')
    .split(':')
    .map(Number);

  // pm 처리
  if (timePart.includes('pm') && hour < 12) {
    hour += 12;
  }
  // 12am 처리
  if (timePart.includes('am') && hour === 12) {
    hour = 0;
  }

  // Date 객체로 변환 후 ISO 8601 형식의 문자열로 반환
  const date = new Date(year, month - 1, day, hour, minute);
  return date.toISOString();
};

const transformToCalendarEvents = (data: PushAlert[]): CalendarEvent[] => {
  return data.map((item: PushAlert) => {
    const start = convertToISOFormat(item.startDate);
    const end = convertToISOFormat(item.endDate);

    return {
      title: item.title,
      start,
      end,
    };
  });
};

const initialEvents: CalendarEvent[] = transformToCalendarEvents(staticData);

const Calendar = () => {
  const calendarRef = useRef<FullCalendar>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredEvents, setFilteredEvents] =
    useState<CalendarEvent[]>(initialEvents);

  // 필터가 변경될 때마다 이벤트를 필터링
  useEffect(() => {
    const filtered = initialEvents.filter((event) =>
      event.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredEvents(filtered);
  }, [searchTerm]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search events"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: '20px', padding: '8px', width: '100%' }}
      />
      <FullCalendar
        themeSystem="flatly"
        plugins={[
          resourceTimelinePlugin,
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin,
        ]}
        headerToolbar={{
          left: 'prev,today,next addEvent',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        customButtons={{
          addEvent: {
            text: 'add event',
            click: () => {
              const newEvent = {
                title: 'New Event',
                start: '2024-08-04T11:00:00',
                end: '2024-08-04T12:00:00',
              };
              calendarRef.current?.getApi().addEvent(newEvent);
            },
          },
        }}
        ref={calendarRef}
        initialView="resourceTimeline"
        locale="en-GB"
        eventTimeFormat={{
          hour: 'numeric',
          minute: '2-digit',
          meridiem: false,
        }}
        aspectRatio={1.8}
        nowIndicator={true}
        editable={true}
        selectable={true}
        selectMirror={true}
        windowResizeDelay={100}
        dayMaxEvents={true}
        events={filteredEvents}
      />
    </div>
  );
};

export default Calendar;
