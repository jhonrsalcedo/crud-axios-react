import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return ( 
        <nav className="col-12 col-md-8">
            <Link to={'/'} className="btn btn-primary">Todos los posts</Link>
            <Link to={'/crear'} className="btn btn-success">Nuevo Post</Link>
        </nav>
     );
}
 
export default Nav;