import {
  EventEmitter,
  Component,
  Input,
  Output,
  OnChanges,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnChanges {
  submitted: boolean = false;
  multistep = new FormGroup({
    housingStatus: new FormControl('', Validators.required),
    year: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
  });
  questionTitle: string = 'What Is Your Housing Status?';
  @Input() step: any;
  userChoices: any;
  years: number[] = [];
  @Output() onNextStep: EventEmitter<any> = new EventEmitter();
  constructor() {
    this.years = Array(41)
      .fill(0)
      .map((x, i: number) => i + 1970);
  }

  onSubmit() {
    this.submitted = true;
    if (this.multistep.controls.gender.invalid && this.step == 3) {
      return;
    } else {
      let status = this.multistep.controls.housingStatus?.value;
      let year = this.multistep.controls.year.value;
      let gender = this.multistep.controls.gender.value;
      this.userChoices = {
        housingStatus: {
          status: status,
          ///check video to show
          url:
            status === 'Homeless/Living in a shelter'
              ? 'bnMOa5PWchM'
              : status === 'Homeowner'
              ? 'zM2VVtIyolU'
              : status === 'Living with family / friend'
              ? '2gHt8gJJkNU'
              : 'xttMhm8CK_U',
        },
        year: year,
        gender: gender,
      };
      let length = status.length + year.length + gender.length;
      this.onNextStep.emit(length);
    }
  }
  get housingStatus() {
    return this.multistep.get('housingStatus');
  }
  get year() {
    return this.multistep.get('year');
  }
  get gender() {
    return this.multistep.get('gender');
  }
  onNext() {
    let status = this.multistep.controls.housingStatus;
    let year = this.multistep.controls.year;
    let gender = this.multistep.controls.gender;
    this.submitted = true;
    if (status.invalid && this.step == 1) {
      return;
    }
    if (year.invalid && this.step == 2) {
      return;
    }
    if (gender.invalid && this.step == 3) {
      return;
    }
    this.onNextStep.emit();
  }
  ngOnChanges(): void {
    this.submitted = false;
    if (this.step == 2) this.questionTitle = 'What is your Year of birth';
    if (this.step == 3) this.questionTitle = 'What is your gender?';
  }
}
