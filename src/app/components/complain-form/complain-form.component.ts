import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-complain-form',
  templateUrl: './complain-form.component.html',
  styleUrls: ['./complain-form.component.css'],
  imports: [ReactiveFormsModule],
  standalone: true,
})
export class ComplainFormComponent {
  firstNameControl = new FormControl('');
  lastNameControl = new FormControl('');
  sexControl = new FormControl('');
  birthDateControl = new FormControl('');
  birthDateLocationControl = new FormControl('');
  villageLocationControl = new FormControl('');
  compliantTypeControl = new FormControl('');
  propertyOfCompliantControl = new FormControl('');
  compliantDetailsControl = new FormControl('');
  possibleSolutionControl = new FormControl('');
}
