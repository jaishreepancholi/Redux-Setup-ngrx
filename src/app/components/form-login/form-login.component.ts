import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from '../../../reducers/login';
import * as loginAction from '../../../actions/login';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {
  heroForm: FormGroup;
  title = 'app';
  constructor(
    private store: Store<State>,
    public fb: FormBuilder
  ) {
    this.createForm();
  }




  createForm() {
    this.heroForm = this.fb.group({
      username: '',
      password: ''
    });
  }

  onsubmit(value) {
    debugger;
    this.store.dispatch(
      new loginAction.FormLoginData(value)
    );
  }


  ngOnInit() {
  }

}
