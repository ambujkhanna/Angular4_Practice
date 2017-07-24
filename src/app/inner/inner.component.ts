
import { Component } from '@angular/core';

@Component({
    selector: 'app-inner',
    templateUrl: './inner.component.html',
    styles: ['div, span{color:#666; font-size:14px;padding:5px 0}']
})

export class innerComponent {
    title = "innerComponent text";
    titleText = "This is custom Text";

    showFlag = 1;
    view = "one"
    colors = ['red', 'green', 'blue', 'pink', 'yellow'];

    items = [
        {
            name: 'Mark', age: '25', gender: 'M'
        },
        {
            name: 'Steve', age: '28', gender: 'M'
        },
        {
            name: 'Robbin', age: '32', gender: 'M'
        }
    ]

}