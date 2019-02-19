import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'


import { TerminalService } from '../../services/terminal/terminal.service'
import { RXBox } from 'rxbox'


@Component({
  templateUrl: './terminal.component.html'
})
export class TerminalComponent implements OnInit {
  data: Observable<any>
  activeCmd = ''


  constructor(
    private terminalService: TerminalService,
    private store: RXBox
  ) {}


  ngOnInit() {
    this.terminalService.startWatch()


    this.data = this.store.watch('data')
  }


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
