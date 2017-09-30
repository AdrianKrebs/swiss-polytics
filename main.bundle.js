webpackJsonp([8],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./about/about.module": [
		"../../../../../src/app/pages/about/about.module.ts",
		0,
		5
	],
	"./dashboard/dashboard.module": [
		"../../../../../src/app/pages/dashboard/dashboard.module.ts",
		0,
		1
	],
	"./parliament/parliament.module": [
		"../../../../../src/app/pages/parliament/parliament.module.ts",
		0,
		4
	],
	"./party/party.module": [
		"../../../../../src/app/pages/party/party.module.ts",
		0,
		3
	],
	"./politician/politician.module": [
		"../../../../../src/app/pages/politician/politician.module.ts",
		0,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-config.constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_CONFIG; });
/**
 * Created by Adrian on 9/10/2017.
 */

const APP_DI_CONFIG = {
    BACKEND_URL: 'https://infinite-headland-89947.herokuapp.com',
};
/* harmony export (immutable) */ __webpack_exports__["b"] = APP_DI_CONFIG;

let APP_CONFIG = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* InjectionToken */]('app.config');
//# sourceMappingURL=app-config.constants.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host /deep/ .al-sidebar {\n  width: 180px;\n  top: 66px;\n  left: 0;\n  z-index: 1001;\n  display: block;\n  min-height: 100%;\n  background-color: #282828;\n  height: 100%;\n  position: fixed; }\n\n:host /deep/ .al-sidebar-list {\n  margin: 0;\n  overflow: hidden;\n  padding: 18px 0 0 0;\n  list-style: none; }\n\n:host /deep/ .al-sidebar-sublist .subitem-submenu-list {\n  padding-left: 15px; }\n\n:host /deep/ .subitem-submenu-link .fa {\n  top: 7px; }\n\n:host /deep/ .al-sidebar-list-item {\n  display: block;\n  position: relative;\n  float: none;\n  padding: 0; }\n  :host /deep/ .al-sidebar-list-item.selected:not(.with-sub-menu) {\n    background-color: #00abff; }\n    :host /deep/ .al-sidebar-list-item.selected:not(.with-sub-menu) a.al-sidebar-list-link {\n      color: #ffffff; }\n      :host /deep/ .al-sidebar-list-item.selected:not(.with-sub-menu) a.al-sidebar-list-link b {\n        color: #ffffff; }\n\n:host /deep/ .ba-sidebar-item-expanded > ul.al-sidebar-sublist {\n  display: block !important; }\n\n:host /deep/ .al-sidebar-list-item.ba-sidebar-item-expanded > .al-sidebar-list-link b, :host /deep/ .ba-sidebar-sublist-item.ba-sidebar-item-expanded > .al-sidebar-list-link b {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n:host /deep/ .al-sidebar-list-item.ba-sidebar-item-expanded > .al-sidebar-sublist, :host /deep/ .ba-sidebar-sublist-item.ba-sidebar-item-expanded > .al-sidebar-sublist {\n  display: block; }\n\n:host /deep/ a.al-sidebar-list-link {\n  display: block;\n  height: 42px;\n  padding-left: 18px;\n  text-shadow: none;\n  font-size: 13px;\n  text-decoration: none;\n  color: #ffffff;\n  line-height: 42px;\n  white-space: nowrap;\n  overflow: hidden;\n  cursor: pointer; }\n  :host /deep/ a.al-sidebar-list-link:hover {\n    color: #00abff; }\n    :host /deep/ a.al-sidebar-list-link:hover b {\n      color: #00abff; }\n  :host /deep/ a.al-sidebar-list-link i {\n    margin-right: 18px;\n    width: 16px;\n    display: inline-block; }\n  :host /deep/ a.al-sidebar-list-link b {\n    display: block;\n    opacity: 1;\n    width: 14px;\n    height: 14px;\n    line-height: 14px;\n    text-shadow: none;\n    font-size: 18px;\n    position: absolute;\n    right: 10px;\n    top: 12px;\n    padding: 0;\n    text-align: center;\n    color: #ffffff;\n    transition: -webkit-transform 0.2s linear;\n    transition: transform 0.2s linear;\n    transition: transform 0.2s linear, -webkit-transform 0.2s linear; }\n\n:host /deep/ .slimScrollBar, :host /deep/ .slimScrollRail {\n  border-radius: 0 !important;\n  width: 4px !important;\n  left: 176px; }\n\n:host /deep/ .al-sidebar-sublist {\n  padding: 0;\n  list-style: none;\n  position: relative;\n  display: none; }\n  :host /deep/ .al-sidebar-sublist.expanded {\n    display: block; }\n  :host /deep/ .al-sidebar-sublist > ba-menu-item > li {\n    display: block;\n    float: none;\n    padding: 0;\n    border-bottom: none;\n    position: relative; }\n    :host /deep/ .al-sidebar-sublist > ba-menu-item > li a {\n      display: block;\n      text-shadow: none;\n      font-size: 13px;\n      text-decoration: none;\n      color: #ffffff;\n      padding-left: 52px;\n      height: auto;\n      line-height: 29px; }\n      :host /deep/ .al-sidebar-sublist > ba-menu-item > li a:hover {\n        color: #00abff; }\n    :host /deep/ .al-sidebar-sublist > ba-menu-item > li.selected:not(.with-sub-menu) > a {\n      border: none;\n      background-color: #00abff; }\n      :host /deep/ .al-sidebar-sublist > ba-menu-item > li.selected:not(.with-sub-menu) > a:hover {\n        color: #ffffff; }\n\n:host /deep/ .sidebar-hover-elem {\n  width: 4px;\n  background: #00abff;\n  position: absolute;\n  top: -150px;\n  left: 176px;\n  transition: all 0.5s ease;\n  transition-property: top, height;\n  height: 42px;\n  display: block; }\n\n:host /deep/ .sidebar-select-elem {\n  display: block;\n  top: 94px; }\n\n:host /deep/ .menu-collapsed .slimScrollBar, :host /deep/ .menu-collapsed .slimScrollRail {\n  display: none !important; }\n\n@media (min-width: 1200px) {\n  :host /deep/ .menu-collapsed .al-main {\n    margin-left: 50px; }\n  :host /deep/ .menu-collapsed .al-footer {\n    padding-left: 83px; } }\n\n@media (max-width: 1200px) and (min-width: 500px) {\n  :host /deep/ .al-main {\n    margin-left: 50px; }\n  :host /deep/ .al-footer {\n    padding-left: 83px; } }\n\n@media (min-width: 501px) {\n  :host /deep/ .menu-collapsed .al-sidebar {\n    width: 52px; }\n    :host /deep/ .menu-collapsed .al-sidebar .fa-angle-down, :host /deep/ .menu-collapsed .al-sidebar .fa-angle-up {\n      opacity: 0; }\n    :host /deep/ .menu-collapsed .al-sidebar .al-sidebar-sublist {\n      position: absolute;\n      top: -1px;\n      left: 52px;\n      background: rgba(0, 0, 0, 0.8);\n      width: 0;\n      display: block;\n      overflow: hidden;\n      transition: width 0.5s ease; }\n      :host /deep/ .menu-collapsed .al-sidebar .al-sidebar-sublist.slide-right {\n        width: 135px; }\n      :host /deep/ .menu-collapsed .al-sidebar .al-sidebar-sublist::before {\n        display: none; }\n      :host /deep/ .menu-collapsed .al-sidebar .al-sidebar-sublist li::before {\n        display: none; }\n      :host /deep/ .menu-collapsed .al-sidebar .al-sidebar-sublist li a {\n        padding-left: 18px;\n        padding-right: 18px;\n        min-width: 130px;\n        white-space: nowrap; }\n    :host /deep/ .menu-collapsed .al-sidebar .sidebar-hover-elem, :host /deep/ .menu-collapsed .al-sidebar .sidebar-select-elem {\n      left: 48px; } }\n\n@media (max-width: 1200px) {\n  :host /deep/ .al-sidebar {\n    width: 180px;\n    background: rgba(0, 0, 0, 0.75);\n    transition: width 0.5s ease; }\n    :host /deep/ .al-sidebar .fa-angle-down, :host /deep/ .al-sidebar .fa-angle-up {\n      opacity: 1; }\n    :host /deep/ .al-sidebar .al-sidebar-sublist {\n      padding: 0;\n      list-style: none;\n      position: relative;\n      display: none;\n      top: auto;\n      left: auto;\n      background: none;\n      width: auto;\n      overflow: visible;\n      transition: none; }\n      :host /deep/ .al-sidebar .al-sidebar-sublist.expanded {\n        display: block; }\n      :host /deep/ .al-sidebar .al-sidebar-sublist > ba-menu-item > li {\n        display: block;\n        float: none;\n        padding: 0;\n        border-bottom: none;\n        position: relative; }\n        :host /deep/ .al-sidebar .al-sidebar-sublist > ba-menu-item > li a {\n          display: block;\n          text-shadow: none;\n          font-size: 13px;\n          text-decoration: none;\n          color: #ffffff;\n          padding-left: 52px;\n          height: auto;\n          line-height: 29px; }\n          :host /deep/ .al-sidebar .al-sidebar-sublist > ba-menu-item > li a:hover {\n            color: #00abff; }\n        :host /deep/ .al-sidebar .al-sidebar-sublist > ba-menu-item > li.selected:not(.with-sub-menu) > a {\n          border: none;\n          background-color: #00abff; }\n          :host /deep/ .al-sidebar .al-sidebar-sublist > ba-menu-item > li.selected:not(.with-sub-menu) > a:hover {\n            color: #ffffff; }\n    :host /deep/ .al-sidebar .sidebar-hover-elem, :host /deep/ .al-sidebar .sidebar-select-elem {\n      left: 176px;\n      transition: left 0.5s ease; } }\n\n@media (max-width: 500px) {\n  :host /deep/ .menu-collapsed .al-sidebar {\n    width: 0; }\n  :host /deep/ .menu-collapsed .sidebar-hover-elem, :host /deep/ .menu-collapsed .sidebar-select-elem {\n    display: none; }\n  :host /deep/ .al-main {\n    margin-left: 0; }\n  :host /deep/ .al-footer {\n    padding-left: 0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_state__ = __webpack_require__("../../../../../src/app/global.state.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_services__ = __webpack_require__("../../../../../src/app/theme/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_theme_config__ = __webpack_require__("../../../../../src/app/theme/theme.config.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
 * App Component
 * Top Level Component
 */
let App = class App {
    constructor(_state, _imageLoader, _spinner, viewContainerRef, themeConfig) {
        this._state = _state;
        this._imageLoader = _imageLoader;
        this._spinner = _spinner;
        this.viewContainerRef = viewContainerRef;
        this.themeConfig = themeConfig;
        this.isMenuCollapsed = false;
        themeConfig.config();
        this._loadImages();
        this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
            this.isMenuCollapsed = isCollapsed;
        });
    }
    ngAfterViewInit() {
        // hide spinner once all loaders are completed
        __WEBPACK_IMPORTED_MODULE_2__theme_services__["c" /* BaThemePreloader */].load().then((values) => {
            this._spinner.hide();
        });
    }
    _loadImages() {
        // register some loaders
        __WEBPACK_IMPORTED_MODULE_2__theme_services__["c" /* BaThemePreloader */].registerLoader(this._imageLoader.load('assets/img/sky-bg.jpg'));
    }
};
App = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app',
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")],
        template: `
    <main [class.menu-collapsed]="isMenuCollapsed" baThemeRun>
      <div class="additional-bg"></div>
      <router-outlet></router-outlet>
    </main>
  `,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__global_state__["a" /* GlobalState */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__global_state__["a" /* GlobalState */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__theme_services__["b" /* BaImageLoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__theme_services__["b" /* BaImageLoaderService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__theme_services__["d" /* BaThemeSpinner */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__theme_services__["d" /* BaThemeSpinner */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* ViewContainerRef */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__theme_theme_config__["a" /* BaThemeConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__theme_theme_config__["a" /* BaThemeConfig */]) === "function" && _e || Object])
], App);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__global_state__ = __webpack_require__("../../../../../src/app/global.state.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__theme_nga_module__ = __webpack_require__("../../../../../src/app/theme/nga.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_pages_module__ = __webpack_require__("../../../../../src/app/pages/pages.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_config_constants__ = __webpack_require__("../../../../../src/app/app-config.constants.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
 * Platform and Environment providers/directives/pipes
 */

// App is our top level component






// Application wide providers
const APP_PROVIDERS = [
    __WEBPACK_IMPORTED_MODULE_8__app_service__["a" /* AppState */],
    __WEBPACK_IMPORTED_MODULE_9__global_state__["a" /* GlobalState */],
    {
        provide: __WEBPACK_IMPORTED_MODULE_12__app_config_constants__["a" /* APP_CONFIG */],
        useValue: __WEBPACK_IMPORTED_MODULE_12__app_config_constants__["b" /* APP_DI_CONFIG */],
    },
];
/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
let AppModule = class AppModule {
    constructor(appState) {
        this.appState = appState;
    }
};
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* App */]],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* App */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_10__theme_nga_module__["a" /* NgaModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_11__pages_pages_module__["a" /* PagesModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* routing */],
        ],
        providers: [
            APP_PROVIDERS,
        ],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8__app_service__["a" /* AppState */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__app_service__["a" /* AppState */]) === "function" && _a || Object])
], AppModule);

var _a;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");

const routes = [
    { path: '', redirectTo: 'pages', pathMatch: 'full' },
    { path: '**', redirectTo: 'pages/dashboard' },
];
/* unused harmony export routes */

const routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes, { useHash: true });
/* harmony export (immutable) */ __webpack_exports__["a"] = routing;

//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppState; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let AppState = class AppState {
    constructor() {
        this._state = {};
    }
    // already return a clone of the current state
    get state() {
        return this._state = this._clone(this._state);
    }
    // never allow mutation
    set state(value) {
        throw new Error('do not mutate the `.state` directly');
    }
    get(prop) {
        // use our state getter for the clone
        const state = this.state;
        return state.hasOwnProperty(prop) ? state[prop] : state;
    }
    set(prop, value) {
        // internally mutate our state
        return this._state[prop] = value;
    }
    _clone(object) {
        // simple object clone
        return JSON.parse(JSON.stringify(object));
    }
};
AppState = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], AppState);

//# sourceMappingURL=app.service.js.map

/***/ }),

/***/ "../../../../../src/app/app.translation.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_http_loader__ = __webpack_require__("../../../../@ngx-translate/http-loader/index.js");
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppTranslationModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_3__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/US/', '.json');
}
const translationOptions = {
    loader: {
        provide: __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["a" /* TranslateLoader */],
        useFactory: (createTranslateLoader),
        deps: [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]],
    },
};
let AppTranslationModule = class AppTranslationModule {
    constructor(translate) {
        this.translate = translate;
        translate.addLangs(['en']);
        translate.setDefaultLang('en');
        translate.use('en');
    }
};
AppTranslationModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forRoot(translationOptions)],
        exports: [__WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */]],
        providers: [__WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]) === "function" && _a || Object])
], AppTranslationModule);

var _a;
//# sourceMappingURL=app.translation.module.js.map

/***/ }),

/***/ "../../../../../src/app/global.state.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalState; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let GlobalState = class GlobalState {
    constructor() {
        this._data = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this._dataStream$ = this._data.asObservable();
        this._subscriptions = new Map();
        this._dataStream$.subscribe((data) => this._onEvent(data));
    }
    notifyDataChanged(event, value) {
        const current = this._data[event];
        if (current !== value) {
            this._data[event] = value;
            this._data.next({
                event: event,
                data: this._data[event],
            });
        }
    }
    subscribe(event, callback) {
        const subscribers = this._subscriptions.get(event) || [];
        subscribers.push(callback);
        this._subscriptions.set(event, subscribers);
    }
    _onEvent(data) {
        const subscribers = this._subscriptions.get(data['event']) || [];
        subscribers.forEach((callback) => {
            callback.call(null, data['data']);
        });
    }
};
GlobalState = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], GlobalState);

//# sourceMappingURL=global.state.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme__ = __webpack_require__("../../../../../src/app/theme/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_menu__ = __webpack_require__("../../../../../src/app/pages/pages.menu.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pages; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let Pages = class Pages {
    constructor(_menuService) {
        this._menuService = _menuService;
    }
    ngOnInit() {
        this._menuService.updateMenuByRoutes(__WEBPACK_IMPORTED_MODULE_2__pages_menu__["a" /* PAGES_MENU */]);
    }
};
Pages = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'pages',
        template: `
    <ba-sidebar></ba-sidebar>
    <ba-page-top></ba-page-top>
    <div class="al-main">
      <div class="al-content">
        <ba-content-top></ba-content-top>
        <router-outlet></router-outlet>
      </div>
    </div>
    <footer class="al-footer clearfix">
      <div class="al-footer-main clearfix">
        <ul class="al-share clearfix">
          <li><a href="https://twitter.com/swiss_polytics"><i class="socicon socicon-twitter"></i></a></li>
          <li><a href="https://github.com/AdrianKrebs/swiss-poliytics"><i class="socicon socicon-github"></i></a></li>
        </ul>
      </div>
    </footer>
    <ba-back-top position="200"></ba-back-top>
    `,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__theme__["a" /* BaMenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__theme__["a" /* BaMenuService */]) === "function" && _a || Object])
], Pages);

