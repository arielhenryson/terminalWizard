import { Injectable } from '@angular/core'
import { RXBox } from 'rxbox'
import { ElectronService } from '../electron/electron.service'


@Injectable()
export class TerminalService {
  constructor(
    private store: RXBox,
    private electronService: ElectronService
  ) {}


  startWatch() {
    this.electronService.ipcRenderer.on('data', (event, message) => {
      const data = this.store.getState()['data']

      data.push(message)

      this.store.assignState({
        data
      })
    })
  }


  sendCmd(cmd) {
    this.electronService.ipcRenderer.send('cmd', cmd)
  }


  cmdResponseHandler() {
    this.electronService.ipcRenderer.on('cmd-reply', (event, arg) => {
      const data = this.store.getState()['data']

      data.push(arg)

      this.store.assignState({
        data
      })
    })
  }
}
