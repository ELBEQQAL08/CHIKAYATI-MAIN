import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DataType } from '../../types';
import * as compliantDetailsData from '../../../assets/data/compliant-details.json';
import * as villagesData from '../../../assets/data/villages.json';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-complain-form',
  templateUrl: './complain-form.component.html',
  styleUrls: ['./complain-form.component.css'],
  imports: [ReactiveFormsModule, FormsModule, BrowserModule],
  standalone: true,
})
export class ComplainFormComponent implements OnInit {
  isSubmitted: boolean = false;
  villages: DataType[] = [{ name: 'test' }, { name: 'test1' }];
  compliantDetails: DataType[] = compliantDetailsData;
  compliantProperties: DataType[] = [];
  compliantTypes: DataType[] = [];
  complientSolutions: DataType[] = [];
  complientNotSolvedReasons: DataType[] = [];

  constructor(public fb: FormBuilder) {}

  ngOnInit() {
    console.log(this.villages);
  }

  registrationForm = this.fb.group({
    gender: ['ذكر', [Validators.required]],
    firstName: ['firstName', [Validators.required]],
    lastName: ['lastName', [Validators.required]],
    birthDate: ['', [Validators.required]],
    birthDateLocation: ['', [Validators.required]],
    villageLocation: new FormControl(this.villages[1]),
    compliantType: new FormControl(this.compliantTypes),
    propertyOfCompliant: new FormControl(this.compliantProperties),
    compliantDetails: new FormControl(this.compliantDetails),
    possibleSolution: new FormControl(this.complientSolutions),
  });

  get myForm() {
    return this.registrationForm.get('gender');
  }

  onSubmit() {
    this.isSubmitted = true;
    if (!this.registrationForm.valid) {
      return false;
    } else {
      alert(JSON.stringify(this.registrationForm.value));
    }
  }
}
