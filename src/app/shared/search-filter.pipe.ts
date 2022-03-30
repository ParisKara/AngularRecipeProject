import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
  pure: false
})
export class SearchFilterPipe implements PipeTransform {
  transform(value: any, filteredString: string, propName: string): any {
    if (value.length === 0 || filteredString === '') {
      return value;
    }
    const resultArray = [];
    filteredString = filteredString.toLocaleLowerCase();
    for (const item of value) {
      if (item[propName].toLowerCase().includes(filteredString)) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
