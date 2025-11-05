import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  imports: [CommonModule,FormsModule],
  templateUrl: './filter.html',
  styleUrl: './filter.css',
})
export class Filter {
  @Input()
  all: number = 0;

  @Input()
  inStock: number = 0;
  
  @Input()
  outOfStock: number = 0;

  selectfilterRadioButton: string='all';

  @Output()
  selectFilter: EventEmitter<string>=new EventEmitter<string>();

  onSelectFilterchanged(){
    console.log(this.selectfilterRadioButton);

    //The selection change event on this laced on loadings
    this.selectFilter.emit(this.selectfilterRadioButton);
  };

}
