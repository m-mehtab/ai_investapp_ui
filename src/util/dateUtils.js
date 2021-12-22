import moment from 'moment';
import { diff } from 'semver';

export const TIME_ZONE = (-1 * new Date().getTimezoneOffset()) / 60;
export const SIMPLE_DATE_FORMAT = 'YYYY-MM-DD';
export const DATE_FORMAT = 'MMMM DD YYYY';
export const DATE_FORMAT_DAY = 'MMMM DD YY, HH:mm';
export const TIME_ONLY_FORMAT = 'h:mm A';
export const TIME_FORMAT_24_HOUR = 'HH:mm';
export const SERVER_DATE_FORMAT = 'YYYY-MM-DD HH:mm';
export const TIME_FORMAT_ISO8601 = 'YYYY-MM-DDTHH:mm:ssZ';

import CommonUtils from './commonUtils';
class DateUtils {
  getTimeFromNow = (time) => {
    return moment(time).fromNow(true);
  };

  getUnixTimeStamp = () => {
    return Math.round(new Date().getTime() / 1000);
  };

  convertTimeFormat = (time, fromFormat, toFormat) => {
    return moment(time, fromFormat).format(toFormat);
  };

  getCurrentTime(format = undefined) {
    return moment(Date.now()).format(format ? format : TIME_ONLY_FORMAT);
  }

  getCurrentGivenTime = (givenTime, format = undefined) => {
    return moment(givenTime).format(format ? format : TIME_ONLY_FORMAT);
  };

  addMinutes(givenTime, minutesToAdd, format = undefined) {
    return moment(givenTime)
      .add(minutesToAdd, 'm')
      .format(format ? format : TIME_FORMAT_ISO8601);
  }

  addYears(givenTime, yearsToAdd, format = undefined) {
    return moment(givenTime)
      .add(yearsToAdd, 'y')
      .format(format ? format : TIME_FORMAT_ISO8601);
  }

  getISOString(givenTime) {
    return moment(givenTime).toISOString();
  }

  getDaysBetweenDuration(fromDate, toDate) {
    var compareThis = moment(toDate).toISOString();
    const daysArray = [compareThis];

    while (moment(fromDate).isBefore(compareThis)) {
      compareThis = moment(compareThis).subtract(1, 'day').format(SERVER_DATE_FORMAT);

      if (moment(fromDate).isBefore(compareThis)) {
        daysArray.push(moment(compareThis).toISOString());
      }
    }

    return daysArray;
  }

  getWeeksBetweenDuration(fromDate, toDate) {
    var compareThis = moment(toDate).toISOString();
    const weeksArray = [compareThis];

    while (moment(fromDate).isBefore(compareThis)) {
      compareThis = moment(compareThis).subtract(1, 'week').format(SERVER_DATE_FORMAT);

      if (moment(fromDate).isBefore(compareThis)) {
        weeksArray.push(moment(compareThis).toISOString());
      }
    }

    return weeksArray;
  }

  getMonthsBetweenDuration(fromDate, toDate) {
    var compareThis = moment(toDate).toISOString();
    const monthsArray = [compareThis];

    while (moment(fromDate).isBefore(compareThis)) {
      compareThis = moment(compareThis).subtract(1, 'month').format(SERVER_DATE_FORMAT);

      if (moment(fromDate).isBefore(compareThis)) {
        monthsArray.push(moment(compareThis).toISOString());
      }
    }

    return monthsArray;
  }

  getYearsBetweenDuration(fromDate, toDate) {
    var compareThis = moment(toDate).toISOString();
    const yearsArray = [compareThis];

    while (moment(fromDate).isBefore(compareThis)) {
      compareThis = moment(compareThis).subtract(1, 'year').format(SERVER_DATE_FORMAT);

      if (moment(fromDate).isBefore(compareThis)) {
        yearsArray.push(moment(compareThis).toISOString());
      }
    }

    return yearsArray;
  }

  timeDateFormat = (hour, mint) => {
    var date = moment().tz('America/Los_Angeles').startOf('day');
    date.hour(22);
    date.minutes(45);
  };

  isBetweenTime(time1, time2, format) {
    const time = moment(new Date(), format);
    const beforeTime = moment(time1, format);
    const afterTime = moment(time2, format);
    return time.isBetween(beforeTime, afterTime);
  }

  getTimeObjectFrom24HourFormat = (hours) => {
    let selected_date = '2017-03-13';
    let timeAndDate = moment(
      selected_date + ' ' + hours,
      SIMPLE_DATE_FORMAT + ' ' + TIME_FORMAT_24_HOUR,
    );
    timeAndDate = timeAndDate.format(TIME_ONLY_FORMAT);
    return timeAndDate;
  };

  set24hours = (hours) => {
    var dt = moment(hours, ['h:mm A']).format('HH:mm');
    return dt;
  };
  getDateObjectFromTimeObject = (timeString) => {
    let selected_date = moment().format(SIMPLE_DATE_FORMAT);
    let dateObject = moment(
      selected_date + ' ' + timeString,
      SIMPLE_DATE_FORMAT + ' ' + TIME_ONLY_FORMAT,
    );

    return dateObject?.toDate();
  };

