import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { OverlayModule } from '@angular/cdk/overlay'


import { TerminalComponent } from './terminal.component'
import { PromptComponent } from './prompt/prompt.component'
import { BrowserModule } from '@angular/platform-browser'
import { LogsComponent } from './logs/logs.component'
import { AutocompleteComponent } from './autocomplete/autocomplete.component'


@NgModule({
  declarations: [
    TerminalComponent,
    PromptComponent,
    AutocompleteComponent,
    LogsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    OverlayModule
  ]
})
export class TerminalModule {}
