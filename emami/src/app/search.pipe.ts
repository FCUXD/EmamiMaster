import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], value: string,label1:string, label2:string,label3:string): any[] {
  // if (!items) return [];
 
if (!items) return null;
// if (!value) return items;
if (!value) return null;
if (value == '' || value == null) return null;
// this.test.searchflag=true;
let returnItem = [];
returnItem=items.filter(e => e[label1].toLowerCase().indexOf(value.toLowerCase()) > -1 );
for(let itm of items.filter(e => e[label2].toLowerCase().indexOf(value.toLowerCase()) > -1 ))
returnItem.push(itm);
for(let itm of items.filter(e => e[label3].toLowerCase().indexOf(value.toLowerCase()) > -1 ))
returnItem.push(itm);
console.log(returnItem);
return returnItem;
  }

}
