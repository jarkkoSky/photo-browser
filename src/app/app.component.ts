import { Component } from '@angular/core';
import { UsersService } from './state/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'photo-browser';

  constructor(private usersService: UsersService) {
    this.usersService.get();
  }
}
