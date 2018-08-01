import { Action } from '@ngrx/store';
export const FORM_LOGIN = '[Form] FormLogin';
export const FORM_LOGIN_SUCCESS = '[Form] FormLoginSuccess';
export const FORM_LOGIN_ERROR = '[Form] FormLoginError';


export class FormLoginData implements Action {
    readonly type = FORM_LOGIN;
    constructor(public payload?: any) {
        debugger;

    }
}

export class FormLoginDataSuccess implements Action {
    readonly type = FORM_LOGIN_SUCCESS;
    constructor(public payload: any) { 
        debugger;
    }
}

export class FormLoginDataError implements Action {
    readonly type = FORM_LOGIN_ERROR;
    constructor() { }
}

export type Actions =
    | FormLoginData
    | FormLoginDataSuccess
    | FormLoginDataError
    ;