var _a;
//# sourceMappingURL=pages.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages.menu.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const PAGES_MENU = [
    {
        path: 'pages',
        children: [
            {
                path: 'dashboard',
                data: {
                    menu: {
                        title: 'Dashboard',
                        icon: 'ion-android-home',
                        selected: false,
                        expanded: false,
                        order: 0,
                    },
                },
            },
            {
                path: 'parliament',
                data: {
                    menu: {
                        title: 'Parlament',
                        icon: 'ion-ios-people',
                        selected: false,
                        expanded: false,
                        order: 0,
                    },
                },
            },
            {
                path: 'politician',
                data: {
                    menu: {
                        title: 'Profil',
                        pathMatch: 'prefix',
                        icon: 'ion-ios-people',
                        selected: false,
                        expanded: false,
                        hidden: true,
                        order: 0,
                    },
                },
            },
            {
                path: 'party',
                data: {
                    menu: {
                        title: 'Parteien',
                        icon: 'ion-ios-person',
                        selected: false,
                        expanded: false,
                        order: 300,
                    },
                },
                children: [
                    {
                        path: 'SVP',
                        data: {
                            menu: {
                                title: 'SVP',
                            },
                        },
                    },
                    {
                        path: 'SP',
                        data: {
                            menu: {
                                title: 'SP',
                            },
                        },
                    },
                    {
                        path: 'FDP',
                        data: {
                            menu: {
                                title: 'FDP',
                            },
                        },
                    },
                    {
                        path: 'CVP',
                        data: {
                            menu: {
                                title: 'CVP',
                            },
                        },
                    },
                    {
                        path: 'BDP',
                        data: {
                            menu: {
                                title: 'BDP',
                            },
                        },
                    },
                    {
                        path: 'GLP',
                        data: {
                            menu: {
                                title: 'GLP',
                            },
                        },
                    },
                    {
                        path: 'GPS',
                        data: {
                            menu: {
                                title: 'GPS',
                            },
                        },
                    },
                ],
            },
            {
                path: 'about',
                data: {
                    menu: {
                        title: 'Über uns',
                        icon: 'ion-information',
                        selected: false,
                        expanded: false,
                        order: 0,
                    },
                },
            },
        ],
    },
];
/* harmony export (immutable) */ __webpack_exports__["a"] = PAGES_MENU;

//# sourceMappingURL=pages.menu.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_routing__ = __webpack_require__("../../../../../src/app/pages/pages.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_nga_module__ = __webpack_require__("../../../../../src/app/theme/nga.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_translation_module__ = __webpack_require__("../../../../../src/app/app.translation.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_component__ = __webpack_require__("../../../../../src/app/pages/pages.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let PagesModule = class PagesModule {
};
PagesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_4__app_translation_module__["a" /* AppTranslationModule */], __WEBPACK_IMPORTED_MODULE_3__theme_nga_module__["a" /* NgaModule */], __WEBPACK_IMPORTED_MODULE_2__pages_routing__["a" /* routing */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__pages_component__["a" /* Pages */]],
    })
], PagesModule);

//# sourceMappingURL=pages.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_component__ = __webpack_require__("../../../../../src/app/pages/pages.component.ts");


// noinspection TypeScriptValidateTypes
// export function loadChildren(path) { return System.import(path); };
const routes = [
    {
        path: 'pages',
        component: __WEBPACK_IMPORTED_MODULE_1__pages_component__["a" /* Pages */],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'parliament', loadChildren: './parliament/parliament.module#ParliamentModule' },
            { path: 'party', loadChildren: './party/party.module#PartyModule' },
            { path: 'politician', loadChildren: './politician/politician.module#PoliticianModule' },
            { path: 'about', loadChildren: './about/about.module#AboutModule' },
        ],
    },
];
/* unused harmony export routes */

const routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(routes);
/* harmony export (immutable) */ __webpack_exports__["a"] = routing;

//# sourceMappingURL=pages.routing.js.map

/***/ }),

