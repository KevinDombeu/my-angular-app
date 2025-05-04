import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserListComponent } from "./user-list/user-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-angular-app';
}
