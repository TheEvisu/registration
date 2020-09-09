const login = document.getElementById('login');
const password = document.getElementById('password');
const base_url = 'https://webaccounting.herokuapp.com'
const signin = document.getElementById('signin');
const root = document.getElementById('root');


signin.addEventListener('click', () => {

    {
        const user = login.value.trim();
        const pass = password.value;
        fetch(`${base_url}/account/login`, {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${btoa(user + ':' + pass)}`
            }
        })
            .then(user => {
                Errors(user)

                    .then(user => {
                        UserManager(user)
                    })

                    .catch(e => console.log(e.message));

                password.value = '';

            });


    }

});

