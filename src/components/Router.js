import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import { async } from 'q';

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

    getCategory = async () =>{
        let url =`https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`;
        const response = await fetch(url)
        const categoriesResp = await response.json()
          //console.log(categoriesResp.categories) 
          this.setState({
            categoriesResp: categoriesResp.categories
          })
          
      }

    getPosts = async() =>{

        //obtener con axios post
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
        console.log(response.data) 
        this.setState({
            posts:response.data
          })
    }
    render() { 
        return (  
            <BrowserRouter>
                <div className="container">
                    <div className="row justify-content-center">
                        <Header />
                        <Nav />   
                        {/* Switch nos va ha permitir cambiar entre paginas  
                        Lo que se encuente fuera de Switch permanecera estatico*/}
                        <Switch>>


                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}
 
export default Router;