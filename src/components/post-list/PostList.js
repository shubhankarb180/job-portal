import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Avatar, Button, Layout } from 'antd';
import './PostList.css'; // Importing the CSS File 

const { Footer } = Layout;

class PostList extends React.Component { 
    
    state = {
        sortFilter : this.props.sortFilter // Toggle Switch for Sorting
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
        });
    }
    
    render() {
        
        const receivedPosts = this.props.posts;
        
        const filterByDatePosts = receivedPosts.filter((post,index) => { return receivedPosts.lastIndexOf(post) === index }).sort((a,b) => {
                    let dateA = new Date(a.created_at), dateB = new Date(b.created_at);
                    return (dateB - dateA);
                });

        const posts = this.state.sortFilter === true ? filterByDatePosts : this.props.posts;//Condtition to display filter array or non filtered array 

            // Post Component 
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

export default PostList