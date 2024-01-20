import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DataType } from '../../types';
import compliantDetailsData from '../../../assets/data/compliant-details.json';
import compliantNotSolvedReasonsData from '../../../assets/data/compliant-not-solved-reasons.json';
import compliantPropertiesData from '../../../assets/data/compliant-properties.json';
import compliantSolutionsData from '../../../assets/data/compliant-solutions.json';
import compliantTypesData from '../../../assets/data/compliant-types.json';
import villages from '../../../assets/data/villages.json';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-complain-form',
  templateUrl: './complain-form.component.html',
  styleUrls: ['./complain-form.component.css'],
  imports: [ReactiveFormsModule, FormsModule, BrowserModule],
  standalone: true,
})
export class ComplainFormComponent {
  isSubmitted: boolean = false;
  villages: DataType[] = villages;
  compliantDetails: DataType[] = compliantDetailsData;
  compliantProperties: DataType[] = compliantPropertiesData;
  compliantTypes: DataType[] = compliantTypesData;
  complientSolutions: DataType[] = compliantSolutionsData;
  complientNotSolvedReasons: DataType[] = compliantNotSolvedReasonsData;

  constructor(public fb: FormBuilder) {}

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
