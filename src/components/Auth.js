/**
 * Created by schang124 on 2017/05/16.
 */
import React from 'react';
import PropTypes from 'prop-types';

import { Button, Divider } from 'semantic-ui-react'
import '../../node_modules/semantic-ui-css/semantic.css';
import '../scss/components/_auth.scss';

class Auth extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleChange(e){
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleLogin(){
        let id = this.state.username;
        let pw = this.state.password;

        this.props.onLogin(id, pw).then(
            (success) => {
                if(!success){
                    this.setState({
                       password: ''
                    });
                }
            }
        );
    }
    handleRegister(){
        let id = this.state.username;
        let pw = this.state.password;

        this.props.onRegister(id, pw).then(
            (result) => {
                if(!result){
                    this.setState({
                       username: '',
                       password: ''
                    });
                }
            }
        );
    }
    handleKeyPress(e){
        if(e.charCode === 13){
            if(this.props.mode) this.handleLogin();
            else this.handleRegister();
        }
    }

    render(){
        const buttonStyle = { borderRadius: '0' };
        const inputId= (
            <div className="ico-auth-input">
                <input type="text"
                       name="id"
                       placeholder="Email Account"
                       onChange={this.handleChange}
                       value={this.state.username} />
            </div>
        );

        const inputPassword = (
            <div className="ico-auth-input">
                <input type="password"
                       name="password"
                       placeholder="Password"
                       onChange={this.handleChange}
                       value={this.state.password}
                       onKeyPress={this.handleKeyPress} />
            </div>
        );

        const loginDividerStyle = {
            paddingTop: '1em',
            fontWeight: '100'
        };

        const loginInput = (
            <div>
                {inputId}
                {inputPassword}
                <div style={{marginTop: '2rem'}}>
                    <Button size="large" fluid style={buttonStyle} onClick={this.handleLogin}>로그인</Button>
                </div>
                <Divider horizontal
                         inverted
                         style={loginDividerStyle}>계정연동으로 시작하기</Divider>
            </div>
        );

        const registerInput = (
            <div>
                {inputId}
                {inputPassword}
                <div className="ico-auth-input">
                    <input type="password" name="confirmPassword" placeholder="Confirm Password"/>
                </div>
                <div className="ico-auth-input">
                    <input type="text" name="tel" placeholder="Cell Phone Number"/>
                    <Button className="ico-auth-button-cellphone"
                            size="small"
                            style={buttonStyle}>인증하기</Button>
                </div>
                <div className="ico-auth-input">
                    <input type="text" name="tel" placeholder="Confirm Number"/>
                    <Button className="ico-auth-button-cellphone"
                            size="small"
                            style={buttonStyle}
                            disabled>인증완료</Button>
                </div>
            </div>
        );

        const loginOAuth = (
            <div className="ico-auth-oauth">
                <ul>
                    <li><Button circular size="huge" icon='facebook' /></li>
                    <li><Button circular size="huge" icon='twitter' /></li>
                    <li><Button circular size="huge" icon='google plus' /></li>
                </ul>
            </div>
        );

        const registerButton = (
            <div style={{marginTop: '2rem'}}>
                <Button size="big" fluid style={buttonStyle} onClick={this.handleRegister}>가입완료</Button>
            </div>
        );

        const loginTitle = (
            <h1>I.CO</h1>
        );

        const registerTitle = (
            <h2>Register</h2>
        );

        const isLoginMode = this.props.mode;
        return(
            <div className="ico-auth">
                <div className="ico-auth-tint"></div>
                <div className="ico-auth-container">
                    <form>
                        <div className="ico-auth-logo">
                            { isLoginMode ? loginTitle : registerTitle }
                            <p>기부의 새로운 패러다임을 경험하세요!</p>
                        </div>
                        <div className="ico-auto-login">
                            { isLoginMode ? loginInput : registerInput }
                            { isLoginMode ? loginOAuth : registerButton }
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

Auth.propTypes = {
    mode: PropTypes.bool,
    onLogin: PropTypes.func,
    onRegister: PropTypes.func
};

Auth.defaultProps = {
    mode: true,
    onLogin: (id, pw) => { console.log('login function not defined'); },
    onRegister: (id, pw) => { console.log('register function not defined'); }
};

export default Auth;