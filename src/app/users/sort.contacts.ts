import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
    name: 'sortinfo'
})

export class ContactListPipe implements PipeTransform{

    transform(inputinfo:string){
        var x = new Array();
        var y = new Array();
        x = inputinfo.split(',');
        x.forEach(element => {
            y.push(element.split(':'));            
        });
        x.unshift(x.length);
        return x;
    }
}