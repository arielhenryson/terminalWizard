import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'


import { TerminalComponent } from './terminal.component'
import { PromptComponent } from './prompt/prompt.component'
import { BrowserModule } from '@angular/platform-browser'
import { LogsComponent } from './logs/logs.component'


@NgModule({
  declarations: [
    TerminalComponent,
    PromptComponent,
    LogsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ]
})
export class TerminalModule {}
