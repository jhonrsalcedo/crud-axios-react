import React, { Component } from 'react';


class Edit extends Component {
   //utilizamo lo refs
   titleRef = React.createRef();
   bodyRef = React.createRef();

   editPost = (e) =>{
    e.preventDefault();

        //leemos los refs
        //para saber cual pos editar debemos llamar el id
        const post ={
            title: this.titleRef.current.value,
            body: this.bodyRef.current.value,
            userId: 1,
            id: this.props.post.id
        }

        //console.log(post)

        //enviar los porps
        this.props.editPost(post)
   }

    loadForm = () =>{
        //validamos en caso de que no ! tenga post retornamos null
        if (!this.props.post) return null;


         //debemos rellenar los campos ya que en este componente debmos editar
        //utilizamos destructuring 
        const {title, body} = this.props.post;
        return(
            <form onSubmit={this.editPost} className="col-8">
            <legend className="text-center">Editar Post</legend>
            <div className="form-group">
                <label>Titulo del Post:</label>
                {/* para poder editar utilizamos defaultValue */}
                <input type="text" ref={this.titleRef} defaultValue={title} className="form-control" placeholder="Titulo del Post"/>
            </div>
            <div className="form-group">
                <label>Contenido:</label>
                <textarea type="text"  ref={this.bodyRef} defaultValue={body} className="form-control" placeholder="Contenido..."></textarea>
               
            </div>
            <button type="submit" className="btn btn-primary">Editar</button>
        </form>
        )
    }
    render() { 
       
        return ( 
            //cuando no hay html y necesitamos retonar una funcion (javascript) utilizamos la etiqueta fragment
            <React.Fragment>
                {this.loadForm()}
            </React.Fragment>
           
         );
    }
}
 
export default Edit;