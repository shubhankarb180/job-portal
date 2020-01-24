import React from 'react';

import '../../App.css';
import 'antd/dist/antd.css';
import { Layout } from 'antd';

import { SearchBox } from '../search-box/search-box.component';
import PostList from '../post-list/PostList';

const { Header }  = Layout;

class HomeComponent extends React.Component {

    state = {
        description : '',
        location : '',
        posts : null,
        hits : 0,
        showPosts : false,
        skillDisabled : false    
      };


    componentDidMount() {
            
    }

    setDescription = (e) => {
        this.setState({
            description : e.target.value
        });
    }

    setLocation = (e) => {
        this.setState({
            location : e.target.value
        });
    }

    getPosts = () => {
        console.log(this.state);
        fetch( `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${this.state.description}&location=${this.state.location}&page=1`)
        .then(response => response.json())
        .then(data => {
          this.setState({
            posts : data,
            hits : data.length,
            showPosts : true,
            skillDisabled : false
          });
        })
        .catch(err => console.log(err));
    }

    render() {
        // const nextpageButton = (
        //     <div className="wrapper">
        //         <Button type="primary">Next Page</Button>
        //     </div>
        // );
        return(
            <div className='App'>
                <Header>
                        <h2 style={{ color : 'white', textAlign : 'center' }}>Job Portal</h2>
                </Header>
                <div className='component-positioning'>
                    <SearchBox 
                        setDescription={this.setDescription}  
                        setLocation={this.setLocation}
                        testSubmit={this.testSubmit}
                        getPosts={this.getPosts}
                        skillDisabled={this.state.skillDisabled}
                    />
                    { (this.state.posts != null && this.state.posts.length > 0 && this.state.showPosts) ? <PostList posts={this.state.posts} /> : ''  }
                </div>
            </div>
        );
    }

}

export default HomeComponent;