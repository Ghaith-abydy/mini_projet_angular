import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchFilter',
    standalone: false
})
export class SearchFilterPipe implements PipeTransform {

  transform(list: any[], filterText: string): any {
    console.log("transforming...");
    return list ? list.filter(item =>
      item.nomj1.toLowerCase().includes(filterText)) : [];
  } 

}