/***/ "../../../../../src/app/pages/util/mapping.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const MAPPING = [
    {
        'id': '256863130',
        'twitterName': 'udcvr64',
        'personId': 4154,
        'name': 'Jean-Luc Addor',
        'number': 3055,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': '3257088023',
        'twitterName': 'SibelArslanBS',
        'personId': 4184,
        'name': 'Sibel Arslan',
        'number': 3058,
        'council': 'NR',
        'party': 'BastA',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4155,
        'name': 'Beat Arnold',
        'number': 3057,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': '219076403',
        'twitterName': 'anbarrile',
        'personId': 4203,
        'name': 'Angelo Barrile',
        'number': 3104,
        'council': 'NR',
        'party': 'SP',
    },
    {
        'id': '43504217',
        'twitterName': 'bendahan',
        'personId': 4213,
        'name': 'Samuel Bendahan',
        'number': 3114,
        'council': 'NR',
        'party': 'SP',
    },
    {
        'id': '3329760406',
        'twitterName': 'HUBigler',
        'personId': 4209,
        'name': 'Hans-Ulrich Bigler',
        'number': 3110,
        'council': 'NR',
        'party': 'FDP-Liberale',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4215,
        'name': 'Hansjörg Brunner',
        'number': 3116,
        'party': 'FDP-Liberale',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 724,
        'name': 'Daniel Brélaz',
        'number': 2023,
        'council': 'NR',
        'party': 'GPS',
    },
    {
        'id': '724584142344695808',
        'twitterName': 'michael_buffat',
        'personId': 4156,
        'name': 'Michaël Buffat',
        'number': 3062,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4195,
        'name': 'Laurence Fehlmann Rielle',
        'number': 3071,
        'council': 'NR',
        'party': 'SP',
    },
    {
        'id': '182760916',
        'twitterName': 'FrickerJonas',
        'personId': 4185,
        'name': 'Jonas Fricker',
        'number': 3072,
        'council': 'NR',
        'party': 'GPS',
    },
    {
        'id': '107053461',
        'twitterName': 'minlimarti',
        'personId': 4197,
        'name': 'Min Li Marti',
        'number': 3084,
        'council': 'NR',
        'party': 'SP',
    },
    {
        'id': '20442734',
        'twitterName': 'nantermod',
        'personId': 4193,
        'name': 'Philippe Nantermod',
        'number': 3088,
        'council': 'NR',
        'party': 'FDP-Liberale',
    },
    {
        'id': '385293664',
        'twitterName': 'BabaSteinemann',
        'personId': 4174,
        'name': 'Barbara Steinemann',
        'number': 3096,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4053,
        'name': 'Thomas Aeschi',
        'number': 2758,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4107,
        'name': 'Cesla Amarelle',
        'number': 3014,
        'council': 'NR',
        'party': 'SP',
    },
    {
        'id': '3302607988',
        'twitterName': 'th_ammann',
        'personId': 4180,
        'name': 'Thomas Ammann',
        'number': 3056,
        'council': 'NR',
        'party': 'CVP',
    },
    {
        'id': '280789941',
        'twitterName': 'M_Aebischer',
        'personId': 4049,
        'name': 'Matthias Aebischer',
        'number': 2760,
        'council': 'NR',
        'party': 'SP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 3867,
        'name': 'Andreas Aebi',
        'number': 2670,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4161,
        'name': 'Andreas Glarner',
        'number': 3074,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': '235081966',
        'twitterName': 'Agmur',
        'personId': 4181,
        'name': 'Andrea Gmür-Schönenberger',
        'number': 3075,
        'council': 'NR',
        'party': 'CVP',
    },
    {
        'id': '278262326',
        'twitterName': 'BarazzoneG',
        'personId': 4138,
        'name': 'Guillaume Barazzone',
        'number': 3040,
        'council': 'NR',
        'party': 'CVP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4214,
        'name': 'Niklaus-Samuel Gugger',
        'number': 3115,
        'party': 'EVP',
    },
    {
        'id': '50047040',
        'twitterName': 'JayBadran',
        'personId': 4058,
        'name': 'Jacqueline Badran',
        'number': 2762,
        'council': 'NR',
        'party': 'SP',
    },
    {
        'id': '3096244845',
        'twitterName': 'AmaudruzCeline',
        'personId': 4090,
        'name': 'Céline Amaudruz',
        'number': 2796,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4187,
        'name': 'Philippe Bauer',
        'number': 3059,
        'council': 'NR',
        'party': 'FDP-Liberale',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4165,
        'name': 'Barbara Keller-Inhelder',
        'number': 3081,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4166,
        'name': 'Roger Köppel',
        'number': 3082,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': '3221526790',
        'twitterName': 'Martin_Baeumle',
        'personId': 1138,
        'name': 'Martin Bäumle',
        'number': 2585,
        'council': 'NR',
        'party': 'glp',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4030,
        'name': 'Prisca Birrer-Heimo',
        'number': 2743,
        'council': 'NR',
        'party': 'SP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4102,
        'name': 'Kathrin Bertschy',
        'number': 3016,
        'council': 'NR',
        'party': 'glp',
    },
    {
        'id': '743779500341792768',
        'twitterName': 'seilergraf',
        'personId': 4199,
        'name': 'Priska Seiler Graf',
        'number': 3094,
        'council': 'NR',
        'party': 'SP',
    },
    {
        'id': '556256043',
        'twitterName': 'SaSollberger',
        'personId': 4173,
        'name': 'Sandra Sollberger',
        'number': 3095,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4157,
        'name': 'Manfred Bühler',
        'number': 3063,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': '2154083999',
        'twitterName': 'e_ettlin',
        'personId': 4206,
        'name': 'Erich Ettlin',
        'number': 3107,
        'council': 'SR',
        'party': 'CVP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 74,
        'name': 'Christoph Eymann',
        'number': 2287,
        'council': 'NR',
        'party': 'LDP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4032,
        'name': 'Beat Jans',
        'number': 2745,
        'council': 'NR',
        'party': 'SP',
    },
    {
        'id': '327254073',
        'twitterName': 'Ch_Lohr',
        'personId': 4118,
        'name': 'Christian Lohr',
        'number': 3024,
        'council': 'NR',
        'party': 'CVP',
    },
    {
        'id': '1228066279',
        'twitterName': 'nmasshardt',
        'personId': 4130,
        'name': 'Nadine Masshardt',
        'number': 3034,
        'council': 'NR',
        'party': 'SP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4168,
        'name': 'Jacques Nicolet',
        'number': 3089,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': '323132835',
        'twitterName': 'LorenzQuadri',
        'personId': 4046,
        'name': 'Lorenzo Quadri',
        'number': 2752,
        'council': 'NR',
        'party': 'Lega',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4143,
        'name': 'Rebecca Ana Ruiz',
        'number': 3045,
        'council': 'NR',
        'party': 'SP',
    },
    {
        'id': '263582303',
        'twitterName': 'Elisabeth_S_S',
        'personId': 4040,
        'name': 'Elisabeth Schneider-Schneiter',
        'number': 2748,
        'council': 'NR',
        'party': 'CVP',
    },
    {
        'id': '14077586',
        'twitterName': 'bastiengirod',
        'personId': 3882,
        'name': 'Bastien Girod',
        'number': 2685,
        'council': 'NR',
        'party': 'GPS',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4216,
        'name': 'Diana Gutjahr',
        'number': 3117,
        'party': 'SVP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4137,
        'name': 'Roger Golay',
        'number': 3039,
        'council': 'NR',
        'party': 'MCG',
    },
    {
        'id': '3354760547',
        'twitterName': 'AliceGlauser',
        'personId': 3883,
        'name': 'Alice Glauser-Zufferey',
        'number': 2686,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': '816301993799155712',
        'twitterName': 'Chrige_Haesler',
        'personId': 4149,
        'name': 'Christine Häsler',
        'number': 3051,
        'council': 'NR',
        'party': 'GPS',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 3886,
        'name': 'Hans Grunder',
        'number': 2689,
        'council': 'NR',
        'party': 'BDP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 1135,
        'name': 'Adrian Amstutz',
        'number': 2584,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': '1543019749',
        'twitterName': 'LorenzHess',
        'personId': 4094,
        'name': 'Lorenz Hess',
        'number': 2799,
        'council': 'NR',
        'party': 'BDP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4098,
        'name': 'Peter Keller',
        'number': 3013,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': '2982472295',
        'twitterName': 'HansjoergKnecht',
        'personId': 4114,
        'name': 'Hansjörg Knecht',
        'number': 3021,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4056,
        'name': 'Daniel Fässler',
        'number': 2767,
        'council': 'NR',
        'party': 'CVP',
    },
    {
        'id': '2431017296',
        'twitterName': 'Werner_Hoesli',
        'personId': 4145,
        'name': 'Werner Hösli',
        'number': 3047,
        'council': 'SR',
        'party': 'SVP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4144,
        'name': 'Thomas Matter',
        'number': 3046,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4088,
        'name': 'Isidor Baumann',
        'number': 2793,
        'council': 'SR',
        'party': 'CVP',
    },
    {
        'id': '2449367689',
        'twitterName': 'GMarchand_Balet',
        'personId': 4183,
        'name': 'Géraldine Marchand-Balet',
        'number': 3083,
        'council': 'NR',
        'party': 'CVP',
    },
    {
        'id': '350198606',
        'twitterName': 'RobiPanta',
        'personId': 4073,
        'name': 'Roberta Pantani',
        'number': 2773,
        'council': 'NR',
        'party': 'Lega',
    },
    {
        'id': '217706717',
        'twitterName': 'eviallemann',
        'personId': 1131,
        'name': 'Evi Allemann',
        'number': 2583,
        'council': 'NR',
        'party': 'SP',
    },
    {
        'id': '2832533567',
        'twitterName': 'RiederBeat',
        'personId': 4204,
        'name': 'Beat Rieder',
        'number': 3105,
        'council': 'SR',
        'party': 'CVP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4202,
        'name': 'Regine Sauter',
        'number': 3103,
        'council': 'NR',
        'party': 'FDP-Liberale',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4146,
        'name': 'Heinz Siegenthaler',
        'number': 3048,
        'council': 'NR',
        'party': 'BDP',
    },
    {
        'id': '61431883',
        'twitterName': 'SVPBrunner',
        'personId': 307,
        'name': 'Toni Brunner',
        'number': 2372,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': '605639477',
        'twitterName': 'fgrueter',
        'personId': 4162,
        'name': 'Franz Grüter',
        'number': 3076,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': '3240586961',
        'twitterName': 'ThierryBurkart',
        'personId': 4189,
        'name': 'Thierry Burkart',
        'number': 3065,
        'council': 'NR',
        'party': 'FDP-Liberale',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4025,
        'name': 'Roland Rino Büchel',
        'number': 2740,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': '2452772930',
        'twitterName': 'martin_candinas',
        'personId': 4070,
        'name': 'Martin Candinas',
        'number': 2770,
        'council': 'NR',
        'party': 'CVP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4142,
        'name': 'Beat Walti',
        'number': 3044,
        'council': 'NR',
        'party': 'FDP-Liberale',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4201,
        'name': 'Denis de la Reussille',
        'number': 3068,
        'council': 'NR',
        'party': 'PdA',
    },
    {
        'id': '1017350089',
        'twitterName': 'Yvette67Yvette',
        'personId': 3876,
        'name': 'Yvette Estermann',
        'number': 2679,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': '123362849',
        'twitterName': 'beatflach',
        'personId': 4059,
        'name': 'Beat Flach',
        'number': 2765,
        'council': 'NR',
        'party': 'glp',
    },
    {
        'id': '353662120',
        'twitterName': 'ThomasBurgherr',
        'personId': 4158,
        'name': 'Thomas Burgherr',
        'number': 3064,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': '2341633765',
        'twitterName': 'MajaIngold',
        'personId': 4031,
        'name': 'Maja Ingold',
        'number': 2744,
        'council': 'NR',
        'party': 'EVP',
    },
    {
        'id': '2696249536',
        'twitterName': 'claufriedl',
        'personId': 4131,
        'name': 'Claudia Friedl',
        'number': 3035,
        'council': 'NR',
        'party': 'SP',
    },
    {
        'id': '2822483402',
        'twitterName': 'BenoitGenecand',
        'personId': 4191,
        'name': 'Benoît Genecand',
        'number': 3073,
        'council': 'NR',
        'party': 'FDP-Liberale',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4071,
        'name': 'Urs Gasche',
        'number': 2764,
        'council': 'NR',
        'party': 'BDP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 3880,
        'name': 'Andrea Martina Geissbühler',
        'number': 2683,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4140,
        'name': 'Giovanni Merlini',
        'number': 3042,
        'council': 'NR',
        'party': 'FDP-Liberale',
    },
    {
        'id': '603431624',
        'twitterName': 'Damian_Mueller_',
        'personId': 4207,
        'name': 'Damian Müller',
        'number': 3108,
        'council': 'SR',
        'party': 'FDP-Liberale',
    },
    {
        'id': '2991955251',
        'twitterName': 'YvesNidegger',
        'personId': 3898,
        'name': 'Yves Nidegger',
        'number': 2701,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4169,
        'name': 'Pierre-André Page',
        'number': 3090,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': '190944081',
        'twitterName': 'NatalieRickli',
        'personId': 3902,
        'name': 'Natalie Rickli',
        'number': 2705,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 1137,
        'name': 'Walter Müller',
        'number': 2617,
        'council': 'NR',
        'party': 'FDP-Liberale',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 1119,
        'name': 'Jean-François Rime',
        'number': 2627,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4084,
        'name': 'Bruno Pezzatti',
        'number': 2784,
        'council': 'NR',
        'party': 'FDP-Liberale',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4170,
        'name': 'Franz Ruppen',
        'number': 3091,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': '50444931',
        'twitterName': 'cwasi',
        'personId': 3912,
        'name': 'Christian Wasserfallen',
        'number': 2715,
        'council': 'NR',
        'party': 'FDP-Liberale',
    },
    {
        'id': '485885985',
        'twitterName': 'ManuelTornare',
        'personId': 4113,
        'name': 'Manuel Tornare',
        'number': 3007,
        'council': 'NR',
        'party': 'SP',
    },
    {
        'id': '3063932104',
        'twitterName': 'hansuelivogt',
        'personId': 4176,
        'name': 'Hans-Ueli Vogt',
        'number': 3098,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4179,
        'name': 'David Zuberbühler',
        'number': 3102,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': '14675346',
        'twitterName': 'bglaettli',
        'personId': 4093,
        'name': 'Balthasar Glättli',
        'number': 3003,
        'council': 'NR',
        'party': 'GPS',
    },
    {
        'id': '458597614',
        'twitterName': 'MullerAltermatt',
        'personId': 4063,
        'name': 'Stefan Müller-Altermatt',
        'number': 2771,
        'council': 'NR',
        'party': 'CVP',
    },
    {
        'id': '444935177',
        'twitterName': 'idamicha',
        'personId': 1337,
        'name': 'Ida Glanzmann-Hunkeler',
        'number': 2657,
        'council': 'NR',
        'party': 'CVP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4054,
        'name': 'Albert Vitali',
        'number': 2761,
        'council': 'NR',
        'party': 'FDP-Liberale',
    },
    {
        'id': '2536865558',
        'twitterName': 'BaGysi',
        'personId': 4121,
        'name': 'Barbara Gysi',
        'number': 3026,
        'council': 'NR',
        'party': 'SP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4096,
        'name': 'Alois Gmür',
        'number': 3001,
        'council': 'NR',
        'party': 'CVP',
    },
    {
        'id': '2527505330',
        'twitterName': 'AlfredHeer',
        'personId': 3887,
        'name': 'Alfred Heer',
        'number': 2690,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4103,
        'name': 'Markus Hausammann',
        'number': 3002,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': '1077680574',
        'twitterName': 'HurterThomas',
        'personId': 3890,
        'name': 'Thomas Hurter',
        'number': 2693,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': '815578430',
        'twitterName': 'MaireJack',
        'personId': 4018,
        'name': 'Jacques-André Maire',
        'number': 2738,
        'council': 'NR',
        'party': 'SP',
    },
    {
        'id': '716002872',
        'twitterName': 'JauslinMatthias',
        'personId': 4208,
        'name': 'Matthias Samuel Jauslin',
        'number': 3109,
        'council': 'NR',
        'party': 'FDP-Liberale',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4153,
        'name': 'Peter Hegglin',
        'number': 3053,
        'council': 'SR',
        'party': 'CVP',
    },
    {
        'id': '1940472746',
        'twitterName': 'ClaudeBegle',
        'personId': 4182,
        'name': 'Claude Béglé',
        'number': 3060,
        'council': 'NR',
        'party': 'CVP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 1141,
        'name': 'Philipp Müller',
        'number': 2616,
        'council': 'SR',
        'party': 'FDP-Liberale',
    },
    {
        'id': '780565772',
        'twitterName': 'MartinaMunz',
        'personId': 4134,
        'name': 'Martina Munz',
        'number': 3036,
        'council': 'NR',
        'party': 'SP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4045,
        'name': 'Corrado Pardini',
        'number': 2751,
        'council': 'NR',
        'party': 'SP',
    },
    {
        'id': '373194785',
        'twitterName': 'FredericBorloz',
        'personId': 4188,
        'name': 'Frédéric Borloz',
        'number': 3061,
        'council': 'NR',
        'party': 'FDP-Liberale',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 3872,
        'name': 'Jacques Bourgeois',
        'number': 2675,
        'council': 'NR',
        'party': 'FDP-Liberale',
    },
    {
        'id': '244437560',
        'twitterName': 'jcschwaab',
        'personId': 4115,
        'name': 'Jean Christophe Schwaab',
        'number': 3020,
        'council': 'NR',
        'party': 'SP',
    },
    {
        'id': '289393019',
        'twitterName': 'marcochiesa74',
        'personId': 4159,
        'name': 'Marco Chiesa',
        'number': 3067,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4200,
        'name': 'Duri Campell',
        'number': 3066,
        'council': 'NR',
        'party': 'BDP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4051,
        'name': 'Thomas de Courten',
        'number': 2757,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': '2882434546',
        'twitterName': 'Marcel_Dobler',
        'personId': 4190,
        'name': 'Marcel Dobler',
        'number': 3070,
        'council': 'NR',
        'party': 'FDP-Liberale',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4110,
        'name': 'Hans Egloff',
        'number': 3005,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4160,
        'name': 'Marcel Dettling',
        'number': 3069,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4151,
        'name': 'Josef Dittli',
        'number': 3052,
        'council': 'SR',
        'party': 'FDP-Liberale',
    },
    {
        'id': '888380018673545216',
        'twitterName': 'Thomas_Egger_NR',
        'personId': 4212,
        'name': 'Thomas Egger',
        'number': 3113,
        'council': 'NR',
        'party': 'CSPO',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4052,
        'name': 'Markus Ritter',
        'number': 2754,
        'council': 'NR',
        'party': 'CVP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4077,
        'name': 'Olivier Feller',
        'number': 2789,
        'council': 'NR',
        'party': 'FDP-Liberale',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 3878,
        'name': 'Sylvia Flückiger-Bäni',
        'number': 2681,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': '271068328',
        'twitterName': 'ybuttet',
        'personId': 4086,
        'name': 'Yannick Buttet',
        'number': 2790,
        'council': 'NR',
        'party': 'CVP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 3910,
        'name': 'Erich von Siebenthal',
        'number': 2713,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': '2870723938',
        'twitterName': 'adelethorens',
        'personId': 3907,
        'name': 'Adèle Thorens Goumaz',
        'number': 2710,
        'council': 'NR',
        'party': 'GPS',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4192,
        'name': 'Hermann Hess',
        'number': 3079,
        'council': 'NR',
        'party': 'FDP-Liberale',
    },
    {
        'id': '21436172',
        'twitterName': 'cedricwermuth',
        'personId': 4057,
        'name': 'Cédric Wermuth',
        'number': 2759,
        'council': 'NR',
        'party': 'SP',
    },
    {
        'id': '62798697',
        'twitterName': 'Erich_Hess',
        'personId': 4163,
        'name': 'Erich Hess',
        'number': 3078,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': '1947128240',
        'twitterName': 'Beat_Vonlanthen',
        'personId': 4205,
        'name': 'Beat Vonlanthen',
        'number': 3106,
        'council': 'SR',
        'party': 'CVP',
    },
    {
        'id': '847717320',
        'twitterName': 'MarinaCarobbio',
        'personId': 3830,
        'name': 'Marina Carobbio Guscetti',
        'number': 2666,
        'council': 'NR',
        'party': 'SP',
    },
    {
        'id': '246714911',
        'twitterName': 'EdithGraf',
        'personId': 1295,
        'name': 'Edith Graf-Litscher',
        'number': 2652,
        'council': 'NR',
        'party': 'SP',
    },
    {
        'id': '627501106',
        'twitterName': 'DdeBuman',
        'personId': 1124,
        'name': 'Dominique de Buman',
        'number': 2593,
        'council': 'NR',
        'party': 'CVP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4152,
        'name': 'Hans Wicki',
        'number': 3054,
        'council': 'SR',
        'party': 'FDP-Liberale',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 61,
        'name': 'Verena Diener Lenz',
        'number': 2044,
        'council': 'SR',
        'party': 'glp',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4065,
        'name': 'Nadja Pieren',
        'number': 2781,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': '109517535',
        'twitterName': 'HPPortmann',
        'personId': 4141,
        'name': 'Hans-Peter Portmann',
        'number': 3043,
        'council': 'NR',
        'party': 'FDP-Liberale',
    },
    {
        'id': '3070292500',
        'twitterName': 'DorisFiala',
        'personId': 3877,
        'name': 'Doris Fiala',
        'number': 2680,
        'council': 'NR',
        'party': 'FDP-Liberale',
    },
    {
        'id': '3290133496',
        'twitterName': 'engler_stefan',
        'personId': 4055,
        'name': 'Stefan Engler',
        'number': 2768,
        'council': 'SR',
        'party': 'CVP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4042,
        'name': 'Sebastian Frehner',
        'number': 2750,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': '35465127',
        'twitterName': 'hhiltpold',
        'personId': 3888,
        'name': 'Hugues Hiltpold',
        'number': 2691,
        'council': 'NR',
        'party': 'FDP-Liberale',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4175,
        'name': 'Mauro Tuena',
        'number': 3097,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4135,
        'name': 'Raymond Clottu',
        'number': 3037,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': '617269323',
        'twitterName': 'GraberKonrad',
        'personId': 3921,
        'name': 'Konrad Graber',
        'number': 2724,
        'council': 'SR',
        'party': 'CVP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4062,
        'name': 'Karin Keller-Sutter',
        'number': 2769,
        'council': 'SR',
        'party': 'FDP-Liberale',
    },
    {
        'id': '546752881',
        'twitterName': 'UGiezendanner',
        'personId': 91,
        'name': 'Ulrich Giezendanner',
        'number': 2292,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': '778644518',
        'twitterName': 'NordmannRoger',
        'personId': 1279,
        'name': 'Roger Nordmann',
        'number': 2648,
        'council': 'NR',
        'party': 'SP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4139,
        'name': 'Thomas Hefti',
        'number': 3041,
        'council': 'SR',
        'party': 'FDP-Liberale',
    },
    {
        'id': '2860664668',
        'twitterName': 'RuthHumbel',
        'personId': 1071,
        'name': 'Ruth Humbel',
        'number': 2580,
        'council': 'NR',
        'party': 'CVP',
    },
    {
        'id': '113616426',
        'twitterName': 'BernhardGuhl',
        'personId': 4082,
        'name': 'Bernhard Guhl',
        'number': 2785,
        'council': 'NR',
        'party': 'BDP',
    },
    {
        'id': '1052528581',
        'twitterName': 'enussbi',
        'personId': 3899,
        'name': 'Eric Nussbaumer',
        'number': 2702,
        'council': 'NR',
        'party': 'SP',
    },
    {
        'id': '222903677',
        'twitterName': 'ChristianImark',
        'personId': 4164,
        'name': 'Christian Imark',
        'number': 3080,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': '26531313',
        'twitterName': 'lukasreimann',
        'personId': 3901,
        'name': 'Lukas Reimann',
        'number': 2704,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 1108,
        'name': 'Guy Parmelin',
        'number': 2621,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': '621159422',
        'twitterName': 'Valerie_Piller',
        'personId': 4109,
        'name': 'Valérie Piller Carrard',
        'number': 3009,
        'council': 'NR',
        'party': 'SP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 1148,
        'name': 'Géraldine Savary',
        'number': 2629,
        'council': 'SR',
        'party': 'SP',
    },
    {
        'id': '3428301377',
        'twitterName': 'OliFrancais',
        'personId': 3879,
        'name': 'Olivier Français',
        'number': 2682,
        'council': 'SR',
        'party': 'FDP-Liberale',
    },
    {
        'id': '3133285757',
        'twitterName': 'WernerSalzmann',
        'personId': 4172,
        'name': 'Werner Salzmann',
        'number': 3092,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 1318,
        'name': 'Louis Schelbert',
        'number': 2654,
        'council': 'NR',
        'party': 'GPS',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 801,
        'name': 'Fabio Abate',
        'number': 2565,
        'council': 'SR',
        'party': 'FDP-Liberale',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4177,
        'name': 'Bruno Walliser',
        'number': 3099,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': '3374457514',
        'twitterName': 'nr_mayagraf',
        'personId': 806,
        'name': 'Maya Graf',
        'number': 2569,
        'council': 'NR',
        'party': 'GPS',
    },
    {
        'id': '155823857',
        'twitterName': 'IsabelleMoret',
        'personId': 1346,
        'name': 'Isabelle Moret',
        'number': 2660,
        'council': 'NR',
        'party': 'FDP-Liberale',
    },
    {
        'id': '2881577681',
        'twitterName': 'meyer_mattea',
        'personId': 4198,
        'name': 'Mattea Meyer',
        'number': 3087,
        'council': 'NR',
        'party': 'SP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 3885,
        'name': 'Jean-Pierre Grin',
        'number': 2688,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4097,
        'name': 'Leo Müller',
        'number': 3012,
        'council': 'NR',
        'party': 'CVP',
    },
    {
        'id': '2948791281',
        'twitterName': 'th_hardegger',
        'personId': 4061,
        'name': 'Thomas Hardegger',
        'number': 2763,
        'council': 'NR',
        'party': 'SP',
    },
    {
        'id': '67100346',
        'twitterName': 'beaheim',
        'personId': 1156,
        'name': 'Bea Heim',
        'number': 2601,
        'council': 'NR',
        'party': 'SP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4106,
        'name': 'Martin Naef',
        'number': 3018,
        'council': 'NR',
        'party': 'SP',
    },
    {
        'id': '196646702',
        'twitterName': 'PirminBischof',
        'personId': 3871,
        'name': 'Pirmin Bischof',
        'number': 2674,
        'council': 'SR',
        'party': 'CVP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4100,
        'name': 'Albert Rösti',
        'number': 3010,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 354,
        'name': 'Silva Semadeni',
        'number': 2417,
        'council': 'NR',
        'party': 'SP',
    },
    {
        'id': '2899280753',
        'twitterName': 'uschneiderschue',
        'personId': 4123,
        'name': 'Ursula Schneider Schüttel',
        'number': 3028,
        'council': 'NR',
        'party': 'SP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 3865,
        'name': 'Jean-François Steiert',
        'number': 2669,
        'council': 'NR',
        'party': 'SP',
    },
    {
        'id': '2226700633',
        'twitterName': 'MarianneStreiff',
        'personId': 4036,
        'name': 'Marianne Streiff-Feller',
        'number': 2747,
        'council': 'NR',
        'party': 'EVP',
    },
    {
        'id': '3301771943',
        'twitterName': 'LaurentWehrli',
        'personId': 4194,
        'name': 'Laurent Wehrli',
        'number': 3100,
        'council': 'NR',
        'party': 'FDP-Liberale',
    },
    {
        'id': '121068845',
        'twitterName': 'zac1967',
        'personId': 4178,
        'name': 'Claudio Zanetti',
        'number': 3101,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 3918,
        'name': 'Werner Luginbühl',
        'number': 2721,
        'council': 'SR',
        'party': 'BDP',
    },
    {
        'id': '227087638',
        'twitterName': 'yferi',
        'personId': 4069,
        'name': 'Yvonne Feri',
        'number': 2777,
        'council': 'NR',
        'party': 'SP',
    },
    {
        'id': '761741430',
        'twitterName': 'LandoltMartin',
        'personId': 4008,
        'name': 'Martin Landolt',
        'number': 2735,
        'council': 'NR',
        'party': 'BDP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 1111,
        'name': 'Felix Müri',
        'number': 2618,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': '1360306513',
        'twitterName': 'BulliardMarbach',
        'personId': 4101,
        'name': 'Christine Bulliard-Marbach',
        'number': 3017,
        'council': 'NR',
        'party': 'CVP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4167,
        'name': 'Magdalena Martullo-Blocher',
        'number': 3085,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': '406232148',
        'twitterName': 'MathiasReynard',
        'personId': 4091,
        'name': 'Mathias Reynard',
        'number': 2795,
        'council': 'NR',
        'party': 'SP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4125,
        'name': 'Gregor Rutz',
        'number': 3030,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 1159,
        'name': 'Pirmin Schwander',
        'number': 2631,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': '1530247224',
        'twitterName': 'RegulaRytz',
        'personId': 4095,
        'name': 'Regula Rytz',
        'number': 3000,
        'council': 'NR',
        'party': 'GPS',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4085,
        'name': 'Karl Vogler',
        'number': 2787,
        'council': 'NR',
        'party': 'csp-ow',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4068,
        'name': 'Roland Eberle',
        'number': 2774,
        'council': 'SR',
        'party': 'SVP',
    },
    {
        'id': '619225869',
        'twitterName': 'fderder',
        'personId': 4079,
        'name': 'Fathi Derder',
        'number': 2788,
        'council': 'NR',
        'party': 'FDP-Liberale',
    },
    {
        'id': '45513818',
        'twitterName': 'SchmidFederer',
        'personId': 3904,
        'name': 'Barbara Schmid-Federer',
        'number': 2707,
        'council': 'NR',
        'party': 'CVP',
    },
    {
        'id': '157431387',
        'twitterName': 'CarloSommaruga',
        'personId': 1120,
        'name': 'Carlo Sommaruga',
        'number': 2632,
        'council': 'NR',
        'party': 'SP',
    },
    {
        'id': '365423665',
        'twitterName': 'PetraGoessi',
        'personId': 4116,
        'name': 'Petra Gössi',
        'number': 3023,
        'council': 'NR',
        'party': 'FDP-Liberale',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 519,
        'name': 'Hansjörg Walter',
        'number': 2541,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': '84155033',
        'twitterName': 'zanettiroberto',
        'personId': 525,
        'name': 'Roberto Zanetti',
        'number': 2546,
        'council': 'SR',
        'party': 'SP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 1142,
        'name': 'Walter Wobmann',
        'number': 2638,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': '607353825',
        'twitterName': 'ada_marra',
        'personId': 3923,
        'name': 'Ada Marra',
        'number': 2726,
        'council': 'NR',
        'party': 'SP',
    },
    {
        'id': '3039132947',
        'twitterName': 'BrandHeinz',
        'personId': 4067,
        'name': 'Heinz Brand',
        'number': 2772,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': '50262858',
        'twitterName': 'MarcoRomanoPPD',
        'personId': 4120,
        'name': 'Marco Romano',
        'number': 3025,
        'council': 'NR',
        'party': 'CVP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4217,
        'name': 'Rocco Cattaneo',
        'number': 3118,
        'party': 'FDP-Liberale',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4074,
        'name': 'Pierre-Alain Fridez',
        'number': 2778,
        'council': 'NR',
        'party': 'SP',
    },
    {
        'id': '2841156604',
        'twitterName': 'TimGuldimann',
        'personId': 4196,
        'name': 'Tim Guldimann',
        'number': 3077,
        'council': 'NR',
        'party': 'SP',
    },
    {
        'id': '2613366038',
        'twitterName': 'ChantalGallade',
        'personId': 1125,
        'name': 'Chantal Galladé',
        'number': 2597,
        'council': 'NR',
        'party': 'SP',
    },
    {
        'id': '463149099',
        'twitterName': 'Juerg_Grossen',
        'personId': 4083,
        'name': 'Jürg Grossen',
        'number': 2786,
        'council': 'NR',
        'party': 'glp',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4087,
        'name': 'Jean-Paul Gschwind',
        'number': 2798,
        'council': 'NR',
        'party': 'CVP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4186,
        'name': 'Lisa Mazzone',
        'number': 3086,
        'council': 'NR',
        'party': 'GPS',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 3895,
        'name': 'Christian Lüscher',
        'number': 2698,
        'council': 'NR',
        'party': 'FDP-Liberale',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 1345,
        'name': 'Thomas Müller',
        'number': 2661,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': '303319566',
        'twitterName': 'SchenkerSilvia',
        'personId': 1129,
        'name': 'Silvia Schenker',
        'number': 2630,
        'council': 'NR',
        'party': 'SP',
    },
    {
        'id': '4702673004',
        'twitterName': 'SchneeDani67',
        'personId': 4060,
        'name': 'Daniela Schneeberger',
        'number': 2766,
        'council': 'NR',
        'party': 'FDP-Liberale',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 3897,
        'name': 'Tiana Angelina Moser',
        'number': 2700,
        'council': 'NR',
        'party': 'glp',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4112,
        'name': 'Thomas Minder',
        'number': 3019,
        'council': 'SR',
        'party': '-',
    },
    {
        'id': '72560162',
        'twitterName': 'Violapamherd',
        'personId': 1288,
        'name': 'Viola Amherd',
        'number': 2646,
        'council': 'NR',
        'party': 'CVP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 471,
        'name': 'Felix Gutzwiller',
        'number': 2495,
        'council': 'SR',
        'party': 'FDP-Liberale',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 224,
        'name': 'Alexander Tschäppät',
        'number': 2328,
        'council': 'NR',
        'party': 'SP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 477,
        'name': 'Claude Janiak',
        'number': 2501,
        'council': 'SR',
        'party': 'SP',
    },
    {
        'id': '2536784770',
        'twitterName': 'RobertCramer_GE',
        'personId': 3914,
        'name': 'Robert Cramer',
        'number': 2717,
        'council': 'SR',
        'party': 'GPS',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 1147,
        'name': 'Margret Kiener Nellen',
        'number': 2608,
        'council': 'NR',
        'party': 'SP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 3905,
        'name': 'Roberto Schmidt',
        'number': 2708,
        'council': 'NR',
        'party': 'CVP',
    },
    {
        'id': '991720068',
        'twitterName': 'fregazzi',
        'personId': 4072,
        'name': 'Fabio Regazzi',
        'number': 2776,
        'council': 'NR',
        'party': 'CVP',
    },
    {
        'id': '3130690545',
        'twitterName': 'QuadrantiR',
        'personId': 4066,
        'name': 'Rosmarie Quadranti',
        'number': 2779,
        'council': 'NR',
        'party': 'BDP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4124,
        'name': 'Peter Schilliger',
        'number': 3029,
        'council': 'NR',
        'party': 'FDP-Liberale',
    },
    {
        'id': '3295223895',
        'twitterName': 'RaphaelComteCE',
        'personId': 4026,
        'name': 'Raphaël Comte',
        'number': 2741,
        'council': 'SR',
        'party': 'FDP-Liberale',
    },
    {
        'id': '93878848',
        'twitterName': 'KathyRiklin',
        'personId': 502,
        'name': 'Kathy Riklin',
        'number': 2525,
        'council': 'NR',
        'party': 'CVP',
    },
    {
        'id': '304379532',
        'twitterName': 'RuediNoser',
        'personId': 1153,
        'name': 'Ruedi Noser',
        'number': 2619,
        'council': 'SR',
        'party': 'FDP-Liberale',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 3831,
        'name': 'Ivo Bischofberger',
        'number': 2667,
        'council': 'SR',
        'party': 'CVP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 514,
        'name': 'Jürg Stahl',
        'number': 2536,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 3931,
        'name': 'Thomas Weibel',
        'number': 2728,
        'council': 'NR',
        'party': 'glp',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 1267,
        'name': 'Hans Stöckli',
        'number': 2647,
        'council': 'SR',
        'party': 'SP',
    },
    {
        'id': '241509277',
        'twitterName': 'PascaleBruderer',
        'personId': 823,
        'name': 'Pascale Bruderer Wyss',
        'number': 2573,
        'council': 'SR',
        'party': 'SP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 1104,
        'name': 'Jakob Büchler',
        'number': 2588,
        'council': 'NR',
        'party': 'CVP',
    },
    {
        'id': '149008275',
        'twitterName': 'I_Chevalley',
        'personId': 4108,
        'name': 'Isabelle Chevalley',
        'number': 3604,
        'council': 'NR',
        'party': 'glp',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 1122,
        'name': 'Kurt Fluri',
        'number': 2594,
        'council': 'NR',
        'party': 'FDP-Liberale',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 321,
        'name': 'Peter Föhn',
        'number': 2385,
        'council': 'SR',
        'party': 'SVP',
    },
    {
        'id': '1307125520',
        'twitterName': 'verenaherzog',
        'personId': 4129,
        'name': 'Verena Herzog',
        'number': 3033,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': '75777484',
        'twitterName': 'PhilippHadorn',
        'personId': 4076,
        'name': 'Philipp Hadorn',
        'number': 2792,
        'council': 'NR',
        'party': 'SP',
    },
    {
        'id': '270609583',
        'twitterName': 'ignaziocassis',
        'personId': 3828,
        'name': 'Ignazio Cassis',
        'number': 2664,
        'council': 'NR',
        'party': 'FDP-Liberale',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 825,
        'name': 'Hannes Germann',
        'number': 2575,
        'council': 'SR',
        'party': 'SVP',
    },
    {
        'id': '529478391',
        'twitterName': 'PaulRechsteiner',
        'personId': 172,
        'name': 'Paul Rechsteiner',
        'number': 2143,
        'council': 'SR',
        'party': 'SP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4078,
        'name': 'Martin Schmid',
        'number': 2783,
        'council': 'SR',
        'party': 'FDP-Liberale',
    },
    {
        'id': '226922317',
        'twitterName': 'ChristaMarkwald',
        'personId': 1139,
        'name': 'Christa Markwalder',
        'number': 2614,
        'council': 'NR',
        'party': 'FDP-Liberale',
    },
    {
        'id': '40872955',
        'twitterName': 'ChristianLevrat',
        'personId': 1150,
        'name': 'Christian Levrat',
        'number': 2613,
        'council': 'SR',
        'party': 'SP',
    },
    {
        'id': '3246291543',
        'twitterName': 'danieljositsch',
        'personId': 3891,
        'name': 'Daniel Jositsch',
        'number': 2694,
        'council': 'SR',
        'party': 'SP',
    },
    {
        'id': '132899636',
        'twitterName': 'HaeberliKollerB',
        'personId': 1106,
        'name': 'Brigitte Häberli-Koller',
        'number': 2600,
        'council': 'SR',
        'party': 'CVP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 3916,
        'name': 'Claude Hêche',
        'number': 2719,
        'council': 'SR',
        'party': 'SP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 466,
        'name': 'Anita Fetz',
        'number': 2061,
        'council': 'SR',
        'party': 'SP',
    },
    {
        'id': '379014467',
        'twitterName': 'votrevoix',
        'personId': 341,
        'name': 'Liliane Maury Pasquier',
        'number': 2405,
        'council': 'SR',
        'party': 'SP',
    },
    {
        'id': '3291242279',
        'twitterName': 'gerhardpfister',
        'personId': 1109,
        'name': 'Gerhard Pfister',
        'number': 2623,
        'council': 'NR',
        'party': 'CVP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 3920,
        'name': 'Anne Seydoux-Christe',
        'number': 2723,
        'council': 'SR',
        'party': 'CVP',
    },
    {
        'id': '3064353419',
        'twitterName': 'maximilian_rei',
        'personId': 173,
        'name': 'Maximilian Reimann',
        'number': 2147,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': '271271590',
        'twitterName': 'berberatdidier',
        'personId': 305,
        'name': 'Didier Berberat',
        'number': 2370,
        'council': 'SR',
        'party': 'SP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 4064,
        'name': 'Joachim Eder',
        'number': 2780,
        'council': 'SR',
        'party': 'FDP-Liberale',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 1162,
        'name': 'Alex Kuprecht',
        'number': 2641,
        'council': 'SR',
        'party': 'SVP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 3875,
        'name': 'Corina Eichenberger-Walther',
        'number': 2678,
        'council': 'NR',
        'party': 'FDP-Liberale',
    },
    {
        'id': '350243582',
        'twitterName': 'LuziStamm',
        'personId': 214,
        'name': 'Luzi Stamm',
        'number': 2323,
        'council': 'NR',
        'party': 'SVP',
    },
    {
        'id': '442685639',
        'twitterName': 'AndreaCaroniAR',
        'personId': 4075,
        'name': 'Andrea Caroni',
        'number': 2775,
        'council': 'SR',
        'party': 'FDP-Liberale',
    },
    {
        'id': '332184640',
        'twitterName': 'SusanneSlo',
        'personId': 487,
        'name': 'Susanne Leutenegger Oberholzer',
        'number': 2129,
        'council': 'NR',
        'party': 'SP',
    },
    {
        'id': '804958800',
        'twitterName': 'lombardi1956',
        'personId': 540,
        'name': 'Filippo Lombardi',
        'number': 2561,
        'council': 'SR',
        'party': 'CVP',
    },
    {
        'id': null,
        'twitterName': null,
        'personId': 3915,
        'name': 'Jean-René Fournier',
        'number': 2718,
        'council': 'SR',
        'party': 'CVP',
    },
];
/* harmony export (immutable) */ __webpack_exports__["a"] = MAPPING;

