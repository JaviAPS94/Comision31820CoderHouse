function getRoot(req, res) {
    res.send('Bienvenido');
}

//LOGIN
function getLogin(req, res) {
    if (req.isAuthenticated()) {
        const user = req.user;
        console.log('user logueado');
        res.render('login-ok', {
            usuario: user.username,
            nombre: user.firstName,
            apellido: user.lastName,
            email: user.email
        });
    } else {
        console.log('user no logueado');
        res.sendFile(__dirname + '/views/login.html');
    }
}

function getSignup(req, res) {
    res.sendFile(__dirname + '/views/signup.html');
}

function postLogin(req, res) {
    res.sendFile(__dirname + '/views/index.html');
}

function postSignup(req, res) {
    res.sendFile(__dirname + '/views/index.html');
}

function getFailLogin(req, res) {
    res.render('login-error', {});
}

function getFailsignup(req, res) {
    res.render('signup-error', {});
}

function getLogout(req, res) {
    req.logout();
    res.sendFile(__dirname + '/views/index.html');
}

function failRoute(req, res) {
    res.status(404).render('routing-error', {});
}

module.exports = {
    getLogin,
    getSignup,
    postLogin,
    postSignup,
    getFailLogin,
    getFailsignup,
    getLogout,
    failRoute,
    getRoot
}