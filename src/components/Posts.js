import React, { Component } from 'react';
import List from './List';

class Posts extends Component {
   
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