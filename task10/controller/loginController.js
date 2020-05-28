'use strict';

import {View} from '../view/view.js';

class LoginController {
    _page_view;
    static _uinf = [
        {
            login: 'User_1',
            password: 'password1'
        },
        {
            login: 'Task',
            password: 'password2'
        }
    ];

    constructor() {
        this._page_view = new View(null, 'login');
    }

    logIn() {
        let login = this._page_view.getLogin();
        let password = this._page_view.getPassword();
        if(login === '' || password === '')
            this._page_view.loginError();
        if(this._authorize(login, password)) {
            localStorage.setItem('username', login);
            window.location.href = '../index.html';
        }
        else
            this._page_view.loginError();
    }

    _authorize(login, password) {
        let user = LoginController._uinf.find(item => item.login === login);
        if(user === undefined)
            return false;
        return user.password === password;
    }
}

window.LoginController = LoginController;
window.loginController = new LoginController();