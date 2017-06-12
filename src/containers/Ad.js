/**
 * Created by schang124 on 2017/06/06.
 */
import React from 'react';
import { AdList } from '../components';

class Ad extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            datas: [
                {
                    id: 10000001,
                    type: 'VIDEO',
                    src: 'https://s-media-cache-ak0.pinimg.com/originals/7e/ec/28/7eec28a2627db1d428b01efc198cb88e.jpg',
                    title: '리니지 II 레볼루션 사전등록!',
                    watched: '394,105',
                    rewardLimit: '25,000원',
                    total: '10,000,000',
                    reward: '500원',
                    condition: '광고시청 후 게임다운로드시'
                },
                {
                    id: 10000002,
                    type: 'IMAGE',
                    src: 'https://s-media-cache-ak0.pinimg.com/564x/97/1e/23/971e23f3409aa2ef085da0b7ac38ac33.jpg',
                    title: '수지 X 두보화보',
                    watched: '845,364',
                    rewardLimit: '8,000원',
                    total: '1,000,000',
                    reward: '300원',
                    condition: '화보감상시'
                },
                {
                    id: 10000003,
                    type: 'VIDEO',
                    src: 'http://i.imgur.com/fKaX7TL.jpg',
                    title: '연아의 위대한 도전',
                    watched: '12,942',
                    rewardLimit: '10,000원',
                    total: '5,000,000',
                    reward: '200원',
                    condition: '광고시청시'
                },
            ]
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(id){
        this.props.history.push(`/ad/${id}`);
    }

    render(){
        return (
            <div className="ico-ad">
                <ul>
                    {this.state.datas.map((data, i) => {
                        const { id } = data;
                        return <AdList data={data} handleClick={this.handleClick} index={i} key={id} />
                    })}
                </ul>
            </div>
        );
    }
}

export default Ad;