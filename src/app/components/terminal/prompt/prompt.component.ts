import { Component, ViewChild } from '@angular/core'
import { FormControl } from '@angular/forms'
import { RXBox } from 'rxbox'
import { Overlay } from '@angular/cdk/overlay'


import { cmds } from './basic.cmd'


@Component({
  selector: 'app-prompt',
  templateUrl: 'prompt.component.html'
})
export class PromptComponent {
  isAutocompleteOpen = false
  myControl = new FormControl()
  options: string[] = cmds

  activeCmd = ''


  constructor(
    private store: RXBox,
    private overlay: Overlay
  ) {}


  keypressHandler($event) {
    if ($event.code === 'Enter') {
      this.pushCmd()
    }

    if (this.activeCmd.length) {
      return this.isAutocompleteOpen = true
    }

    this.isAutocompleteOpen = false
  }


  pushCmd() {
    const data = this.store.getState()['data']

    data.push(this.activeCmd)

    this.store.assignState({
      data
    })

    this.activeCmd = ''
  }


  openAutocomplete() {
  }
}
