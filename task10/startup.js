'use strict';

import {testContainer} from "./postcollection.js";

(function () {
    if(!localStorage.getItem('posts'))
        testContainer().save('posts');
})();