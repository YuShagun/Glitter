'use strict';

import {MainController} from "./mainController.js";
import {View} from '../view/view.js';
import {PostCollection} from "../postcollection.js";

class AddController {
    _page_view;
    _post;

    constructor(username) {
        this._page_view = new View(username, localStorage.getItem('add/edit'));
        this._post = {
            id: 'falseId',
            description: '',
            createdAt: null,
            author: username,
            likes: [],
            hashTags: [],
        }
    }

    addTag() {
        let tagInput = document.getElementById('tf');
        if(tagInput.value === '')
            return;
        if(!this._containsTag(tagInput.value))
            this._page_view.addTag(tagInput.value);
        tagInput.value = '';
    }

    _containsTag(tag) {
        return this._post.hashTags.includes(tag);
    }

    delTag(event) {
        this._page_view.delTag(event);
    }

    submitPost() {
        this._insertTags();
        this._insertPhoto();
        this._insertDescription();
        if((this._post.description || this._post.photoLink) === '')
            this._page_view.validationError('Post can\'t be empty');
        if(!PostCollection.validate(this._post))
            this._page_view.validationError();
        this._post.createdAt = new Date();
        window.opener.postMessage(JSON.stringify(this._post), '*');
    }

    _insertTags() {
        for(let tag of this._page_view.getTags())
            this._post.hashTags.push(tag.textContent);
    }

    _insertPhoto() {
        this._post.photoLink = document.getElementById('pl').value;
    }

    _insertDescription() {
        this._post.description = document.getElementById('text').value;
    }
}

window.MainController = MainController;
window.AddController = AddController;
window.addController = new AddController(localStorage.getItem('username'));