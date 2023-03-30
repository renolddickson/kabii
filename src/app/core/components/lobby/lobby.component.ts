import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent {
  employeedetail!: FormGroup;

  ngOnInit() {
    this.employeedetail = new FormGroup({
      firstname: new FormControl(null, [Validators.required, Validators.pattern('^[A-Za-z]+$')])
    });
}
}
