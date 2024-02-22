"use strict";
const fakeData = {
    Users: {
        name: "Reynaldo",
        email: "test@me.com",
        password: "12345678"
    },
};
const profileContent = {
    title: "Welcome",
    description: "Discover amazing content and join our community.",
};
function renderProfile(user, content) {
    const appElement = document.getElementById('profile');
    if (appElement) {
        appElement.innerHTML = `
        <header>
          <h1>${content.title}</h1>
        </header>
        <main>
          <h1>${content.description}</h1>
          <h2>Welcome, ${user.name} (${user.email})!</h2>
          <p> Hello, Mundo 🌎 </p>
        </main>
        <footer>
          <p>© 2024 Learning TypeScript </p>
        </footer>
      `;
    }
}
function logIn(event) {
    event.preventDefault();
    let email = document.getElementById('email');
    let pwd = document.getElementById('password');
    if (fakeData.Users.email === email.value && fakeData.Users.password === pwd.value) {
        let logInWrapper = document.getElementById("wrapper");
        logInWrapper.style.display = 'none';
        renderProfile(fakeData.Users, profileContent);
    }
    else {
        let notFound = document.getElementById("error");
        notFound.innerHTML = "User Not Found 😭";
    }
}
