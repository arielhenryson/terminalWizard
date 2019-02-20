import { Component, OnInit } from '@angular/core'
import { RXBox } from 'rxbox'
import { Observable } from 'rxjs'


import { TerminalService } from '../../../services/terminal/terminal.service'


@Component({
  selector: 'app-logs',
  templateUrl: 'logs.component.html'
})
export class LogsComponent implements OnInit {
  data: Observable<any>

  constructor(
    private terminalService: TerminalService,
    private store: RXBox
  ) {}


  ngOnInit() {
    this.terminalService.startWatch()


    this.data = this.store.watch('data')
  }
}
