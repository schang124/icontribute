/**
 * Created by schang124 on 2017/06/06.
 */
import React from 'react';
import { Title } from '../components'

import { Icon, Table } from 'semantic-ui-react'
import '../scss/components/_rewardDetail.scss';


const MyRewardSubject = ({ detail }) => {
    const {title, advertiser, src } = detail;
    const style = {backgroundImage: `url(${src})`};
    return (
        <div className="ico-my-reward-subject" style={style}>
            <article>
                <h1>{title}</h1>
                <span>{advertiser}</span>
            </article>
        </div>
    );
};

const MyRewardStat = ({ my }) => {
    const { donation, adReward, shareReward} = my;
    return (
        <div className="ico-my-reward-stat ico-grid-fluid">
            <div className="row">
                <MyRewardColumn value={donation} title="나의 기부율"/>
                <MyRewardColumn value={adReward} title="적립금"/>
                <MyRewardColumn value={shareReward} title="공유혜택"/>
            </div>
        </div>

    );
};

const MyRewardColumn = ({ value, title }) => (
    <div className="col-xs-4">
        <h1>{value}</h1>
        <span>{title}</span>
    </div>
);

const MyShared = (props) => {
    const { shared } = props;
    return (
        <div className="ico-my-reward-share">
            <Title title="공유내역">

            </Title>
            <Table celled unstackable size='small'>
                <Table.Header>
                    <Table.Row textAlign="center">
                        <Table.HeaderCell>공유지인명</Table.HeaderCell>
                        <Table.HeaderCell>시청유무</Table.HeaderCell>
                        <Table.HeaderCell>기부율</Table.HeaderCell>
                        <Table.HeaderCell>공유혜택</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {shared.map( (share, i) => {
                        return <MySharedCell share={share} key={i} />;
                    })}
                </Table.Body>
            </Table>
        </div>
    );
};

const MySharedCell = ({ share }) => {
    const { name, isRewarded, rewardPercent, rewardAmount } = share;
    let positive = isRewarded;
    let negative = !positive;
    let iconName = isRewarded ? 'checkmark' : 'close';
    return (
        <Table.Row textAlign="center">
            <Table.Cell>{name}</Table.Cell>
            <Table.Cell positive={positive} negative={negative}><Icon name={iconName} /></Table.Cell>
            <Table.Cell>{rewardPercent}</Table.Cell>
            <Table.Cell>{rewardAmount}</Table.Cell>
        </Table.Row>
    );
}

class MyRewardDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            my: {
                donation: '40%',
                adReward: '500원',
                shareReward: '4,500원',
            },
            detail: {
                title: '수지 X 두보 화보',
                advertiser: '두보 스튜디오',
                src: 'https://s-media-cache-ak0.pinimg.com/564x/97/1e/23/971e23f3409aa2ef085da0b7ac38ac33.jpg'
            },
            shared: [
                { name:  '권순범', isRewarded: true, rewardPercent: '10%', rewardAmount: '10원' },
                { name:  '김상철', isRewarded: true, rewardPercent: '40%', rewardAmount: '40원' },
                { name:  '이상엽', isRewarded: false, rewardPercent: '-', rewardAmount: '-' },
                { name:  '홍서범', isRewarded: true, rewardPercent: '20%', rewardAmount: '20원' },
                { name:  '김준호', isRewarded: false, rewardPercent: '-', rewardAmount: '-' },
                { name:  '이기동', isRewarded: true, rewardPercent: '50%', rewardAmount: '50원' },
            ]
        };
    }

    render(){
        const { match } = this.props;
        const { my, detail, shared } = this.state;
        return (
            <div className="ico-my-reward-detail">
                <MyRewardSubject detail={detail} />
                <MyRewardStat my={my} />
                <MyShared shared={shared} />
            </div>


        );
    }
}

export default MyRewardDetail;