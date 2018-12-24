(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _personal_personal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./personal/personal.component */ "./src/app/personal/personal.component.ts");
/* harmony import */ var _resources_resources_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resources/resources.component */ "./src/app/resources/resources.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"]
    },
    {
        path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"]
    },
    {
        path: 'projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"]
    },
    {
        path: 'personal', component: _personal_personal_component__WEBPACK_IMPORTED_MODULE_7__["PersonalComponent"]
    },
    {
        path: 'resources', component: _resources_resources_component__WEBPACK_IMPORTED_MODULE_8__["ResourcesComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"],
                _personal_personal_component__WEBPACK_IMPORTED_MODULE_7__["PersonalComponent"],
                _resources_resources_component__WEBPACK_IMPORTED_MODULE_8__["ResourcesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home-page/home-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/home-page/home-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n@import url(\"https://fonts.googleapis.com/css?family=Raleway\");\r\n\r\n\r\n@-ms-viewport {\r\n\twidth: device-width;\r\n}\r\n\r\n\r\nhtml, body, div, span, h1, h2, h3, p, header, nav{\r\n\tfont-family: \"Raleway\", sans-serif;\r\n\tvertical-align: baseline;\r\n  margin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n}\r\n\r\n\r\n.socicons-list {\r\n list-style: none;\r\n display: flex;\r\n justify-content: center;\r\n}\r\n\r\n\r\n.socicons-list li {\r\n margin: 30px 10px;\r\n}\r\n\r\n\r\n.socicons-list li a {\r\n text-decoration: none;\r\n padding: 20px;\r\n font-size: 20px;\r\n border-radius: 40%;\r\n color: #fff;\r\n background-color: #f1f1f1;\r\n transition: all ease-in-out 150ms;\r\n}\r\n\r\n\r\n.socicons-list li a:hover {\r\n text-shadow: 0 5px 10px #212121;\r\n}\r\n\r\n\r\n.socicons-list li:nth-child(1) a {\r\n background-color: #3e5b98;\r\n}\r\n\r\n\r\n.socicons-list li:nth-child(2) a {\r\n background-color: #c13584;\r\n}\r\n\r\n\r\n.socicons-list li:nth-child(3) a {\r\n background-color: #4da7de;\r\n}\r\n\r\n\r\n.socicons-list li:nth-child(4) a {\r\n background-color: #dd4b39;\r\n}\r\n\r\n\r\n.socicons-list li:nth-child(5) a {\r\n background-color: black;\r\n}\r\n\r\n\r\n/* Add a hover effect if you want */\r\n\r\n\r\n/* .fa:hover {\r\n    opacity: 0.7;\r\n}\r\n\r\n.fa {\r\n    padding: 20px;\r\n    font-size: 30px;\r\n    width: 30px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    border-radius: 50%;\r\n} */\r\n\r\n\r\n/* Set a specific color for each brand */\r\n\r\n\r\n/* Facebook */\r\n\r\n\r\n/* .fa-facebook {\r\n    background: #3B5998;\r\n    color: white;\r\n}\r\n\r\n/* Twitter */\r\n\r\n\r\n/* .fa-twitter {\r\n    background: #55ACEE;\r\n    color: white;\r\n} */\r\n\r\n\r\nnav {\r\n\tdisplay: block;\r\n}\r\n\r\n\r\nul {\r\n\tlist-style: disc;\r\n\tmargin: 0 0 2em 0;\r\n\tpadding-left: 1em;\r\n}\r\n\r\n\r\nul li {\r\n\tpadding-left: 0.5em;\r\n}\r\n\r\n\r\nul.alt li {\r\n\tborder-top: solid 1px rgba(144, 144, 144, 0.25);\r\n\tpadding: 0.5em 0;\r\n}\r\n\r\n\r\n.mainDescription {\r\n\tpadding: 4em;\r\n\tpadding-left: 8em;\r\n\tpadding-right: 8em;\r\n}\r\n\r\n\r\n.mainDescription h1 {\r\n\tfont-size: 45px;;\r\n}\r\n\r\n\r\n.mainDescription p {\r\n\tpadding-top: 2em;\r\n}\r\n\r\n\r\n/* Keeps open section of picture on bottom and maintains individual picture*/\r\n\r\n\r\n.bottom {\r\n\tbackground-attachment: fixed;\r\n\tbackground-image: linear-gradient(rgba(0, 0, 0, 0.37), rgba(0, 0, 0, 0.37)), url('baybridge.jpg');\r\n\tbackground-position: center center;\r\n\tbackground-size: cover;\r\n}\r\n\r\n\r\n#navigation {\r\n\tbackground-color: #fff;\r\n\tborder-bottom: solid 1px rgba(144, 144, 144, 0.25);\r\n\tbox-shadow: 0px;\r\n\tcolor: #484848;\r\n\tfont-size: 1.25em;\r\n\theight: 4.5em;\r\n\tleft: 0;\r\n\tline-height: 4.4em;\r\n\t/* position: fixed; */\r\n\ttop: 0;\r\n\twidth: 100%;\r\n\tz-index: 10001;\r\n}\r\n\r\n\r\n/* #navigation h1 {\r\n\tposition: absolute;\r\n\tcolor: #484848;\r\n\tfont-weight: 400;\r\n\theight: inherit;\r\n\tline-height: inherit;\r\n\tleft: 1.25em;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\ttop: 0;\r\n} */\r\n\r\n\r\n#navigation nav {\r\n\theight: inherit;\r\n\tline-height: inherit;\r\n\tposition: absolute;\r\n\tright: 1.25em;\r\n\ttop: 0;\r\n\tvertical-align: middle;\r\n\ttext-align: left;\r\n\tfloat: left;\r\n}\r\n\r\n\r\n#navigation nav ul {\r\n\tlist-style: none;\r\n\tmargin: 0;\r\n\tpadding-left: 0;\r\n}\r\n\r\n\r\n#navigation nav ul li {\r\n\tborder-radius: 4px;\r\n\tdisplay: inline-block;\r\n\tmargin-left: 1.75em;\r\n\tpadding-left: 0;\r\n}\r\n\r\n\r\n#navigation nav ul li a {\r\n\tcolor: white;\r\n\tdisplay: inline-block;\r\n\ttext-decoration: none;\r\n\tfont-size: 15px;\r\n}\r\n\r\n\r\n/* REmoves ugly underlining for links */\r\n\r\n\r\n#navigation nav ul li a:hover {\r\n\tcolor: #484848;\r\n}\r\n\r\n\r\n/* THIS IS THE LINE THAT MAKES NAVBAR GOOD */\r\n\r\n\r\n#navigation.alt {\r\n  background-color: transparent;\r\n  border: 0;\r\n  box-shadow: none;\r\n\theight: 3.25em;\r\n\tline-height: 3.25em;\r\n\tposition: absolute;\r\n}\r\n\r\n\r\n#banner {\r\n\tbackground-image:linear-gradient(rgba(0, 0, 0, 0.37), rgba(0, 0, 0, 0.37)), url('baybridge.jpg');\r\n\ttext-align: center;\r\n  padding: 15em 0 15em 0;\r\n  background-position: center top;\r\n\tbackground-size: cover;\r\n  background-attachment: fixed;\r\n}\r\n\r\n\r\n/*\r\nMy name */\r\n\r\n\r\n#banner h2 {\r\n\tcolor: white;\r\n\tfont-size: 85px;\r\n\tmargin-bottom: 20px;\r\n  display: inline-block;\r\n}\r\n\r\n\r\n#banner p {\r\n\tcolor: white;\r\n\tfont-size: 25px;\r\n\tmargin-bottom: 50px;\r\n}\r\n\r\n\r\n.scroll {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n\r\n.scroll a {\r\n  color: white;\r\n  padding-top: 20px;\r\n}\r\n\r\n\r\n.scroll a span {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 50%;\r\n  width: 50px;\r\n  height: 50px;\r\n  margin-left: -25px;\r\n  border-left: 1px solid white;\r\n  border-bottom: 1px solid white;\r\n  -webkit-animation: scrollerFunc 1.5s infinite;\r\n          animation: scrollerFunc 1.5s infinite;\r\n  box-sizing: border-box;\r\n}\r\n\r\n\r\n@-webkit-keyframes scrollerFunc {\r\n  0% {\r\n    -webkit-transform: rotate(-45deg) translate(0, 0);\r\n            transform: rotate(-45deg) translate(0, 0);\r\n    opacity: 0;\r\n  }\r\n  50% {\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(-45deg) translate(-20px, 20px);\r\n            transform: rotate(-45deg) translate(-20px, 20px);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n\r\n@keyframes scrollerFunc {\r\n  0% {\r\n    -webkit-transform: rotate(-45deg) translate(0, 0);\r\n            transform: rotate(-45deg) translate(0, 0);\r\n    opacity: 0;\r\n  }\r\n  50% {\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(-45deg) translate(-20px, 20px);\r\n            transform: rotate(-45deg) translate(-20px, 20px);\r\n    opacity: 0;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/home-page/home-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n  <!-- <div class=\"intro\">\n    <div class=\"headerBox\">\n      <img class=\"spacing\" style=\"margin-top:75px;\">\n      <h1> NALIN CHOPRA </h1>\n\n      <img class=\"spacing\" style=\"margin-bottom:75px;\">\n      <div class=\"bgd\"></div>\n    </div>\n  </div> -->\n  <section class=\"alt\" id=\"navigation\" style=\"float: left;\" >\n    <nav id=\"nav\">\n      <ul>\n        <li><a href=\"/\">Home</a></li>\n        <li><a href=\"/about\">About</a></li>\n        <li><a href=\"/projects\">Projects</a></li>\n      </ul>\n    </nav>\n  </section>\n\n  <section id=\"banner\">\n    <h2>NALIN CHOPRA</h2>\n    <p>Developer.   Enthusiast.   Adventurer.</p>\n    <div class=\"buttonBox\">\n      <div class=\"scrollBox\" style=\"padding-top: 10em;\">\n        <div class=\"scroll\">\n          <a href=\"empty\" onclick=\"return false;\" id=\"scroller\"><span></span>Click to Scroll</a>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"mainDescription\" style=\"padding-bottom: 0em;\">\n      <h1> Hi there! </h1>\n      <p>\n        So glad you made it to my website! Here's a little about me:\n      </p>\n      <p>\n        I'm a student at UC Berkeley studying electrical engineering & computer science.\n        Former All-American track & field athlete. Sports enthusiast. Favorite song? Party in the USA.\n      </p>\n      <p>\n        In an information driven-society, it's typical that we all consume so much information. But how are we contributing back? Here\n        I hope to capture some of my best memories through videos, and show everyone the work I'm passionate about.\n      </p>\n      <p>\n        Check out some of my projects, and feel free to shoot me a message or connect with my on LinkedIn. I'd love to meet and chat with you.\n      </p>\n\n\n      <div style=\"padding-top:30px;\">\n        <link rel=\"stylesheet\" href=\"https://d1azc1qln24ryf.cloudfront.net/114779/Socicon/style-cf.css?rd5re8\">\n          <ul class=\"socicons-list\">\n              <li>\n                <a href='your_url_here' target='_blank'><span class=\"socicon-facebook\"></span></a>\n              </li>\n                <li>\n                <a href='your_url_here' target='_blank'><span class=\"socicon-instagram\"></span></a>\n              </li>\n              <li>\n                <a href='your_url_here' target='_blank'><span class=\"socicon-linkedin\"></span></a>\n              </li>\n              <li>\n                <a href='your_url_here' target='_blank'><span class=\"socicon-googleplus\"></span></a>\n              </li>\n              <li>\n                <a href='your_url_here' target='_blank'><span class=\"socicon-github\"></span></a>\n              </li>\n          </ul>\n      </div>\n  </section>\n\n  <section class=\"bottom\">\n    <h1> Insert stuff for footer here </h1>\n  </section>\n</main>\n"

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#scroller').click(function (e) {
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('html, body').animate({ scrollTop: jquery__WEBPACK_IMPORTED_MODULE_1___default()('.mainDescription').offset().top }, 1000);
        });
    };
    HomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/home-page/home-page.component.css")]
        })
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/personal/personal.component.css":
/*!*************************************************!*\
  !*** ./src/app/personal/personal.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/personal/personal.component.html":
/*!**************************************************!*\
  !*** ./src/app/personal/personal.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  personal works!\n</p>\n"

/***/ }),

