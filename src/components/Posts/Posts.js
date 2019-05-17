import React, { Component } from 'react';
import List from '../List/List';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="col-12 col-md-8">
                <h2 className="text-center">Posts</h2>
                <List
                //lo llamamos desde el hijo por medio de props 
                    posts={this.props.posts}
                />
            </div>
         );
    }
}
 
export default Posts;