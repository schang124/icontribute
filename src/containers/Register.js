/**
 * Created by schang124 on 2017/05/16.
 */
import React from 'react';
import { Auth } from '../components';
import { connect } from 'react-redux';
import { registerRequest } from '../actions/auth';

class Register extends React.Component{

    constructor(props){
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
    }

    handleRegister(id, pw){
        return this.props.handleRegister(id, pw).then(
            ()=>{
                if(this.props.status === 'SUCCESS') {
                    //toast
                    alert('login succeed!');
                    this.props.history.push('/login');
                    return true;
                } else {
                    let errorMessage = [
                        'Invalid Username',
                        'Password is too short',
                        'Username already exist'
                    ];
                    let toastMessage = errorMessage[this.props.errorCode - 1];
                    alert(toastMessage);
                    // toast
                    return false;
                }
            }
        );
    }

    render(){
        return (
            <div>
                <Auth mode={false} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.auth.register.status,
        errorCode: state.auth.register.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        registerRequest: (id, pw) => {
            return dispatch(registerRequest(id, pw))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);