  refactorAvalability = (data) => {
    let temp = [
      { id: 1, day: 'Monday' },
      { id: 2, day: 'Tuesday' },
      { id: 3, day: 'Wednesday' },
      { id: 4, day: 'Thruesday' },
      { id: 5, day: 'Friday' },
      { id: 6, day: 'Saturday' },
      { id: 7, day: 'Sunday' },
    ];

    if (
      !CommonUtils.stringIsEmpty(data.monday_to) ||
      !CommonUtils.stringIsEmpty(data.monday_from)
    ) {
      temp[0].close = this.getTimeObjectFrom24HourFormat(data.monday_to);
      temp[0].open = this.getTimeObjectFrom24HourFormat(data.monday_from);
    } else {
      temp[0].open = '';
      temp[0].close = '';
    }

    if (
      !CommonUtils.stringIsEmpty(data.tuesday_to) ||
      !CommonUtils.stringIsEmpty(data.tuesday_from)
    ) {
      temp[1].close = this.getTimeObjectFrom24HourFormat(data.tuesday_to);
      temp[1].open = this.getTimeObjectFrom24HourFormat(data.tuesday_from);
    } else {
      temp[1].open = '';
      temp[1].close = '';
    }

    if (
      !CommonUtils.stringIsEmpty(data.wednesday_to) ||
      !CommonUtils.stringIsEmpty(data.wednesday_from)
    ) {
      temp[2].close = this.getTimeObjectFrom24HourFormat(data.wednesday_to);
      temp[2].open = this.getTimeObjectFrom24HourFormat(data.wednesday_from);
    } else {
      temp[2].open = '';
      temp[2].close = '';
    }

    if (
      !CommonUtils.stringIsEmpty(data.thursday_to) ||
      !CommonUtils.stringIsEmpty(data.thursday_from)
    ) {
      temp[3].close = this.getTimeObjectFrom24HourFormat(data.thursday_to);
      temp[3].open = this.getTimeObjectFrom24HourFormat(data.thursday_from);
    } else {
      temp[3].open = '';
      temp[3].close = '';
    }

    if (
      !CommonUtils.stringIsEmpty(data.friday_to) ||
      !CommonUtils.stringIsEmpty(data.friday_from)
    ) {
      temp[4].close = this.getTimeObjectFrom24HourFormat(data.friday_to);
      temp[4].open = this.getTimeObjectFrom24HourFormat(data.friday_from);
    } else {
      temp[4].open = '';
      temp[4].close = '';
    }

    if (
      !CommonUtils.stringIsEmpty(data.saturday_to) ||
      !CommonUtils.stringIsEmpty(data.saturday_from)
    ) {
      temp[5].close = this.getTimeObjectFrom24HourFormat(data.saturday_to);
      temp[5].open = this.getTimeObjectFrom24HourFormat(data.saturday_from);
    } else {
      temp[5].open = '';
      temp[5].close = '';
    }

    if (
      !CommonUtils.stringIsEmpty(data.sunday_to) ||
      !CommonUtils.stringIsEmpty(data.sunday_from)
    ) {
      temp[6].close = this.getTimeObjectFrom24HourFormat(data.sunday_to);
      temp[6].open = this.getTimeObjectFrom24HourFormat(data.sunday_from);
    } else {
      temp[6].open = '';
      temp[6].close = '';
    }
    return temp;
  };

  availabilityTimingset24Hours = (param) => {
    let obj = {};
    let temp = {};
    if (param[0].open || param[0].close) {
      temp.to = this.set24hours(param[0].close);
      temp.from = this.set24hours(param[0].open);
      obj.monday = temp;
      temp = {};
    }
    if (param[1].open || param[1].close) {
      temp.to = this.set24hours(param[1].close);
      temp.from = this.set24hours(param[1].open);
      obj.tuesday = temp;
      temp = {};
    }
    if (param[2].open || param[2].close) {
      temp.to = this.set24hours(param[2].close);
      temp.from = this.set24hours(param[2].open);
      obj.wednesday = temp;
      temp = {};
    }
    if (param[3].open || param[3].close) {
      temp.to = this.set24hours(param[3].close);
      temp.from = this.set24hours(param[3].open);
      obj.thursday = temp;
      temp = {};
    }
    if (param[4].open || param[4].close) {
      temp.to = this.set24hours(param[4].close);
      temp.from = this.set24hours(param[4].open);
      obj.friday = temp;
      temp = {};
    }
    if (param[5].open || param[5].close) {
      temp.to = this.set24hours(param[5].close);
      temp.from = this.set24hours(param[5].open);
      obj.saturday = temp;
      temp = {};
    }
    if (param[6].open || param[6].close) {
      temp.to = this.set24hours(param[6].close);
      temp.from = this.set24hours(param[6].open);
      obj.sunday = temp;
      temp = {};
    }
    return obj;
  };

  timetoDate = (hours) => {
    let selected_date = '2017-03-13';
    let timeAndDate = moment(
      selected_date + ' ' + this.set24hours(hours),
      'YYYY-MM-DD' + ' ' + 'HH:mm',
    );
    return timeAndDate;
  };

  timedurationMaxTime = (temp) => {
    let duration = [];
    let difference = '';
    for (var i = 0; i < temp.length; i++) {
      if (temp[i].close != '' && temp[i].open != '') {
        let timeAndDate = this.timetoDate(temp[i].close);
        var a = moment(this.set24hours(temp[i].close), 'HH:mm');
        var b = moment(this.set24hours(temp[i].open), 'HH:mm');
        difference = a.diff(b, 'hours');
        temp[i].duration = difference;
        duration.push(difference);
      }
    }

    if (duration.length > 0) {
      var maxhours = Math.max(...duration);

      return maxhours;
    }
    return 0;
  };
}

export default new DateUtils();
