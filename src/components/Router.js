import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import Posts from './Posts/Posts';

class Router extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            posts:[]
         } 
    }

    componentDidMount() {
      this.getPosts();       
    }

   
    getPosts = async() =>{

        //obtener con axios post
        try{
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
            console.log(response.data) 
            this.setState({
                posts:response.data
              })
        }catch(error){
            console.error(`Hay un error ${error}`)
           
        }
      
    }
    render() { 
        return (  
            <BrowserRouter>
                <div className="container">
                    <div className="row justify-content-center">
                        <Header />
                        <Nav />   
                        {/* Switch nos va ha permitir cambiar entre las distintas paginas  
                        Lo que se encuente fuera de Switch permanecera estatico*/}
                        <Switch>> 
                            {/* llamamos un nuevo componente llamado posts para que muestre todos los posts
                            necesitamos realizar un render para que pinte o dibuje lo que vamos a retornar del component posts */}
                            <Route exact patch="/" render={
                                () =>{ 
                                    return(
                                        <Posts
                                            posts={this.state.posts}
                                        />
                                    );
                                }
                            }/>

                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}
 
export default Router;