import React from 'react';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Postcard from './Postcard';

function Home() {
    return(
        <div>
            <Navbar />
            <Jumbotron />
            <Postcard />
        </div>
    );

}

export default Home;