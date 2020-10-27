import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Output() cancelList = new EventEmitter();
  users: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getValues();
  }

  getValues() {
    this.http.get('https://localhost:44382/api/user').subscribe(response => {
      this.users = response;
    }, error => {
      console.log(error);
    });
  }

  cancel() {
    this.cancelList.emit(false);
    console.log('cancelled');
  }
}
