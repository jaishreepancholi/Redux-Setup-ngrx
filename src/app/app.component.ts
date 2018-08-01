import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from '../../src/reducers/login';
import * as loginAction from '../../src/actions/login';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
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

}

