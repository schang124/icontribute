/**
 * Created by schang124 on 2017/06/12.
 */
import React from 'react';
const Title = ({ title, children }) => (
    <div className="ico-title">
        <h1>{title}</h1>
        {children}
    </div>
);

export default Title;