import { Component } from '@angular/core'


import { RXBox } from 'rxbox'


@Component({
  selector: 'app-autocomplete',
  templateUrl: 'autocomplete.component.html'
})
export class AutocompleteComponent {
  activeCmd = ''

  constructor(
    private store: RXBox
  ) {
    this.store.watch('activeCmd').subscribe(cmd => {
      this.activeCmd = cmd
    })
  }
}