//# sourceMappingURL=mapping.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baAmChart/baAmChart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme_services__ = __webpack_require__("../../../../../src/app/theme/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_amcharts3__ = __webpack_require__("../../../../amcharts3/amcharts/amcharts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_amcharts3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_amcharts3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_amcharts3_amcharts_plugins_responsive_responsive_js__ = __webpack_require__("../../../../amcharts3/amcharts/plugins/responsive/responsive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_amcharts3_amcharts_plugins_responsive_responsive_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_amcharts3_amcharts_plugins_responsive_responsive_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_amcharts3_amcharts_serial_js__ = __webpack_require__("../../../../amcharts3/amcharts/serial.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_amcharts3_amcharts_serial_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_amcharts3_amcharts_serial_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ammap3__ = __webpack_require__("../../../../ammap3/ammap/ammap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ammap3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ammap3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ammap3_ammap_maps_js_worldLow__ = __webpack_require__("../../../../ammap3/ammap/maps/js/worldLow.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ammap3_ammap_maps_js_worldLow___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ammap3_ammap_maps_js_worldLow__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__baAmChartTheme_service__ = __webpack_require__("../../../../../src/app/theme/components/baAmChart/baAmChartTheme.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaAmChart; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








let BaAmChart = class BaAmChart {
    constructor(_baAmChartThemeService) {
        this._baAmChartThemeService = _baAmChartThemeService;
        this.onChartReady = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
        this._loadChartsLib();
    }
    ngOnInit() {
        AmCharts.themes.blur = this._baAmChartThemeService.getTheme();
    }
    ngAfterViewInit() {
        const chart = AmCharts.makeChart(this._selector.nativeElement, this.baAmChartConfiguration);
        this.onChartReady.emit(chart);
    }
    _loadChartsLib() {
        __WEBPACK_IMPORTED_MODULE_1__theme_services__["c" /* BaThemePreloader */].registerLoader(new Promise((resolve, reject) => {
            const amChartsReadyMsg = 'AmCharts ready';
            if (AmCharts.isReady) {
                resolve(amChartsReadyMsg);
            }
            else {
                AmCharts.ready(function () {
                    resolve(amChartsReadyMsg);
                });
            }
        }));
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Input */])(),
    __metadata("design:type", Object)
], BaAmChart.prototype, "baAmChartConfiguration", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Input */])(),
    __metadata("design:type", String)
], BaAmChart.prototype, "baAmChartClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Output */])(),
    __metadata("design:type", Object)
], BaAmChart.prototype, "onChartReady", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ViewChild */])('baAmChart'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ElementRef */]) === "function" && _a || Object)
], BaAmChart.prototype, "_selector", void 0);
BaAmChart = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'ba-am-chart',
        template: __webpack_require__("../../../../../src/app/theme/components/baAmChart/baAmChart.html"),
        styles: [__webpack_require__("../../../../../src/app/theme/components/baAmChart/baAmChart.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_7__baAmChartTheme_service__["a" /* BaAmChartThemeService */]],
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__baAmChartTheme_service__["a" /* BaAmChartThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__baAmChartTheme_service__["a" /* BaAmChartThemeService */]) === "function" && _b || Object])
], BaAmChart);

var _a, _b;
//# sourceMappingURL=baAmChart.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baAmChart/baAmChart.html":
/***/ (function(module, exports) {

module.exports = "<div #baAmChart class=\"ba-am-chart {{baAmChartClass || ''}}\"></div>\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/components/baAmChart/baAmChart.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ammapAlert {\n  display: table-cell;\n  vertical-align: middle;\n  text-align: center;\n  font-family: verdana,helvetica,arial,sans-serif;\n  font-size: 12px;\n  color: #CC0000; }\n\n.ammapDescriptionWindow {\n  font-size: 11px;\n  font-family: verdana,helvetica,arial,sans-serif;\n  background-color: #FFFFFF;\n  border-style: solid;\n  border-color: #DADADA;\n  border-width: 1px;\n  color: #000000;\n  padding: 8px;\n  box-sizing: border-box; }\n\n.ammapDescriptionTitle {\n  font-size: 12px;\n  font-weight: bold;\n  font-family: verdana,helvetica,arial,sans-serif;\n  padding-bottom: 5px; }\n\n.ammapObjectList ul {\n  padding-left: 20px;\n  list-style: square outside;\n  color: #999999;\n  font-family: verdana,helvetica,arial,sans-serif;\n  font-size: 12px; }\n\n.ammapObjectList ul ul {\n  padding-left: 14px; }\n\n.ammapObjectList a {\n  color: #000000; }\n\n.ammapObjectList a {\n  color: #000000;\n  text-decoration: none;\n  display: block;\n  padding: 2px; }\n\n.ammapObjectList a:hover {\n  color: #CC0000;\n  text-decoration: none;\n  background: #FFFFFF;\n  cursor: pointer;\n  display: block; }\n\n.ammapDescriptionText {\n  overflow: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/components/baAmChart/baAmChartTheme.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme__ = __webpack_require__("../../../../../src/app/theme/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaAmChartThemeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let BaAmChartThemeService = class BaAmChartThemeService {
    constructor(_baConfig) {
        this._baConfig = _baConfig;
    }
    getTheme() {
        const layoutColors = this._baConfig.get().colors;
        return {
            themeName: 'blur',
            AmChart: {
                color: layoutColors.defaultText,
                backgroundColor: '#FFFFFF',
            },
            AmCoordinateChart: {
                colors: [layoutColors.primary, layoutColors.danger, layoutColors.warning,
                    layoutColors.success, layoutColors.info, layoutColors.primaryDark, layoutColors.warningLight,
                    layoutColors.successDark, layoutColors.successLight, layoutColors.primaryLight, layoutColors.warningDark],
            },
            AmStockChart: {
                colors: [layoutColors.primary, layoutColors.danger, layoutColors.warning,
                    layoutColors.success, layoutColors.info, layoutColors.primaryDark, layoutColors.warningLight,
                    layoutColors.successDark, layoutColors.successLight, layoutColors.primaryLight, layoutColors.warningDark],
            },
            AmSlicedChart: {
                colors: [layoutColors.primary, layoutColors.danger, layoutColors.warning,
                    layoutColors.success, layoutColors.info, layoutColors.primaryDark, layoutColors.warningLight,
                    layoutColors.successDark, layoutColors.successLight, layoutColors.primaryLight, layoutColors.warningDark],
                labelTickColor: '#FFFFFF',
                labelTickAlpha: 0.3,
            },
            AmRectangularChart: {
                zoomOutButtonColor: '#FFFFFF',
                zoomOutButtonRollOverAlpha: 0.15,
                zoomOutButtonImage: 'lens.png',
            },
            AxisBase: {
                axisColor: '#FFFFFF',
                axisAlpha: 0.3,
                gridAlpha: 0.1,
                gridColor: '#FFFFFF',
            },
            ChartScrollbar: {
                backgroundColor: '#FFFFFF',
                backgroundAlpha: 0.12,
                graphFillAlpha: 0.5,
                graphLineAlpha: 0,
                selectedBackgroundColor: '#FFFFFF',
                selectedBackgroundAlpha: 0.4,
                gridAlpha: 0.15,
            },
            ChartCursor: {
                cursorColor: layoutColors.primary,
                color: '#FFFFFF',
                cursorAlpha: 0.5,
            },
            AmLegend: {
                color: '#FFFFFF',
            },
            AmGraph: {
                lineAlpha: 0.9,
            },
            GaugeArrow: {
                color: '#FFFFFF',
                alpha: 0.8,
                nailAlpha: 0,
                innerRadius: '40%',
                nailRadius: 15,
                startWidth: 15,
                borderAlpha: 0.8,
                nailBorderAlpha: 0,
            },
            GaugeAxis: {
                tickColor: '#FFFFFF',
                tickAlpha: 1,
                tickLength: 15,
                minorTickLength: 8,
                axisThickness: 3,
                axisColor: '#FFFFFF',
                axisAlpha: 1,
                bandAlpha: 0.8,
            },
            TrendLine: {
                lineColor: layoutColors.danger,
                lineAlpha: 0.8,
            },
            // ammap
            AreasSettings: {
                alpha: 0.8,
                color: layoutColors.info,
                colorSolid: layoutColors.primaryDark,
                unlistedAreasAlpha: 0.4,
                unlistedAreasColor: '#FFFFFF',
                outlineColor: '#FFFFFF',
                outlineAlpha: 0.5,
                outlineThickness: 0.5,
                rollOverColor: layoutColors.primary,
                rollOverOutlineColor: '#FFFFFF',
                selectedOutlineColor: '#FFFFFF',
                selectedColor: '#f15135',
                unlistedAreasOutlineColor: '#FFFFFF',
                unlistedAreasOutlineAlpha: 0.5,
            },
            LinesSettings: {
                color: '#FFFFFF',
                alpha: 0.8,
            },
            ImagesSettings: {
                alpha: 0.8,
                labelColor: '#FFFFFF',
                color: '#FFFFFF',
                labelRollOverColor: layoutColors.primaryDark,
            },
            ZoomControl: {
                buttonFillAlpha: 0.8,
                buttonIconColor: layoutColors.default,
                buttonRollOverColor: layoutColors.danger,
                buttonFillColor: layoutColors.primaryDark,
                buttonBorderColor: layoutColors.primaryDark,
                buttonBorderAlpha: 0,
                buttonCornerRadius: 0,
                gridColor: '#FFFFFF',
                gridBackgroundColor: '#FFFFFF',
                buttonIconAlpha: 0.6,
                gridAlpha: 0.6,
                buttonSize: 20,
            },
            SmallMap: {
                mapColor: '#000000',
                rectangleColor: layoutColors.danger,
                backgroundColor: '#FFFFFF',
                backgroundAlpha: 0.7,
                borderThickness: 1,
                borderAlpha: 0.8,
            },
            // the defaults below are set using CSS syntax, you can use any existing css property
            // if you don't use Stock chart, you can delete lines below
            PeriodSelector: {
                color: '#FFFFFF',
            },
            PeriodButton: {
                color: '#FFFFFF',
                background: 'transparent',
                opacity: 0.7,
                border: '1px solid rgba(0, 0, 0, .3)',
                MozBorderRadius: '5px',
                borderRadius: '5px',
                margin: '1px',
                outline: 'none',
                boxSizing: 'border-box',
            },
            PeriodButtonSelected: {
                color: '#FFFFFF',
                backgroundColor: '#b9cdf5',
                border: '1px solid rgba(0, 0, 0, .3)',
                MozBorderRadius: '5px',
                borderRadius: '5px',
                margin: '1px',
                outline: 'none',
                opacity: 1,
                boxSizing: 'border-box',
            },
            PeriodInputField: {
                color: '#FFFFFF',
                background: 'transparent',
                border: '1px solid rgba(0, 0, 0, .3)',
                outline: 'none',
            },
            DataSetSelector: {
                color: '#FFFFFF',
                selectedBackgroundColor: '#b9cdf5',
                rollOverBackgroundColor: '#a8b0e4',
            },
            DataSetCompareList: {
                color: '#FFFFFF',
                lineHeight: '100%',
                boxSizing: 'initial',
                webkitBoxSizing: 'initial',
                border: '1px solid rgba(0, 0, 0, .3)',
            },
            DataSetSelect: {
                border: '1px solid rgba(0, 0, 0, .3)',
                outline: 'none',
            },
        };
    }
};
BaAmChartThemeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__theme__["d" /* BaThemeConfigProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__theme__["d" /* BaThemeConfigProvider */]) === "function" && _a || Object])
], BaAmChartThemeService);

