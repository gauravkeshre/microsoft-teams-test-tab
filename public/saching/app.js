/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(window,function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}(n(1))},function(t,e,n){"use strict";var i=this&&this.__rest||function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(t);o<i.length;o++)e.indexOf(i[o])<0&&(n[i[o]]=t[i[o]])}return n};Object.defineProperty(e,"__esModule",{value:!0});var o="1.4.0";function r(t){for(var e="^",n=t.split("."),i=0;i<n.length;i++)e+=(i>0?"[.]":"")+n[i].replace("*","[^/^.]+");return e+="$"}var a=function(t){for(var e="",n=0;n<t.length;n++)e+=(0===n?"":"|")+r(t[n]);return new RegExp(e)}(["https://teams.microsoft.com","https://teams.microsoft.us","https://int.teams.microsoft.com","https://devspaces.skype.com","https://ssauth.skype.com","http://dev.local","http://dev.local:8080","https://msft.spoppe.com","https://*.sharepoint.com","https://*.sharepoint-df.com","https://*.sharepointonline.com","https://outlook.office.com","https://outlook-sdf.office.com"]),s={},u={settings:"settings",content:"content",authentication:"authentication",remove:"remove",task:"task"};!function(t){var e,n,i,o=function(){return function(){this.enabled=!0}}();t.MenuItem=o,function(t){t.dropDown="dropDown",t.popOver="popOver"}(t.MenuListType||(t.MenuListType={})),s.navBarMenuItemPress=function(t){e&&e(t)||(_(),W(f,"handleNavBarMenuItemPress",[t]))},s.actionMenuItemPress=function(t){n&&n(t)||(_(),W(f,"handleActionMenuItemPress",[t]))},s.setModuleView=function(t){i&&i(t)||(_(),W(f,"viewConfigItemPress",[t]))},t.setUpViews=function(t,e){_(),i=e,W(f,"setUpViews",[t])},t.setNavBarMenu=function(t,n){_(),e=n,W(f,"setNavBarMenu",[t])},t.showActionMenu=function(t,e){_(),n=e,W(f,"showActionMenu",[t])}}(e.menus||(e.menus={}));var c,f,l,d,h,v,g,p,m,y,b,w,k,T=!1,C=!1,O=[],M=[],S=0,E={},I=!1;function P(){window.print()}function x(t){_(),p=t,t&&W(f,"registerHandler",["themeChange"])}function H(t){_(),m=t,t&&W(f,"registerHandler",["fullScreen"])}function N(t){_(),y=t,t&&W(f,"registerHandler",["backButton"])}function U(){_();var t=W(f,"navigateBack",[]);E[t]=function(t){if(!t)throw new Error("Back navigation is not supported in the current client or context.")}}function j(t){_(),b=t,t&&W(f,"registerHandler",["beforeUnload"])}function _(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(!T)throw new Error("The library has not yet been initialized");if(v&&t&&t.length>0){for(var n=!1,i=0;i<t.length;i++)if(t[i]===v){n=!0;break}if(!n)throw new Error("This call is not allowed in the '"+v+"' context")}}function B(t){if(t&&t.data&&"object"==typeof t.data){var e=t.source||t.originalEvent.source,n=t.origin||t.originalEvent.origin;e===c||n!==c.location.origin&&!a.test(n.toLowerCase())||(L(e,n),e===f?A(t):e===d&&D(t))}}function L(t,e){f&&t!==f?d&&t!==d||(d=t,h=e):(f=t,l=e),f&&f.closed&&(f=null,l=null),d&&d.closed&&(d=null,h=null),R(f),R(d)}function A(t){if("id"in t.data){var e=t.data,n=E[e.id];n&&(n.apply(null,e.args),delete E[e.id])}else if("func"in t.data){e=t.data;var i=s[e.func];i&&i.apply(this,e.args)}}function D(t){if("id"in t.data&&"func"in t.data){var e=t.data,n=s[e.func];if(n){var i=n.apply(this,e.args);i&&J(d,e.id,Array.isArray(i)?i:[i])}else{var o=W(f,e.func,e.args);E[o]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];d&&J(d,e.id,t)}}}}function F(t){return t===f?O:t===d?M:[]}function z(t){return t===f?l:t===d?h:null}function R(t){for(var e=z(t),n=F(t);t&&e&&n.length>0;)t.postMessage(n.shift(),e)}function V(t,e){var n=c.setInterval(function(){0===F(t).length&&(clearInterval(n),e())},100)}function W(t,e,n){var i=K(e,n);if(C)c&&c.nativeInterface&&c.nativeInterface.framelessPostMessage(JSON.stringify(i));else{var o=z(t);t&&o?t.postMessage(i,o):F(t).push(i)}return i.id}function J(t,e,n){var i=q(e,n),o=z(t);t&&o&&t.postMessage(i,o)}function K(t,e){return{id:S++,func:t,args:e||[]}}function q(t,e){return{id:t,args:e||[]}}s.themeChange=function(t){p&&p(t);d&&W(d,"themeChange",[t])},s.fullScreenChange=function(t){m&&m(t)},s.backButtonPress=function(){y&&y()||U()},s.beforeUnload=function(){var t=function(){W(f,"readyToUnload",[])};b&&b(t)||t()},s.changeSettings=function(){w&&w()},e.initialize=function(t){if(void 0===t&&(t=window),!T){T=!0;var e=function(t){return B(t)};(f=(c=t).parent!==c.self?c.parent:c.opener)?c.addEventListener("message",e,!1):(C=!0,window.onNativeMessage=A);try{l="*";var n=W(f,"initialize",[o]);E[n]=function(t,e){v=t,g=e}}finally{l=null}this._uninitialize=function(){v&&(x(null),H(null),N(null),j(null)),v===u.settings&&k.registerOnSaveHandler(null),v===u.remove&&k.registerOnRemoveHandler(null),C||c.removeEventListener("message",e,!1),T=!1,f=null,l=null,O=[],d=null,h=null,M=[],S=0,E={},v=null,g=null,C=!1}}},e._uninitialize=function(){},e.enablePrintCapability=function(){I||(I=!0,_(),document.addEventListener("keydown",function(t){(t.ctrlKey||t.metaKey)&&80===t.keyCode&&(P(),t.cancelBubble=!0,t.preventDefault(),t.stopImmediatePropagation())}))},e.print=P,e.getContext=function(t){_();var e=W(f,"getContext");E[e]=t},e.registerOnThemeChangeHandler=x,e.registerFullScreenHandler=H,e.registerBackButtonHandler=N,e.navigateBack=U,e.registerBeforeUnloadHandler=j,e.registerChangeSettingsHandler=function(t){_(u.content),w=t,t&&W(f,"registerHandler",["changeSettings"])},e.navigateCrossDomain=function(t){_(u.content,u.settings,u.remove,u.task);var e=W(f,"navigateCrossDomain",[t]);E[e]=function(t){if(!t)throw new Error("Cross-origin navigation is only supported for URLs matching the pattern registered in the manifest.")}},e.getTabInstances=function(t,e){_();var n=W(f,"getTabInstances",[e]);E[n]=t},e.getUserJoinedTeams=function(t,e){_();var n=W(f,"getUserJoinedTeams",[e]);E[n]=t},e.getMruTabInstances=function(t,e){_();var n=W(f,"getMruTabInstances",[e]);E[n]=t},e.shareDeepLink=function(t){_(u.content),W(f,"shareDeepLink",[t.subEntityId,t.subEntityLabel,t.subEntityWebUrl])},e.openFilePreview=function(t){_(u.content);var e=[t.entityId,t.title,t.description,t.type,t.objectUrl,t.downloadUrl,t.webPreviewUrl,t.webEditUrl,t.baseUrl,t.editFile,t.subEntityId];W(f,"openFilePreview",e)},e.showNotification=function(t){_(u.content);var e=[t.message,t.notificationType];W(f,"showNotification",e)},e.executeDeepLink=function(t){_(u.content);var e=W(f,"executeDeepLink",[t]);E[e]=function(t,e){if(!t)throw new Error(e)}},e.uploadCustomApp=function(t){_();var e=W(f,"uploadCustomApp",[t]);E[e]=function(t,e){if(!t)throw new Error(e)}},e.navigateToTab=function(t){_();var e=W(f,"navigateToTab",[t]);E[e]=function(t){if(!t)throw new Error("Invalid internalTabInstanceId and/or channelId were/was provided")}},function(t){var e,n;s["settings.save"]=function(t){var n=new i(t);e?e(n):n.notifySuccess()},s["settings.remove"]=function(){var t=new o;n?n(t):t.notifySuccess()},t.setValidityState=function(t){_(u.settings,u.remove),W(f,"settings.setValidityState",[t])},t.getSettings=function(t){_(u.content,u.settings,u.remove);var e=W(f,"settings.getSettings");E[e]=t},t.setSettings=function(t){_(u.content,u.settings);var e=W(f,"settings.setSettings",[t]);E[e]=function(t,e){if(!t)throw new Error(e)}},t.registerOnSaveHandler=function(t){_(u.settings),e=t,t&&W(f,"registerHandler",["save"])},t.registerOnRemoveHandler=function(t){_(u.remove),n=t,t&&W(f,"registerHandler",["remove"])};var i=function(){function t(t){this.notified=!1,this.result=t||{}}return t.prototype.notifySuccess=function(){this.ensureNotNotified(),W(f,"settings.save.success"),this.notified=!0},t.prototype.notifyFailure=function(t){this.ensureNotNotified(),W(f,"settings.save.failure",[t]),this.notified=!0},t.prototype.ensureNotNotified=function(){if(this.notified)throw new Error("The SaveEvent may only notify success or failure once.")},t}();var o=function(){function t(){this.notified=!1}return t.prototype.notifySuccess=function(){this.ensureNotNotified(),W(f,"settings.remove.success"),this.notified=!0},t.prototype.notifyFailure=function(t){this.ensureNotNotified(),W(f,"settings.remove.failure",[t]),this.notified=!0},t.prototype.ensureNotNotified=function(){if(this.notified)throw new Error("The removeEvent may only notify success or failure once.")},t}()}(k=e.settings||(e.settings={})),function(t){var e,n;function i(){r();try{d&&d.close()}finally{d=null,h=null}}function o(t){e=t,i();var n=e.width||600,o=e.height||400;n=Math.min(n,c.outerWidth-400),o=Math.min(o,c.outerHeight-200);var r=document.createElement("a");r.href=e.url;var s=void 0!==c.screenLeft?c.screenLeft:c.screenX,u=void 0!==c.screenTop?c.screenTop:c.screenY;s+=c.outerWidth/2-n/2,u+=c.outerHeight/2-o/2,(d=c.open(r.href,"_blank","toolbar=no, location=yes, status=no, menubar=no, scrollbars=yes, top="+u+", left="+s+", width="+n+", height="+o))?a():l("FailedToOpenWindow")}function r(){n&&(clearInterval(n),n=0),delete s.initialize,delete s.navigateCrossDomain}function a(){r(),n=c.setInterval(function(){if(!d||d.closed)l("CancelledByUser");else{var t=h;try{h="*",W(d,"ping")}finally{h=t}}},100),s.initialize=function(){return[u.authentication,g]},s.navigateCrossDomain=function(t){return!1}}function l(t){try{e&&e.failureCallback&&e.failureCallback(t)}finally{e=null,i()}}function v(t,e,n){if(t){var i=document.createElement("a");i.href=decodeURIComponent(t),i.host&&i.host!==window.location.host&&"outlook.office.com"===i.host&&i.search.indexOf("client_type=Win32_Outlook")>-1&&(e&&"result"===e&&(n&&(i.href=p(i.href,"result",n)),c.location.assign(p(i.href,"authSuccess",""))),e&&"reason"===e&&(n&&(i.href=p(i.href,"reason",n)),c.location.assign(p(i.href,"authFailure",""))))}}function p(t,e,n){var i=t.indexOf("#"),o=-1===i?"#":t.substr(i);return o=o+"&"+e+(""!==n?"="+n:""),(t=-1===i?t:t.substr(0,i))+o}s["authentication.authenticate.success"]=function(t){try{e&&e.successCallback&&e.successCallback(t)}finally{e=null,i()}},s["authentication.authenticate.failure"]=l,t.registerAuthenticationHandlers=function(t){e=t},t.authenticate=function(t){var n=void 0!==t?t:e;if(_(u.content,u.settings,u.remove,u.task),"desktop"===g||"android"===g||"ios"===g){var i=document.createElement("a");i.href=n.url;var r=W(f,"authentication.authenticate",[i.href,n.width,n.height]);E[r]=function(t,e){t?n.successCallback(e):n.failureCallback(e)}}else o(n)},t.getAuthToken=function(t){_();var e=W(f,"authentication.getAuthToken",[t.resources]);E[e]=function(e,n){e?t.successCallback(n):t.failureCallback(n)}},t.getUser=function(t){_();var e=W(f,"authentication.getUser");E[e]=function(e,n){e?t.successCallback(n):t.failureCallback(n)}},t.notifySuccess=function(t,e){v(e,"result",t),_(u.authentication),W(f,"authentication.authenticate.success",[t]),V(f,function(){return setTimeout(function(){return c.close()},200)})},t.notifyFailure=function(t,e){v(e,"reason",t),_(u.authentication),W(f,"authentication.authenticate.failure",[t]),V(f,function(){return setTimeout(function(){return c.close()},200)})}}(e.authentication||(e.authentication={})),e.sendCustomMessage=function(t,e){return _(),W(f,t,e)},function(t){t.startTask=function(t,e){_(u.content);var n=W(f,"tasks.startTask",[t]);E[n]=e},t.updateTask=function(t){_(u.content,u.task),t.width,t.height;var e=i(t,["width","height"]);if(Object.keys(e).length)throw new Error("updateTask requires a taskInfo argument containing only width and height");W(f,"tasks.updateTask",[t])},t.submitTask=function(t,e){_(u.content,u.task),W(f,"tasks.completeTask",[t,Array.isArray(e)?e:[e]])}}(e.tasks||(e.tasks={})),e.getChatMembers=function(t){_();var e=W(f,"getChatMembers");E[e]=t}}])});
//# sourceMappingURL=MicrosoftTeams.min.js.map

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/utils.ts
let inputs = {};
let container = document.createElement("div");
container.classList.add("moduleContainer");
let isInitializedCalled = false;
function addModule(config) {
    var element = document.createElement("div");
    var button = document.createElement("button");
    button.appendChild(document.createTextNode(config.name));
    button.id = "button-" + config.name;
    element.appendChild(button);
    element.appendChild(document.createElement("br"));
    if (config.inputs) {
        element.appendChild(document.createElement("br"));
        for (var i = 0; i < config.inputs.length; i++) {
            var label = document.createElement("label");
            label.appendChild(document.createTextNode(config.inputs[i].name + ":"));
            element.appendChild(label);
            element.appendChild(document.createElement("br"));
            var input;
            var valueGetter;
            switch (config.inputs[i].type) {
                case "string":
                    input = document.createElement("input");
                    valueGetter = function () {
                        return input.value;
                    };
                    break;
                case "boolean":
                    input = document.createElement("input");
                    input.type = "checkbox";
                    valueGetter = function () {
                        return input.checked;
                    };
                    break;
                case "object":
                    input = document.createElement("textarea");
                    valueGetter = function () {
                        input.style.backgroundColor = "";
                        try {
                            return JSON.parse(input.value);
                        }
                        catch (e) {
                            input.style.backgroundColor = "red";
                            return null;
                        }
                    };
                    break;
            }
            config.inputs[i].valueGetter = valueGetter;
            input.id = "input-" + config.name + "-" + i;
            element.appendChild(input);
            inputs[input.id] = input;
            element.appendChild(document.createElement("br"));
        }
    }
    if (config.hasOutput) {
        var label = document.createElement("label");
        element.appendChild(document.createElement("br"));
        label.appendChild(document.createTextNode("Output:"));
        element.appendChild(label);
        element.appendChild(document.createElement("br"));
        var textarea = document.createElement("textarea");
        textarea.id = "textarea-" + config.name;
        element.appendChild(textarea);
    }
    container.appendChild(element);
    button.addEventListener("click", function () {
        if (config.name == "initialize") {
            isInitializedCalled = true;
        }
        else if (config.initializedRequired && !isInitializedCalled) {
            // Get the modal
            var modal = document.getElementById("myModal");
            var messageBox = document.getElementById("errorMessage");
            messageBox.innerText = "Please initialize sdk first by clicking initialize Button";
            modal.style.display = "block";
        }
        else {
            var modal = document.getElementById("myModal");
            modal.style.display = "none";
        }
        var args = [];
        if (config.inputs) {
            for (var i = 0; i < config.inputs.length; i++) {
                var inputValue = config.inputs[i].valueGetter();
                if (inputValue === null) {
                    return;
                }
                args.push(inputValue);
            }
        }
        if (config.hasOutput) {
            args.push(function (result) {
                if (typeof result !== "string") {
                    result = JSON.stringify(result);
                }
                textarea.value = result;
            });
        }
        config.action.apply(null, args);
    });
}
function restoreState() {
    var stateStr = localStorage.getItem("state");
    if (!stateStr) {
        return;
    }
    var state = JSON.parse(stateStr);
    for (var id in state) {
        inputs[id].value = state[id];
    }
}
function saveState() {
    var state = {};
    for (var id in inputs) {
        state[id] = inputs[id].value;
    }
    localStorage.setItem("state", JSON.stringify(state));
}
function downloadHandler() {
    var input = document.querySelector("#image_uploads");
    var preview = document.querySelector(".fileUploadPreview");
    input.style.opacity = 0;
    input.addEventListener("change", updateImageDisplay);
    function updateImageDisplay() {
        while (preview.firstChild) {
            preview.removeChild(preview.firstChild);
        }
        var curFiles = input.files;
        if (curFiles.length === 0) {
            var para = document.createElement("p");
            para.textContent = "No files currently selected for upload";
            preview.appendChild(para);
        }
        else {
            var list = document.createElement("ol");
            preview.appendChild(list);
            for (var i = 0; i < curFiles.length; i++) {
                var listItem = document.createElement("li");
                var para = document.createElement("p");
                if (validFileType(curFiles[i])) {
                    para.textContent =
                        "File name " +
                            curFiles[i].name +
                            ", file size " +
                            returnFileSize(curFiles[i].size) +
                            ".";
                    var image = document.createElement("img");
                    image.src = window.URL.createObjectURL(curFiles[i]);
                    listItem.appendChild(image);
                    listItem.appendChild(para);
                }
                else {
                    para.textContent =
                        "File name " +
                            curFiles[i].name +
                            ": Not a valid file type. Update your selection.";
                    listItem.appendChild(para);
                }
                list.appendChild(listItem);
            }
        }
    }
    var fileTypes = ["image/jpeg", "image/pjpeg", "image/png"];
    function validFileType(file) {
        for (var i = 0; i < fileTypes.length; i++) {
            if (file.type === fileTypes[i]) {
                return true;
            }
        }
        return false;
    }
    function returnFileSize(number) {
        if (number < 1024) {
            return number + "bytes";
        }
        else if (number >= 1024 && number < 1048576) {
            return (number / 1024).toFixed(1) + "KB";
        }
        else if (number >= 1048576) {
            return (number / 1048576).toFixed(1) + "MB";
        }
    }
}

