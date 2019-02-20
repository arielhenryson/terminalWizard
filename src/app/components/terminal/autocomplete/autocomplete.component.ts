import { Component, OnInit } from '@angular/core'


import { RXBox } from 'rxbox'


@Component({
  selector: 'autocomplete',
  templateUrl: 'autocomplete.component.html'
})
export class AutocompleteComponent implements OnInit {
  constructor(
    private store: RXBox
  ) {}


  ngOnInit() {
  }
}
