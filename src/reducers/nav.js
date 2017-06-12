/**
 * Created by schang124 on 2017/06/06.
 */
import * as types from '../actions/ActionTypes';
import update from 'react-addons-update';

const initialState = {
    nav: {
        status: 'INIT'
    },
    status: {
        version: '0.0.1',
        isOpened: false,
    }
};

export default function nav(state, action) {
    if(typeof state === "undefined") state = initialState;

    switch(action.type){
        case types.NAV_INIT:
            return update(state, {
                nav: {
                    status:  { $set: 'WAITING'}
                }
            });

        case types.NAV_OPEN:
            return update(state, {
                nav: {
                    status:  { $set: 'OPENED'}
                },
                status: {
                    isOpened: { $set: true }
                }
            });

        case types.NAV_CLOSE:
            return update(state, {
                nav: {
                    status:  { $set: 'CLOSED'}
                },
                status: {
                    isOpened: { $set: false }
                }
            });

        default:
            return state;
    }
}
