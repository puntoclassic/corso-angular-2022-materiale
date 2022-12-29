import { Component, HostBinding, OnInit } from "@angular/core";
import { UserService } from "src/app/auth/user.service";
import { User } from "src/app/auth/user.model";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"],
})
export class UserListComponent implements OnInit {
  @HostBinding("class")
  classes: string = "mt-2";

  users?: User[];
  userClicked: User;

  constructor(private userService: UserService) {
    this.userClicked = {
      cognome: "",
      nome: "",
      dataFineContratto: new Date(),
      numeroTelefono: "",
    };
  }

  onUserClicked(user: User) {
    this.userClicked = user;
  }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }
}
