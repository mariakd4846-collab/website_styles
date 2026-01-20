function register() {
    const user = {
        username: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    localStorage.setItem("user", JSON.stringify(user));
    alert("Регистрация успешна!");
    window.location.href = "login.html";
}

function login() {
    const user = JSON.parse(localStorage.getItem("user"));
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (user && email === user.email && password === user.password) {
        alert("Вход выполнен");
        window.location.href = "profile.html";
    } else {
        alert("Неверные данные");
    }
}
