import React from 'react';

function Button() {
    return(
        <div>
         <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
            <div class="btn-group mr-2" role="group" aria-label="First group">
            <button type="button" class="btn btn-primary"><i className='bx bxs-like'></i> 0 Likes</button>
            </div>

            <div class="btn-group" role="group" aria-label="Third group">
                <button type="button" class="btn btn-danger"><i className='bx bxs-dislike' ></i> 0 Dislike</button>
            </div>
            </div>

        <form>
            <div class="form-group">
            <label for="exampleFormControlTextarea1">Anonymous Comment</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>

        <div class="card">
            <div class="card-body">
                <blockquote class="blockquote mb-0">
                <p>This is a great blog. I'm so happy that you spoke about this keep it up</p>
                <footer class="blockquote-footer">by <cite title="Source Title">anonymous</cite></footer>
                </blockquote>
            </div>
        </div>
        </form>
        </div>

    );
}

export default Button;