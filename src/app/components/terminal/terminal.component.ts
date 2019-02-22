import { Component, OnInit } from '@angular/core'


import { TerminalService } from '../../services/terminal/terminal.service'


@Component({
  templateUrl: 'terminal.component.html'
})
export class TerminalComponent implements OnInit {
  constructor(
    private terminalService: TerminalService,
  ) {}


  ngOnInit() {
    this.terminalService.startWatch()
  }
}
