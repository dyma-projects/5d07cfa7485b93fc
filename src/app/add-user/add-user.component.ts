import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  @ViewChild('input', {static: false}) public el: ElementRef;
  public error = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  addUser() {
    const username = this.el.nativeElement.value;
    if (username) {
      this.userService.addUser(username); // on utilise le service ici pour ajouter l'utilisateur;
      this.el.nativeElement.value = '';
    } else {
      this.error = true;
    }
  }

}
