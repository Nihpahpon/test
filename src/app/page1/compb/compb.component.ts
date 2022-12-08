import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-compb',
  templateUrl: './compb.component.html',
  styleUrls: ['./compb.component.scss']
})
export class CompbComponent {
  @Input()  Animal:any[]=[];

}
