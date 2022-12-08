import { Component, EventEmitter, Output } from '@angular/core';
import { auditTime } from 'rxjs';

@Component({
  selector: 'app-compa2',
  templateUrl: './compa2.component.html',
  styleUrls: ['./compa2.component.scss']
})
export class Compa2Component {

  @Output() onInput = new EventEmitter<string>();
  @Output() onSearh = this.onInput.pipe(auditTime(400))

  inputSearh(text: string){
    this.onInput.emit(text);
  }

}
