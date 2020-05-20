'use strict';

import {testContainer} from "./postcollection.js";
import {PostCollection} from "./postcollection.js";

class View {
    _postView;
    _headerView;
    _user;

    constructor(username) {
        this._user = username;
        this._postView = new PostView(username);
        this._headerView = new HeaderView(username);
    }

    showFeed(posts) {
        this._postView.showFeed(posts);
    }

    addItem(post) {
        this._postView.addItem(post);
    }

    removeItem(id) {
        this._postView.removeItem(id);
    }

    editItem(id, data) {
        this._postView.editItem(id, data);
    }

    toggleLike(id, newVal) {
        this._postView.toggleLike(id, newVal);
    }
}

class PostView {
    _postTemplate;
    _tagTemplate;
    _postContainer;
    _btn;
    _user;

    constructor(username) {
        this._postTemplate = document.getElementById('post-template');
        this._tagTemplate = document.getElementById('tag-template');
        this._postContainer = document.getElementById('posts');
        this._btn = document.getElementById('load');
        this._user = username;
    }

    showFeed(posts) {
        posts.forEach((post) => {
            if(PostCollection.validate(post) && document.getElementById(post.id) === null)
                this.addItem(post);
        });
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
            if (key === 'likes')
                phElement.textContent = String(data[key].length);
            else if (key === 'hashTags')
                this._addTags(phElement, data[key]);
            else
                phElement.textContent = String(data[key] || '');
        });
        item.querySelector('.post').setAttribute('id', data['id']);
        let bot = item.querySelector('.bot');
        if (this._user === data['author'])
            this._addButtons(bot);
        //<button class="del">Delete</button>
        //<button class="edit">Edit</button>
    }

    _addTags(item, tags) {
        tags.forEach((tag) => {
            let newTag = document.importNode(this._tagTemplate.content, true);
            newTag.querySelector('.tag').textContent = tag;
            item.appendChild(newTag);
        });
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
        this._postContainer.removeChild(document.getElementById(id));
    }

    editItem(id, data) {
        let toReplace = document.getElementById(id);
        if (toReplace === null)
            return;
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
    }
}

class HeaderView {
    _header;
    _user;
    _main;

    constructor(username) {
        this._header = document.getElementsByTagName('header')[0];
        this._user = username;
        this._main = document.getElementById('main');
        this._showHeader();
    }

    _showHeader() {
        //<button id="sign">Sign out</button>
        //<span id="myname">My name</span>
        let button = document.createElement('button');
        button.setAttribute('id', 'sign');
        let span = document.createElement('span');
        span.setAttribute('id', 'myname');
        if (this._user === undefined) {
            button.textContent = 'Sign in';
            this._header.removeChild(this._header.querySelector("img"));
        } else {
            button.textContent = 'Sign out';
            span.textContent = this._user;
        }
        this._insertContent(button, span);
    }

    _insertContent(button, span) {
        if (this._user === undefined) {
            this._header.appendChild(button);
            this._header.appendChild(span);
        } else {
            this._header.insertBefore(button, this._header.querySelector("img"));
            this._header.insertBefore(span, this._header.querySelector("img"));
        }
    }
}

window.user_name = 'User_1';
window.page_view = new View(window.user_name);
window.posts = testContainer();

function showFeed(skip, top, filterConfig) {
    let page = window.posts.getPage(skip, top, filterConfig);
    if(page.length !== 0)
        window.page_view.showFeed(page);
}

window.showFeed = showFeed;

function addPost(id) {
    let post = window.posts.get(id);
    if(post !== undefined)
        window.page_view.addItem(post);
}

window.addPost = addPost;

function removeItem(id) {
    if(window.posts.remove(id))
        window.page_view.removeItem(id);
}

window.removeItem = removeItem;

function editItem(id, post) {
    if(window.posts.edit(id, post))
        window.page_view.editItem(id, window.posts.get(id));
}

window.editItem = editItem;

function toggleLike(id) {
    if(window.posts.toggleLike('17', window.user_name))
        window.page_view.toggleLike('17', window.posts.get('17')['likes'].length);
}

window.toggleLike = toggleLike;
