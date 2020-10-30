import React, { useState } from 'react';
import Comment from './Comment';

function Button() {
    const [likes, setLikes] = useState(0); 
    const [dislikes, setDislikes] = useState(0);

    const addlikes = () => {
         setLikes(likes + 1);
    }

    const removelikes =() => {
      setDislikes(dislikes + 1);
    }

    return(
        <div>
         <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
            <div class="btn-group mr-2" role="group" aria-label="First group">
            <button type="button" class="btn btn-success" onClick={addlikes}><i className='bx bxs-like'></i> {likes} Likes
            </button>
            </div>

            <div class="btn-group" role="group" aria-label="Third group">
                <button type="button" class="btn btn-danger" onClick={removelikes}><i className='bx bxs-dislike' ></i> 
                {dislikes} Dislike</button>
            </div>
            </div>
            <br></br>

        <form>
            <div className="form-group">
            <label for="exampleFormControlTextarea1">Anonymous Comment</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            <button type="button" className="btn btn-primary mt-2">Comment</button>
        </div>

        <Comment />
        </form>
        </div>

    );
}

export default Button;