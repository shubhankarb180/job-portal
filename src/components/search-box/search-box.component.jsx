import React from 'react';
import { Input, Button, Icon } from 'antd';

import './search-box.styles.css';

const refreshPage = () => {
  window.location.reload(false);
}

export const SearchBox = (props) => (
    <div className="search">
        <div className='description-box'>
          <label>Job Description</label>
          <Input  
              className="search-input" 
              placeholder="Enter title,skill or company" 
              onChange={props.setDescription} 
              disabled={props.skillDisabled}
          />
        </div>
        <div className='location-box'>
          <label>Location</label>
          <Input 
              className="search-input" 
              placeholder="Enter City, State or Country" 
              onChange={props.setLocation}
              disabled={props.skillDisabled}
          />
        </div>
        <div className='search-button'>
          <Button type="primary" icon="search" onClick={props.getPosts} disabled={props.skillDisabled}>
            Search
          </Button>
        </div>
        <div className='reset-button'>
          <Button type="primary" onClick={refreshPage}>
          <Icon type="redo" />Reset
          </Button>
        </div>
      </div>
);