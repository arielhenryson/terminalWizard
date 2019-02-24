import { ChangeDetectorRef, Component, OnInit } from '@angular/core'
import { RXBox } from 'rxbox'
import { Terminal } from 'xterm'


import { ElectronService } from '../../../services/electron/electron.service'


@Component({
  selector: 'app-logs',
  templateUrl: 'logs.component.html'
})
export class LogsComponent implements OnInit {
  term

  constructor(
    private ref: ChangeDetectorRef,
    private electronService: ElectronService,
  ) {}


  ngOnInit() {
    this.term = new Terminal()
    const termEL = document.getElementById('terminal')
    this.term.open(termEL)
    this.term.prompt = () => {
      this.term.write('\r\n$ ')
    }

    this.term.writeln('Welcome to xterm.js')
    this.term.prompt()


    this.term.on('paste', data => {
      this.term.write(data)
    })


    this.term.on('data', data => {
      this.electronService.ipcRenderer.send('cmd', data)
    })


    this.electronService.ipcRenderer.on('cmd-reply', (event, arg) => {
      this.term.write(arg)
    })
  }
}
