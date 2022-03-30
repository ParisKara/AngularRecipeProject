import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {
  transform(value: any, pageNumber: number, elementsPerPage: number = 5): any {
    if (value.length <= elementsPerPage) {
      return value;
    }
    const resultArray = [];
    const startIndex = pageNumber * elementsPerPage;
    for (let i = startIndex; i < startIndex + elementsPerPage && i < value.length; i++) {
      resultArray.push(value[i]);
    }
    return resultArray;
  }
}
