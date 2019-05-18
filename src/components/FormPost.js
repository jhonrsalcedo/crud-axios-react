import React, { Component } from 'react';


class FormPost extends Component {
    constructor(props){
        super(props);
        this.state={
            title:'',
            body:''
        }
    }

    createPost = (e) =>{
        e.preventDefault();
        const post = this.state

        console.log(post);

        //limpiar formulario
        this.setState({
            title: '',
            body:''
         })
    }

    HandlePostInput = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() { 
        return ( 
            <form onSubmit={this.createPost} className="col-8">
                <legend className="text-center">Crear Nuevo Post</legend>
                <div className="form-group">
                    <label>Titulo del Post:</label>
                    <input type="text" name="title" value={this.state.title} onChange={this.HandlePostInput} className="form-control" placeholder="Titulo del Post"/>
                </div>
                <div className="form-group">
                    <label>Contenido:</label>
                    <textarea type="text"  name="body" value={this.state.body}  onChange={this.HandlePostInput} className="form-control" placeholder="Contenido..."></textarea>
                   
                </div>
                <button type="submit" className="btn btn-primary">Crear</button>
            </form>
         );
    }
}
 
export default FormPost;