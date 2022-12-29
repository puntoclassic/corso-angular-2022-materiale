import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,
} from "@angular/core";
import { User } from "src/app/auth/user.model";

@Component({
  selector: "app-user-card",
  templateUrl: "./user-card.component.html",
  styleUrls: ["./user-card.component.scss"],
})
export class UserCardComponent implements OnInit {
  @HostBinding("class")
  componentClass: string = "col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4";

  @Input()
  user: User;

  @Input()
  indice: number = 0;

  @Output()
  emitterCardClicked: EventEmitter<User> = new EventEmitter();

  currentStyle = {};

  constructor() {
    this.user = {
      cognome: "",
      dataFineContratto: new Date(),
      nome: "",
      numeroTelefono: "",
    };
  }

  ngOnInit(): void {
    this.currentStyle = {
      "container-black": this.indice % 2,
      "text-blue": !(this.indice % 2),
      "text-white": this.indice % 2,
    };
  }

  emitScegliUtente() {
    this.emitterCardClicked.emit(this.user);
  }
}
