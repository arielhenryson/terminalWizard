import { Component, OnInit } from '@angular/core'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  data = []
  activeCmd = ''


  keypressHandler($event) {
    if ($event.code === 'Enter') {
      this.pushCmd()
    }
  }


  pushCmd() {
    this.data.push(this.activeCmd)

    this.activeCmd = ''
  }
}
