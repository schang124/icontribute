/**
 * Created by schang124 on 2017/05/16.
 */
import React from 'react';
import { connect } from 'react-redux';

import { Auth } from '../components/index';
import { loginRequest } from '../actions/auth';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(id, pw){
        return this.props.loginRequest(id, pw).then(
            ()=> {
                if(this.props.status === 'SUCCESS'){
                    let loginData = {
                        isLoggedIn: true,
                        username: id
                    };

                    document.cookie = 'key=' + btoa(JSON.stringify(loginData));

                    // toast

                    this.props.history.push('/login');
                    return true;
                } else {
                    //toast
                    return false;
                }
            }
        );
    }

    render(){
        return (
          <div>
              <Auth mode={true} onLogin={this.handleLogin} />
          </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.auth.login.status
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        loginRequest: (id, pw) => {
            return dispatch(loginRequest(id, pw));
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);