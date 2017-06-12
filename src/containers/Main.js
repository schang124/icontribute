/**
 * Created by schang124 on 2017/05/20.
 */
import React from 'react';
import { Route } from 'react-router-dom'
import{ Header, Navigation } from '../components';
import{
    Ad,
    MyPage,
    Missing,
    Partners,
    Setting,
    AdDetail,
    MyRewardDetail,
} from '../containers';

import { connect } from 'react-redux';
import { getStatusRequest } from '../actions/auth';
import { toggleNav } from '../actions/nav';

class Main extends React.Component{
    constructor(props){
        super(props);
        this.handleMenuClick = this.handleMenuClick.bind(this);
    }

    componentDidMount() {
        function getCookie(name) {
            var value = "; " + document.cookie;
            var parts = value.split(";" + name + "=");
            if(parts.length === 2) return parts.pop().split(";").shift();
        }

        let loginData = getCookie('key');

        if(typeof loginData === "undefined") return;

        loginData = JSON.parse(atob(loginData));

        if(!loginData.isLoggedIn) return;

        this.props.getStatusRequest().then(
            () => {
                console.log(this.props.status);
                if(!this.props.valid) {
                    loginData = {
                        isLoggedIn: false,
                        usernaem: ''
                    };

                    document.cookie = 'key=' + btoa(JSON.stringify(loginData));

                    // toast
                }
            }
        );
    }

    handleMenuClick(){
        this.props.toggleNav(this.props.isNavOpened);
    }

    render(){
        const { status, isNavOpened, match } = this.props;
        return (
            <div>
                <Navigation {...this.props} status={status} isNavOpened={isNavOpened} handleClick={this.handleMenuClick} />
                <Header handleClick={this.handleMenuClick} />
                <Route exact path={`${match.url}`} component={Ad} />
                <Route exact path={`${match.url}/my`} component={MyPage} />
                <Route path={`${match.url}/missing`} component={Missing} />
                <Route path={`${match.url}/partners`} component={Partners} />
                <Route path={`${match.url}/setting`} component={Setting} />

                <Route path={`${match.url}/ad/detail/:id`} component={AdDetail} />
                <Route path={`${match.url}/my/reward/detail/:id`} component={MyRewardDetail} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.auth.status,
        isNavOpened: state.nav.status.isOpened,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getStatusRequest: () => {
            return dispatch(getStatusRequest());
        },
        toggleNav: (isOpened) => {
            return dispatch(toggleNav(isOpened));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);