var _a;
//# sourceMappingURL=baAmChartTheme.service.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baAmChart/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baAmChart_component__ = __webpack_require__("../../../../../src/app/theme/components/baAmChart/baAmChart.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baAmChart_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baBackTop/baBackTop.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaBackTop; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let BaBackTop = class BaBackTop {
    constructor() {
        this.position = 400;
        this.showSpeed = 500;
        this.moveSpeed = 1000;
    }
    ngAfterViewInit() {
        this._onWindowScroll();
    }
    _onClick() {
        jQuery('html, body').animate({ scrollTop: 0 }, { duration: this.moveSpeed });
        return false;
    }
    _onWindowScroll() {
        const el = this._selector.nativeElement;
        window.scrollY > this.position ? jQuery(el).fadeIn(this.showSpeed) : jQuery(el).fadeOut(this.showSpeed);
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Input */])(),
    __metadata("design:type", Number)
], BaBackTop.prototype, "position", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Input */])(),
    __metadata("design:type", Number)
], BaBackTop.prototype, "showSpeed", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Input */])(),
    __metadata("design:type", Number)
], BaBackTop.prototype, "moveSpeed", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ViewChild */])('baBackTop'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ElementRef */]) === "function" && _a || Object)
], BaBackTop.prototype, "_selector", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* HostListener */])('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], BaBackTop.prototype, "_onClick", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* HostListener */])('window:scroll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BaBackTop.prototype, "_onWindowScroll", null);
BaBackTop = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'ba-back-top',
        styles: [__webpack_require__("../../../../../src/app/theme/components/baBackTop/baBackTop.scss")],
        template: `
    <i #baBackTop class="fa fa-angle-up back-top ba-back-top" title="Back to Top"></i>
  `,
    })
], BaBackTop);

var _a;
//# sourceMappingURL=baBackTop.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baBackTop/baBackTop.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ba-back-top {\n  position: fixed;\n  width: 52px;\n  height: 52px;\n  cursor: pointer;\n  z-index: 9999;\n  display: none;\n  text-decoration: none;\n  right: 40px;\n  bottom: 40px !important;\n  font-size: 45px;\n  text-align: center;\n  opacity: 0.4;\n  color: #00abff;\n  background-color: rgba(0, 0, 0, 0.75);\n  border-radius: 50%;\n  line-height: 46px; }\n  .ba-back-top:hover {\n    opacity: 0.8; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/components/baBackTop/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baBackTop_component__ = __webpack_require__("../../../../../src/app/theme/components/baBackTop/baBackTop.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baBackTop_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baCard/baCard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaCard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let BaCard = class BaCard {
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Input */])(),
    __metadata("design:type", Object)
], BaCard.prototype, "cardTitle", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Input */])(),
    __metadata("design:type", Object)
], BaCard.prototype, "baCardClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Input */])(),
    __metadata("design:type", Object)
], BaCard.prototype, "cardType", void 0);
BaCard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'ba-card',
        template: __webpack_require__("../../../../../src/app/theme/components/baCard/baCard.html"),
    })
], BaCard);

//# sourceMappingURL=baCard.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baCard/baCard.html":
/***/ (function(module, exports) {

module.exports = "<div baCardBlur class=\"animated fadeIn card {{cardType}} {{baCardClass || ''}}\" zoom-in>\r\n    <div *ngIf=\"cardTitle\" class=\"card-header clearfix\">\r\n        <h3 class=\"card-title\" translate>{{cardTitle}}</h3>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <ng-content></ng-content>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/components/baCard/baCardBlur.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme__ = __webpack_require__("../../../../../src/app/theme/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__baCardBlurHelper_service__ = __webpack_require__("../../../../../src/app/theme/components/baCard/baCardBlurHelper.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaCardBlur; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let BaCardBlur = class BaCardBlur {
    constructor(_baConfig, _baCardBlurHelper, _el) {
        this._baConfig = _baConfig;
        this._baCardBlurHelper = _baCardBlurHelper;
        this._el = _el;
        this.isEnabled = false;
        if (this._isEnabled()) {
            this._baCardBlurHelper.init();
            this._getBodyImageSizesOnBgLoad();
            this._recalculateCardStylesOnBgLoad();
            this.isEnabled = true;
        }
    }
    _onWindowResize() {
        if (this._isEnabled()) {
            this._bodyBgSize = this._baCardBlurHelper.getBodyBgImageSizes();
            this._recalculateCardStyle();
        }
    }
    _getBodyImageSizesOnBgLoad() {
        this._baCardBlurHelper.bodyBgLoad().subscribe(() => {
            this._bodyBgSize = this._baCardBlurHelper.getBodyBgImageSizes();
        });
    }
    _recalculateCardStylesOnBgLoad() {
        this._baCardBlurHelper.bodyBgLoad().subscribe((event) => {
            setTimeout(this._recalculateCardStyle.bind(this));
        });
    }
    _recalculateCardStyle() {
        if (!this._bodyBgSize) {
            return;
        }
        this._el.nativeElement.style.backgroundSize =
            Math.round(this._bodyBgSize.width) + 'px ' + Math.round(this._bodyBgSize.height) + 'px';
        this._el.nativeElement.style.backgroundPosition =
            Math.floor(this._bodyBgSize.positionX) + 'px ' + Math.floor(this._bodyBgSize.positionY) + 'px';
    }
    _isEnabled() {
        return this._baConfig.get().theme.name === 'blur';
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* HostBinding */])('class.card-blur'),
    __metadata("design:type", Boolean)
], BaCardBlur.prototype, "isEnabled", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* HostListener */])('window:resize'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BaCardBlur.prototype, "_onWindowResize", null);
BaCardBlur = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Directive */])({
        selector: '[baCardBlur]',
        providers: [__WEBPACK_IMPORTED_MODULE_2__baCardBlurHelper_service__["a" /* BaCardBlurHelper */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__theme__["d" /* BaThemeConfigProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__theme__["d" /* BaThemeConfigProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__baCardBlurHelper_service__["a" /* BaCardBlurHelper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__baCardBlurHelper_service__["a" /* BaCardBlurHelper */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ElementRef */]) === "function" && _c || Object])
], BaCardBlur);

var _a, _b, _c;
//# sourceMappingURL=baCardBlur.directive.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baCard/baCardBlurHelper.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaCardBlurHelper; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let BaCardBlurHelper = class BaCardBlurHelper {
    init() {
        this._genBgImage();
        this._genImageLoadSubject();
    }
    bodyBgLoad() {
        return this.imageLoadSubject;
    }
    getBodyBgImageSizes() {
        const elemW = document.documentElement.clientWidth;
        const elemH = document.documentElement.clientHeight;
        if (elemW <= 640) {
            return;
        }
        const imgRatio = (this.image.height / this.image.width); // original img ratio
        const containerRatio = (elemH / elemW); // container ratio
        let finalHeight, finalWidth;
        if (containerRatio > imgRatio) {
            finalHeight = elemH;
            finalWidth = (elemH / imgRatio);
        }
        else {
            finalWidth = elemW;
            finalHeight = (elemW * imgRatio);
        }
        return {
            width: finalWidth, height: finalHeight,
            positionX: (elemW - finalWidth) / 2, positionY: (elemH - finalHeight) / 2,
        };
    }
    _genBgImage() {
        this.image = new Image();
        const computedStyle = getComputedStyle(document.body.querySelector('main'), ':before');
        this.image.src = computedStyle.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2');
    }
    _genImageLoadSubject() {
        this.imageLoadSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.image.onerror = (err) => {
            this.imageLoadSubject.complete();
        };
        this.image.onload = () => {
            this.imageLoadSubject.next(null);
            this.imageLoadSubject.complete();
        };
    }
};
BaCardBlurHelper = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])()
], BaCardBlurHelper);

//# sourceMappingURL=baCardBlurHelper.service.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baCard/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baCard_component__ = __webpack_require__("../../../../../src/app/theme/components/baCard/baCard.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baCard_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baCheckbox/baCheckbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaCheckbox; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


let BaCheckbox = class BaCheckbox {
    constructor(state) {
        this.model = state;
        state.valueAccessor = this;
    }
    onChange(value) {
    }
    onTouch(value) {
    }
    writeValue(state) {
        this.state = state;
    }
    registerOnChange(fn) {
        this.onChange = function (state) {
            this.writeValue(state);
            this.model.viewToModelUpdate(state);
        };
    }
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Input */])(),
    __metadata("design:type", Boolean)
], BaCheckbox.prototype, "disabled", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Input */])(),
    __metadata("design:type", String)
], BaCheckbox.prototype, "label", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Input */])(),
    __metadata("design:type", String)
], BaCheckbox.prototype, "value", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Input */])(),
    __metadata("design:type", String)
], BaCheckbox.prototype, "baCheckboxClass", void 0);
BaCheckbox = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'ba-checkbox[ngModel]',
        styles: [__webpack_require__("../../../../../src/app/theme/components/baCheckbox/baCheckbox.scss")],
        template: __webpack_require__("../../../../../src/app/theme/components/baCheckbox/baCheckbox.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NgModel */]],
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Self */])()),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NgModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NgModel */]) === "function" && _a || Object])
], BaCheckbox);

var _a;
//# sourceMappingURL=baCheckbox.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baCheckbox/baCheckbox.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"{{baCheckboxClass}}\">\r\n  <label class=\"checkbox-inline custom-checkbox nowrap\">\r\n    <input type=\"checkbox\" [checked]=state\r\n           (change)=\"onChange($event.target.checked)\"\r\n           [disabled]=\"disabled\" [value]=\"value\">\r\n    <span>{{label}}</span>\r\n  </label>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/components/baCheckbox/baCheckbox.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".has-success {\n  position: relative; }\n  .has-success .control-label {\n    color: #ffffff; }\n  .has-success .form-control {\n    border: 1px solid #a2db59; }\n    .has-success .form-control:focus {\n      box-shadow: none;\n      border-color: #8bd22f; }\n  .has-success label.custom-checkbox {\n    color: #a2db59; }\n    .has-success label.custom-checkbox > span:before {\n      color: #a2db59; }\n    .has-success label.custom-checkbox > span:hover:before {\n      border-color: #a2db59; }\n  .has-success .form-control-feedback {\n    color: #a2db59; }\n  .has-success .input-group-addon {\n    background-color: #a2db59;\n    color: #ffffff; }\n\n.has-warning {\n  position: relative; }\n  .has-warning .control-label {\n    color: #ffffff; }\n  .has-warning .form-control {\n    border: 1px solid #ecc839; }\n    .has-warning .form-control:focus {\n      box-shadow: none;\n      border-color: #e7ba08; }\n  .has-warning label.custom-checkbox {\n    color: #ecc839; }\n    .has-warning label.custom-checkbox > span:before {\n      color: #ecc839; }\n    .has-warning label.custom-checkbox > span:hover:before {\n      border-color: #ecc839; }\n  .has-warning .form-control-feedback {\n    color: #ecc839; }\n  .has-warning .input-group-addon {\n    background-color: #ecc839;\n    color: #ffffff; }\n\n.has-error {\n  position: relative; }\n  .has-error .control-label {\n    color: #ffffff; }\n  .has-error .form-control {\n    border: 1px solid #fa758e; }\n    .has-error .form-control:focus {\n      box-shadow: none;\n      border-color: #f95372; }\n  .has-error label.custom-checkbox {\n    color: #fa758e; }\n    .has-error label.custom-checkbox > span:before {\n      color: #fa758e; }\n    .has-error label.custom-checkbox > span:hover:before {\n      border-color: #fa758e; }\n  .has-error .form-control-feedback {\n    color: #fa758e; }\n  .has-error .input-group-addon {\n    background-color: #fa758e;\n    color: #ffffff; }\n\nlabel.custom-checkbox {\n  margin-bottom: 12px; }\n  label.custom-checkbox > span {\n    display: block;\n    margin-right: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/components/baCheckbox/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baCheckbox_component__ = __webpack_require__("../../../../../src/app/theme/components/baCheckbox/baCheckbox.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baCheckbox_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baContentTop/baContentTop.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_state__ = __webpack_require__("../../../../../src/app/global.state.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaContentTop; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let BaContentTop = class BaContentTop {
    constructor(_state) {
        this._state = _state;
        this.activePageTitle = '';
        this._state.subscribe('menu.activeLink', (activeLink) => {
            if (activeLink) {
                this.activePageTitle = activeLink.title;
            }
        });
    }
};
BaContentTop = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'ba-content-top',
        styles: [__webpack_require__("../../../../../src/app/theme/components/baContentTop/baContentTop.scss")],
        template: __webpack_require__("../../../../../src/app/theme/components/baContentTop/baContentTop.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__global_state__["a" /* GlobalState */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__global_state__["a" /* GlobalState */]) === "function" && _a || Object])
], BaContentTop);

