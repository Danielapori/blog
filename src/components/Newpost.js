import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Newpost() {

    const [title, setTitle] = useState("");
    const [subTitle, setSubTitle] = useState("");
    const [content, setContent] = useState("")

    return (
        <div>
            <Navbar />
                <div className="jumbotron jumbotron-fluid">
            <div className="container text-center">
                <h1 className="display-4">CREATE NEW POST</h1>
                <p className="lead">Add Insightful, innovative, and educative posts here!</p>
            </div>
            </div>
                <form className="container">
                <div class="form-group">
                    <label for="exampleFormControlInput1">Post Title</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>

                <div class="form-group">
                    <label for="exampleFormControlInput1">Post Subtitle</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" value={subTitle} onChange={(e) => setSubTitle(e.target.value)} />
                </div>

        
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Post Content</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="10" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                </div>

                <button class="btn btn-primary">Add Post</button>
                </form>
                <Footer />
     </div>
    );
}

export default Newpost;