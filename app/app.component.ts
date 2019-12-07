import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { SAMPLE_RESULTS } from './sample-results';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-app',
  styleUrls: [ './app.component.css' ],
  template: `
    <h1>Search</h1>
    <input type="search" class="mat-elevation-z2" [mdAutocomplete]="auto" [formControl]="searchControl">
    <div class="spacer"></div>

    <md-autocomplete #auto="mdAutocomplete" class="mat-elevation-z2">
      <md-option *ngFor="let item of filteredResults$ | async" [value]="item">
        <span [innerHTML]="item | bold:searchControl.value"></span>
      </md-option>
    </md-autocomplete>
  `,
})
export class AppComponent  {

  searchControl: FormControl;

  filteredResults$: Observable<string[]>;

  results = SAMPLE_RESULTS;

  constructor() {
    this.searchControl = new FormControl('');
    this.filteredResults$ = this.searchControl.valueChanges
      .startWith('')
      .map(val => this.filterResults(val))
      .map(val => val.slice(0, 4));
  }

  private filterResults(val: string): string[] {
    return val ? this.results.filter(v => v.toLowerCase().indexOf(val.toLowerCase()) === 0) : [];
  }

}
