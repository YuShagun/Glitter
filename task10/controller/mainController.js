'use strict';

import {View} from '../view/view.js';
import {PostCollection} from "../postcollection.js";

export class MainController {
    _page_view;
    _posts;
    _skip;
    _filterConfig;

    constructor(username, container) {
        this._page_view = new View(username, 'main');
        this._posts = container;
        this._skip = 0;
        this._filterConfig = {hashTags: [],};
        this._showFeed();
        window.addEventListener('message', this._messageHandler);
    }

    loadTweets(top) {
        this._showFeed(top);
    }

    _showFeed(top) {
        let page = this._posts.getPage(this._skip, top, this._filterConfig);
        this._page_view.showFeed(page);
        this._skip += page.length;
    }

    updateFilter() {
        let filter = this._newFilter();
        if(this._sameFilter(filter))
            return;

        this._skip = 0;
        this._filterConfig = filter;
        this._updatePage();
    }

    _newFilter() {
        let res = { hashTags: [], };
        this._updateTags(res);
        this._updateAuthor(res);
        this._updateDate(res);
        return res;
    }

    _updateTags(newFilter) {
        let tags = this._page_view.getTags();
        for(let tag of tags)
            newFilter.hashTags.push(tag.textContent);
    }

    _containsTag(tag) {
        return this._filterConfig.hashTags.includes(tag);
    }

    _updateAuthor(newFilter) {
        let authorInput = document.getElementById('author') ;
        if(authorInput.value !== '')
            newFilter.author = authorInput.value;
    }

    _updateDate(newFilter) {
        let dateInput =  document.getElementById('date');
        let date = dateInput.valueAsDate;
        if(date)
            newFilter.createdAt = date;
    }

    _sameFilter(newFilter) {
        return this._checkProperties(newFilter) && this._checkHashTags(newFilter);
    }

    _checkProperties(newFilter) {
        for(let key in this._filterConfig) if(!newFilter.hasOwnProperty(key))
            return false;
        for(let key in newFilter) {
            if(key !== 'hashTags' && ((!this._filterConfig.hasOwnProperty(key)) ||
                this._filterConfig[key] !== newFilter[key]))
                return false;
        }
        return true;
    }

    _checkHashTags(newFilter) {
        for(let tag of newFilter.hashTags) if(!this._filterConfig.hashTags.includes(tag))
            return false;
        for(let tag of this._filterConfig.hashTags) if(!newFilter.hashTags.includes(tag))
            return false;
        return true;
    }

    resetFilter() {
        this._page_view.clearTags()
    }

    clearAuthorInput() {
        this._page_view.clearAuthorInput();
    }

    _updatePage() {
        this._clearFeed();
        this._showFeed()
    }

    _clearFeed() {
        this._page_view.clearFeed();
    }

    addTagToFilter() {
        let tagInput = document.getElementById('tf');
        if(tagInput.value === '')
            return;
        if(!this._containsTag(tagInput.value))
            this._page_view.addTag(tagInput.value);
        tagInput.value = '';
    }

    delTagFromFilter(event) {
        this._page_view.delTag(event);
    }

    keyPressedOnForm(event) {
        let key = event.charCode || event.keyCode || 0;
        if (key === 13) {
            event.preventDefault();
            this.addTagToFilter();
        }
    }

    postClicked(event) {
        if(!['BUTTON', 'I'].includes(event.target.tagName))
            return;
        let btn = this._getButton(event);
        this._processEvent(btn);
    }

    _getButton(event) {
        let btn = event.target;
        if(btn.tagName === 'I')
            btn = btn.parentElement;
        return btn;
    }

    _processEvent(button) {
        let id = button.parentElement.parentElement.id;
        button.classList.forEach((className) => this._processClass(className, id));
    }

    _processClass(className, id) {
        switch (className) {
            case('del'):
                this._removePost(id);
                break;
            case('edit'):
                this._editPost(id);
                break;
            case('like'):
                this._toggleLike(id);
                break;
            default:
                break;
        }
    }

    _removePost(id) {
        if (this._posts.remove(id)) {
            this._page_view.removeItem(id);
            this._posts.save('posts');
        }
    }

    _editPost(id) {
        localStorage.setItem('add/edit', 'edit');
        localStorage.setItem('editedPost', JSON.stringify(this._posts.get(id)));
        window.open('./add.html', 'id');
    }

    _messageHandler(event) {
        if(event.origin !== location.origin)
            return;
        if(localStorage.getItem('add/edit') === 'edit') {
            let id = JSON.parse(localStorage.getItem('editedPost')).id;
            if (!window.mainController.editItem(id, JSON.parse(event.data, PostCollection.postReviver)))
                alert('Error');
            else window.mainController.save('posts');
        } else
            if(!window.mainController.addItem(JSON.parse(event.data, PostCollection.postReviver)))
                alert('Error');
            else window.mainController.save('posts');
        event.source.close();
        location.reload();
    }

    editItem(id, data) {
        return this._posts.edit(id, data);
    }

    addItem(post) {
        return this._posts.add(post);
    }

    _toggleLike(id) {
        if (this._posts.toggleLike(id, localStorage.getItem('username'))) {
            this._page_view.toggleLike(id, this._posts.get(id)['likes'].length);
            this._posts.save('posts');
        }
    }

    save(key) {
        this._posts.save(key);
    }

    addPostClicked() {
        localStorage.setItem('add/edit', 'add');
        window.open('./add.html', 'add');
    }

    static signClicked() {
        if(localStorage.getItem('username')) {
            localStorage.removeItem('username');
            window.location.reload();
        }
        else
            window.location.href = '../login.html';
    }
}


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
    if(window.posts.toggleLike(id, window.user_name))
        window.page_view.toggleLike(id, window.posts.get(id)['likes'].length);
}

window.toggleLike = toggleLike;

