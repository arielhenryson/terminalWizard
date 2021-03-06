import { TerminalComponent } from './components/terminal/terminal.component'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
    {
        path: '',
        component: TerminalComponent
    }
]

@NgModule({
    imports: [
      RouterModule.forRoot(routes, {useHash: true})
    ],
    exports: [
      RouterModule
    ]
})
export class AppRoutingModule { }
