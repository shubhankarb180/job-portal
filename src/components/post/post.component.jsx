import React from 'react';

import './post.styles.css';

export const Post = (props) => {
    const description = props.company.description;
    return(
        <div className='container'>
            <div className='left-column'>
                <div>{props.company.location} - <span className='green-color'>{props.company.type}</span></div>
                <div className='post-title'>{props.company.title}</div>
                <hr />
                <div className='post-description' dangerouslySetInnerHTML={{ __html: description }}>
                </div>
            </div>
            <div className='right-column'></div>
        </div>
    );
}