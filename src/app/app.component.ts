import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  name: string = 'MTech';
  menuOptions: { name: string, route: string }[] = [
    { name: 'Home', route: '/' },
    { name: 'List - Detail Exercise', route: '/list-detail' },
    // { name: 'Auto Complete', route: '/auto-complete' },
  ]
}
