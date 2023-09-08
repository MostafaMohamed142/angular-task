import { Component,Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-radio-btn',
  templateUrl: './radio-btn.component.html',
  styleUrls: ['./radio-btn.component.css']
})
export class RadioBtnComponent {
  @Input() label: string = '';
  @Input() value: string | number | null = null;
  @Input() checked: boolean = false;
  @Output() valueChange = new EventEmitter<any>();
  

  onRadioChange(): void {
    this.valueChange.emit(this.value);
  }
}
