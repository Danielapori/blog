import React from 'react';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Postcard from './Postcard';
import Footer from './Footer'

export function Home() {
    return(
        <div>
            <Navbar />
            <Jumbotron />
            <Postcard />
            <Footer />
        </div>
    );

}

// export default Home;