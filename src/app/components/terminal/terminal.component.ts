import { Component } from '@angular/core'


@Component({
  templateUrl: './terminal.component.html'
})
export class TerminalComponent {
  data = []
  activeCmd = ''


  keypressHandler($event) {
    if ($event.code === 'Enter') {
      this.pushCmd()
    }
  }


  pushCmd() {
    this.data.push(this.activeCmd)

    this.activeCmd = ''
  }
}
