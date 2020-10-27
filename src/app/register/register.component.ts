import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RegisterService } from '../_services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private registerService: RegisterService) { }

  ngOnInit() {
  }

  register() {
    console.log(this.model);
    this.registerService.register(this.model).subscribe(() => {
      console.log('registration successful');
    }, error => {
      console.log(error);
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
    console.log('cancelled');
  }

}
