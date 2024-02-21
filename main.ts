type RegisteredUsers = { name: string, email: string, password: string };
type ProfileContent = { title?: string, description?: string };

interface MyFakeDB {
    Users: RegisteredUsers; // array of users
}


const fakeData: MyFakeDB = {
    Users: {
        name: "Reynaldo",
        email: "test@me.com",
        password: "12345678"
    },
}

const profileContent: ProfileContent = {
    title: "Welcome",
    description: "Discover amazing content and join our community.",
}


function renderProfile(user: RegisteredUsers, content: ProfileContent): void {

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

function logIn(event: Event) {
    event.preventDefault()


    let email = document.getElementById('email') as HTMLInputElement
    let pwd = document.getElementById('password') as HTMLInputElement


    if (fakeData.Users.email === email.value && fakeData.Users.password === pwd.value) {
        let logInWrapper = document.getElementById("wrapper") as HTMLElement
        logInWrapper.style.display = 'none';

        renderProfile(fakeData.Users, profileContent)

    } else {
        let notFound = document.getElementById("error") as HTMLElement
        notFound.innerHTML = "User Not Found 😭"
    }
}