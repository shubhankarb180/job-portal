import React from 'react';
import { Layout, Spin } from 'antd';
import '../../App.css';

import { Post } from '../post/post.component';

const { Header, Footer } = Layout;

class PostComponent extends React.Component { 

    state = {
        company : null
    }

    componentDidMount() {
        const { id } = this.props.match.params;

        fetch(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${id}.json`)
        .then(response => response.json())
        .then( (data) => 
            this.setState({ 
                company : data
            })
        ).catch((err) => {
            console.log(err);
        });
    }

    render() {
        const loader = (
            <div className="loader">
                Loading ! <Spin />
            </div>
        );
        return(
            <div>
                <Header>
                    <h2 style={{ color : 'white', textAlign : 'center' }}>Job Description</h2>
                </Header>
                {
                    this.state.company != null ? <Post company={this.state.company} /> : loader
                }
                <Footer className='footer'> © Created By Shubhankar Chandra Banerjee</Footer>
            </div>
        );
    }
}

export default PostComponent
