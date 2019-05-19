import React, { Component } from 'react';
import Swal from 'sweetalert2';
import {Link} from 'react-router-dom';

class Post extends Component {

    confirmDeletion = () =>{

        const {id} = this.props.info;

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.value) {
                this.props.deletePost(id)
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
    } 
   
    render() { 
        //extraer la informacion por medio de destructuring  despues del render
        const {id, title} = this.props.info;
        return ( 
            <tr>
                <td>{id}</td>
                <td>{title}</td>
                {/* devemos mostrar cada info individual utilizamos link */}
                <td>
                <Link to={`/post/${id}`}  className="btn btn-primary" > Ver</Link>
            {/* Pasamos un listener onClick y desde este llamamos el metodo deletePost por medio de arrow funtcion
            deletePost(id) le pasamos el id que declaramos en el deletePost en el componente Route */}
                    <button 
                    /* onClick={() => (this.props.deletePost(id)) } */
                    onClick={this.confirmDeletion}
                     type="button" className="btn btn-danger">Borrar</button>
                </td>
            </tr>
          );
    }
}
 
export default Post;