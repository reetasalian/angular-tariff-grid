import { Injectable } from '@angular/core';
import { ITariff } from 'src/app/models/tariff';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  timeout: any;
  flag: boolean = true;

  constructor() {}

  sortData(data: any, key: string, order: string = 'ascending'): ITariff {
    data.sort((a: any, b: any) => {
      const sortOrder = order === 'ascending' ? 1 : -1;
      if (this.getTypeValue(a[key]) > this.getTypeValue(b[key])) {
        return 1 * sortOrder;
      } else {
        return -1 * sortOrder;
      }
    });
    return data;
  }

  getTypeValue(a: string | number) {
    return typeof a === 'string' ? a.toLowerCase() : a;
  }

  filterData(data: number, config: any) {
    return data >= config.min && data <= config.max;
  }

  debounce(callback: any, delay = 5000, context: any) {
    return () => {
      let args = arguments;
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        callback.apply(context, args);
      }, delay);
    };
  }

  deepClone(obj: any) {
    if (obj === null) return null;
    let clone = Object.assign({}, obj);
    Object.keys(clone).forEach(
      (key) =>
        (clone[key] =
          typeof obj[key] === 'object' ? this.deepClone(obj[key]) : obj[key])
    );
    if (Array.isArray(obj)) {
      clone.length = obj.length;
      return Array.from(clone);
    }
    return clone;
  }
}
