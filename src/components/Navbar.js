import React from 'react';

function Navbar() {
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
                <li className="nav-item active">
                    <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="/">About Us</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="/">Contact Us</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="/" tabindex="-1" aria-disabled="true">Blogs</a>
                </li>
                </ul>
                
                </div>
            </div>
            </nav>
        </div>
    );
}

export default Navbar;