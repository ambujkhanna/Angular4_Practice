
import {Component} from '@angular/core';

@Component({
    selector : 'app-inner',
    templateUrl : './inner.component.html'
})

export class innerComponent{
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
  
  allowclick = false;
    currentStatus;
    
    repeatItems = ['item 1','item2', 'item 3'];


    constructor(){
      setTimeout(() => {
        this.allowclick = true;
      },2000);
  
      this.currentStatus = Math.random() > 0.5 ? 'Online' : 'Offline'; 
  
    }

    ShowData='';
    EnteredData='';

    onClicked (){
        this.ShowData="'"+this.EnteredData + "' is textbox Data ";
    }
    
    getColor(){
        return this.currentStatus ==='online' ? 'green' :'red';
    }
    eachItem = '';
    addItems(){
        this.repeatItems.push(this.eachItem);
    }
}
