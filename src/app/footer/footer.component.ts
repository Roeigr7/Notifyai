import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  @Input() step: any;
  @Input() countLetters: any;
  constructor() {}

  ngOnInit(): void {}
  gg(num: number) {
    for (let i = 2; i < num; i++) if (num % i === 0) return false;
    return true;
  }
}
