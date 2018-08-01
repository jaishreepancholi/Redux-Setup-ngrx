import * as loginAction from '../actions/login';

export interface State {
    username: string;
    password: string;
}



export const initialState: State = {
    username: '',
    password: ''
};

export function reducer(state = initialState, action:
    loginAction.Actions): State {

    switch (action.type) {

        case loginAction.FORM_LOGIN: {
            debugger;
            return {
                ...state,
                username: action.payload.username,
                password: action.payload.password
            };
        }

        case loginAction.FORM_LOGIN_SUCCESS: {
            debugger;
            return {
                ...state,
                username: action.payload.username,
                password: action.payload.password
            };
        }

        case loginAction.FORM_LOGIN_ERROR: {
            return {
                ...state

            };
        }


        default: {
            return state;
        }
    }
}
