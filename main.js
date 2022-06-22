(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e){var n=e.item,r=e.cardSelector,o=e.handleImageClick,i=e.handleLikeClick,a=e.handleDeleteClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=n.name,this._link=n.link,this._cardSelector=r,this._handleImageClick=o,this._handleLikeClick=i,this._handleDeleteClick=a,this._likes=n.likes,this._id=n._id,this._ownerId=n.owner._id}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(!0)}},{key:"removeCard",value:function(){this._element.remove(),this._element=null}},{key:"likeCard",value:function(){this._buttonLike.classList.toggle("card__like_active")}},{key:"isLiked",value:function(e){return this._likes.some((function(t){return t._id===e}))}},{key:"updateLikes",value:function(e){this._likes=e,this._likeNumber=this._element.querySelector(".card__like-number"),this._likeNumber.textContent=this._likes.length}},{key:"_setEventListeners",value:function(){var e=this;this._buttonLike.addEventListener("click",(function(){e._handleLikeClick()})),this._cardImage.addEventListener("click",(function(){e._handleImageClick()})),this._buttonTrash.addEventListener("click",(function(){e._handleDeleteClick()}))}},{key:"generateCard",value:function(e){return this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".card__image"),this._buttonTrash=this._element.querySelector(".card__trash"),this._buttonLike=this._element.querySelector(".card__like"),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._element.querySelector(".card__title").textContent=this._name,this.updateLikes(this._likes),this._ownerId!==e&&this._buttonTrash.classList.add("card__trash_disabled"),this.isLiked(e)&&this.likeCard(),this._setEventListeners(),this._element}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=n,this._button=this._formElement.querySelector(this._submitButtonSelector),this._inputList=this._formElement.querySelectorAll(this._inputSelector)}var t,r;return t=e,(r=[{key:"_hideError",value:function(e){this._formElement.querySelector(".".concat(e.id,"-error")).textContent="",e.classList.remove(this._inputErrorClass)}},{key:"_showError",value:function(e){this._formElement.querySelector(".".concat(e.id,"-error")).textContent=e.validationMessage,e.classList.add(this._inputErrorClass)}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideError(e):this._showError(e)}},{key:"_toggleButtonState",value:function(){var e=!this._formElement.checkValidity();this._button.disabled=e,this._button.classList.toggle(this._inactiveButtonClass,e)}},{key:"_handleFormInput",value:function(e){this._checkInputValidity(e),this._toggleButtonState()}},{key:"deleteErrors",value:function(){var e=this;Array.from(this._inputList).forEach((function(t){e._hideError(t)})),this._toggleButtonState()}},{key:"enableValidation",value:function(){var e=this;Array.from(this._inputList).forEach((function(t){t.addEventListener("input",(function(){return e._handleFormInput(t)}))}))}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){"Escape"===e.key&&o.close()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popup=document.querySelector(t)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){(t.currentTarget===t.target||t.target.classList.contains("popup__close-button"))&&e.close()}))}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(){return c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=l(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},c.apply(this,arguments)}function l(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=h(e)););return e}function s(e,t){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},s(e,t)}function p(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return f(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(r);if(o){var n=h(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return p(this,e)});function a(e){var t,n,r,o,u=e.popupSelector,c=e.handleSubmitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),o=function(e,n){e.preventDefault(),t._handleSubmitForm(t._getInputValues(),n)},(r="_handleSubmit")in(n=f(t=i.call(this,u)))?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,t._handleSubmitForm=c,t._popupForm=t._popup.querySelector(".popup__form"),t._inputList=t._popupForm.querySelectorAll(".popup__form-item"),t._buttonSave=t._popup.querySelector(".popup__save-button"),t}return t=a,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){this._popupForm.addEventListener("submit",this._handleSubmit),c(h(a.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){c(h(a.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"isLoading",value:function(e){this._buttonSave.textContent=e?"Сохранение...":"Сохранить"}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(i);function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=b(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},m.apply(this,arguments)}function b(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function k(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(o){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return k(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupImage=t._popup.querySelector(".popup__image"),t._popupName=t._popup.querySelector(".popup__name"),t}return t=a,(n=[{key:"open",value:function(e){this._popupImage.src=e.link,this._popupImage.alt=e.name,this._popupName.textContent=e.name,m(g(a.prototype),"open",this).call(this)}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(i);function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=O(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},E.apply(this,arguments)}function O(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=P(e)););return e}function C(e,t){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},C(e,t)}function L(e,t){if(t&&("object"===w(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(r);if(o){var n=P(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return L(this,e)});function a(e){var t,n=e.popupSelector,r=e.handleSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._handleSubmit=r,t}return t=a,(n=[{key:"setEventListeners",value:function(){this._button=this._popup.querySelector(".popup__save-button"),this._button.addEventListener("click",this._handleSubmit),E(P(a.prototype),"setEventListeners",this).call(this)}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(i);function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var T=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e,t){var n=this;e.forEach((function(e){n._renderer(e,t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var x=function(){function e(t){var n=t.nameSelector,r=t.aboutSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._about=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){var e={};return e.name=this._name.textContent,e.about=this._about.textContent,e.avatar=this._avatar.src,e}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._about.textContent=e.about,this._avatar.src=e.avatar}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var A=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t,this._key=n}var t,n;return t=e,(n=[{key:"getUser",value:function(){return fetch("https://".concat(this._url,"users/me"),{headers:{authorization:this._key,"Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"editUserInfo",value:function(e){return fetch("https://".concat(this._url,"users/me"),{method:"PATCH",headers:{authorization:this._key,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"editAvatar",value:function(e){return fetch("https://mesto.".concat(this._url,"users/me/avatar"),{method:"PATCH",headers:{authorization:this._key,"Content-Type":"application/json"},body:JSON.stringify({avatar:e.link})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"getCards",value:function(){return fetch("https://mesto.".concat(this._url,"cards"),{headers:{authorization:this._key,"Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"addNewCard",value:function(e){return fetch("https://mesto.".concat(this._url,"cards"),{method:"POST",headers:{authorization:this._key,"Content-Type":"application/json"},body:JSON.stringify({name:e.title,link:e.link})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"deleteCard",value:function(e){return fetch("https://mesto.".concat(this._url,"cards/").concat(e),{method:"DELETE",headers:{authorization:this._key,"Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"addLike",value:function(e){return fetch("https://mesto.".concat(this._url,"cards/").concat(e,"/likes"),{method:"PUT",headers:{authorization:this._key,"Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"deleteLike",value:function(e){return fetch("https://mesto.".concat(this._url,"cards/").concat(e,"/likes"),{method:"DELETE",headers:{authorization:this._key,"Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}}])&&B(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),D={formSelector:".popup__form",inputSelector:".popup__form-item",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_disabled",inputErrorClass:"popup__form-item_error",errorClass:"popup__error_visible"},U=document.querySelector(".profile__edit-button"),F=document.querySelector(".popup_place_profile").querySelector(".popup__form"),N=document.querySelector(".popup_place_avatar").querySelector(".popup__form"),z=document.querySelector(".popup__form-item_el_name"),V=document.querySelector(".popup__form-item_el_about"),J=document.querySelector(".profile__add-button"),H=document.querySelector(".popup_place_cards").querySelector(".popup__form"),M=document.querySelector(".profile__avatar-zone"),$=(document.querySelector(".popup__form-item_el_title"),document.querySelector(".popup__form-item_el_link"),document.querySelector(".popup__form-item_el_link-avatar"));function G(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var K=new r(D,F),Q=new r(D,N),W=new r(D,H);K.enableValidation(),W.enableValidation(),Q.enableValidation();var X=new A("nomoreparties.co/v1/cohort-43/","f7a8d2c2-99fc-4e55-b877-773be6a3ed35"),Y=new x({nameSelector:".profile__name",aboutSelector:".profile__about",avatarSelector:".profile__avatar"}),Z=new T({renderer:function(e,t){Z.addItem(oe(e,t))}},".cards");Promise.all([X.getUser(),X.getCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return G(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?G(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];Y.setUserInfo(o),Z.renderItems(i,o._id)})).catch((function(e){return console.log(e)})),U.addEventListener("click",(function(){var e=Y.getUserInfo();z.value=e.name,V.value=e.about,K.deleteErrors(),te.open()})),J.addEventListener("click",(function(){W.deleteErrors(),re.open()})),M.addEventListener("click",(function(){var e=Y.getUserInfo();$.value=e.avatar,Q.deleteErrors(),ne.open()}));var ee=new S(".popup_place_card");ee.setEventListeners();var te=new y({popupSelector:".popup_place_profile",handleSubmitForm:function(e){te.isLoading(!0),X.editUserInfo(e).then((function(e){Y.setUserInfo(e)})).catch((function(e){return console.log(e)})),te.isLoading(!1),te.close()}});te.setEventListeners();var ne=new y({popupSelector:".popup_place_avatar",handleSubmitForm:function(e){ne.isLoading(!0),X.editAvatar(e).then((function(e){Y.setUserInfo(e)})).catch((function(e){return console.log(e)})),ne.isLoading(!1),ne.close()}});ne.setEventListeners();var re=new y({popupSelector:".popup_place_cards",handleSubmitForm:function(e){re.isLoading(!0),X.addNewCard(e).then((function(e){Z.addItem(oe(e,e.owner._id))})).catch((function(e){return console.log(e)})),re.isLoading(!1),re.close()}});function oe(e,n){var r=new t({item:e,cardSelector:".template",handleImageClick:function(){ee.open(e)},handleLikeClick:function(){r.isLiked(n)?(r.likeCard(),X.deleteLike(r._id).then((function(e){r.updateLikes(e.likes)})).catch((function(e){return console.log(e)}))):(r.likeCard(),X.addLike(r._id).then((function(e){r.updateLikes(e.likes)})).catch((function(e){return console.log(e)})))},handleDeleteClick:function(){var e=new q({popupSelector:".popup_place_confirmation",handleSubmit:function(){X.deleteCard(r._id).then((function(e){r.removeCard()})).catch((function(e){return console.log(e)})),e.close()}});e.open(),e.setEventListeners()}});return r.generateCard(n)}re.setEventListeners()})();
//# sourceMappingURL=main.js.map