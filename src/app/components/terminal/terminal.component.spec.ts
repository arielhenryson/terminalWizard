import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { TerminalComponent } from './terminal.component'
import { TranslateModule } from '@ngx-translate/core'
import { FormsModule } from '@angular/forms'

describe('TerminalComponent', () => {
  let component: TerminalComponent
  let fixture: ComponentFixture<TerminalComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminalComponent ],
      imports: [
        FormsModule,
        TranslateModule.forRoot()
      ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
