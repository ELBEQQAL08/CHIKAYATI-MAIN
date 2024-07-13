import { Component } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  imports: [ReactiveFormsModule, FormsModule, BrowserModule],
  standalone: true,
})
export class SearchComponent {
  searchText = null;

  constructor(public fb: FormBuilder) {}

  searchForm = this.fb.group({
    searchText: ['', [Validators.required]],
  });

  onSearch() {
    if (!this.searchForm.valid) {
      return false;
    } else {
      alert(JSON.stringify(this.searchForm.value));
    }
  }
}
