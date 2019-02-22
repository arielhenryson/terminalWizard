import { Component } from '@angular/core'
import { FormControl } from '@angular/forms'
import { RXBox } from 'rxbox'


import { cmds } from './basic.cmd'
import { TerminalService } from '../../../services/terminal/terminal.service'


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
    private terminalService: TerminalService,
  ) {
    this.terminalService.cmdResponseHandler()
  }


  keypressHandler($event) {
    this.store.assignState({
      activeCmd: this.activeCmd
    })


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


    this.terminalService.sendCmd(this.activeCmd)

    this.activeCmd = ''
  }
}
