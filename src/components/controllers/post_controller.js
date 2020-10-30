import Button from '../Blogs/Buttons';

export function likePost(id) {
    if(Button[id].likes) {
        Button[id].likes++
    }else {
        Button[id].likes = 1;
    }
    return Button[id].likes;
}

export function addComment (id, Comment) {
    if(posts[id].Comment) {
        posts[id].Comment.push(Comment);
    }else {
        posts[id].Comment = [Comment]
    }
}

export function dislikePost(id) {
    if(Button[id].dislikes) {
        Button[id].dislikes++
    }else {
        Button[id].dislikes = 1;
    }
    return Button[id].dislikes
}

export function getComment(id) {
    return posts[id].Comment ? post[id].Comment : []
}