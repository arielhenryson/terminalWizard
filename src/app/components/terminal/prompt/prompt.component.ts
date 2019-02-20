import { Component } from '@angular/core'
import { RXBox } from 'rxbox'


@Component({
  selector: 'app-prompt',
  templateUrl: 'prompt.component.html'
})
export class PromptComponent {
  activeCmd = ''


  constructor(
    private store: RXBox
  ) {}


  keypressHandler($event) {
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
