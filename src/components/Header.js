import React, {Component} from 'react';
import {Link} from 'react-router-dom'

//State functional components
class Header extends Component {

    render() { 
        return ( 
            <header className="col-12 col-md-8">
                <Link to={'/'}>
                    <h1 className="text-center">React Crud</h1>
                </Link>

            </header>
         );
    }
}
 
export default Header;