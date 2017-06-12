/**
 * Created by schang124 on 2017/05/24.
 */
import React from 'react';
import { Link }from 'react-router-dom';

import { Title } from '../components';
import { iconNext } from '../media';
import { Label, Icon } from 'semantic-ui-react'
import '../scss/components/_mypage.scss';

const MyStat = (props) => (
    <div className="ico-my-stat ico-grid-fluid">
        <Title title="나의 적립/기부 내역" />
        <div className="row">
            <div className="col-sm-6 col-xs-6">
                <div className="ico-my-stat-value">
                    <h1>35,400<small>원</small></h1>
                    <span>총 적립금</span>
                </div>
                <hr/>
            </div>
            <div className="col-sm-6 col-xs-6">
                <div className="ico-my-stat-value">
                    <h1>123,921<small>원</small></h1>
                    <span>총 기부액</span>
                </div>
            </div>
        </div>
    </div>
);

const MyAdList = (props) => (
    <div className="ico-my-ad ico-grid">
        <Title title="시청광고" />
        {
            props.ads.reduce((pairs, ad, index) => {
                if(index%3 === 0){
                    pairs.push([]);
                }
                pairs[pairs.length - 1].push(ad);
                return pairs;
            }, []).map((pair, i) => (
               <MyAdRow {...props} adPairs={pair} key={i} index={i} />
            ))
        }
    </div>
);

const MyAdRow = (props) => (
    <div className="row">
        {props.adPairs.map((ad, i)=>(
            <MyAdCol {...props} ad={ad} key={ad.id} index={i} />
        ))}
    </div>
);

const MyAdCol = (props) => {
    const { ad, match } = props;
    const { id, title, imgUrl, reward, watched, isRewarded, myRewardText, myRewardDate } = ad;
    const style = {backgroundImage: 'url(' + imgUrl + ')'};
    let color = isRewarded ? 'olive' : 'orange';

    return(
        <div className="col-sm-4 col-xs-12">
            <Link to={`${match.url}/reward/detail/${id}`}>
                <article>
                    <div className="ico-my-ad-img" style={style}></div>
                    <div className="ico-my-ad-context">
                        <h1>{title}</h1>
                        <ul>
                            <li><span>적립금</span><b>{reward}</b></li>
                            <li><span>시청자</span><b>{watched}</b></li>
                        </ul>
                        <div className="ico-my-ad-reward">
                            <Label basic size="mini" color={color}>
                                <Icon name="clock" />
                                {myRewardText}
                            </Label>
                            <span>{myRewardDate}</span>
                        </div>
                    </div>
                    <div className="ico-my-ad-arrow">
                        <img src={iconNext} alt="view detail"/>
                    </div>
                </article>
            </Link>
        </div>
    );
};

class MyPage extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            ads: [
                {
                    id: 10000001,
                    title: '리니지 II 레볼루션 사전등록!',
                    imgUrl: 'https://s-media-cache-ak0.pinimg.com/originals/7e/ec/28/7eec28a2627db1d428b01efc198cb88e.jpg',
                    reward: '4,500원',
                    watched: '394,105명',
                    isRewarded: false,
                    myRewardText: '적립미완료',
                    myRewardDate: ''
                },
                {
                    id: 10000002,
                    title: '수지 X 두보 화보',
                    imgUrl: 'https://s-media-cache-ak0.pinimg.com/564x/97/1e/23/971e23f3409aa2ef085da0b7ac38ac33.jpg',
                    reward: '300원',
                    watched: '845,364명',
                    isRewarded: true,
                    myRewardText: '적립완료',
                    myRewardDate: '2017.06.02 18:41'
                },
            ]
        }
    }

    render(){
        return (
            <div className="ico-my">
                <MyStat {...this.props} />
                <MyAdList {...this.props} ads={this.state.ads} />
            </div>
        );
    }
}

export default MyPage;