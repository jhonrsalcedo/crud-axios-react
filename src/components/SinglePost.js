import React, { Component } from 'react';


class SinglePost extends Component {
    //destructuring a lo que vamos a mostrar, esto lo hacemos por medio de un metodo llamado showPost
    showPost = (props) =>{
        if(!props.post) return null;
        const {title, body, userId} = this.props.post;
        return(
            <React.Fragment>
                <h2>{title}</h2>
                <p>Autor: {userId}</p>
                {body}
            </React.Fragment>
        )
    }
   
    render() { 
        return ( 
            <div className="col-12 col-md-8">
                {this.showPost(this.props)}
            </div>
         );
    }
}
 
export default SinglePost;