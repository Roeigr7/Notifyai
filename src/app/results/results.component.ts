import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  @Input() userChoices: any;
  constructor() {}

  ngOnInit(): void {}
  getIfYounger() {
    let year = this.userChoices.year;
    let age = 2021 - year;

    if (age < 30) return true;
    return false;
  }
  getIfOlder() {
    let year = this.userChoices.year;
    let age = 2021 - year;
    if (age > 40) return true;
    return false;
  }
}
