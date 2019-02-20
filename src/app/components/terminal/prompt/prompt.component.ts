import { Component, ViewChild } from '@angular/core'
import { FormControl } from '@angular/forms'
import { RXBox } from 'rxbox'
import { MatAutocompleteTrigger } from '@angular/material'
import { cmds } from './basic.cmd'


@Component({
  selector: 'app-prompt',
  templateUrl: 'prompt.component.html'
})
export class PromptComponent {
  myControl = new FormControl()
  options: string[] = cmds

  activeCmd = ''

  @ViewChild(MatAutocompleteTrigger) autocomplete: MatAutocompleteTrigger

  constructor(
    private store: RXBox
  ) {}


  keypressHandler($event) {
    this.autocomplete.closePanel()

    if ($event.code === 'Enter') {
      this.pushCmd()
    }
  }


  pushCmd() {
    const data = this.store.getState()['data']

    data.push(this.activeCmd)

    this.store.assignState({
      data
    })

    this.activeCmd = ''
  }
}