/***/ "./src/app/personal/personal.component.ts":
/*!************************************************!*\
  !*** ./src/app/personal/personal.component.ts ***!
  \************************************************/
/*! exports provided: PersonalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalComponent", function() { return PersonalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PersonalComponent = /** @class */ (function () {
    function PersonalComponent() {
    }
    PersonalComponent.prototype.ngOnInit = function () {
    };
    PersonalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-personal',
            template: __webpack_require__(/*! ./personal.component.html */ "./src/app/personal/personal.component.html"),
            styles: [__webpack_require__(/*! ./personal.component.css */ "./src/app/personal/personal.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PersonalComponent);
    return PersonalComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Lato:700|Merriweather:300,300italic,700');\r\n@import url(https://fonts.googleapis.com/css?family=Josefin+Sans:300,400);\r\n.infoGraphics .box p {\r\n  position: relative;\r\n  font-size: 16;\r\n}\r\n.infoGraphics .row {\r\n  border-bottom: 1px solid #e6e6e6;\r\n}\r\n.infoGraphics .text-box-left {\r\n  padding: 75px;\r\n  padding-right: 15px;\r\n  padding-top: 75px;\r\n  padding-bottom: 90px;\r\n}\r\n.infoGraphics .text-box-right {\r\n  padding: 75px;\r\n  padding-left: 15px;\r\n  padding-top: 75px;\r\n  padding-bottom: 90px;\r\n}\r\n.infoGraphics .text-box-left h3 {\r\n  text-align: left;\r\n  color: #2E6171;\r\n  font-size: 32px;\r\n}\r\n.infoGraphics .text-box-left p {\r\n  text-align: left;\r\n  font-size: 15px;\r\n}\r\n.infoGraphics .text-box-right p {\r\n  text-align: right;\r\n  font-size: 15px;\r\n}\r\n.infoGraphics .text-box-right h3 {\r\n  text-align: right;\r\n  color: #2E6171;\r\n  font-size: 32px;\r\n}\r\n.infoGraphics .space {\r\n  padding: 36px;\r\n}\r\n.infoGraphics .crop-right {\r\n  display: block;\r\n  margin: 0 auto;\r\n  text-align: center;\r\n  position: relative;\r\n  float: right;\r\n  height: 200px;\r\n  width: 350px;\r\n  overflow: hidden;\r\n  border-radius: 10px;\r\n\r\n}\r\n.infoGraphics .crop-left {\r\n  display: block;\r\n  margin: 0 auto;\r\n  position: relative;\r\n  text-align: center;\r\n  float: left;\r\n  height: 200px;\r\n  width: 350px;\r\n  overflow: hidden;\r\n  border-radius: 10px;\r\n}\r\n.infoGraphics .crop-right img, .infoGraphics .crop-left img {\r\n  height: 200px;\r\n  width: auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  projects works!\n</p>\n"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/resources/resources.component.css":
/*!***************************************************!*\
  !*** ./src/app/resources/resources.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/resources/resources.component.html":
/*!****************************************************!*\
  !*** ./src/app/resources/resources.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  resources works!\n</p>\n"

/***/ }),

/***/ "./src/app/resources/resources.component.ts":
/*!**************************************************!*\
  !*** ./src/app/resources/resources.component.ts ***!
  \**************************************************/
/*! exports provided: ResourcesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesComponent", function() { return ResourcesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResourcesComponent = /** @class */ (function () {
    function ResourcesComponent() {
    }
    ResourcesComponent.prototype.ngOnInit = function () {
    };
    ResourcesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resources',
            template: __webpack_require__(/*! ./resources.component.html */ "./src/app/resources/resources.component.html"),
            styles: [__webpack_require__(/*! ./resources.component.css */ "./src/app/resources/resources.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResourcesComponent);
    return ResourcesComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\nalin\desktop\my-website\personal-website\my-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map