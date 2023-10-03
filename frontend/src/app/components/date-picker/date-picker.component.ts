import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CalendarView, CalendarEvent} from 'angular-calendar';
import { addDays, startOfDay } from 'date-fns';


@Component({
  selector: 'app-date-picker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent {

  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date();
  events: CalendarEvent[] = [];



  constructor() {
    // Initialize the events array with example events
    this.events = [
      {
        title: 'Event 1',
        start: startOfDay(new Date()),
        end: addDays(startOfDay(new Date()), 1),
        color: {
          primary: '#e3bc08',
          secondary: '#FDF1BA'
        }
      },
      {
        title: 'Event 2',
        start: startOfDay(addDays(new Date(), 1)),
        end: addDays(startOfDay(new Date()), 2),
        color: {
          primary: '#1e90ff',
          secondary: '#D1E8FF'
        }
      }
    ];
  }

  eventClicked(event: CalendarEvent): void {
    console.log('Event clicked:', event);
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (this.view === CalendarView.Month) {
      // Handle date selection here
      console.log('Date clicked:', date);
    }
  }

}
