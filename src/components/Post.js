import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class SinglePost extends Component {
   
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
                    onClick={() => (this.props.deletePost(id)) }
                     type="button" className="btn btn-danger">Borrar</button>
                </td>
            </tr>
          );
    }
}
 
export default SinglePost;