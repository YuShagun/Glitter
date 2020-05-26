'use strict';

import {HeaderView} from "./headerView.js";
import {FormView} from "./formView.js";
import {FeedView} from "./feedView.js";

export class View {
    _feedView;
    _headerView;
    _filterView;
    _user;

    constructor(username, page) {
        this._user = username;
        this._feedView = new FeedView(username);
        this._headerView = new HeaderView(username, page);
        this._filterView = new FormView(page);
    }

    showFeed(posts) {
        this._feedView.showFeed(posts);
    }

    addItem(post) {
        this._feedView.addItem(post);
    }

    removeItem(id) {
        this._feedView.removeItem(id);
    }

    editItem(id, data) {
        this._feedView.editItem(id, data);
    }

    toggleLike(id, newVal) {
        this._feedView.toggleLike(id, newVal);
    }

    clearFeed(){
        this._feedView.clearFeed();
    }

    addTag(tagName) {
        this._filterView.addTag(tagName);
    }

    getTags() {
        return this._filterView.getTags();
    }

    delTag(event) {
        this._filterView.delTag(event);
    }

    clearAuthorInput() {
        this._filterView.clearAuthorInput();
    }

    clearTags() {
        this._filterView.clearTags();
    }

    getLogin() {
        return document.getElementById('login').value;
    }

    getPassword() {
        return document.getElementById('password').value;
    }

    loginError() {
        if(document.querySelector('.err')) return;

        let div = document.createElement('div');
        div.textContent = 'Incorrect login or password. Try again';
        div.setAttribute('class', 'err');
        document.querySelector('.input').insertBefore(div, document.querySelector('.align-btn'));
    }

    validationError(string) {
        let err = document.querySelector('.err');
        let cont = document.querySelector('.input');
        if(err) cont.removeChild(err);

        let div = document.createElement('div');
        if((string || '') !== '') div.textContent = string;
        else div.textContent = 'Validation error';
        div.setAttribute('class', 'err');
        cont.insertBefore(div, document.querySelector('.align-btn'));
    }
}



