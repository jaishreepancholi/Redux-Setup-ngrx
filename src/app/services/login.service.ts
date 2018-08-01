import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/';

@Injectable()
export class LoginService {
  data: any = '';
  usersData: any;
  constructor(
    public http: HttpClient
  ) {

  }

  //   getData() {
  //     debugger;
  //     // this.data = 'formdata';
  //    this.http.get("http://localhost:8000/response").subscribe(datas => {
  //       this.data = datas;
  //       console.log("data", this.data);

  //       debugger;


  //     }, (error) => {
  //       console.log("error", error);

  //       debugger;
  //     })

  //   }
  // }


  getData() {
    return this.http.get("http://localhost:8000/response");
}
}
