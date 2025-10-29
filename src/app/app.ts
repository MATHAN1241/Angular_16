import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { TopHeader } from './top-header/top-header';
import { ProductList } from './product-list/product-list';

@Component({
  selector: 'app-root',
  imports: [Header,TopHeader,ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('simpleapplication');
}
