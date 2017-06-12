/**
 * Created by schang124 on 2017/06/08.
 */
import React from 'react';

import play from '../media/play-button.svg';
import '../scss/components/_adlist.scss';
import { Button } from 'semantic-ui-react'
import '../../node_modules/semantic-ui-css/semantic.css';

const AdList = ({ data, handleClick}) => {
    const { id, type, src, title, watched, rewardLimit, total, condition, reward} = data;
    return(
        <li onClick={() => handleClick(id)}>
            <article>
                <div className="ico-ad-image">
                    <img src={src} alt=""/>
                    {type === 'VIDEO' ? <button><img src={play} alt="play"/></button> : ''}
                </div>
                <div className="ico-ad-context">
                    <h1>{title}</h1>
                    <ul>
                        <li><span>시청자수</span><b>{watched}</b><span>/</span><mark>{total}</mark></li>
                        <li><span>추천 최대보상금액</span><b>{rewardLimit}</b></li>
                    </ul>
                    <div className="ico-ad-reward">
                        <Button size='mini' color='yellow' onClick={() => handleClick(id)}>적립받기</Button>
                        <i></i><span>{condition}</span><mark>+{reward}</mark>
                    </div>
                </div>
            </article>
        </li>
    );
};

export default AdList;