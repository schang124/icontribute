/**
 * Created by schang124 on 2017/06/06.
 */
import {
    NAV_INIT,
    NAV_OPEN,
    NAV_CLOSE,
} from './ActionTypes';

export function toggleNav(isOpened){
    return (dispatch) => {
        dispatch(navInit());
        isOpened ? dispatch(navClose()) : dispatch(navOpen());
    }
}

export function navInit(){
    return {
        type: NAV_INIT
    }
}

export function navOpen(){
    return {
        type: NAV_OPEN
    }
}

export function navClose(){
    return {
        type: NAV_CLOSE
    }
}