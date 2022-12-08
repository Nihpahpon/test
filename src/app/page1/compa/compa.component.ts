import { Component } from '@angular/core';

@Component({
  selector: 'app-compa',
  templateUrl: './compa.component.html',
  styleUrls: ['./compa.component.scss']
})
export class CompaComponent {
  animal = '';
  doto:any[] =[];
  sentlist(){
    console.log(this.doto)
    this.doto.push(this.animal);
  }

}