var _a;
//# sourceMappingURL=baContentTop.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baContentTop/baContentTop.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-top clearfix\">\r\n  <h1 class=\"al-title\" translate>{{ activePageTitle }}</h1>\r\n\r\n  <ul class=\"breadcrumb al-breadcrumb\">\r\n    <li class=\"breadcrumb-item\">\r\n      <a routerLink=\"/pages/dashboard\" translate>{{'general.home'}}</a>\r\n    </li>\r\n    <li class=\"breadcrumb-item active\" translate>{{ activePageTitle }}</li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/components/baContentTop/baContentTop.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content-top {\n  padding-top: 13px;\n  padding-bottom: 27px; }\n\nh1.al-title {\n  font-weight: 700;\n  color: #ffffff;\n  float: left;\n  width: auto;\n  margin: 0;\n  padding: 0;\n  font-size: 24px;\n  text-transform: uppercase;\n  opacity: 0.9; }\n\n.al-breadcrumb {\n  background: none;\n  color: #ffffff;\n  padding: 0;\n  margin: 0;\n  float: right;\n  padding-top: 11px; }\n  .al-breadcrumb li {\n    font-size: 18px;\n    font-weight: 400; }\n    .al-breadcrumb li a {\n      color: #4dc4ff; }\n    .al-breadcrumb li.breadcrumb-item.active {\n      color: #ffffff; }\n\n.al-look {\n  float: right;\n  margin-right: 10px;\n  padding-top: 10px; }\n  .al-look > a {\n    font-size: 19px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/components/baContentTop/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baContentTop_component__ = __webpack_require__("../../../../../src/app/theme/components/baContentTop/baContentTop.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baContentTop_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baMenu/baMenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("../../../../../src/app/theme/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_state__ = __webpack_require__("../../../../../src/app/global.state.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaMenu; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let BaMenu = class BaMenu {
    constructor(_router, _service, _state) {
        this._router = _router;
        this._service = _service;
        this._state = _state;
        this.sidebarCollapsed = false;
        this.expandMenu = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
        this.outOfArea = -200;
    }
    updateMenu(newMenuItems) {
        this.menuItems = newMenuItems;
        this.selectMenuAndNotify();
    }
    selectMenuAndNotify() {
        if (this.menuItems) {
            this.menuItems = this._service.selectMenuItem(this.menuItems);
            this._state.notifyDataChanged('menu.activeLink', this._service.getCurrentItem());
        }
    }
    ngOnInit() {
        this._onRouteChange = this._router.events.subscribe((event) => {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* NavigationEnd */]) {
                if (this.menuItems) {
                    this.selectMenuAndNotify();
                }
                else {
                    // on page load we have to wait as event is fired before menu elements are prepared
                    setTimeout(() => this.selectMenuAndNotify());
                }
            }
        });
        this._menuItemsSub = this._service.menuItems.subscribe(this.updateMenu.bind(this));
    }
    ngOnDestroy() {
        this._onRouteChange.unsubscribe();
        this._menuItemsSub.unsubscribe();
    }
    hoverItem($event) {
        this.showHoverElem = true;
        this.hoverElemHeight = $event.currentTarget.clientHeight;
        // TODO: get rid of magic 66 constant
        this.hoverElemTop = $event.currentTarget.getBoundingClientRect().top - 66;
    }
    toggleSubMenu($event) {
        const submenu = jQuery($event.currentTarget).next();
        if (this.sidebarCollapsed) {
            this.expandMenu.emit(null);
            if (!$event.item.expanded) {
                $event.item.expanded = true;
            }
        }
        else {
            $event.item.expanded = !$event.item.expanded;
            submenu.slideToggle();
        }
        return false;
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Input */])(),
    __metadata("design:type", Boolean)
], BaMenu.prototype, "sidebarCollapsed", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Input */])(),
    __metadata("design:type", Number)
], BaMenu.prototype, "menuHeight", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Output */])(),
    __metadata("design:type", Object)
], BaMenu.prototype, "expandMenu", void 0);
BaMenu = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'ba-menu',
        template: __webpack_require__("../../../../../src/app/theme/components/baMenu/baMenu.html"),
        styles: [__webpack_require__("../../../../../src/app/theme/components/baMenu/baMenu.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services__["a" /* BaMenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["a" /* BaMenuService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__global_state__["a" /* GlobalState */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__global_state__["a" /* GlobalState */]) === "function" && _c || Object])
], BaMenu);

var _a, _b, _c;
//# sourceMappingURL=baMenu.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baMenu/baMenu.html":
/***/ (function(module, exports) {

module.exports = "<ul id=\"al-sidebar-list\" class=\"al-sidebar-list\" baSlimScroll [baSlimScrollOptions]=\"{height: menuHeight}\"\r\n    (mouseleave)=\"hoverElemTop=outOfArea\">\r\n  <ba-menu-item\r\n    [menuItem]=\"item\"\r\n    (itemHover)=\"hoverItem($event)\"\r\n    (toggleSubMenu)=\"toggleSubMenu($event)\"\r\n    *ngFor=\"let item of menuItems\"></ba-menu-item>\r\n</ul>\r\n<div class=\"sidebar-hover-elem\" [ngStyle]=\"{top: hoverElemTop + 'px', height: hoverElemHeight + 'px'}\"\r\n     [ngClass]=\"{'show-hover-elem': showHoverElem }\">\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/components/baMenu/baMenu.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/components/baMenu/components/baMenuItem/baMenuItem.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaMenuItem; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let BaMenuItem = class BaMenuItem {
    constructor() {
        this.child = false;
        this.itemHover = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
        this.toggleSubMenu = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
    }
    onHoverItem($event) {
        this.itemHover.emit($event);
    }
    onToggleSubMenu($event, item) {
        $event.item = item;
        this.toggleSubMenu.emit($event);
        return false;
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Input */])(),
    __metadata("design:type", Object)
], BaMenuItem.prototype, "menuItem", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Input */])(),
    __metadata("design:type", Boolean)
], BaMenuItem.prototype, "child", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Output */])(),
    __metadata("design:type", Object)
], BaMenuItem.prototype, "itemHover", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Output */])(),
    __metadata("design:type", Object)
], BaMenuItem.prototype, "toggleSubMenu", void 0);
BaMenuItem = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'ba-menu-item',
        template: __webpack_require__("../../../../../src/app/theme/components/baMenu/components/baMenuItem/baMenuItem.html"),
        styles: [__webpack_require__("../../../../../src/app/theme/components/baMenu/components/baMenuItem/baMenuItem.scss")],
    })
], BaMenuItem);

//# sourceMappingURL=baMenuItem.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baMenu/components/baMenuItem/baMenuItem.html":
/***/ (function(module, exports) {

module.exports = "<li *ngIf=\"!menuItem.hidden\" [title]=\"menuItem.title | translate\" [ngClass]=\"{'al-sidebar-list-item': !child, 'ba-sidebar-sublist-item': child, 'selected': menuItem.selected && !menuItem.expanded, 'with-sub-menu': menuItem.children, 'ba-sidebar-item-expanded': menuItem.expanded}\">\r\n\r\n  <a *ngIf=\"!menuItem.children && !menuItem.url\" (mouseenter)=\"onHoverItem($event, item)\" [routerLink]=\"menuItem.route.paths\" class=\"al-sidebar-list-link\">\r\n    <i *ngIf=\"menuItem.icon\" class=\"{{ menuItem.icon }}\"></i><span translate>{{ menuItem.title }}</span>\r\n  </a>\r\n\r\n  <a *ngIf=\"!menuItem.children && menuItem.url\" (mouseenter)=\"onHoverItem($event, item)\" [href]=\"menuItem.url\" [target]=\"menuItem.target\" class=\"al-sidebar-list-link\">\r\n    <i *ngIf=\"menuItem.icon\" class=\"{{ menuItem.icon }}\"></i><span translate>{{ menuItem.title }}</span>\r\n  </a>\r\n\r\n  <a *ngIf=\"menuItem.children\" (mouseenter)=\"onHoverItem($event, item)\" href (click)=\"onToggleSubMenu($event, menuItem)\" class=\"al-sidebar-list-link\">\r\n    <i *ngIf=\"menuItem.icon\" class=\"{{ menuItem.icon }}\"></i><span translate>{{ menuItem.title }}</span>\r\n    <b class=\"fa fa-angle-down\" [ngClass]=\"{'fa-angle-up': menuItem.expanded}\"></b>\r\n  </a>\r\n\r\n  <ul *ngIf=\"menuItem.children\" class=\"al-sidebar-sublist\" [ngClass]=\"{'slide-right': menuItem.slideRight}\">\r\n    <ba-menu-item [menuItem]=\"subItem\"\r\n                  [child]=\"true\"\r\n                  (itemHover)=\"onHoverItem($event)\"\r\n                  (toggleSubMenu)=\"onToggleSubMenu($event, subItem)\"\r\n                  *ngFor=\"let subItem of menuItem.children\"></ba-menu-item>\r\n  </ul>\r\n\r\n</li>\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/components/baMenu/components/baMenuItem/baMenuItem.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/components/baMenu/components/baMenuItem/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baMenuItem_component__ = __webpack_require__("../../../../../src/app/theme/components/baMenu/components/baMenuItem/baMenuItem.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baMenuItem_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baMenu/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baMenu_component__ = __webpack_require__("../../../../../src/app/theme/components/baMenu/baMenu.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baMenu_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baMultiCheckbox/baMultiCheckbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaMultiCheckbox; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


let BaMultiCheckbox = class BaMultiCheckbox {
    constructor(state) {
        this.model = state;
        state.valueAccessor = this;
    }
    getProp(item, propName) {
        const prop = this.propertiesMapping[propName];
        if (!prop) {
            return item[propName];
        }
        else if (typeof prop === 'function') {
            return prop(item);
        }
        return item[prop];
    }
    onChange(value) { }
    onTouch(value) { }
    writeValue(state) {
        this.state = state;
    }
    registerOnChange(fn) {
        this.onChange = function (state) {
            this.writeValue(state);
            this.model.viewToModelUpdate(state);
        };
    }
    registerOnTouched(fn) { this.onTouch = fn; }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Input */])(),
    __metadata("design:type", String)
], BaMultiCheckbox.prototype, "baMultiCheckboxClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Input */])(),
    __metadata("design:type", Object)
], BaMultiCheckbox.prototype, "propertiesMapping", void 0);
BaMultiCheckbox = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'ba-multi-checkbox[ngModel]',
        template: __webpack_require__("../../../../../src/app/theme/components/baMultiCheckbox/baMultiCheckbox.html"),
        styles: [__webpack_require__("../../../../../src/app/theme/components/baMultiCheckbox/baMultiCheckbox.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NgModel */]],
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Self */])()),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NgModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NgModel */]) === "function" && _a || Object])
], BaMultiCheckbox);

var _a;
//# sourceMappingURL=baMultiCheckbox.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baMultiCheckbox/baMultiCheckbox.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"{{baMultiCheckboxClass}} container-content\">\r\n  <ba-checkbox *ngFor=\"let item of state\"\r\n               [(ngModel)]=\"item[propertiesMapping.model]\"\r\n               [baCheckboxClass]=\"getProp(item, 'baCheckboxClass')\"\r\n               [label]=\"getProp(item, 'label')\"\r\n               [disabled]=\"getProp(item, 'disabled')\"\r\n               [value]=\"getProp(item, 'value')\"\r\n               id=\"{{getProp(item, 'id')}}\">\r\n  </ba-checkbox>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/components/baMultiCheckbox/baMultiCheckbox.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-content {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  .container-content ba-checkbox {\n    width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/components/baMultiCheckbox/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baMultiCheckbox_component__ = __webpack_require__("../../../../../src/app/theme/components/baMultiCheckbox/baMultiCheckbox.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baMultiCheckbox_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baPageTop/baPageTop.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_state__ = __webpack_require__("../../../../../src/app/global.state.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_util_mapping__ = __webpack_require__("../../../../../src/app/pages/util/mapping.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaPageTop; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let BaPageTop = class BaPageTop {
    constructor(_state, router) {
        this._state = _state;
        this.router = router;
        this.isScrolled = false;
        this.isMenuCollapsed = false;
        this.politicians = __WEBPACK_IMPORTED_MODULE_3__pages_util_mapping__["a" /* MAPPING */].map((user) => user['name']);
        this.parties = ['SVP', 'SP', 'CVP', 'FDP', 'BDP', 'GLP', 'GPS'];
        this.searchData = this.politicians.concat(this.parties);
        this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
            this.isMenuCollapsed = isCollapsed;
        });
    }
    startSearch() {
        this.navigateToTarget();
    }
    onKeyup($event) {
        if ($event.code === 'Enter') {
            this.navigateToTarget();
        }
    }
    navigateToTarget() {
        if (this.parties.includes(this.searchObject)) {
            this.router.navigate(['/pages/party/' + this.searchObject]);
        }
        else {
            this.router.navigate(['/pages/politician/' + this.getIdByName(this.searchObject)]);
        }
    }
    getIdByName(name) {
        return __WEBPACK_IMPORTED_MODULE_3__pages_util_mapping__["a" /* MAPPING */].find((user) => user['name'] === name)['personId'];
    }
    toggleMenu() {
        this.isMenuCollapsed = !this.isMenuCollapsed;
        this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
        return false;
    }
    scrolledChanged(isScrolled) {
        this.isScrolled = isScrolled;
    }
};
BaPageTop = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'ba-page-top',
        template: __webpack_require__("../../../../../src/app/theme/components/baPageTop/baPageTop.html"),
        styles: [__webpack_require__("../../../../../src/app/theme/components/baPageTop/baPageTop.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__global_state__["a" /* GlobalState */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__global_state__["a" /* GlobalState */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], BaPageTop);

var _a, _b;
//# sourceMappingURL=baPageTop.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baPageTop/baPageTop.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-top clearfix\" baScrollPosition maxHeight=\"50\" (scrollChange)=\"scrolledChanged($event)\"\r\n     [ngClass]=\"{scrolled: isScrolled}\">\r\n  <a routerLink=\"/pages/dashboard\" class=\"al-logo clearfix\"><span>Swiss-</span>Polytics</a>\r\n  <a href (click)=\"toggleMenu()\" class=\"collapse-menu-link ion-navicon\"></a>\r\n\r\n  <div class=\"search\">\r\n    <i class=\"ion-ios-search-strong\" (click)=\"startSearch($event)\"></i>\r\n    <ng2-completer class=\"completer-input\"\r\n                   [(ngModel)]=\"searchObject\"\r\n                   [datasource]=\"searchData\"\r\n                   [minSearchLength]=\"0\"\r\n                   [placeholder]=\"'Suche Politiker oder Partei'\"\r\n                   [matchClass]=\"'match'\"\r\n                   [autofocus]=\"true\"\r\n                   (keyup)=\"onKeyup($event)\">\r\n    </ng2-completer>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/components/baPageTop/baPageTop.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host /deep/ .page-top {\n  background-color: #282828;\n  position: fixed;\n  z-index: 904;\n  box-shadow: 2px 0 3px rgba(0, 0, 0, 0.5);\n  height: 66px;\n  width: 100%;\n  min-width: 320px;\n  padding: 0 32px 0 40px; }\n  :host /deep/ .page-top .dropdown-toggle::after {\n    display: none; }\n\n:host /deep/ .blur .page-top.scrolled {\n  background-color: rgba(0, 0, 0, 0.85); }\n\n:host /deep/ a.al-logo {\n  color: #ffffff;\n  display: block;\n  font-size: 24px;\n  font-family: \"Roboto\", sans-serif;\n  white-space: nowrap;\n  float: left;\n  outline: none !important;\n  line-height: 60px; }\n  :host /deep/ a.al-logo span {\n    color: #00abff; }\n\n:host /deep/ a.al-logo:hover {\n  color: #00abff; }\n\n:host /deep/ .user-profile {\n  float: right;\n  min-width: 230px;\n  margin-top: 10px; }\n\n:host /deep/ .al-user-profile {\n  float: right;\n  margin-right: 12px;\n  transition: all .15s ease-in-out;\n  padding: 0;\n  width: 36px;\n  height: 36px;\n  border: 0;\n  opacity: 1;\n  position: relative; }\n  :host /deep/ .al-user-profile ul.profile-dropdown:after {\n    bottom: 100%;\n    right: 0;\n    border: solid transparent;\n    content: \" \";\n    height: 0;\n    width: 0;\n    position: absolute;\n    pointer-events: none;\n    border-color: rgba(255, 255, 255, 0);\n    border-bottom-color: #fff;\n    border-width: 10px;\n    margin-right: 28px; }\n  :host /deep/ .al-user-profile a {\n    display: block; }\n  :host /deep/ .al-user-profile img {\n    width: 45px;\n    height: 45px;\n    border-radius: 50%; }\n\n:host /deep/ a.refresh-data {\n  color: #ffffff;\n  font-size: 13px;\n  text-decoration: none;\n  font-weight: 400;\n  float: right;\n  margin-top: 13px;\n  margin-right: 26px; }\n  :host /deep/ a.refresh-data:hover {\n    color: #e7ba08 !important; }\n\n:host /deep/ a.collapse-menu-link {\n  font-size: 31px;\n  cursor: pointer;\n  display: block;\n  text-decoration: none;\n  line-height: 42px;\n  color: #ffffff;\n  padding: 0;\n  float: left;\n  margin: 11px 0 0 25px; }\n  :host /deep/ a.collapse-menu-link:hover {\n    text-decoration: none;\n    color: #e7ba08; }\n\n:host /deep/ .al-skin-dropdown {\n  float: right;\n  margin-top: 14px;\n  margin-right: 26px; }\n  :host /deep/ .al-skin-dropdown .tpl-skin-panel {\n    max-height: 300px;\n    overflow-y: scroll;\n    overflow-x: hidden; }\n\n:host /deep/ .icon-palette {\n  display: inline-block;\n  width: 14px;\n  height: 13px;\n  background: url(\"/swiss-polytics/img/theme/palette.png\");\n  background-size: cover; }\n\n:host /deep/ .search {\n  text-shadow: none;\n  font-size: 13px;\n  line-height: 25px;\n  transition: all 0.5s ease;\n  white-space: nowrap;\n  overflow: hidden;\n  float: left;\n  margin: 20px 0 0 30px; }\n  :host /deep/ .search label {\n    cursor: pointer; }\n  :host /deep/ .search i {\n    width: 16px;\n    display: inline-block;\n    cursor: pointer;\n    padding-left: 1px;\n    font-size: 16px;\n    margin-right: 13px; }\n  :host /deep/ .search input {\n    color: #ffffff;\n    background: none;\n    border: none;\n    outline: none;\n    padding: 0;\n    width: 300px; }\n  :host /deep/ .search .completer-input {\n    display: inline-block; }\n\n@media screen and (max-width: 660px) {\n  :host /deep/ .search {\n    display: none; } }\n\n@media screen and (max-width: 500px) {\n  :host /deep/ .page-top {\n    padding: 0 20px; } }\n\n@media (max-width: 435px) {\n  :host /deep/ .user-profile {\n    min-width: 136px; }\n  :host /deep/ a.refresh-data {\n    margin-right: 10px; }\n  :host /deep/ a.collapse-menu-link {\n    margin-left: 10px; }\n  :host /deep/ .al-skin-dropdown {\n    display: none; } }\n\n:host /deep/ .profile-toggle-link {\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/components/baPageTop/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baPageTop_component__ = __webpack_require__("../../../../../src/app/theme/components/baPageTop/baPageTop.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baPageTop_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baSidebar/baSidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_state__ = __webpack_require__("../../../../../src/app/global.state.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme__ = __webpack_require__("../../../../../src/app/theme/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaSidebar; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let BaSidebar = class BaSidebar {
    constructor(_elementRef, _state) {
        this._elementRef = _elementRef;
        this._state = _state;
        this.isMenuCollapsed = false;
        this.isMenuShouldCollapsed = false;
        this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
            this.isMenuCollapsed = isCollapsed;
        });
    }
    ngOnInit() {
        if (this._shouldMenuCollapse()) {
            this.menuCollapse();
        }
    }
    ngAfterViewInit() {
        setTimeout(() => this.updateSidebarHeight());
    }
    onWindowResize() {
        const isMenuShouldCollapsed = this._shouldMenuCollapse();
        if (this.isMenuShouldCollapsed !== isMenuShouldCollapsed) {
            this.menuCollapseStateChange(isMenuShouldCollapsed);
        }
        this.isMenuShouldCollapsed = isMenuShouldCollapsed;
        this.updateSidebarHeight();
    }
    menuExpand() {
        this.menuCollapseStateChange(false);
    }
    menuCollapse() {
        this.menuCollapseStateChange(true);
    }
    menuCollapseStateChange(isCollapsed) {
        this.isMenuCollapsed = isCollapsed;
        this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    }
    updateSidebarHeight() {
        // TODO: get rid of magic 84 constant
        this.menuHeight = this._elementRef.nativeElement.childNodes[0].clientHeight - 84;
    }
    _shouldMenuCollapse() {
        return window.innerWidth <= __WEBPACK_IMPORTED_MODULE_2__theme__["f" /* layoutSizes */].resWidthCollapseSidebar;
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* HostListener */])('window:resize'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BaSidebar.prototype, "onWindowResize", null);
BaSidebar = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'ba-sidebar',
        template: __webpack_require__("../../../../../src/app/theme/components/baSidebar/baSidebar.html"),
        styles: [__webpack_require__("../../../../../src/app/theme/components/baSidebar/baSidebar.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__global_state__["a" /* GlobalState */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__global_state__["a" /* GlobalState */]) === "function" && _b || Object])
], BaSidebar);

