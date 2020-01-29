import React from 'react';
import { Card, } from 'antd';
import { Link } from 'react-router-dom';

import './post.styles.css';

export const Post = (props) => {
    const description = props.company.description;
    return(
        <div className='container'>
            <div className='link-home'>
                <Link to='/'>> Back to Search</Link> 
            </div>
            <div className='inner-container'>
                <div className='left-column'>
                    <div>{props.company.location} - <span className='green-color'>{props.company.type}</span></div>
                    <div className='post-title'>{props.company.title}</div>
                    <hr />
                    <div className='post-description'>
                        <div dangerouslySetInnerHTML={{ __html: description }}></div>
                    </div>   
                    <div style={{ paddingBottom: '3%'}}>
                        <h3>How to Apply</h3>
                        <div dangerouslySetInnerHTML={{ __html: props.company.how_to_apply }}></div>
                    </div>
                </div>
                <div className='right-column'>
                    <Card bordered={false} title={`Company : ${props.company.company}`}>
                        <img className='company-logo' src={props.company.company_logo} alt=''/>
                    </Card>
                </div>
            </div>
        </div>
    );
}