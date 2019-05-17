import React, { Component } from 'react';


class List extends Component {
   //creamos el metodo, nota: utilizamos arrow funtcion para evitar los bind
showPosts = () =>{
    const posts = this.props.posts;
    //console.log(posts)
    // realizamos una condicion si esta vacio no queremos que ejecute nada
    //siendo un arreglo utilizamos length
    if(posts.length === 0) return null;
        return( 
            //para llamar el componente Post individual el cual se va a mostrar
            <React.Fragment>
                {Object.keys(posts)}
            </React.Fragment>
        )
}

    render() { 
        return ( 
            <table className="table">
                <thead>
                    <tr scope="col">ID</tr>
                    <tr scope="col">Titulo</tr>
                    <tr scope="col">Acciones</tr>
                </thead>
                <tbody>
                    {this.showPosts()}
                </tbody>
            </table>
         );
    }
}
 
export default List;