var _a, _b;
//# sourceMappingURL=baSidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/baSidebar/baSidebar.html":
/***/ (function(module, exports) {

module.exports = "<aside class=\"al-sidebar\" sidebarResize>\r\n  <ba-menu [menuHeight]=\"menuHeight\"\r\n           [sidebarCollapsed]=\"isMenuCollapsed\"\r\n           (expandMenu)=\"menuExpand()\"></ba-menu>\r\n</aside>\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/components/baSidebar/baSidebar.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host /deep/ .al-sidebar {\n  width: 180px;\n  top: 66px;\n  left: 0;\n  z-index: 1001;\n  display: block;\n  min-height: 100%;\n  background-color: #282828;\n  height: 100%;\n  position: fixed; }\n\n:host /deep/ .al-sidebar-list {\n  margin: 0;\n  overflow: hidden;\n  padding: 18px 0 0 0;\n  list-style: none; }\n\n:host /deep/ .al-sidebar-sublist .subitem-submenu-list {\n  padding-left: 15px; }\n\n:host /deep/ .subitem-submenu-link .fa {\n  top: 7px; }\n\n:host /deep/ .al-sidebar-list-item {\n  display: block;\n  position: relative;\n  float: none;\n  padding: 0; }\n  :host /deep/ .al-sidebar-list-item.selected:not(.with-sub-menu) {\n    background-color: #00abff; }\n    :host /deep/ .al-sidebar-list-item.selected:not(.with-sub-menu) a.al-sidebar-list-link {\n      color: #ffffff; }\n      :host /deep/ .al-sidebar-list-item.selected:not(.with-sub-menu) a.al-sidebar-list-link b {\n        color: #ffffff; }\n\n:host /deep/ .ba-sidebar-item-expanded > ul.al-sidebar-sublist {\n  display: block !important; }\n\n:host /deep/ .al-sidebar-list-item.ba-sidebar-item-expanded > .al-sidebar-list-link b, :host /deep/ .ba-sidebar-sublist-item.ba-sidebar-item-expanded > .al-sidebar-list-link b {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n:host /deep/ .al-sidebar-list-item.ba-sidebar-item-expanded > .al-sidebar-sublist, :host /deep/ .ba-sidebar-sublist-item.ba-sidebar-item-expanded > .al-sidebar-sublist {\n  display: block; }\n\n:host /deep/ a.al-sidebar-list-link {\n  display: block;\n  height: 42px;\n  padding-left: 18px;\n  text-shadow: none;\n  font-size: 13px;\n  text-decoration: none;\n  color: #ffffff;\n  line-height: 42px;\n  white-space: nowrap;\n  overflow: hidden;\n  cursor: pointer; }\n  :host /deep/ a.al-sidebar-list-link:hover {\n    color: #00abff; }\n    :host /deep/ a.al-sidebar-list-link:hover b {\n      color: #00abff; }\n  :host /deep/ a.al-sidebar-list-link i {\n    margin-right: 18px;\n    width: 16px;\n    display: inline-block; }\n  :host /deep/ a.al-sidebar-list-link b {\n    display: block;\n    opacity: 1;\n    width: 14px;\n    height: 14px;\n    line-height: 14px;\n    text-shadow: none;\n    font-size: 18px;\n    position: absolute;\n    right: 10px;\n    top: 12px;\n    padding: 0;\n    text-align: center;\n    color: #ffffff;\n    transition: -webkit-transform 0.2s linear;\n    transition: transform 0.2s linear;\n    transition: transform 0.2s linear, -webkit-transform 0.2s linear; }\n\n:host /deep/ .slimScrollBar, :host /deep/ .slimScrollRail {\n  border-radius: 0 !important;\n  width: 4px !important;\n  left: 176px; }\n\n:host /deep/ .al-sidebar-sublist {\n  padding: 0;\n  list-style: none;\n  position: relative;\n  display: none; }\n  :host /deep/ .al-sidebar-sublist.expanded {\n    display: block; }\n  :host /deep/ .al-sidebar-sublist > ba-menu-item > li {\n    display: block;\n    float: none;\n    padding: 0;\n    border-bottom: none;\n    position: relative; }\n    :host /deep/ .al-sidebar-sublist > ba-menu-item > li a {\n      display: block;\n      text-shadow: none;\n      font-size: 13px;\n      text-decoration: none;\n      color: #ffffff;\n      padding-left: 52px;\n      height: auto;\n      line-height: 29px; }\n      :host /deep/ .al-sidebar-sublist > ba-menu-item > li a:hover {\n        color: #00abff; }\n    :host /deep/ .al-sidebar-sublist > ba-menu-item > li.selected:not(.with-sub-menu) > a {\n      border: none;\n      background-color: #00abff; }\n      :host /deep/ .al-sidebar-sublist > ba-menu-item > li.selected:not(.with-sub-menu) > a:hover {\n        color: #ffffff; }\n\n:host /deep/ .sidebar-hover-elem {\n  width: 4px;\n  background: #00abff;\n  position: absolute;\n  top: -150px;\n  left: 176px;\n  transition: all 0.5s ease;\n  transition-property: top, height;\n  height: 42px;\n  display: block; }\n\n:host /deep/ .sidebar-select-elem {\n  display: block;\n  top: 94px; }\n\n:host /deep/ .menu-collapsed .slimScrollBar, :host /deep/ .menu-collapsed .slimScrollRail {\n  display: none !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/components/baSidebar/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baSidebar_component__ = __webpack_require__("../../../../../src/app/theme/components/baSidebar/baSidebar.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baSidebar_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baPageTop__ = __webpack_require__("../../../../../src/app/theme/components/baPageTop/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_0__baPageTop__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__baSidebar__ = __webpack_require__("../../../../../src/app/theme/components/baSidebar/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_1__baSidebar__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__baMenu_components_baMenuItem__ = __webpack_require__("../../../../../src/app/theme/components/baMenu/components/baMenuItem/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__baMenu_components_baMenuItem__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__baMenu__ = __webpack_require__("../../../../../src/app/theme/components/baMenu/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_3__baMenu__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__baContentTop__ = __webpack_require__("../../../../../src/app/theme/components/baContentTop/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__baContentTop__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__baCard__ = __webpack_require__("../../../../../src/app/theme/components/baCard/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_5__baCard__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__baAmChart__ = __webpack_require__("../../../../../src/app/theme/components/baAmChart/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_6__baAmChart__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__baBackTop__ = __webpack_require__("../../../../../src/app/theme/components/baBackTop/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_7__baBackTop__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__baCheckbox__ = __webpack_require__("../../../../../src/app/theme/components/baCheckbox/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_8__baCheckbox__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__baMultiCheckbox__ = __webpack_require__("../../../../../src/app/theme/components/baMultiCheckbox/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_9__baMultiCheckbox__["a"]; });










//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/directives/baScrollPosition/baScrollPosition.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaScrollPosition; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let BaScrollPosition = class BaScrollPosition {
    constructor() {
        this.scrollChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
    }
    ngOnInit() {
        this.onWindowScroll();
    }
    onWindowScroll() {
        const isScrolled = window.scrollY > this.maxHeight;
        if (isScrolled !== this._isScrolled) {
            this._isScrolled = isScrolled;
            this.scrollChange.emit(isScrolled);
        }
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Input */])(),
    __metadata("design:type", Number)
], BaScrollPosition.prototype, "maxHeight", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]) === "function" && _a || Object)
], BaScrollPosition.prototype, "scrollChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* HostListener */])('window:scroll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BaScrollPosition.prototype, "onWindowScroll", null);
BaScrollPosition = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Directive */])({
        selector: '[baScrollPosition]',
    })
], BaScrollPosition);

var _a;
//# sourceMappingURL=baScrollPosition.directive.js.map

/***/ }),

/***/ "../../../../../src/app/theme/directives/baScrollPosition/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baScrollPosition_directive__ = __webpack_require__("../../../../../src/app/theme/directives/baScrollPosition/baScrollPosition.directive.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baScrollPosition_directive__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/directives/baSlimScroll/baSlimScroll.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery_slimscroll__ = __webpack_require__("../../../../jquery-slimscroll/jquery.slimscroll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery_slimscroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery_slimscroll__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaSlimScroll; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let BaSlimScroll = class BaSlimScroll {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
    ngOnChanges(changes) {
        this._scroll();
    }
    _scroll() {
        this._destroy();
        this._init();
    }
    _init() {
        jQuery(this._elementRef.nativeElement).slimScroll(this.baSlimScrollOptions);
    }
    _destroy() {
        jQuery(this._elementRef.nativeElement).slimScroll({ destroy: true });
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Input */])(),
    __metadata("design:type", Object)
], BaSlimScroll.prototype, "baSlimScrollOptions", void 0);
BaSlimScroll = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Directive */])({
        selector: '[baSlimScroll]',
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ElementRef */]) === "function" && _a || Object])
], BaSlimScroll);

var _a;
//# sourceMappingURL=baSlimScroll.directive.js.map

/***/ }),

/***/ "../../../../../src/app/theme/directives/baSlimScroll/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baSlimScroll_directive__ = __webpack_require__("../../../../../src/app/theme/directives/baSlimScroll/baSlimScroll.directive.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baSlimScroll_directive__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/directives/baThemeRun/baThemeRun.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme__ = __webpack_require__("../../../../../src/app/theme/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaThemeRun; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let BaThemeRun = class BaThemeRun {
    constructor(_baConfig) {
        this._baConfig = _baConfig;
        this._classes = [];
    }
    ngOnInit() {
        this._assignTheme();
        this._assignMobile();
    }
    _assignTheme() {
        this._addClass(this._baConfig.get().theme.name);
    }
    _assignMobile() {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__theme__["e" /* isMobile */])()) {
            this._addClass('mobile');
        }
    }
    _addClass(cls) {
        this._classes.push(cls);
        this.classesString = this._classes.join(' ');
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* HostBinding */])('class'),
    __metadata("design:type", String)
], BaThemeRun.prototype, "classesString", void 0);
BaThemeRun = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Directive */])({
        selector: '[baThemeRun]',
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__theme__["d" /* BaThemeConfigProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__theme__["d" /* BaThemeConfigProvider */]) === "function" && _a || Object])
], BaThemeRun);

var _a;
//# sourceMappingURL=baThemeRun.directive.js.map

/***/ }),

/***/ "../../../../../src/app/theme/directives/baThemeRun/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baThemeRun_directive__ = __webpack_require__("../../../../../src/app/theme/directives/baThemeRun/baThemeRun.directive.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baThemeRun_directive__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/directives/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baScrollPosition__ = __webpack_require__("../../../../../src/app/theme/directives/baScrollPosition/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baScrollPosition__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__baThemeRun__ = __webpack_require__("../../../../../src/app/theme/directives/baThemeRun/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__baThemeRun__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__baSlimScroll__ = __webpack_require__("../../../../../src/app/theme/directives/baSlimScroll/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__baSlimScroll__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services__ = __webpack_require__("../../../../../src/app/theme/services/index.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__services__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme_constants__ = __webpack_require__("../../../../../src/app/theme/theme.constants.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__theme_constants__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__theme_constants__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__theme_constants__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__theme_constants__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_configProvider__ = __webpack_require__("../../../../../src/app/theme/theme.configProvider.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__theme_configProvider__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_config__ = __webpack_require__("../../../../../src/app/theme/theme.config.ts");
/* unused harmony namespace reexport */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/nga.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_translation_module__ = __webpack_require__("../../../../../src/app/app.translation.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__theme_config__ = __webpack_require__("../../../../../src/app/theme/theme.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__theme_configProvider__ = __webpack_require__("../../../../../src/app/theme/theme.configProvider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components__ = __webpack_require__("../../../../../src/app/theme/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_baCard_baCardBlur_directive__ = __webpack_require__("../../../../../src/app/theme/components/baCard/baCardBlur.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__directives__ = __webpack_require__("../../../../../src/app/theme/directives/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pipes__ = __webpack_require__("../../../../../src/app/theme/pipes/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services__ = __webpack_require__("../../../../../src/app/theme/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_completer__ = __webpack_require__("../../../../ng2-completer/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgaModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













const NGA_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_7__components__["a" /* BaAmChart */],
    __WEBPACK_IMPORTED_MODULE_7__components__["b" /* BaBackTop */],
    __WEBPACK_IMPORTED_MODULE_7__components__["c" /* BaCard */],
    __WEBPACK_IMPORTED_MODULE_7__components__["d" /* BaCheckbox */],
    __WEBPACK_IMPORTED_MODULE_7__components__["e" /* BaContentTop */],
    __WEBPACK_IMPORTED_MODULE_7__components__["f" /* BaMenuItem */],
    __WEBPACK_IMPORTED_MODULE_7__components__["g" /* BaMenu */],
    __WEBPACK_IMPORTED_MODULE_7__components__["h" /* BaMultiCheckbox */],
    __WEBPACK_IMPORTED_MODULE_7__components__["i" /* BaPageTop */],
    __WEBPACK_IMPORTED_MODULE_7__components__["j" /* BaSidebar */],
];
const NGA_DIRECTIVES = [
    __WEBPACK_IMPORTED_MODULE_9__directives__["a" /* BaScrollPosition */],
    __WEBPACK_IMPORTED_MODULE_9__directives__["b" /* BaSlimScroll */],
    __WEBPACK_IMPORTED_MODULE_9__directives__["c" /* BaThemeRun */],
    __WEBPACK_IMPORTED_MODULE_8__components_baCard_baCardBlur_directive__["a" /* BaCardBlur */],
];
const NGA_PIPES = [
    __WEBPACK_IMPORTED_MODULE_10__pipes__["a" /* BaAppPicturePipe */],
    __WEBPACK_IMPORTED_MODULE_10__pipes__["b" /* BaKameleonPicturePipe */],
    __WEBPACK_IMPORTED_MODULE_10__pipes__["c" /* BaProfilePicturePipe */],
];
const NGA_SERVICES = [
    __WEBPACK_IMPORTED_MODULE_11__services__["b" /* BaImageLoaderService */],
    __WEBPACK_IMPORTED_MODULE_11__services__["c" /* BaThemePreloader */],
    __WEBPACK_IMPORTED_MODULE_11__services__["d" /* BaThemeSpinner */],
    __WEBPACK_IMPORTED_MODULE_11__services__["a" /* BaMenuService */],
];
let NgaModule = NgaModule_1 = class NgaModule {
    static forRoot() {
        return {
            ngModule: NgaModule_1,
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__theme_configProvider__["a" /* BaThemeConfigProvider */],
                __WEBPACK_IMPORTED_MODULE_5__theme_config__["a" /* BaThemeConfig */],
                ...NGA_SERVICES,
            ],
        };
    }
};
NgaModule = NgaModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            ...NGA_PIPES,
            ...NGA_DIRECTIVES,
            ...NGA_COMPONENTS,
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_translation_module__["a" /* AppTranslationModule */],
            __WEBPACK_IMPORTED_MODULE_12_ng2_completer__["a" /* Ng2CompleterModule */],
        ],
        exports: [
            ...NGA_PIPES,
            ...NGA_DIRECTIVES,
            ...NGA_COMPONENTS,
        ],
    })
], NgaModule);

var NgaModule_1;
//# sourceMappingURL=nga.module.js.map

/***/ }),

/***/ "../../../../../src/app/theme/pipes/baAppPicture/baAppPicture.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme__ = __webpack_require__("../../../../../src/app/theme/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaAppPicturePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let BaAppPicturePipe = class BaAppPicturePipe {
    transform(input) {
        return __WEBPACK_IMPORTED_MODULE_1__theme__["b" /* layoutPaths */].images.root + input;
    }
};
BaAppPicturePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Pipe */])({ name: 'baAppPicture' })
], BaAppPicturePipe);

