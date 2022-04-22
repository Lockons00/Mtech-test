import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Farm } from '../../interfaces/farm.interface';

@Component({
  selector: 'mt-sample-detail',
  templateUrl: './mt-sample-detail.component.html',
})
export class MtSampleDetailComponent {
  @Input() farm!: Farm | null;
  @Output() onClick: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  close() {
    this.onClick.emit(true);
  };

}