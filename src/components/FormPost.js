import React, { Component } from 'react';


class FormPost extends Component {
   
    render() { 
        return ( 
            <form className="col-8">
                <legend className="text-center">Crear Nuevo Post</legend>
                <div className="form-group">
                    <label>Titulo del Post:</label>
                    <input type="text" className="form-control" placeholder="Titulo del Post"/>
                </div>
                <div className="form-group">
                    <label>Contenido:</label>
                    <textarea type="text" className="form-control" placeholder="Contenido..."></textarea>
                   
                </div>
                <button type="button" className="btn btn-primary">Crear</button>
            </form>
         );
    }
}
 
export default FormPost;