"use strict";
var fakeData = {
    Users: {
        name: "Reynaldo",
        email: "test@me.com",
        password: "12345678"
    },
};
var profileContent = {
    title: "Welcome",
    description: "Discover amazing content and join our community.",
};
function renderProfile(user, content) {
    var appElement = document.getElementById('profile');
    if (appElement) {
        appElement.innerHTML = "\n        <header>\n          <h1>".concat(content.title, "</h1>\n        </header>\n        <main>\n          \n          <h1>").concat(content.description, "</h1>\n          <h2>Welcome, ").concat(user.name, " (").concat(user.email, ")!</h2>\n          <p> Hello, Mundo \uD83C\uDF0E </p>\n        </main>\n        <footer>\n          <p>\u00A9 2024 Learning TypeScript </p>\n        </footer>\n      ");
    }
}
function logIn(event) {
    event.preventDefault();
    var email = document.getElementById('email');
    var pwd = document.getElementById('password');
    if (fakeData.Users.email === email.value && fakeData.Users.password === pwd.value) {
        var logInWrapper = document.getElementById("wrapper");
        logInWrapper.style.display = 'none';
        renderProfile(fakeData.Users, profileContent);
    }
    else {
        var notFound = document.getElementById("error");
        notFound.innerHTML = "User Not Found 😭";
    }
}
