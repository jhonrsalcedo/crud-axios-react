import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Nav from './Nav';
import Posts from './Posts';
import SinglePost from './SinglePost';
import FormPost from './FormPost';

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
            //console.log(response.data) 
            this.setState({
                posts:response.data
              })
        }catch(error){
            console.error(`Hay un error ${error}`)
           
        }
      
    }
      //Borrar post
    //desde el id
    deletePost = async id =>{
        //console.log(id)
        const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
        if(response.status === 200){
            const posts = [...this.state.posts];

            let result = posts.filter(post =>(
                post.id !== id
            ));
            this.setState({
                posts:result
            })
        }
    }

    createPost = async (post) =>{
        console.log(post)


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
                        <Switch>
                            {/* llamamos un nuevo componente llamado posts para que muestre todos los posts
                            necesitamos realizar un render para mostrar mas informacion y component poca info, esta pinta o dibuje lo que vamos a retornar del component posts */}
                            <Route exact path="/" render={
                                () =>{ 
                                    return(
                                        <Posts
                                            posts={this.state.posts}
                                            deletePost={this.deletePost}
                                        />
                                    );
                                }
                            }/>
                            <Route exact path="/post/:postID" render={ (props) =>{
                                let idPost = props.location.pathname.replace('/post/', '');
                               
                                //obtenemos todos los posts para luego filtrar id
                                const posts =this.state.posts;
                                let filterId;
                                filterId = posts.filter(post =>(
                                    post.id === Number(idPost)
                                    ))
                                return(
                                    /* nos traemos todo el arreglo del post [0] */
                                   <SinglePost 
                                   post={filterId[0]}
                                   />
                                    
                                )
                            }} />
                            {/* a diferencia de los demas Route que utilizamos render en essta ocasion 
                            vamos a llamar un componente  */}
                            <Route exact path="/createPost" render={ () =>{
                                return(
                                    <FormPost
                                        createPost={this.createPost}
                                        
                                    />
                                )
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