import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Avatar } from 'antd';
import './PostList.css';

class PostList extends React.Component { 
    constructor(prosp){
        super();
    }

    findDays = (date) => {
        let today = new Date();
        let oneDay = (24 *60 *60 * 1000); 
        return (Math.round(Math.abs((today - date)/ oneDay)));
    }
    
    render(){

        console.log(this.props.posts);
        const postDisplay = this.props.posts.map((t) => {
            let today = new Date();
            let createdOn = Date.parse(t.created_at);
            let aDay = 24 * 60 * 60 * 1000;
            let date = Math.round(Math.abs((today - createdOn )/aDay));
            // let timeAgo = (createdOn) => {
            //     const days = Math.round(Math.abs((today -  createdOn )/aDay));
            //     if( days > 365 ){
            //         let tempTime = Math.round(days/365);
            //         return(`${tempTime} year ago`)
            //     }
            //     else if (days > 30 ){
                    
            //     }
            // };
            return(
                <Card className='padding-bottom' key={t.id}>
                    <div className='job-title-flex'>
                        <Avatar className='avatar-img' size='large' src={t.company_logo} />
                        <h3 className="job-title"><Link to={`/company/${t.id}`} target="_blank">{t.title}</Link></h3>
                    </div>
                    <div className='description-info'>
                        <div className='description-left'>
                            <div>Location : {t.location}</div>
                            <div>Comapany : {t.company}</div>
                        </div>
                        <div className='description-right'>
                            <div className='green-color'>{t.type}</div>
                            <div>Posted {date} days ago</div>
                        </div>
                    </div>
                </Card>
            );
        });
        return(
            <div className="post-list">
                {postDisplay}
            </div> 
        );
        
    }
}

export default PostList