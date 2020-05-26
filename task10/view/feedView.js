'use strict';

import {PostCollection} from "../postcollection.js";

export class FeedView {
    _postTemplate;
    _tagTemplate;
    _postContainer;
    _btn;
    _user;
    _wasEmpty;

    constructor(username) {
        this._postTemplate = document.getElementById('post-template');
        this._tagTemplate = document.getElementById('tag-template');
        this._postContainer = document.getElementById('posts');
        this._btn = document.getElementById('load');
        this._user = username;
        this._wasEmpty = false;
    }

    showFeed(posts) {
        if(posts.length !== 0) {
            if(this._wasEmpty === true) this._deleteMessage();

            posts.forEach((post) => {
                if (PostCollection.validate(post) && document.getElementById(post.id) === null) this.addItem(post);
            });
            this._wasEmpty = false;
        }
        else {
            this._showEmptyPage();
            this._wasEmpty = true;
        }
    }

    _deleteMessage() {
        let emptyMsg = document.getElementById('emptyMessage');
        this._postContainer.removeChild(emptyMsg);
        this._btn.style.visibility = '';
    }

    _showEmptyPage() {
        if(this._wasEmpty === true) return;

        let div = document.createElement('div');
        div.setAttribute('id', 'emptyMessage');
        div.textContent = 'Posts not found';
        this._postContainer.insertBefore(div, this._btn);
        this._btn.style.visibility = 'hidden';
    }

    clearFeed() {
        this._btn = this._btn.cloneNode(true);
        this._btn.addEventListener('click', mainController.loadTweets);
        this._postContainer.innerHTML = '';
        this._postContainer.appendChild(this._btn);
    }

    addItem(post) {
        let newPost = document.importNode(this._postTemplate.content, true);
        this._fillItemData(newPost, post);
        this._postContainer.insertBefore(newPost, this._btn);
    }

    _fillItemData(item, data) {
        let placeholders = item.querySelectorAll('[data-target]');
        [].forEach.call(placeholders || [], (phElement) => {
            let key = phElement.getAttribute('data-target');

            if (key === 'likes') {
                phElement.textContent = String(data[key].length);
                this._checkForCurUser(phElement, data[key]);
            }
            else if (key === 'hashTags') this._addTags(phElement, data[key]);
            else phElement.textContent = String(data[key] || '');
        });
        item.querySelector('.post').setAttribute('id', data['id']);
        let bot = item.querySelector('.bot');

        if (this._user === data['author']) this._addButtons(bot);

        this._insertPhoto(item, data.photoLink, bot);
        //<button class="del">Delete</button>
        //<button class="edit">Edit</button>
    }

    _checkForCurUser(likeCountPh, arr) {
        if(arr.includes(this._user)) this._toggleIcon(likeCountPh);
    }

    _toggleIcon(likes) {
        let likeIcon = likes.parentElement.getElementsByTagName('i')[0];
        this._toggleStyle(likeIcon);
    }

    _toggleStyle(likeIcon) {
        likeIcon.classList.toggle('fas');
        likeIcon.classList.toggle('far');
        likeIcon.classList.toggle('active');
    }

    _addTags(item, tags) {
        tags.forEach((tag) => { item.appendChild(this._makeTag(tag)); });
    }

    _makeTag(tag) {
        let newTag = document.importNode(this._tagTemplate.content, true);
        newTag.querySelector('.tag').textContent = tag;
        return newTag;
    }

    _insertPhoto(item, link, bot) {
        if((link || '') !== '')
            item.querySelector('.post').insertBefore(this._createImg(link), bot);
    }

    _createImg(link) {
        let img = document.createElement('img');
        img.setAttribute('class', 'att');
        img.setAttribute('src', link);
        img.setAttribute('alt', 'Image');
        return img;
    }

    _addButtons(bot) {
        let button = document.createElement('button');
        button.setAttribute('class', 'del');
        button.textContent = 'Delete';
        bot.appendChild(button);
        button = document.createElement('button');
        button.setAttribute('class', 'edit');
        button.textContent = 'Edit';
        bot.appendChild(button);
    }

    removeItem(id) {
        if(confirm('Are you sure?'))
            this._postContainer.removeChild(document.getElementById(id));
    }

    editItem(id, data) {
        let toReplace = document.getElementById(id);
        if (toReplace === null) return;

        toReplace.setAttribute('id', 'to_replace');
        let editedPost = document.importNode(this._postTemplate.content, true);
        this._fillItemData(editedPost, data);
        this._postContainer.appendChild(editedPost);
        this._postContainer.replaceChild(document.getElementById(id), document.getElementById('to_replace'));
    }

    toggleLike(id, newVal) {
        let likes = document.getElementById(id);
        likes = likes.getElementsByTagName('b')[0];
        likes.textContent = String(newVal);
        this._toggleIcon(likes);
    }
}