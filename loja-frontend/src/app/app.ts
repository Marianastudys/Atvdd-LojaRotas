import { Component } from '@angular/core';
import { Produtos } from './produtos/produtos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Produtos],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}