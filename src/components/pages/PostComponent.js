import React from 'react';
import { Layout, Menu, Spin } from 'antd';
import '../../App.css';
import { Link } from 'react-router-dom';

import { Post } from '../post/post.component';

const { Header } = Layout;

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
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['0']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="home"><Link to='/'>Home</Link></Menu.Item>
                    </Menu>
                </Header>
                {
                    this.state.company != null ? <Post company={this.state.company} /> : loader
                }
            </div>
        );
    }
}

export default PostComponent
