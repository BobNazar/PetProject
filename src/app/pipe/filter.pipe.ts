import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(data: any[], value: string, prop: any): any {
    if (!data) return null;
    if (!value) return data;
    return data.filter((elem: any) => elem[prop].includes(value) || elem[prop].toLowerCase().includes(value));
  }

}
