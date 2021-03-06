/**
 * Created by schang124 on 2017/05/23.
 */
import * as types from '../actions/ActionTypes';
import update from 'react-addons-update';

const initialState = {
    login: {
        status: 'INIT'
    },
    register: {
        status: 'INIT',
        error: -1
    },
    status: {
        valid: false,
        isLoggedIn: false,
        currentUser: '',
        currentEmail: '',
    }
};

export default function auth(state, action){
    if(typeof state === "undefined") state = initialState;

    switch(action.type){
        // login
        case types.AUTH_LOGIN:
            return update(state, {
               login: {
                   status: { $set: 'WAITING' }
               }
            });

        case types.AUTH_LOGIN_SUCCESS:
            return update(state, {
                login: {
                    status: { $set: 'SUCCESS'}
                },
                status: {
                    isLoggedIn: { $set: true },
                    currentUser: { $set: action.username },
                    currentEmail: { $set: action.email }
                }
            });

        case types.AUTH_LOGIN_FAILURE:
            return update(state,  {
               login: {
                   status: { $set: 'FAILURE' }
               }
            });

        // register
        case types.AUTH_REGISTER:
            return update(state, {
                register: {
                    status: { $set: 'WAITING'},
                    error: { $set: -1 }
                }
            });

        case types.AUTH_REGISTER_SUCCESS:
            return update(state, {
                register: {
                    status: { $set: 'SUCCESS'}
                }
            });

        case types.AUTH_REGISTER_FAILURE:
            return update(state, {
                register: {
                    status: { $set: 'FAILURE'},
                    error: { $set: action.error }
                }
            });

        // get auth status
        case types.AUTH_GET_STATUS:
            return update(state, {
                status: {
                    isLoggedIn: { $set: true }
                }
            });

        case types.AUTH_GET_STATUS_SUCCESS:
            return update(state, {
                status: {
                    valid: { $set: true },
                    currentUser: { $set: action.username }
                }
            });

        case types.AUTH_GET_STATUS_FAILURE:
            return update(state, {
                status: {
                    valid: { $set: false },
                    isLoggedIn: { $set: false }
                }
            });

        default:
            return state;
    }
}