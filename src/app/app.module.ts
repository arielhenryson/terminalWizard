import 'reflect-metadata'
import '../polyfills'

import { RXBox } from 'rxbox'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { HttpClientModule, HttpClient } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'


// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'

import { ElectronService } from './services/electron/electron.service'

import { WebviewDirective } from './directives/webview.directive'

import { AppComponent } from './app.component'
import { TerminalComponent } from './components/terminal/terminal.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { TerminalService } from './services/terminal/terminal.service'

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json')
}

@NgModule({
  declarations: [
    AppComponent,
    TerminalComponent,
    WebviewDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [ HttpClient ]
      }
    }),
    BrowserAnimationsModule,
  ],
  providers: [
    RXBox,
    ElectronService,
    TerminalService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
