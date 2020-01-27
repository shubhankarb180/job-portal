import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Avatar, Button, Layout } from 'antd';
import './PostList.css'; // Importing the CSS File 

const { Footer } = Layout;

class PostList extends React.Component { 
    
    state = {
        sortFilter : false // Toggle Switch for Sorting
    };

    //Function to find when the post was created 
    timeAgo = (createdOn) => {
        let today = new Date();
        let aDay = 24 * 60 * 60 * 1000;
        const days = Math.round(Math.abs((today -  createdOn )/aDay));
        if( days > 365 ){
            let tempTime = Math.round(days/365);
            return(`${tempTime} year ago`);
        }
        else if (days > 60 ){
            let tempTime = Math.round(days/30);
            return(`${tempTime} months ago`);
        }
        else if (days < 60 && days > 30) {
            let tempTime = Math.round(days/30);
            return(`${tempTime} month ago`);
        }
        else if(days < 30 && days > 1) {
            return(`${days} days ago`);
        }
        else if (days === 1 ){
            return(`${days} day ago`);
        }
        else {
            return(`recently`);
        }
    };

    //Event Handler to Enable Sorting
    handleSorting = (e) => {
        this.setState({
            sortFilter : !(this.state.sortFilter)
        }, () => console.log(this.state.sortFilter));
    }
    
    render() {
        const posts = this.props.posts;

        if (this.state.sortFilter === true){ // Condition Check for sort 
            
            //Sorting the list according to the time it was created 
            const filterByDatePosts = posts.sort((a,b) => {
                let dateA = new Date(a.created_at), dateB = new Date(b.created_at);
                return (dateB - dateA);
            });

            // Post JSX to show in render
            const postDisplay = filterByDatePosts.map((t) => {
                let createdOn = Date.parse(t.created_at);
                let date = this.timeAgo(createdOn);
                return(
                    <div>
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
                                <div>Posted { date }</div>
                            </div>
                        </div>
                    </Card>
                    </div>
                );
            });

            return(
                <div className="post-list">
                    <div className='sort-box'>
                        <div className='sort-text'>
                            <Button type='link' onClick={this.handleSorting}>Sort</Button>
                        </div>
                    </div>
                    <div>{this.props.totalJobs}</div>
                    {postDisplay}
                    <Footer className='footer'> © Created By Shubhankar Chandra Banerjee</Footer>
                </div> 
            );
        }

        //Condition if sorting is not required 
        else {

            const postDisplay = posts.map((t) => {
                let createdOn = Date.parse(t.created_at);
                let date = this.timeAgo(createdOn);
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
                                <div>Posted { date }</div>
                            </div>
                        </div>
                    </Card>
                );
            });

            return(
                <div className="post-list">
                    <div className='sort-box'>
                        <div className='sort-text'>
                            <Button type='link' onClick={this.handleSorting}>Sort</Button>
                        </div>
                        <div>{this.props.totalJobs}</div>
                    </div>
                    {postDisplay}
                    <Footer className='footer'> © Created By Shubhankar Chandra Banerjee</Footer>
                </div> 
            );
        }
        
        
    }
}

export default PostList