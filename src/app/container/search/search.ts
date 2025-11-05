import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
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

  //1. create Event
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  //2.custome Event
  onSearchTextChanged(){
      //this.searchTextChanged.emit(this.searchText);
  }

   updateSearchText(input:HTMLInputElement){
   // this.searchText=event;
    //console.log(input.value);
    this.searchText=input.value;
this.searchTextChanged.emit(this.searchText);
  
   }

}

