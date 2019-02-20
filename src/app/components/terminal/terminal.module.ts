import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatAutocompleteModule, MatFormFieldModule, MatInputModule } from '@angular/material'


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
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule
  ]
})
export class TerminalModule {}
