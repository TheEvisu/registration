const register = document.getElementById('register');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const login = document.getElementById('login');
const password = document.getElementById('password');
const base_url = 'https://webaccounting.herokuapp.com'


register.onclick = function () {
    const user = {
        "firstName": firstName.value.trim(),
        "lastName": lastName.value.trim(),
        "login": login.value.trim(),
        "password": password.value.trim()

    };
    if (user.firstName = user.lastName = user.login = user.password) {


        fetch(`${base_url}/account/user`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })

            .then(user => {
                if (user.status === 200) {
                    HelloPerson(firstName.value, lastName.value);

                } else {
                    Errors(user)
                    throw new Error('' + user.status)
                }
            })

            .catch(e => console.log(e.message));

    }
}

