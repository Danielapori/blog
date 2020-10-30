export const user = {
    username: "Daniel",
    password: "!!!($546",
    loggedIn: false,
    setLoggedIn ( loggedInState ) {
        this.loggedIn = loggedInState;
    }
}

export function login(username, password) {
    if(username === user.username && password === user.password) {
    user.setLoggedIn(true);
    return true;
}
return false;
}

export function logout() {
    user.loggedIn = false;
}
