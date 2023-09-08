import { Component } from '@angular/core';
import { Time } from 'src/store/interfaces';
import { RadioBtnComponent } from '../radio-btn/radio-btn.component';

@Component({
  selector: 'app-product-resource',
  templateUrl: './product-resource.component.html',
  styleUrls: ['./product-resource.component.css']
})
export class ProductResourceComponent {
  selectedOption = ''
  selectedTime!: string;
  Duration: Time[] = [
    {value: 'Day', viewValue: 'Day'},
    {value: 'Week', viewValue: 'Week'},
    {value: 'Month', viewValue: 'Month'},
  ];
}
