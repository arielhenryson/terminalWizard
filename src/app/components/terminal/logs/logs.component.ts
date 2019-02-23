import { ChangeDetectorRef, Component, OnInit } from '@angular/core'
import { RXBox } from 'rxbox'


import { TerminalService } from '../../../services/terminal/terminal.service'


@Component({
  selector: 'app-logs',
  templateUrl: 'logs.component.html'
})
export class LogsComponent implements OnInit {
  data

  constructor(
    private ref: ChangeDetectorRef,
    private terminalService: TerminalService,
    private store: RXBox
  ) {}


  ngOnInit() {
    this.terminalService.cmdResponseHandler()

    this.store.watch('data').subscribe(data => {
      this.data = data
      this.ref.detectChanges()
    })
  }
}
