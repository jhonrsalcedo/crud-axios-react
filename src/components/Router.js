import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import Header from './Header';
import Nav from './Nav';
import Posts from './Posts';
import SinglePost from './SinglePost';
import FormPost from './FormPost';
import Edit from './Edit';

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
            /* realizamos una copia del state actual para ver el que se va a eliminar */
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
        //console.log(post)
        const response = await axios.post(`https://jsonplaceholder.typicode.com/posts`,{post})
            if(response.status === 201){
                Swal.fire(
                    'Post Creado!',
                    'Se creo Correctamente!',
                    'success'
                  )
                //console.log(response.data)
                //creamos un nuevo post con el metodo assign()
                let postId = {id: response.data.id}
                const newPost = Object.assign({}, response.data.post, postId)
                //console.log(newPost)

                //pasamos el state anterior
                this.setState(prevState =>({
                    posts: [...prevState.posts, newPost]
                }))
            }

    }

    editPost = async (postUpdated) => {

        //console.log(postUpdated)
        const {id} = postUpdated
        //metodo put para actualizar 
        const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`,{postUpdated})
      // console.log(response)
        //realizar verificacion de estado 200
        if(response.status === 200){
            //agregamos la alerta
            Swal.fire(
                'Post Editado!',
                'Correctamente!',
                'success'
              )

           // this.getPosts();
           //consultar la api data
           //console.log(response.data)
           //para realizar los cambios y se mantengan
           let postId = response.data.id;

           //utiizamos el express operation para realizar una copia del state 
           const posts = [...this.state.posts];

           //para identificar que post vamos ha actualizar

           //findIndex iterara en cada uno de los registro post: cada registro mientras posts todos los registros

           const postEdit = posts.findIndex(post => postId === post.id);
            //podemos ver por la posicion de acada post
            //console.log(posts[postEdit])

            //pasamos el nuevo postUpdated
            posts[postEdit] = postUpdated;
 
            //nos muestra el id post 
           //console.log(postEdit);
           this.setState({
               posts
           })
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
                            <Route exact path="/edit/:postID" render={ (props) =>{
                                let idPost = props.location.pathname.replace('/edit/', '');
                               
                                //obtenemos todos los posts para luego filtrar id
                                const posts =this.state.posts;
                                let filterId;
                                filterId = posts.filter(post =>(
                                    post.id === Number(idPost)
                                    ))
                                return(
                                    /* nos traemos todo el arreglo del post [0] */
                                   <Edit 
                                   post={filterId[0]}
                                   editPost ={this.editPost}
                                   />
                                    
                                )
                            }} />

                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}
 
export default Router;