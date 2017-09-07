import {Injectable} from '@angular/core';
import {BaThemeConfigProvider} from '../../../theme';

@Injectable()
export class CalendarService {

  constructor(private _baConfig:BaThemeConfigProvider) {
  }

  getData() {

    let dashboardColors = this._baConfig.get().colors.dashboard;
    return {
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      defaultDate: '2017-09-10',
      selectable: true,
      selectHelper: true,
      editable: true,
      eventLimit: true,
      events: [
        {
          title: 'Bundesratswahlen',
          start: '2017-09-20',
          color: dashboardColors.silverTree
        },
        {
          title: 'Herbstsession',
          start: '2017-09-11',
          end: '2017-09-29',
          color: dashboardColors.blueStone
        },
        {
          title: 'Wintersession',
          start: '2017-11-27',
          end: '2017-12-15',
          color: dashboardColors.blueStone
        }

      ]
    };
  }
}
