import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks/tasks.component';
import { UserComponent } from './user/user.component';
@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  test: boolean = false;
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
    console.log(this.users.find((user) => user.id === this.selectedUserId)!);
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
    // console.log(this.selectedUserId);
  }
}