//# sourceMappingURL=baAppPicture.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/theme/pipes/baAppPicture/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baAppPicture_pipe__ = __webpack_require__("../../../../../src/app/theme/pipes/baAppPicture/baAppPicture.pipe.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baAppPicture_pipe__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/pipes/baKameleonPicture/baKameleonPicture.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme__ = __webpack_require__("../../../../../src/app/theme/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaKameleonPicturePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let BaKameleonPicturePipe = class BaKameleonPicturePipe {
    transform(input) {
        return __WEBPACK_IMPORTED_MODULE_1__theme__["b" /* layoutPaths */].images.root + 'theme/icon/kameleon/' + input + '.svg';
    }
};
BaKameleonPicturePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Pipe */])({ name: 'baKameleonPicture' })
], BaKameleonPicturePipe);

//# sourceMappingURL=baKameleonPicture.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/theme/pipes/baKameleonPicture/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baKameleonPicture_pipe__ = __webpack_require__("../../../../../src/app/theme/pipes/baKameleonPicture/baKameleonPicture.pipe.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baKameleonPicture_pipe__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/pipes/baProfilePicture/baProfilePicture.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme__ = __webpack_require__("../../../../../src/app/theme/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaProfilePicturePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let BaProfilePicturePipe = class BaProfilePicturePipe {
    transform(input, ext = 'png') {
        return __WEBPACK_IMPORTED_MODULE_1__theme__["b" /* layoutPaths */].images.profile + input + '.' + ext;
    }
};
BaProfilePicturePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Pipe */])({ name: 'baProfilePicture' })
], BaProfilePicturePipe);

//# sourceMappingURL=baProfilePicture.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/theme/pipes/baProfilePicture/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baProfilePicture_pipe__ = __webpack_require__("../../../../../src/app/theme/pipes/baProfilePicture/baProfilePicture.pipe.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baProfilePicture_pipe__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/pipes/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baProfilePicture__ = __webpack_require__("../../../../../src/app/theme/pipes/baProfilePicture/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__baProfilePicture__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__baAppPicture__ = __webpack_require__("../../../../../src/app/theme/pipes/baAppPicture/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__baAppPicture__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__baKameleonPicture__ = __webpack_require__("../../../../../src/app/theme/pipes/baKameleonPicture/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__baKameleonPicture__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/services/baImageLoader/baImageLoader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaImageLoaderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let BaImageLoaderService = class BaImageLoaderService {
    load(src) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = function () {
                resolve('Image with src ' + src + ' loaded successfully.');
            };
        });
    }
};
BaImageLoaderService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])()
], BaImageLoaderService);

//# sourceMappingURL=baImageLoader.service.js.map

/***/ }),

/***/ "../../../../../src/app/theme/services/baImageLoader/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baImageLoader_service__ = __webpack_require__("../../../../../src/app/theme/services/baImageLoader/baImageLoader.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baImageLoader_service__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/services/baMenu/baMenu.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaMenuService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let BaMenuService = class BaMenuService {
    constructor(_router) {
        this._router = _router;
        this.menuItems = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this._currentMenuItem = {};
    }
    /**
     * Updates the routes in the menu
     *
     * @param {Routes} routes Type compatible with app.menu.ts
     */
    updateMenuByRoutes(routes) {
        const convertedRoutes = this.convertRoutesToMenus(__WEBPACK_IMPORTED_MODULE_2_lodash__["cloneDeep"](routes));
        this.menuItems.next(convertedRoutes);
    }
    convertRoutesToMenus(routes) {
        const items = this._convertArrayToItems(routes);
        return this._skipEmpty(items);
    }
    getCurrentItem() {
        return this._currentMenuItem;
    }
    selectMenuItem(menuItems) {
        const items = [];
        menuItems.forEach((item) => {
            this._selectItem(item);
            if (item.selected) {
                this._currentMenuItem = item;
            }
            if (item.children && item.children.length > 0) {
                item.children = this.selectMenuItem(item.children);
            }
            items.push(item);
        });
        return items;
    }
    _skipEmpty(items) {
        const menu = [];
        items.forEach((item) => {
            let menuItem;
            if (item.skip) {
                if (item.children && item.children.length > 0) {
                    menuItem = item.children;
                }
            }
            else {
                menuItem = item;
            }
            if (menuItem) {
                menu.push(menuItem);
            }
        });
        return [].concat.apply([], menu);
    }
    _convertArrayToItems(routes, parent) {
        const items = [];
        routes.forEach((route) => {
            items.push(this._convertObjectToItem(route, parent));
        });
        return items;
    }
    _convertObjectToItem(object, parent) {
        let item = {};
        if (object.data && object.data.menu) {
            // this is a menu object
            item = object.data.menu;
            item.route = object;
            delete item.route.data.menu;
        }
        else {
            item.route = object;
            item.skip = true;
        }
        // we have to collect all paths to correctly build the url then
        if (Array.isArray(item.route.path)) {
            item.route.paths = item.route.path;
        }
        else {
            item.route.paths = parent && parent.route && parent.route.paths ? parent.route.paths.slice(0) : ['/'];
            if (!!item.route.path) {
                item.route.paths.push(item.route.path);
            }
        }
        if (object.children && object.children.length > 0) {
            item.children = this._convertArrayToItems(object.children, item);
        }
        const prepared = this._prepareItem(item);
        // if current item is selected or expanded - then parent is expanded too
        if ((prepared.selected || prepared.expanded) && parent) {
            parent.expanded = true;
        }
        return prepared;
    }
    _prepareItem(object) {
        if (!object.skip) {
            object.target = object.target || '';
            object.pathMatch = object.pathMatch || 'full';
            return this._selectItem(object);
        }
        return object;
    }
    _selectItem(object) {
        object.selected = this._router.isActive(this._router.createUrlTree(object.route.paths), object.pathMatch === 'full');
        return object;
    }
};
BaMenuService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], BaMenuService);

var _a;
//# sourceMappingURL=baMenu.service.js.map

/***/ }),

/***/ "../../../../../src/app/theme/services/baMenu/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baMenu_service__ = __webpack_require__("../../../../../src/app/theme/services/baMenu/baMenu.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baMenu_service__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/services/baThemePreloader/baThemePreloader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaThemePreloader; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let BaThemePreloader = BaThemePreloader_1 = class BaThemePreloader {
    static registerLoader(method) {
        BaThemePreloader_1._loaders.push(method);
    }
    static clear() {
        BaThemePreloader_1._loaders = [];
    }
    static load() {
        return new Promise((resolve, reject) => {
            BaThemePreloader_1._executeAll(resolve);
        });
    }
    static _executeAll(done) {
        setTimeout(() => {
            Promise.all(BaThemePreloader_1._loaders).then((values) => {
                done.call(null, values);
            }).catch((error) => {
                console.error(error);
            });
        });
    }
};
BaThemePreloader._loaders = [];
BaThemePreloader = BaThemePreloader_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])()
], BaThemePreloader);

var BaThemePreloader_1;
//# sourceMappingURL=baThemePreloader.service.js.map

/***/ }),

/***/ "../../../../../src/app/theme/services/baThemePreloader/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baThemePreloader_service__ = __webpack_require__("../../../../../src/app/theme/services/baThemePreloader/baThemePreloader.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baThemePreloader_service__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/services/baThemeSpinner/baThemeSpinner.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaThemeSpinner; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let BaThemeSpinner = class BaThemeSpinner {
    constructor() {
        this._selector = 'preloader';
        this._element = document.getElementById(this._selector);
    }
    show() {
        this._element.style['display'] = 'block';
    }
    hide(delay = 0) {
        setTimeout(() => {
            this._element.style['display'] = 'none';
        }, delay);
    }
};
BaThemeSpinner = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], BaThemeSpinner);

//# sourceMappingURL=baThemeSpinner.service.js.map

/***/ }),

/***/ "../../../../../src/app/theme/services/baThemeSpinner/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baThemeSpinner_service__ = __webpack_require__("../../../../../src/app/theme/services/baThemeSpinner/baThemeSpinner.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baThemeSpinner_service__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baImageLoader__ = __webpack_require__("../../../../../src/app/theme/services/baImageLoader/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__baImageLoader__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__baMenu__ = __webpack_require__("../../../../../src/app/theme/services/baMenu/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__baMenu__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__baThemePreloader__ = __webpack_require__("../../../../../src/app/theme/services/baThemePreloader/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__baThemePreloader__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__baThemeSpinner__ = __webpack_require__("../../../../../src/app/theme/services/baThemeSpinner/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__baThemeSpinner__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/theme.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme_configProvider__ = __webpack_require__("../../../../../src/app/theme/theme.configProvider.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaThemeConfig; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let BaThemeConfig = class BaThemeConfig {
    constructor(_baConfig) {
        this._baConfig = _baConfig;
    }
    config() {
        // this._baConfig.changeTheme({ name: 'my-theme' });
        //
        // let colorScheme = {
        //   primary: '#209e91',
        //   info: '#2dacd1',
        //   success: '#90b900',
        //   warning: '#dfb81c',
        //   danger: '#e85656',
        // };
        //
        // this._baConfig.changeColors({
        //   default: '#4e4e55',
        //   defaultText: '#aaaaaa',
        //   border: '#dddddd',
        //   borderDark: '#aaaaaa',
        //
        //   primary: colorScheme.primary,
        //   info: colorScheme.info,
        //   success: colorScheme.success,
        //   warning: colorScheme.warning,
        //   danger: colorScheme.danger,
        //
        //   primaryLight: colorHelper.tint(colorScheme.primary, 30),
        //   infoLight: colorHelper.tint(colorScheme.info, 30),
        //   successLight: colorHelper.tint(colorScheme.success, 30),
        //   warningLight: colorHelper.tint(colorScheme.warning, 30),
        //   dangerLight: colorHelper.tint(colorScheme.danger, 30),
        //
        //   primaryDark: colorHelper.shade(colorScheme.primary, 15),
        //   infoDark: colorHelper.shade(colorScheme.info, 15),
        //   successDark: colorHelper.shade(colorScheme.success, 15),
        //   warningDark: colorHelper.shade(colorScheme.warning, 15),
        //   dangerDark: colorHelper.shade(colorScheme.danger, 15),
        //
        //   dashboard: {
        //     blueStone: '#005562',
        //     surfieGreen: '#0e8174',
        //     silverTree: '#6eba8c',
        //     gossip: '#b9f2a1',
        //     white: '#10c4b5',
        //   },
        //
        //   custom: {
        //     dashboardPieChart: colorHelper.hexToRgbA('#aaaaaa', 0.8),
        //     dashboardLineChart: '#6eba8c',
        //   },
        // });
    }
};
BaThemeConfig = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__theme_configProvider__["a" /* BaThemeConfigProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__theme_configProvider__["a" /* BaThemeConfigProvider */]) === "function" && _a || Object])
], BaThemeConfig);

var _a;
//# sourceMappingURL=theme.config.js.map

/***/ }),

/***/ "../../../../../src/app/theme/theme.configProvider.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_constants__ = __webpack_require__("../../../../../src/app/theme/theme.constants.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaThemeConfigProvider; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let BaThemeConfigProvider = class BaThemeConfigProvider {
    constructor() {
        this.basic = {
            default: '#ffffff',
            defaultText: '#ffffff',
            border: '#dddddd',
            borderDark: '#aaaaaa',
        };
        // main functional color scheme
        this.colorScheme = {
            primary: '#00abff',
            info: '#40daf1',
            success: '#8bd22f',
            warning: '#e7ba08',
            danger: '#f95372',
        };
        // dashboard colors for charts
        this.dashboardColors = {
            blueStone: '#40daf1',
            lightgreen: '#03f1d4',
            bdpYellow: '#ffdd00',
            spRed: '#e4022d',
            fdpBlue: '#009aea',
            cvpOrange: '#ee7f00',
            svpGreen: '#7ab51e',
            gpsGreen: '#3a7a01',
            glpGreen: '#9BBD58',
            surfieGreen: '#00abff',
            silverTree: '#1b70ef',
            gossip: '#3c4eb9',
            white: '#ffffff',
        };
        this.conf = {
            theme: {
                name: 'ng2',
            },
            colors: {
                default: this.basic.default,
                defaultText: this.basic.defaultText,
                border: this.basic.border,
                borderDark: this.basic.borderDark,
                primary: this.colorScheme.primary,
                info: this.colorScheme.info,
                success: this.colorScheme.success,
                warning: this.colorScheme.warning,
                danger: this.colorScheme.danger,
                primaryLight: __WEBPACK_IMPORTED_MODULE_2__theme_constants__["a" /* ColorHelper */].tint(this.colorScheme.primary, 30),
                infoLight: __WEBPACK_IMPORTED_MODULE_2__theme_constants__["a" /* ColorHelper */].tint(this.colorScheme.info, 30),
                successLight: __WEBPACK_IMPORTED_MODULE_2__theme_constants__["a" /* ColorHelper */].tint(this.colorScheme.success, 30),
                warningLight: __WEBPACK_IMPORTED_MODULE_2__theme_constants__["a" /* ColorHelper */].tint(this.colorScheme.warning, 30),
                dangerLight: __WEBPACK_IMPORTED_MODULE_2__theme_constants__["a" /* ColorHelper */].tint(this.colorScheme.danger, 30),
                primaryDark: __WEBPACK_IMPORTED_MODULE_2__theme_constants__["a" /* ColorHelper */].shade(this.colorScheme.primary, 15),
                infoDark: __WEBPACK_IMPORTED_MODULE_2__theme_constants__["a" /* ColorHelper */].shade(this.colorScheme.info, 15),
                successDark: __WEBPACK_IMPORTED_MODULE_2__theme_constants__["a" /* ColorHelper */].shade(this.colorScheme.success, 15),
                warningDark: __WEBPACK_IMPORTED_MODULE_2__theme_constants__["a" /* ColorHelper */].shade(this.colorScheme.warning, 15),
                dangerDark: __WEBPACK_IMPORTED_MODULE_2__theme_constants__["a" /* ColorHelper */].shade(this.colorScheme.danger, 15),
                dashboard: {
                    blueStone: this.dashboardColors.blueStone,
                    surfieGreen: this.dashboardColors.surfieGreen,
                    silverTree: this.dashboardColors.silverTree,
                    gossip: this.dashboardColors.gossip,
                    green: this.dashboardColors.lightgreen,
                    yellow: this.dashboardColors.yellow,
                    white: this.dashboardColors.white,
                    svpGreen: this.dashboardColors.svpGreen,
                    spRed: this.dashboardColors.spRed,
                    fdpBlue: this.dashboardColors.fdpBlue,
                    bdpYellow: this.dashboardColors.bdpYellow,
                    cvpOrange: this.dashboardColors.cvpOrange,
                    glpGreen: this.dashboardColors.glpGreen,
                    gpsGreen: this.dashboardColors.gpsGreen,
                },
                custom: {
                    dashboardPieChart: __WEBPACK_IMPORTED_MODULE_2__theme_constants__["a" /* ColorHelper */].hexToRgbA(this.basic.defaultText, 0.8),
                    dashboardLineChart: this.basic.defaultText,
                },
            },
        };
    }
    get() {
        return this.conf;
    }
    changeTheme(theme) {
        __WEBPACK_IMPORTED_MODULE_1_lodash__["merge"](this.get().theme, theme);
    }
    changeColors(colors) {
        __WEBPACK_IMPORTED_MODULE_1_lodash__["merge"](this.get().colors, colors);
    }
};
BaThemeConfigProvider = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], BaThemeConfigProvider);

//# sourceMappingURL=theme.configProvider.js.map

/***/ }),

/***/ "../../../../../src/app/theme/theme.constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const IMAGES_ROOT = 'assets/img/';
/* unused harmony export IMAGES_ROOT */

const layoutSizes = {
    resWidthCollapseSidebar: 1200,
    resWidthHideSidebar: 500,
};
/* harmony export (immutable) */ __webpack_exports__["d"] = layoutSizes;

const layoutPaths = {
    images: {
        root: IMAGES_ROOT,
        profile: IMAGES_ROOT + 'app/profile/',
        amMap: 'assets/img/theme/vendor/ammap/',
        amChart: 'assets/img/theme/vendor/amcharts/dist/amcharts/images/',
    },
};
/* harmony export (immutable) */ __webpack_exports__["b"] = layoutPaths;

class ColorHelper {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ColorHelper;

ColorHelper.shade = (color, weight) => {
    return ColorHelper.mix('#000000', color, weight);
};
ColorHelper.tint = (color, weight) => {
    return ColorHelper.mix('#ffffff', color, weight);
};
ColorHelper.hexToRgbA = (hex, alpha) => {
    let c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('');
        if (c.length === 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = '0x' + c.join('');
        return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + alpha + ')';
    }
    throw new Error('Bad Hex');
};
ColorHelper.mix = (color1, color2, weight) => {
    const d2h = (d) => d.toString(16);
    const h2d = (h) => parseInt(h, 16);
    let result = '#';
    for (let i = 1; i < 7; i += 2) {
        const color1Part = h2d(color1.substr(i, 2));
        const color2Part = h2d(color2.substr(i, 2));
        const resultPart = d2h(Math.floor(color2Part + (color1Part - color2Part) * (weight / 100.0)));
        result += ('0' + resultPart).slice(-2);
    }
    return result;
};
const isMobile = () => (/android|webos|iphone|ipad|ipod|blackberry|windows phone/)
    .test(navigator.userAgent.toLowerCase());
/* harmony export (immutable) */ __webpack_exports__["c"] = isMobile;

//# sourceMappingURL=theme.constants.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const environment = {
    production: true,
};
/* harmony export (immutable) */ __webpack_exports__["a"] = environment;

//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map