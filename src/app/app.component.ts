import { Component } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bee Farm';
  userName = '';

  constructor(
    public authService: AuthService,
    private userService: UserService
  ) {
    this.getUserName();
  }

  getUserName() {
    var userId = this.authService.getUserId();
    this.userService.getById(userId)
      .subscribe(res => this.userName = res.firstName + ' ' + res.secondName);
  }


}