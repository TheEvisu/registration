function Errors(response) {
    const error = document.createElement('h2');
    const text = document.createTextNode('there is no such user');
    const textUserError = document.createTextNode('User exists');

    if (response.status === 200) {
        return response.json();
    } else if (response.status === 409) {
        error.appendChild(textUserError);
        root.innerHTML = '';
        root.appendChild(error);
        buttonLoginPass();
    } else if (response.status !== 200) { // Если пользователя не существует

        error.appendChild(text);
        root.innerHTML = '';
        root.appendChild(error)
        buttonLoginPass();

    }


}

// Показывает пользователя при ригестрации
function HelloPerson(firstName, lastName) {

    function qq() {
        return `${firstName} ${lastName}`;
    }

    let full = document.createTextNode(`Dear user: ${qq()}`);

    const fullName = document.createElement('h2');


    const helloPersonTag = document.createElement('h1');
    const textHelloPersonTag = document.createTextNode('Welcome to API');

    root.innerHTML = '';
    root.appendChild(helloPersonTag);
    helloPersonTag.appendChild(textHelloPersonTag);

    root.appendChild(fullName);
    fullName.appendChild(full);
    btnHome();


}

// показываем пользователя
function UserManager(user) {
    root.innerHTML = '';
    const pFirst = document.createElement('p');
    const pLast = document.createElement('p');
    const pRoles = document.createElement('p');
    const firstName = document.createTextNode(`First name : ${user.firstName}`);
    const lastName = document.createTextNode(`Last name : ${user.lastName}`);
    const roles = document.createTextNode(`Roles : ${user.roles}`);

    pFirst.appendChild(firstName);
    root.appendChild(pFirst);
    pLast.appendChild(lastName);
    root.appendChild(pLast);
    pRoles.appendChild(roles);
    root.appendChild(pRoles);
    // кнопка дом
    btnHome();


}

//кнопки логин регистр
function buttonLoginPass() {
    const divReg = document.createElement('div');
    const btnRegister = document.createElement('button');
    const textBtnRegister = document.createTextNode('Register');
    btnRegister.className = 'btn-info flex-container p-1 m-1';

    const divLogin = document.createElement('div');
    const btnLogin = document.createElement('button');
    const textBtnLogin = document.createTextNode('Login');
    btnLogin.className = 'btn-primary flex-container p-1 m-1';


    root.appendChild(divLogin); //Создаём кнопку логин
    btnLogin.appendChild(textBtnLogin);
    divLogin.appendChild(btnLogin);

    root.appendChild(divReg); //Создаём кнопку регистрации
    btnRegister.appendChild(textBtnRegister);
    divReg.appendChild(btnRegister);

    btnLogin.onclick = function () {  // событие при клике возвращает на страницу логин
        document.location.href = 'login.html';
    }
    btnRegister.onclick = function () {  // событие при клике возвращает на страницу логин
        document.location.href = 'register.html';
    }
}

function btnHome() {

    const divHome = document.createElement('div');
    const btnHome = document.createElement('button');
    const textBtnHome = document.createTextNode('Home');

    root.appendChild(divHome); //Создаём кнопку Home
    btnHome.appendChild(textBtnHome);
    divHome.appendChild(btnHome);
    btnHome.className = 'btn-primary p-1 m-1';

    btnHome.onclick = function () {  // событие при клике возвращает на страницу index
        document.location.href = 'index.html';
    }


}
