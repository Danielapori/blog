import React, { useState } from 'react';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron'
import Footer from './Footer';
import { login } from './controllers/user';
import { useHistory } from 'react-router-dom';

function LoginPage () {
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const history = useHistory();

    function handleLogin(e) {
        e.preventDefault();
      if(login(username, password)) {
        history.goBack();
      } else {
          alert("username or password incorrect")
      }
    }

    return (
        <>
        <Navbar />
       <Jumbotron />
        <form className="container">
        <div className="form-group ">
            <label for="exampleInputEmail1">Username</label>
            <input type="text" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" for="exampleCheck1">I'm not a Robot</label>
        </div>
        <button type="submit" className="btn btn-primary"onClick={handleLogin}>Login</button>
        </form>
        
        <Footer />
        </>
    );
}

export default LoginPage;