/**
 * Created by schang124 on 2017/05/16.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import close from '../media/cancel.svg';
import '../scss/components/_nav.scss';

class Navigation extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            menus: [
                {title: '홈', to: ''},
                {title: '적립랭킹', to: '/rank'},
                {title: '미아찾기', to: '/missing'},
                {title: '제휴사회단체', to: '/partners'},
                {title: '설정', to: '/setting'},
            ]
        };
    }

    render() {
        const { status, isNavOpened, handleClick, match } = this.props;
        const { isLoggedIn, currentUser} = status;
        const screenHeight = window.innerHeight;
        const style = {
            height: `${screenHeight / 16}rem`,
        };

        return (
            <nav className={ isNavOpened ? 'show': '' } style={style}>
                <button className="ico-nav-button-close" onClick={handleClick}>
                    <i><img src={close} alt=""/></i>
                </button>
                <div className="ico-user">
                { isLoggedIn ? (
                    <Link to="/my">{currentUser}</Link>
                ) : (
                    <Link to="/auth/login" onClick={handleClick}>로그인</Link>
                ) }
                </div>
                <ul>
                    {this.state.menus.map( (menu, i) => {
                        return <li key={i}><Link to={`${match.url}${menu.to}`} onClick={handleClick}>{menu.title}</Link></li>;
                    })}
                </ul>
                <div className="ico-nav-footer">
                    <span>현재버전 v</span>
                </div>
            </nav>
        );
    }
}

// const NavigationWithRouter = withRouter(Navigation);
export default Navigation;
