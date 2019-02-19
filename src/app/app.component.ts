import { Component } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { RXBox } from 'rxbox'


import { ElectronService } from './services/electron/electron.service'
import { AppConfig } from '../environments/environment'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(
    private store: RXBox,
    public electronService: ElectronService,
    private translate: TranslateService
  ) {
    this.setDefaultStoreData()

    translate.setDefaultLang('en')
    console.log('AppConfig', AppConfig)

    if (electronService.isElectron()) {
      console.log('Mode electron')
      console.log('Electron ipcRenderer', electronService.ipcRenderer)
      console.log('NodeJS childProcess', electronService.childProcess)
    } else {
      console.log('Mode web')
    }
  }


  private setDefaultStoreData() {
    this.store.assignState({
      data: []
    })
  }
}
