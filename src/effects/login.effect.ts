import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { map } from 'rxjs/operator/map';

import { Observable } from 'rxjs/Observable';

import { Injectable, ViewChild } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import * as loginAction from '../actions/login';
import { LoginService } from '../app/services/login.service';

@Injectable()
export class LoginEffect {

    constructor(
        private actions$: Actions,
        public loginService: LoginService
    ) { }

    @Effect()
    getIPAddress$ = this.actions$
        .ofType(loginAction.FORM_LOGIN)
        .map((action: loginAction.FormLoginData) => action.payload)
        .exhaustMap(url => {
            debugger;
            return this.loginService.getData()
                .mergeMap((data) => {
                    debugger;
                    return [
                        new loginAction.FormLoginDataSuccess(data),
                    ];


                });
        })

        .catch(error => {

            return [
                new loginAction.FormLoginDataError(),
            ];
        });

}
