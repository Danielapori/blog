import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { user, logout } from './controllers/user';

function Navbar() {

    const [loggedIn, setLoggedIn] = useState(user.loggedIn)

    function handlelogout (e) {
        e.preventDefault();
        logout();
        setLoggedIn();
        alert("user logged out")
    }
    return(
        <div>
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light;">
            <div className="container navbar"> 
            <a className="navbar-brand" href="/">SACX</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            
                <div className="collapse navbar-collapse h" id="navbarNav">
                 <ul className="navbar-nav">
                    <Link to="/" >
                <li className="nav-item active">
                    <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                </li>
                    </Link>

                { !user.loggedIn &&
                    <Link to="/login" onClick={loggedIn}>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Login</a>
                    </li>
                    </Link>
                }

                { user.loggedIn &&
                <>
                    <Link to="/new">
                    <li className="nav-item">
                        <a className="nav-link" href="/">New Post</a>
                    </li>
                    </Link>
    
                    <li className="nav-item">
                        <a className="nav-link" href="/" onclick={handlelogout}>Logout</a>
                    </li>
                </>

                }
              

                </ul>
                </div>
            </div>
            </nav>
        </div>
    );
}

export default Navbar;