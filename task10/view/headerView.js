'use strict';

export class HeaderView {
    _header;
    _user;

    constructor(username, page) {
        this._header = document.getElementsByTagName('header')[0];
        this._user = username;
        this._showHeader(page);
    }

    _showHeader(page) {
        //<button id="sign">Sign out</button>
        //<span id="myname">My name</span>
        if(page === 'login') {
            this._header.removeChild(this._header.querySelector("img"));
            return;
        }
        let button = document.createElement('button');
        button.setAttribute('id', 'sign');
        button.addEventListener('click', MainController.signClicked);
        let span = document.createElement('span');
        span.setAttribute('id', 'myname');
        if ((this._user || '') === '') {
            button.textContent = 'Sign in';
            this._header.removeChild(this._header.querySelector("img"));
        } else {
            button.textContent = 'Sign out';
            span.textContent = this._user;
        }
        this._insertContent(button, span);
    }

    _insertContent(button, span) {
        if ((this._user || '') === '') {
            this._header.appendChild(button);
            this._header.appendChild(span);
        } else {
            this._header.insertBefore(button, this._header.querySelector("img"));
            this._header.insertBefore(span, this._header.querySelector("img"));
        }
    }
}