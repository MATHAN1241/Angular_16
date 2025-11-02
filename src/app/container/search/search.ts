import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [FormsModule,CommonModule],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
  // searchText: string= "MensWear";
  searchText: string = '';
  //  searchTextChange(event:any){
  //    this.searchText=event.target.value;
  //  }
}
