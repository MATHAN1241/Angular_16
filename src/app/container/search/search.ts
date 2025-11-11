import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [FormsModule, CommonModule],
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

  //Optional 2nd argument of @Viewchild()
  //1. read: Use it to read the different token from the queriedd elements.
  //2. static: Determines When the query is resolved.
        // True is when the view initialized (before the first change detection)
        // for the First Time.
        // false if you want it to be resolved after every change detection.
  // @ViewChild('searchInput',{static: true}) searchInputE1: ElementRef;

  @ViewChild('searchInput') searchInputE1: ElementRef;
  
  //2.custome Event
  onSearchTextChanged() {
    //this.searchTextChanged.emit(this.searchText);
  }

  // updateSearchText(input: HTMLInputElement) {
  //   // this.searchText=event;
  //   //console.log(input.value);
  //   this.searchText = input.value;
  //   this.searchTextChanged.emit(this.searchText);
  // }

   updateSearchText() {
    // this.searchText=event;
    //console.log(input.value);
    this.searchText = this.searchInputE1.nativeElement.value;
    this.searchTextChanged.emit(this.searchText.toLowerCase());
  }


}

