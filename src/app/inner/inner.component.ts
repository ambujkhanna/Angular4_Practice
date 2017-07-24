
import {Component} from '@angular/core';

@Component({
    selector : 'app-inner',
    templateUrl : './inner.component.html'
})

export class innerComponent{
    title = "innerComponent text";
    titleText = "This is custom Text";

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