'use strict';

import {PostCollection} from "../postcollection.js";

export class FormView {
    _tagTemplate;
    _tagContainer;
    _input;

    constructor(type) {
        this._tagTemplate = document.getElementById('filter-tag-template');
        this._tagContainer = document.getElementsByClassName('display-f tags')[0];
        this._input = document.querySelector('.input');
        if(['add', 'edit'].includes(type))
            this._fillPage(type);
    }


    _fillPage(type) {
        let str = type[0].toUpperCase() + type.substring(1) + ' post';
        let post = JSON.parse(localStorage.getItem('editedPost'), PostCollection.postReviver);
        document.querySelectorAll('[data-target]').forEach((phElement) => {
            let key = phElement.getAttribute('data-target');
            if (key === 'type') phElement.textContent = str;
            if(type === 'add') return;
            if(key === 'hashTags') for (let tag of post.hashTags) this.addTag(tag);
            else phElement.textContent = String(post[key] || '');
        });
    }

    addTag(tagName) {
        this._tagContainer.appendChild(this._createTag(tagName));
    }

    _createTag(tagName) {
        //<button class="no-bg"><i class="fas fa-times"></i></button>
        let tag = document.importNode(this._tagTemplate.content, true).querySelector('.tag');
        tag.textContent = tagName;

        let button = document.createElement('button');
        button.setAttribute('class', 'no-bg');
        button.setAttribute('type', 'button');

        let icon = document.createElement('i');
        icon.setAttribute('class', 'fas fa-times');

        button.appendChild(icon);
        tag.appendChild(button);
        return tag;
    }

    getTags() {
        return this._input.getElementsByClassName('tag');
    }

    delTag(event) {
        if(!['BUTTON', 'I'].includes(event.target.tagName)) return;

        let tag = event.target.parentElement;
        while(tag.tagName !== 'SPAN') tag = tag.parentElement;

        this._tagContainer.removeChild(tag);
    }

    clearAuthorInput() {
        document.getElementById('author').value = '';
    }

    clearTags() {
        this._tagContainer.innerHTML = '';
    }
}
