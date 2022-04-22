import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Input() name!: string;
  @Input() menuOptions!: { name: string, route: string }[];
}
