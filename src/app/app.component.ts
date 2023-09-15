import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sisyphus_ventures_layout';
  isOpen = !false;

  openPopup() {
    this.isOpen = !this.isOpen;
  }
}
