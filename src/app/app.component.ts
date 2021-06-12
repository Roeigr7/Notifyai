import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'dsa';
  step: number = 1;
  countLetters: number = 0;
  onNext(countResult: number): void {
    this.countLetters = countResult;
    this.step = this.step + 1;
  }
}
