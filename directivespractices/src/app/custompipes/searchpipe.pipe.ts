import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchpipe',
  standalone: true
})
export class SearchpipePipe implements PipeTransform {

  transform(items : any[],searchitem : string,property:string): any[] {
    if(!items || !searchitem) return items;

    searchitem = searchitem.toLowerCase();

    return items.filter(item => item[property]?.toString().toLowerCase().includes(searchitem));
  }

}
