import { Component } from '@angular/core';
import { appPath } from 'src/app/app-path.const';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  readonly path = appPath;
}