// EXTERNAL MODULE: ./node_modules/@microsoft/teams-js/dist/MicrosoftTeams.min.js
var MicrosoftTeams_min = __webpack_require__(0);

// CONCATENATED MODULE: ./src/app.ts


const initializeAppModules = () => {
    addModule({
        name: "initialize",
        initializedRequired: false,
        action: function () {
            MicrosoftTeams_min["initialize"]();
        }
    });
    addModule({
        name: "getContext",
        initializedRequired: true,
        hasOutput: true,
        action: function (output) {
            MicrosoftTeams_min["getContext"](output);
        }
    });
    addModule({
        name: "navigateCrossDomain",
        initializedRequired: true,
        inputs: [{
                type: "string",
                name: "url"
            }],
        action: function (url) {
            MicrosoftTeams_min["navigateCrossDomain"](url);
        }
    });
    addModule({
        name: "registerOnThemeChangeHandler",
        initializedRequired: true,
        hasOutput: true,
        action: function (output) {
            MicrosoftTeams_min["registerOnThemeChangeHandler"](output);
        }
    });
    addModule({
        name: "registerChangeSettingsHandler",
        initializedRequired: true,
        hasOutput: true,
        action: function (output) {
            MicrosoftTeams_min["registerChangeSettingsHandler"](function () {
                output("Change Settings Event recieved");
            });
        }
    });
    addModule({
        name: "shareDeepLink",
        initializedRequired: true,
        inputs: [{
                type: "object",
                name: "deepLinkParameters"
            }],
        action: function (deepLinkParameters) {
            MicrosoftTeams_min["shareDeepLink"](deepLinkParameters);
        }
    });
    addModule({
        name: "executeDeepLink",
        initializedRequired: true,
        inputs: [{
                type: "string",
                name: "deepLink"
            }],
        action: function (deepLink) {
            MicrosoftTeams_min["executeDeepLink"](deepLink);
        }
    });
    addModule({
        name: "authentication.authenticate",
        initializedRequired: true,
        inputs: [{
                type: "string",
                name: "url"
            }],
        hasOutput: true,
        action: function (url, output) {
            MicrosoftTeams_min["authentication"].authenticate({
                url: url,
                successCallback: function (result) {
                    output("Success:" + result);
                },
                failureCallback: function (reason) {
                    output("Failure:" + reason);
                    MessageEvent;
                },
            });
        }
    });
    addModule({
        name: "authentication.notifyFailure",
        initializedRequired: true,
        inputs: [{
                type: "string",
                name: "reason"
            }],
        action: function (reason) {
            MicrosoftTeams_min["authentication"].notifyFailure(reason);
        }
    });
    addModule({
        name: "authentication.notifySuccess",
        initializedRequired: true,
        inputs: [{
                type: "string",
                name: "result"
            }],
        action: function (result) {
            MicrosoftTeams_min["authentication"].notifySuccess(result);
        }
    });
    addModule({
        name: "settings.getSettings",
        initializedRequired: true,
        hasOutput: true,
        action: function (output) {
            MicrosoftTeams_min["settings"].getSettings(output);
        }
    });
    addModule({
        name: "settings.registerOnSaveHandler",
        initializedRequired: true,
        hasOutput: true,
        action: function (output) {
            MicrosoftTeams_min["settings"].registerOnSaveHandler(function (saveEvent) {
                window.saveEvent = saveEvent;
                output("SaveEvent recieved");
            });
        }
    });
    addModule({
        name: "settings.registerOnSaveHandler.notifyFailure",
        initializedRequired: true,
        inputs: [{
                type: "string",
                name: "reason"
            }],
        action: function (reason) {
            window.saveEvent && window.saveEvent.notifyFailure(reason);
        }
    });
    addModule({
        name: "settings.registerOnSaveHandler.notifySuccess",
        initializedRequired: true,
        action: function () {
            window.saveEvent && window.saveEvent.notifySuccess();
        }
    });
    addModule({
        name: "settings.setSettings",
        initializedRequired: true,
        inputs: [{
                type: "object",
                name: "settings"
            }],
        action: function (settings) {
            MicrosoftTeams_min["settings"].setSettings(settings);
        }
    });
    addModule({
        name: "settings.setValidityState",
        initializedRequired: true,
        inputs: [{
                type: "boolean",
                name: "validityState"
            }],
        action: function (validityState) {
            MicrosoftTeams_min["settings"].setValidityState(validityState);
        }
    });
    addModule({
        name: "openFilePreview",
        initializedRequired: true,
        inputs: [{
                type: "object",
                name: "filePreviewParameters"
            }],
        action: function (filePreviewParameters) {
            MicrosoftTeams_min["openFilePreview"](filePreviewParameters);
        }
    });
    addModule({
        name: "task.submitTask",
        initializedRequired: true,
        inputs: [{
                type: "string",
                name: "result"
            },
            {
                type: "string",
                name: "appId"
            }],
        action: function (result, appId) {
            MicrosoftTeams_min["tasks"].submitTask(result, appId);
        }
    });
    addModule({
        name: "tasks.startTask",
        initializedRequired: true,
        inputs: [{
                type: "object",
                name: "taskInfo"
            }],
        action: function (taskInfo) {
            MicrosoftTeams_min["tasks"].startTask(taskInfo);
        }
    });
    addModule({
        name: "downloadFile ShowNotificationOnly",
        initializedRequired: true,
        inputs: [{
                type: "object",
                name: "showNotificationParameters"
            }],
        action: function (showNotificationParameters) {
            MicrosoftTeams_min["showNotification"](showNotificationParameters);
        }
    });
    addModule({
        name: "getAuthToken",
        initializedRequired: true,
        hasOutput: true,
        inputs: [{
                type: "object",
                name: "getAuthTokenParameters"
            }],
        action: function (getAuthTokenParameters, output) {
            getAuthTokenParameters.successCallback = (token) => {
                output("Success: " + token);
            };
            getAuthTokenParameters.failureCallback = (reason) => {
                output("Failure: " + reason);
            };
            MicrosoftTeams_min["authentication"].getAuthToken(getAuthTokenParameters);
        }
    });
    addModule({
        name: "getChatMembers",
        initializedRequired: true,
        hasOutput: true,
        action: function (output) {
            MicrosoftTeams_min["getChatMembers"](output);
        }
    });
    addModule({
        name: "getUserJoinedTeams",
        initializedRequired: true,
        hasOutput: true,
        action: function (output) {
            MicrosoftTeams_min;
            MicrosoftTeams_min["getUserJoinedTeams"](output);
        }
    });
    addModule({
        name: "registerBeforeUnload",
        initializedRequired: true,
        hasOutput: true,
        action: function (output) {
            MicrosoftTeams_min["registerBeforeUnloadHandler"](function (readyToUnload) {
                window.readyToUnload = readyToUnload;
                alert('beforeUnload recieved');
                return true;
            });
        }
    });
    addModule({
        name: "readyToUnload",
        initializedRequired: true,
        action: function () {
            window.readyToUnload && window.readyToUnload();
        }
    });
    // Get the modal
    var modal = document.getElementById("myModal");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    };
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
};

// CONCATENATED MODULE: ./src/index.ts


(function () {
    initializeAppModules();
    document.body.appendChild(container);
    // Give the DOM a chance to update from the appendChild above
    setTimeout(restoreState, 0);
    window.addEventListener("beforeunload", saveState);
    window.addEventListener("load", downloadHandler);
})();


/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map