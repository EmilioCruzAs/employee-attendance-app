
import { Component } from '@angular/core';
import dayjs, { Dayjs } from "dayjs";
import 'dayjs/locale/es'; 
dayjs.locale('es') 
@Component({
  selector: 'app-clock',
  templateUrl: './clock.html',
})
export class Clock {
  public currentDate: Date= new Date;
  
  constructor() {
    setInterval(() => {
      this.currentDate = new Date;
    }, 1000)
  }

  format(date:Date){
    return dayjs(date).format("HH : mm : ss");
  }
  
  formatYear(date:Date){
    return dayjs(date).format("dddd, D MMMM YYYY" ).toLocaleUpperCase()
  }
}
