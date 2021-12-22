// @flow
import moment from 'moment';

import { timeZone } from '../config/AppConfig';
// import DeviceInfo from "react-native-device-info";

class Util {
  getDateFrom(givenDate: string) {
    return moment(givenDate).add(timeZone, 'hours').fromNow();
  }

  getFloat(value) {
    let converted = parseFloat(value);

    if (converted && typeof converted === 'number') {
      return converted;
    }

    return 0.0;
  }

  precisionRound(number, precision) {
    var factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
  }

  isObjectEmpty(objectToCheck) {
    return Object.keys(objectToCheck).length === 0;
  }

  extractIntegers(text) {
    if (/^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/.test(text) || text == '') {
      return text;
    }

    return '';
  }
}

export default new Util();
