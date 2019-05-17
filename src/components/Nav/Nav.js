import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return ( 
        <nav className="col-12 col-md-8">
            <Link to={'/'}><button type="button" className="btn btn-primary">Todos los posts</button></Link>
            <Link to={'/crear'}><button type="button" className="btn btn-success">Nuevo Post</button></Link>
        </nav>
     );
}
 
export default Nav;