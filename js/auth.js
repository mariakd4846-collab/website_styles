function saveUser(username, email, password) {
    localStorage.setItem("user", JSON.stringify({ username, email, password }));
}

function getUser() {
    return JSON.parse(localStorage.getItem("user"));
}

function login(email, password) {
    const user = getUser();
    if (!user) return alert("Пользователь не найден");

    if (email === user.email && password === user.password) {
        alert("Успешный вход");
        window.location.href = "profile.html";
    } else {
        alert("Неверные данные");
    }
}
