import {PostCollection} from "./postcollection.js";
import {MainController} from "./сontroller/mainController.js";

(function () {
    window.MainController = MainController;
    window.mainController = new MainController(localStorage.getItem('username'), PostCollection.restore('posts'));
})();