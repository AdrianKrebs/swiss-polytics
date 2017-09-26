webpackJsonp([5,10],{

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_constants__ = __webpack_require__(178);
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



var BaThemeConfigProvider = /** @class */ (function () {
    function BaThemeConfigProvider() {
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
                primaryLight: __WEBPACK_IMPORTED_MODULE_2__theme_constants__["a" /* colorHelper */].tint(this.colorScheme.primary, 30),
                infoLight: __WEBPACK_IMPORTED_MODULE_2__theme_constants__["a" /* colorHelper */].tint(this.colorScheme.info, 30),
                successLight: __WEBPACK_IMPORTED_MODULE_2__theme_constants__["a" /* colorHelper */].tint(this.colorScheme.success, 30),
                warningLight: __WEBPACK_IMPORTED_MODULE_2__theme_constants__["a" /* colorHelper */].tint(this.colorScheme.warning, 30),
                dangerLight: __WEBPACK_IMPORTED_MODULE_2__theme_constants__["a" /* colorHelper */].tint(this.colorScheme.danger, 30),
                primaryDark: __WEBPACK_IMPORTED_MODULE_2__theme_constants__["a" /* colorHelper */].shade(this.colorScheme.primary, 15),
                infoDark: __WEBPACK_IMPORTED_MODULE_2__theme_constants__["a" /* colorHelper */].shade(this.colorScheme.info, 15),
                successDark: __WEBPACK_IMPORTED_MODULE_2__theme_constants__["a" /* colorHelper */].shade(this.colorScheme.success, 15),
                warningDark: __WEBPACK_IMPORTED_MODULE_2__theme_constants__["a" /* colorHelper */].shade(this.colorScheme.warning, 15),
                dangerDark: __WEBPACK_IMPORTED_MODULE_2__theme_constants__["a" /* colorHelper */].shade(this.colorScheme.danger, 15),
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
                    dashboardPieChart: __WEBPACK_IMPORTED_MODULE_2__theme_constants__["a" /* colorHelper */].hexToRgbA(this.basic.defaultText, 0.8),
                    dashboardLineChart: this.basic.defaultText,
                }
            }
        };
    }
    BaThemeConfigProvider.prototype.get = function () {
        return this.conf;
    };
    BaThemeConfigProvider.prototype.changeTheme = function (theme) {
        __WEBPACK_IMPORTED_MODULE_1_lodash__["merge"](this.get().theme, theme);
    };
    BaThemeConfigProvider.prototype.changeColors = function (colors) {
        __WEBPACK_IMPORTED_MODULE_1_lodash__["merge"](this.get().colors, colors);
    };
    BaThemeConfigProvider = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], BaThemeConfigProvider);
    return BaThemeConfigProvider;
}());

//# sourceMappingURL=theme.configProvider.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme_configProvider__ = __webpack_require__(118);
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


var BaThemeConfig = /** @class */ (function () {
    function BaThemeConfig(_baConfig) {
        this._baConfig = _baConfig;
    }
    BaThemeConfig.prototype.config = function () {
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
    };
    BaThemeConfig = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__theme_configProvider__["a" /* BaThemeConfigProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__theme_configProvider__["a" /* BaThemeConfigProvider */]) === "function" && _a || Object])
    ], BaThemeConfig);
    return BaThemeConfig;
    var _a;
}());

//# sourceMappingURL=theme.config.js.map

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services__ = __webpack_require__(48);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__services__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme_constants__ = __webpack_require__(178);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__theme_constants__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__theme_constants__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__theme_constants__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__theme_constants__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_configProvider__ = __webpack_require__(118);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__theme_configProvider__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_config__ = __webpack_require__(139);
/* unused harmony namespace reexport */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_uploader__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_translation_module__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__theme_config__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__theme_configProvider__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_baCard_baCardBlur_directive__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directives__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pipes__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__validators__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_completer__ = __webpack_require__(570);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgaModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var NGA_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_8__components__["a" /* BaAmChart */],
    __WEBPACK_IMPORTED_MODULE_8__components__["b" /* BaBackTop */],
    __WEBPACK_IMPORTED_MODULE_8__components__["c" /* BaCard */],
    __WEBPACK_IMPORTED_MODULE_8__components__["d" /* BaChartistChart */],
    __WEBPACK_IMPORTED_MODULE_8__components__["e" /* BaCheckbox */],
    __WEBPACK_IMPORTED_MODULE_8__components__["f" /* BaContentTop */],
    __WEBPACK_IMPORTED_MODULE_8__components__["g" /* BaFullCalendar */],
    __WEBPACK_IMPORTED_MODULE_8__components__["h" /* BaMenuItem */],
    __WEBPACK_IMPORTED_MODULE_8__components__["i" /* BaMenu */],
    __WEBPACK_IMPORTED_MODULE_8__components__["j" /* BaMsgCenter */],
    __WEBPACK_IMPORTED_MODULE_8__components__["k" /* BaMultiCheckbox */],
    __WEBPACK_IMPORTED_MODULE_8__components__["l" /* BaPageTop */],
    __WEBPACK_IMPORTED_MODULE_8__components__["m" /* BaPictureUploader */],
    __WEBPACK_IMPORTED_MODULE_8__components__["n" /* BaSidebar */],
    __WEBPACK_IMPORTED_MODULE_8__components__["o" /* BaFileUploader */]
];
var NGA_DIRECTIVES = [
    __WEBPACK_IMPORTED_MODULE_10__directives__["a" /* BaScrollPosition */],
    __WEBPACK_IMPORTED_MODULE_10__directives__["b" /* BaSlimScroll */],
    __WEBPACK_IMPORTED_MODULE_10__directives__["c" /* BaThemeRun */],
    __WEBPACK_IMPORTED_MODULE_9__components_baCard_baCardBlur_directive__["a" /* BaCardBlur */]
];
var NGA_PIPES = [
    __WEBPACK_IMPORTED_MODULE_11__pipes__["a" /* BaAppPicturePipe */],
    __WEBPACK_IMPORTED_MODULE_11__pipes__["b" /* BaKameleonPicturePipe */],
    __WEBPACK_IMPORTED_MODULE_11__pipes__["c" /* BaProfilePicturePipe */]
];
var NGA_SERVICES = [
    __WEBPACK_IMPORTED_MODULE_12__services__["b" /* BaImageLoaderService */],
    __WEBPACK_IMPORTED_MODULE_12__services__["c" /* BaThemePreloader */],
    __WEBPACK_IMPORTED_MODULE_12__services__["d" /* BaThemeSpinner */],
    __WEBPACK_IMPORTED_MODULE_12__services__["a" /* BaMenuService */]
];
var NGA_VALIDATORS = [
    __WEBPACK_IMPORTED_MODULE_13__validators__["a" /* EmailValidator */],
    __WEBPACK_IMPORTED_MODULE_13__validators__["b" /* EqualPasswordsValidator */]
];
var NgaModule = /** @class */ (function () {
    function NgaModule() {
    }
    NgaModule_1 = NgaModule;
    NgaModule.forRoot = function () {
        return {
            ngModule: NgaModule_1,
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__theme_configProvider__["a" /* BaThemeConfigProvider */],
                __WEBPACK_IMPORTED_MODULE_6__theme_config__["a" /* BaThemeConfig */]
            ].concat(NGA_VALIDATORS, NGA_SERVICES),
        };
    };
    NgaModule = NgaModule_1 = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            declarations: NGA_PIPES.concat(NGA_DIRECTIVES, NGA_COMPONENTS),
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_translation_module__["a" /* AppTranslationModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_uploader__["a" /* NgUploaderModule */],
                __WEBPACK_IMPORTED_MODULE_14_ng2_completer__["a" /* Ng2CompleterModule */]
            ],
            exports: NGA_PIPES.concat(NGA_DIRECTIVES, NGA_COMPONENTS)
        })
    ], NgaModule);
    return NgaModule;
    var NgaModule_1;
}());

//# sourceMappingURL=nga.module.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_http_loader__ = __webpack_require__(482);
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
var translationOptions = {
    loader: {
        provide: __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["a" /* TranslateLoader */],
        useFactory: (createTranslateLoader),
        deps: [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]]
    }
};
var AppTranslationModule = /** @class */ (function () {
    function AppTranslationModule(translate) {
        this.translate = translate;
        translate.addLangs(["en"]);
        translate.setDefaultLang('en');
        translate.use('en');
    }
    AppTranslationModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forRoot(translationOptions)],
            exports: [__WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]) === "function" && _a || Object])
    ], AppTranslationModule);
    return AppTranslationModule;
    var _a;
}());

//# sourceMappingURL=app.translation.module.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export IMAGES_ROOT */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return layoutSizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return layoutPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return colorHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isMobile; });
var IMAGES_ROOT = 'assets/img/';
var layoutSizes = {
    resWidthCollapseSidebar: 1200,
    resWidthHideSidebar: 500
};
var layoutPaths = {
    images: {
        root: IMAGES_ROOT,
        profile: IMAGES_ROOT + 'app/profile/',
        amMap: 'assets/img/theme/vendor/ammap/',
        amChart: 'assets/img/theme/vendor/amcharts/dist/amcharts/images/'
    }
};
var colorHelper = /** @class */ (function () {
    function colorHelper() {
    }
    colorHelper.shade = function (color, weight) {
        return colorHelper.mix('#000000', color, weight);
    };
    colorHelper.tint = function (color, weight) {
        return colorHelper.mix('#ffffff', color, weight);
    };
    colorHelper.hexToRgbA = function (hex, alpha) {
        var c;
        if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
            c = hex.substring(1).split('');
            if (c.length == 3) {
                c = [c[0], c[0], c[1], c[1], c[2], c[2]];
            }
            c = '0x' + c.join('');
            return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + alpha + ')';
        }
        throw new Error('Bad Hex');
    };
    colorHelper.mix = function (color1, color2, weight) {
        var d2h = function (d) { return d.toString(16); };
        var h2d = function (h) { return parseInt(h, 16); };
        var result = "#";
        for (var i = 1; i < 7; i += 2) {
            var color1Part = h2d(color1.substr(i, 2));
            var color2Part = h2d(color2.substr(i, 2));
            var resultPart = d2h(Math.floor(color2Part + (color1Part - color2Part) * (weight / 100.0)));
            result += ('0' + resultPart).slice(-2);
        }
        return result;
    };
    return colorHelper;
}());

var isMobile = function () { return (/android|webos|iphone|ipad|ipod|blackberry|windows phone/).test(navigator.userAgent.toLowerCase()); };
//# sourceMappingURL=theme.constants.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_menu__ = __webpack_require__(417);
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



var Pages = /** @class */ (function () {
    function Pages(_menuService) {
        this._menuService = _menuService;
    }
    Pages.prototype.ngOnInit = function () {
        this._menuService.updateMenuByRoutes(__WEBPACK_IMPORTED_MODULE_2__pages_menu__["a" /* PAGES_MENU */]);
    };
    Pages = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'pages',
            template: "\n    <ba-sidebar></ba-sidebar>\n    <ba-page-top></ba-page-top>\n    <div class=\"al-main\">\n      <div class=\"al-content\">\n        <ba-content-top></ba-content-top>\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n    <footer class=\"al-footer clearfix\">\n      <div class=\"al-footer-main clearfix\">\n        <ul class=\"al-share clearfix\">\n          <li><a href=\"https://twitter.com/swiss_polytics\"><i class=\"socicon socicon-twitter\"></i></a></li>\n          <li><a href=\"https://github.com/AdrianKrebs/swiss-poliytics\"><i class=\"socicon socicon-github\"></i></a></li>\n        </ul>\n      </div>\n    </footer>\n    <ba-back-top position=\"200\"></ba-back-top>\n    "
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__theme__["a" /* BaMenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__theme__["a" /* BaMenuService */]) === "function" && _a || Object])
    ], Pages);
    return Pages;
    var _a;
}());

//# sourceMappingURL=pages.component.js.map

/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./about/about.module": [
		645,
		4
	],
	"./dashboard/dashboard.module": [
		646,
		1
	],
	"./parliament/parliament.module": [
		647,
		0
	],
	"./party/party.module": [
		648,
		3
	],
	"./politician/politician.module": [
		649,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 382;


/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(414);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(13);
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


var GlobalState = /** @class */ (function () {
    function GlobalState() {
        var _this = this;
        this._data = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this._dataStream$ = this._data.asObservable();
        this._subscriptions = new Map();
        this._dataStream$.subscribe(function (data) { return _this._onEvent(data); });
    }
    GlobalState.prototype.notifyDataChanged = function (event, value) {
        var current = this._data[event];
        if (current !== value) {
            this._data[event] = value;
            this._data.next({
                event: event,
                data: this._data[event]
            });
        }
    };
    GlobalState.prototype.subscribe = function (event, callback) {
        var subscribers = this._subscriptions.get(event) || [];
        subscribers.push(callback);
        this._subscriptions.set(event, subscribers);
    };
    GlobalState.prototype._onEvent = function (data) {
        var subscribers = this._subscriptions.get(data['event']) || [];
        subscribers.forEach(function (callback) {
            callback.call(null, data['data']);
        });
    };
    GlobalState = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], GlobalState);
    return GlobalState;
}());

//# sourceMappingURL=global.state.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return APP_DI_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_CONFIG; });
/**
 * Created by Adrian on 9/10/2017.
 */

var APP_DI_CONFIG = {
    BACKEND_URL: 'https://infinite-headland-89947.herokuapp.com'
};
var APP_CONFIG = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* InjectionToken */]('app.config');
//# sourceMappingURL=app-config.constants.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_state__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_services__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_theme_config__ = __webpack_require__(139);
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
var App = /** @class */ (function () {
    function App(_state, _imageLoader, _spinner, viewContainerRef, themeConfig) {
        var _this = this;
        this._state = _state;
        this._imageLoader = _imageLoader;
        this._spinner = _spinner;
        this.viewContainerRef = viewContainerRef;
        this.themeConfig = themeConfig;
        this.isMenuCollapsed = false;
        themeConfig.config();
        this._loadImages();
        this._state.subscribe('menu.isCollapsed', function (isCollapsed) {
            _this.isMenuCollapsed = isCollapsed;
        });
    }
    App.prototype.ngAfterViewInit = function () {
        var _this = this;
        // hide spinner once all loaders are completed
        __WEBPACK_IMPORTED_MODULE_2__theme_services__["c" /* BaThemePreloader */].load().then(function (values) {
            _this._spinner.hide();
        });
    };
    App.prototype._loadImages = function () {
        // register some loaders
        __WEBPACK_IMPORTED_MODULE_2__theme_services__["c" /* BaThemePreloader */].registerLoader(this._imageLoader.load('assets/img/sky-bg.jpg'));
    };
    App = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app',
            styles: [__webpack_require__(551)],
            template: "\n    <main [class.menu-collapsed]=\"isMenuCollapsed\" baThemeRun>\n      <div class=\"additional-bg\"></div>\n      <router-outlet></router-outlet>\n    </main>\n  "
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__global_state__["a" /* GlobalState */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__global_state__["a" /* GlobalState */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__theme_services__["b" /* BaImageLoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__theme_services__["b" /* BaImageLoaderService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__theme_services__["d" /* BaThemeSpinner */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__theme_services__["d" /* BaThemeSpinner */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* ViewContainerRef */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__theme_theme_config__["a" /* BaThemeConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__theme_theme_config__["a" /* BaThemeConfig */]) === "function" && _e || Object])
    ], App);
    return App;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_service__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__global_state__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__theme_nga_module__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_pages_module__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_config_constants__ = __webpack_require__(401);
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
var APP_PROVIDERS = [
    __WEBPACK_IMPORTED_MODULE_8__app_service__["a" /* AppState */],
    __WEBPACK_IMPORTED_MODULE_9__global_state__["a" /* GlobalState */],
    {
        provide: __WEBPACK_IMPORTED_MODULE_12__app_config_constants__["a" /* APP_CONFIG */],
        useValue: __WEBPACK_IMPORTED_MODULE_12__app_config_constants__["b" /* APP_DI_CONFIG */]
    }
];
/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
var AppModule = /** @class */ (function () {
    function AppModule(appState) {
        this.appState = appState;
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* App */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* App */]
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
                __WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* routing */]
            ],
            providers: [
                APP_PROVIDERS
            ]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8__app_service__["a" /* AppState */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__app_service__["a" /* AppState */]) === "function" && _a || Object])
    ], AppModule);
    return AppModule;
    var _a;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(34);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });

var routes = [
    { path: '', redirectTo: 'pages', pathMatch: 'full' },
    { path: '**', redirectTo: 'pages/dashboard' }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes, { useHash: true });
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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

var AppState = /** @class */ (function () {
    function AppState() {
        this._state = {};
    }
    Object.defineProperty(AppState.prototype, "state", {
        // already return a clone of the current state
        get: function () {
            return this._state = this._clone(this._state);
        },
        // never allow mutation
        set: function (value) {
            throw new Error('do not mutate the `.state` directly');
        },
        enumerable: true,
        configurable: true
    });
    AppState.prototype.get = function (prop) {
        // use our state getter for the clone
        var state = this.state;
        return state.hasOwnProperty(prop) ? state[prop] : state;
    };
    AppState.prototype.set = function (prop, value) {
        // internally mutate our state
        return this._state[prop] = value;
    };
    AppState.prototype._clone = function (object) {
        // simple object clone
        return JSON.parse(JSON.stringify(object));
    };
    AppState = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AppState);
    return AppState;
}());

//# sourceMappingURL=app.service.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PAGES_MENU; });
var PAGES_MENU = [
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
                        order: 0
                    }
                }
            },
            {
                path: 'parliament',
                data: {
                    menu: {
                        title: 'Parlament',
                        icon: 'ion-ios-people',
                        selected: false,
                        expanded: false,
                        order: 0
                    }
                }
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
                        order: 0
                    }
                }
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
                    }
                },
                children: [
                    {
                        path: 'SVP',
                        data: {
                            menu: {
                                title: 'SVP',
                            }
                        }
                    },
                    {
                        path: 'SP',
                        data: {
                            menu: {
                                title: 'SP',
                            }
                        }
                    },
                    {
                        path: 'FDP',
                        data: {
                            menu: {
                                title: 'FDP',
                            }
                        }
                    },
                    {
                        path: 'CVP',
                        data: {
                            menu: {
                                title: 'CVP',
                            }
                        }
                    },
                    {
                        path: 'BDP',
                        data: {
                            menu: {
                                title: 'BDP',
                            }
                        }
                    },
                    {
                        path: 'GLP',
                        data: {
                            menu: {
                                title: 'GLP',
                            }
                        }
                    },
                    {
                        path: 'GPS',
                        data: {
                            menu: {
                                title: 'GPS',
                            }
                        }
                    }
                ]
            },
            {
                path: 'about',
                data: {
                    menu: {
                        title: 'Über uns',
                        icon: 'ion-information',
                        selected: false,
                        expanded: false,
                        order: 0
                    }
                }
            }
        ]
    }
];
//# sourceMappingURL=pages.menu.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_routing__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_nga_module__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_translation_module__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_component__ = __webpack_require__(225);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_4__app_translation_module__["a" /* AppTranslationModule */], __WEBPACK_IMPORTED_MODULE_3__theme_nga_module__["a" /* NgaModule */], __WEBPACK_IMPORTED_MODULE_2__pages_routing__["a" /* routing */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__pages_component__["a" /* Pages */]]
        })
    ], PagesModule);
    return PagesModule;
}());

//# sourceMappingURL=pages.module.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_component__ = __webpack_require__(225);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });


// noinspection TypeScriptValidateTypes
// export function loadChildren(path) { return System.import(path); };
var routes = [
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
        ]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(routes);
//# sourceMappingURL=pages.routing.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PERSONID_TO_NAME_MAPPING; });
var PERSONID_TO_NAME_MAPPING = [
    {
        "id": 4199,
        "name": "Priska Seiler Graf"
    },
    {
        "id": 4185,
        "name": "Jonas Fricker"
    },
    {
        "id": 4164,
        "name": "Christian Imark"
    },
    {
        "id": 4036,
        "name": "Marianne Streiff-Feller"
    },
    {
        "id": 4094,
        "name": "Lorenz Hess"
    },
    {
        "id": 4095,
        "name": "Regula Rytz"
    },
    {
        "id": 4129,
        "name": "Verena Herzog"
    },
    {
        "\r\nid": 4130,
        "name": "Nadine Masshardt"
    },
    {
        "id": 3876,
        "name": "Yvette Estermann"
    },
    {
        "id": 3887,
        "name": "Alfred Heer"
    },
    {
        "id": 4070,
        "name": "Martin Candinas"
    },
    {
        "id": 4101,
        "name": "Christine Bulliard-Marbach"
    },
    {
        "id": 4018,
        "name": "Jacques-André Maire"
    },
    {
        "id": 4134,
        "name": "Martina M\r\nunz"
    },
    {
        "id": 4072,
        "name": "Fabio Regazzi"
    },
    {
        "id": 4109,
        "name": "Valérie Piller Carrard"
    },
    {
        "id": 3899,
        "name": "Eric Nussbaumer"
    },
    {
        "id": 3923,
        "name": "Ada Marra"
    },
    {
        "id": 1279,
        "name": "Roger Nordmann"
    },
    {
        "id": 1124,
        "name": "Dominique de Buman"
    },
    {
        "id": 91,
        "name": "Ulrich Giezenda\r\nnner"
    },
    {
        "id": 4091,
        "name": "Mathias Reynard"
    },
    {
        "id": 4079,
        "name": "Fathi Derder"
    },
    {
        "id": 4083,
        "name": "Jürg Grossen"
    },
    {
        "id": 4113,
        "name": "Manuel Tornare"
    },
    {
        "id": 4063,
        "name": "Stefan Müller-Altermatt"
    },
    {
        "id": 4075,
        "name": "Andrea Caroni"
    },
    {
        "id": 4116,
        "name": "Petra Gössi"
    },
    {
        "id": 4118,
        "name": "Christian Lohr"
    },
    {
        "id": 4073,
        "name": "Roberta Pantani"
    },
    {
        "id": 4086,
        "name": "Yannick Buttet"
    },
    {
        "id": 4040,
        "name": "Elisabeth Schneider-Schneiter"
    },
    {
        "id": 4059,
        "name": "Beat Flach"
    },
    {
        "id": 1131,
        "name": "Evi Allemann"
    },
    {
        "id": 3912,
        "name": "Christian Wasser\r\nfallen"
    },
    {
        "id": 3882,
        "name": "Bastien Girod"
    },
    {
        "id": 3879,
        "name": "Olivier Français"
    },
    {
        "id": 4162,
        "name": "Franz Grüter"
    },
    {
        "id": 4194,
        "name": "Laurent Wehrli"
    },
    {
        "id": 4180,
        "name": "Thomas Ammann"
    },
    {
        "id": 1125,
        "name": "Chantal Galladé"
    },
    {
        "id": 3890,
        "name": "Thomas Hurter"
    },
    {
        "\r\nid": 3830,
        "name": "Marina Carobbio Guscetti"
    },
    {
        "id": 1337,
        "name": "Ida Glanzmann-Hunkeler"
    },
    {
        "id": 172,
        "name": "Paul Rechsteiner"
    },
    {
        "id": 214,
        "name": "Luzi Stamm"
    },
    {
        "id": 1288,
        "name": "Viola Amherd"
    },
    {
        "id": 525,
        "name": "Roberto Zanetti"
    },
    {
        "id": 3914,
        "name": "Robert Cramer"
    },
    {
        "id": 3921,
        "name": "Konrad Graber"
    },
    {
        "id": 487,
        "name": "Susanne Leutenegger Oberholzer"
    },
    {
        "id": 341,
        "name": "Liliane Maury Pasquier"
    },
    {
        "id": 3901,
        "name": "Lukas Reimann"
    },
    {
        "id": 1150,
        "name": "Christian Levrat"
    },
    {
        "id": 4090,
        "name": "Céline Amaudruz"
    },
    {
        "id": 4049,
        "name": "Mat\r\nthias Aebischer"
    },
    {
        "id": 540,
        "name": "Filippo Lombardi"
    },
    {
        "id": 4138,
        "name": "Guillaume Barazzone"
    },
    {
        "id": 1129,
        "name": "Silvia Schenker"
    },
    {
        "id": 4069,
        "name": "Yvonne Feri"
    },
    {
        "id": 3902,
        "name": "Natalie Rickli"
    },
    {
        "id": 4082,
        "name": "Bernhard Guhl"
    },
    {
        "id": 1346,
        "name": "Isabe\r\nlle Moret"
    },
    {
        "id": 3888,
        "name": "Hugues Hiltpold"
    },
    {
        "id": 3904,
        "name": "Barbara Schmid-Federer"
    },
    {
        "id": 4057,
        "name": "Cédric Wermuth"
    },
    {
        "id": 3882,
        "name": "Bastien Girod"
    },
    {
        "id": 4204,
        "name": "Beat Rieder"
    },
    {
        "id": 4197,
        "name": "Min Li Marti"
    },
    {
        "id": 3907,
        "name": "Adèle Thore\r\nns Goumaz"
    },
    {
        "id": 4184,
        "name": "Sibel Arslan"
    },
    {
        "id": 4174,
        "name": "Barbara Steinemann"
    },
    {
        "id": 4178,
        "name": "Claudio Zanetti"
    },
    {
        "id": 4066,
        "name": "Rosmarie Quadranti"
    },
    {
        "id": 4031,
        "name": "Maja Ingold"
    },
    {
        "id": 1139,
        "name": "Christa Markwalder"
    },
    {
        "id": 4208,
        "name": "Matthi\r\nas Samuel Jauslin"
    },
    {
        "id": 4212,
        "name": "Thomas Egger"
    },
    {
        "id": 4154,
        "name": "Jean-Luc Addor"
    },
    {
        "id": 4093,
        "name": "Balthasar Glättli"
    },
    {
        "id": 4076,
        "name": "Philipp Hadorn"
    },
    {
        "id": 4120,
        "name": "Marco Romano"
    },
    {
        "id": 1120,
        "name": "Carlo Sommaruga"
    },
    {
        "id": 3898,
        "name": "Yves N\r\nidegger"
    },
    {
        "id": 1156,
        "name": "Bea Heim"
    },
    {
        "id": 4172,
        "name": "Werner Salzmann"
    },
    {
        "id": 806,
        "name": "Maya Graf"
    },
    {
        "id": 502,
        "name": "Kathy Riklin"
    },
    {
        "id": 1295,
        "name": "Edith Graf-Litscher"
    },
    {
        "id": 823,
        "name": "Pascale Bruderer Wyss"
    },
    {
        "id": 3871,
        "name": "Pirmin Bischof"
    },
    {
        "\r\nid": 3891,
        "name": "Daniel Jositsch"
    },
    {
        "id": 4055,
        "name": "Stefan Engler"
    },
    {
        "id": 3877,
        "name": "Doris Fiala"
    },
    {
        "id": 3828,
        "name": "Ignazio Cassis"
    },
    {
        "id": 1153,
        "name": "Ruedi Noser"
    },
    {
        "id": 307,
        "name": "Toni Brunner"
    },
    {
        "id": 1109,
        "name": "Gerhard Pfister"
    },
    {
        "id": 1071,
        "name": "\r\nRuth Humbel"
    },
    {
        "id": 1106,
        "name": "Brigitte Häberli-Koller"
    },
    {
        "id": 173,
        "name": "Maximilian Reimann"
    },
    {
        "id": 3883,
        "name": "Alice Glauser-Zufferey"
    },
    {
        "id": 4115,
        "name": "Jean Christophe Schwaab"
    },
    {
        "id": 4189,
        "name": "Thierry Burkart"
    },
    {
        "id": 4149,
        "name": "Christine Häsler"
    },
    {
        "id": 4114,
        "name": "Hansjörg Knecht"
    },
    {
        "id": 4163,
        "name": "Erich Hess"
    },
    {
        "id": 4060,
        "name": "Daniela Schneeberger"
    },
    {
        "id": 4205,
        "name": "Beat Vonlanthen"
    },
    {
        "id": 4061,
        "name": "Thomas Hardegger"
    },
    {
        "id": 4181,
        "name": "Andrea Gmür-Schönenberger"
    },
    {
        "id": 4182,
        "name": "Claude B\r\néglé"
    },
    {
        "id": 4206,
        "name": "Erich Ettlin"
    },
    {
        "id": 4203,
        "name": "Angelo Barrile"
    },
    {
        "id": 4173,
        "name": "Sandra Sollberger"
    },
    {
        "id": 4176,
        "name": "Hans-Ueli Vogt"
    },
    {
        "id": 4008,
        "name": "Martin Landolt"
    },
    {
        "id": 4156,
        "name": "Michaël Buffat"
    },
    {
        "id": 4207,
        "name": "Damian Müller"
    },
    {
        "\r\nid": 4145,
        "name": "Werner Hösli"
    },
    {
        "id": 4046,
        "name": "Lorenzo Quadri"
    },
    {
        "id": 4121,
        "name": "Barbara Gysi"
    },
    {
        "id": 4058,
        "name": "Jacqueline Badran"
    },
    {
        "id": 4131,
        "name": "Claudia Friedl"
    },
    {
        "id": 4141,
        "name": "Hans-Peter Portmann"
    },
    {
        "id": 4158,
        "name": "Thomas Burgherr"
    },
    {
        "id": 4108,
        "name": "Isabelle Chevalley"
    },
    {
        "id": 4067,
        "name": "Heinz Brand"
    },
    {
        "id": 1138,
        "name": "Martin Bäumle"
    },
    {
        "id": 4159,
        "name": "Marco Chiesa"
    },
    {
        "id": 4183,
        "name": "Géraldine Marchand-Balet"
    },
    {
        "id": 4193,
        "name": "Philippe Nantermod"
    },
    {
        "id": 4188,
        "name": "Frédéric Borloz"
    },
    {
        "\r\nid": 4196,
        "name": "Tim Guldimann"
    },
    {
        "id": 4209,
        "name": "Hans-Ulrich Bigler"
    },
    {
        "id": 4026,
        "name": "Raphaël Comte"
    },
    {
        "id": 4190,
        "name": "Marcel Dobler"
    },
    {
        "id": 4123,
        "name": "Ursula Schneider Schüttel"
    },
    {
        "id": 4213,
        "name": "Samuel Bendahan"
    },
    {
        "id": 4198,
        "name": "Mattea Meyer"
    },
    {
        "id": 4191,
        "name": "Benoît Genecand"
    },
    {
        "id": 305,
        "name": "Didier Berberat"
    },
    {
        "id": 3907,
        "name": "Adèle Thorens Goumaz"
    }
];
//# sourceMappingURL=personId-to-name.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme_services__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_amcharts3__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_amcharts3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_amcharts3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_amcharts3_amcharts_plugins_responsive_responsive_js__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_amcharts3_amcharts_plugins_responsive_responsive_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_amcharts3_amcharts_plugins_responsive_responsive_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_amcharts3_amcharts_serial_js__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_amcharts3_amcharts_serial_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_amcharts3_amcharts_serial_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ammap3__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ammap3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ammap3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ammap3_ammap_maps_js_worldLow__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ammap3_ammap_maps_js_worldLow___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ammap3_ammap_maps_js_worldLow__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__baAmChartTheme_service__ = __webpack_require__(422);
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








var BaAmChart = /** @class */ (function () {
    function BaAmChart(_baAmChartThemeService) {
        this._baAmChartThemeService = _baAmChartThemeService;
        this.onChartReady = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
        this._loadChartsLib();
    }
    BaAmChart.prototype.ngOnInit = function () {
        AmCharts.themes.blur = this._baAmChartThemeService.getTheme();
    };
    BaAmChart.prototype.ngAfterViewInit = function () {
        var chart = AmCharts.makeChart(this._selector.nativeElement, this.baAmChartConfiguration);
        this.onChartReady.emit(chart);
    };
    BaAmChart.prototype._loadChartsLib = function () {
        __WEBPACK_IMPORTED_MODULE_1__theme_services__["c" /* BaThemePreloader */].registerLoader(new Promise(function (resolve, reject) {
            var amChartsReadyMsg = 'AmCharts ready';
            if (AmCharts.isReady) {
                resolve(amChartsReadyMsg);
            }
            else {
                AmCharts.ready(function () {
                    resolve(amChartsReadyMsg);
                });
            }
        }));
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ViewChild */])('baAmChart'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ElementRef */]) === "function" && _a || Object)
    ], BaAmChart.prototype, "_selector", void 0);
    BaAmChart = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'ba-am-chart',
            template: __webpack_require__(579),
            styles: [__webpack_require__(552)],
            providers: [__WEBPACK_IMPORTED_MODULE_7__baAmChartTheme_service__["a" /* BaAmChartThemeService */]],
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__baAmChartTheme_service__["a" /* BaAmChartThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__baAmChartTheme_service__["a" /* BaAmChartThemeService */]) === "function" && _b || Object])
    ], BaAmChart);
    return BaAmChart;
    var _a, _b;
}());

//# sourceMappingURL=baAmChart.component.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme__ = __webpack_require__(17);
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


var BaAmChartThemeService = /** @class */ (function () {
    function BaAmChartThemeService(_baConfig) {
        this._baConfig = _baConfig;
    }
    BaAmChartThemeService.prototype.getTheme = function () {
        var layoutColors = this._baConfig.get().colors;
        return {
            themeName: "blur",
            AmChart: {
                color: layoutColors.defaultText,
                backgroundColor: "#FFFFFF"
            },
            AmCoordinateChart: {
                colors: [layoutColors.primary, layoutColors.danger, layoutColors.warning, layoutColors.success, layoutColors.info, layoutColors.primaryDark, layoutColors.warningLight, layoutColors.successDark, layoutColors.successLight, layoutColors.primaryLight, layoutColors.warningDark]
            },
            AmStockChart: {
                colors: [layoutColors.primary, layoutColors.danger, layoutColors.warning, layoutColors.success, layoutColors.info, layoutColors.primaryDark, layoutColors.warningLight, layoutColors.successDark, layoutColors.successLight, layoutColors.primaryLight, layoutColors.warningDark]
            },
            AmSlicedChart: {
                colors: [layoutColors.primary, layoutColors.danger, layoutColors.warning, layoutColors.success, layoutColors.info, layoutColors.primaryDark, layoutColors.warningLight, layoutColors.successDark, layoutColors.successLight, layoutColors.primaryLight, layoutColors.warningDark],
                labelTickColor: "#FFFFFF",
                labelTickAlpha: 0.3
            },
            AmRectangularChart: {
                zoomOutButtonColor: '#FFFFFF',
                zoomOutButtonRollOverAlpha: 0.15,
                zoomOutButtonImage: "lens.png"
            },
            AxisBase: {
                axisColor: "#FFFFFF",
                axisAlpha: 0.3,
                gridAlpha: 0.1,
                gridColor: "#FFFFFF"
            },
            ChartScrollbar: {
                backgroundColor: "#FFFFFF",
                backgroundAlpha: 0.12,
                graphFillAlpha: 0.5,
                graphLineAlpha: 0,
                selectedBackgroundColor: "#FFFFFF",
                selectedBackgroundAlpha: 0.4,
                gridAlpha: 0.15
            },
            ChartCursor: {
                cursorColor: layoutColors.primary,
                color: "#FFFFFF",
                cursorAlpha: 0.5
            },
            AmLegend: {
                color: "#FFFFFF"
            },
            AmGraph: {
                lineAlpha: 0.9
            },
            GaugeArrow: {
                color: "#FFFFFF",
                alpha: 0.8,
                nailAlpha: 0,
                innerRadius: "40%",
                nailRadius: 15,
                startWidth: 15,
                borderAlpha: 0.8,
                nailBorderAlpha: 0
            },
            GaugeAxis: {
                tickColor: "#FFFFFF",
                tickAlpha: 1,
                tickLength: 15,
                minorTickLength: 8,
                axisThickness: 3,
                axisColor: '#FFFFFF',
                axisAlpha: 1,
                bandAlpha: 0.8
            },
            TrendLine: {
                lineColor: layoutColors.danger,
                lineAlpha: 0.8
            },
            // ammap
            AreasSettings: {
                alpha: 0.8,
                color: layoutColors.info,
                colorSolid: layoutColors.primaryDark,
                unlistedAreasAlpha: 0.4,
                unlistedAreasColor: "#FFFFFF",
                outlineColor: "#FFFFFF",
                outlineAlpha: 0.5,
                outlineThickness: 0.5,
                rollOverColor: layoutColors.primary,
                rollOverOutlineColor: "#FFFFFF",
                selectedOutlineColor: "#FFFFFF",
                selectedColor: "#f15135",
                unlistedAreasOutlineColor: "#FFFFFF",
                unlistedAreasOutlineAlpha: 0.5
            },
            LinesSettings: {
                color: "#FFFFFF",
                alpha: 0.8
            },
            ImagesSettings: {
                alpha: 0.8,
                labelColor: "#FFFFFF",
                color: "#FFFFFF",
                labelRollOverColor: layoutColors.primaryDark
            },
            ZoomControl: {
                buttonFillAlpha: 0.8,
                buttonIconColor: layoutColors.default,
                buttonRollOverColor: layoutColors.danger,
                buttonFillColor: layoutColors.primaryDark,
                buttonBorderColor: layoutColors.primaryDark,
                buttonBorderAlpha: 0,
                buttonCornerRadius: 0,
                gridColor: "#FFFFFF",
                gridBackgroundColor: "#FFFFFF",
                buttonIconAlpha: 0.6,
                gridAlpha: 0.6,
                buttonSize: 20
            },
            SmallMap: {
                mapColor: "#000000",
                rectangleColor: layoutColors.danger,
                backgroundColor: "#FFFFFF",
                backgroundAlpha: 0.7,
                borderThickness: 1,
                borderAlpha: 0.8
            },
            // the defaults below are set using CSS syntax, you can use any existing css property
            // if you don't use Stock chart, you can delete lines below
            PeriodSelector: {
                color: "#FFFFFF"
            },
            PeriodButton: {
                color: "#FFFFFF",
                background: "transparent",
                opacity: 0.7,
                border: "1px solid rgba(0, 0, 0, .3)",
                MozBorderRadius: "5px",
                borderRadius: "5px",
                margin: "1px",
                outline: "none",
                boxSizing: "border-box"
            },
            PeriodButtonSelected: {
                color: "#FFFFFF",
                backgroundColor: "#b9cdf5",
                border: "1px solid rgba(0, 0, 0, .3)",
                MozBorderRadius: "5px",
                borderRadius: "5px",
                margin: "1px",
                outline: "none",
                opacity: 1,
                boxSizing: "border-box"
            },
            PeriodInputField: {
                color: "#FFFFFF",
                background: "transparent",
                border: "1px solid rgba(0, 0, 0, .3)",
                outline: "none"
            },
            DataSetSelector: {
                color: "#FFFFFF",
                selectedBackgroundColor: "#b9cdf5",
                rollOverBackgroundColor: "#a8b0e4"
            },
            DataSetCompareList: {
                color: "#FFFFFF",
                lineHeight: "100%",
                boxSizing: "initial",
                webkitBoxSizing: "initial",
                border: "1px solid rgba(0, 0, 0, .3)"
            },
            DataSetSelect: {
                border: "1px solid rgba(0, 0, 0, .3)",
                outline: "none"
            }
        };
    };
    BaAmChartThemeService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__theme__["d" /* BaThemeConfigProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__theme__["d" /* BaThemeConfigProvider */]) === "function" && _a || Object])
    ], BaAmChartThemeService);
    return BaAmChartThemeService;
    var _a;
}());

//# sourceMappingURL=baAmChartTheme.service.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baAmChart_component__ = __webpack_require__(421);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baAmChart_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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

var BaBackTop = /** @class */ (function () {
    function BaBackTop() {
        this.position = 400;
        this.showSpeed = 500;
        this.moveSpeed = 1000;
    }
    BaBackTop.prototype.ngAfterViewInit = function () {
        this._onWindowScroll();
    };
    BaBackTop.prototype._onClick = function () {
        jQuery('html, body').animate({ scrollTop: 0 }, { duration: this.moveSpeed });
        return false;
    };
    BaBackTop.prototype._onWindowScroll = function () {
        var el = this._selector.nativeElement;
        window.scrollY > this.position ? jQuery(el).fadeIn(this.showSpeed) : jQuery(el).fadeOut(this.showSpeed);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ViewChild */])('baBackTop'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ElementRef */]) === "function" && _a || Object)
    ], BaBackTop.prototype, "_selector", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* HostListener */])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], BaBackTop.prototype, "_onClick", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* HostListener */])('window:scroll'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BaBackTop.prototype, "_onWindowScroll", null);
    BaBackTop = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'ba-back-top',
            styles: [__webpack_require__(553)],
            template: "\n    <i #baBackTop class=\"fa fa-angle-up back-top ba-back-top\" title=\"Back to Top\"></i>\n  "
        })
    ], BaBackTop);
    return BaBackTop;
    var _a;
}());

//# sourceMappingURL=baBackTop.component.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baBackTop_component__ = __webpack_require__(424);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baBackTop_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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

var BaCard = /** @class */ (function () {
    function BaCard() {
    }
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
            template: __webpack_require__(580),
        })
    ], BaCard);
    return BaCard;
}());

//# sourceMappingURL=baCard.component.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__baCardBlurHelper_service__ = __webpack_require__(428);
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



var BaCardBlur = /** @class */ (function () {
    function BaCardBlur(_baConfig, _baCardBlurHelper, _el) {
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
    BaCardBlur.prototype._onWindowResize = function () {
        if (this._isEnabled()) {
            this._bodyBgSize = this._baCardBlurHelper.getBodyBgImageSizes();
            this._recalculateCardStyle();
        }
    };
    BaCardBlur.prototype._getBodyImageSizesOnBgLoad = function () {
        var _this = this;
        this._baCardBlurHelper.bodyBgLoad().subscribe(function () {
            _this._bodyBgSize = _this._baCardBlurHelper.getBodyBgImageSizes();
        });
    };
    BaCardBlur.prototype._recalculateCardStylesOnBgLoad = function () {
        var _this = this;
        this._baCardBlurHelper.bodyBgLoad().subscribe(function (event) {
            setTimeout(_this._recalculateCardStyle.bind(_this));
        });
    };
    BaCardBlur.prototype._recalculateCardStyle = function () {
        if (!this._bodyBgSize) {
            return;
        }
        this._el.nativeElement.style.backgroundSize = Math.round(this._bodyBgSize.width) + 'px ' + Math.round(this._bodyBgSize.height) + 'px';
        this._el.nativeElement.style.backgroundPosition = Math.floor(this._bodyBgSize.positionX) + 'px ' + Math.floor(this._bodyBgSize.positionY) + 'px';
    };
    BaCardBlur.prototype._isEnabled = function () {
        return this._baConfig.get().theme.name == 'blur';
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* HostBinding */])('class.card-blur'),
        __metadata("design:type", Boolean)
    ], BaCardBlur.prototype, "isEnabled", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* HostListener */])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BaCardBlur.prototype, "_onWindowResize", null);
    BaCardBlur = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Directive */])({
            selector: '[baCardBlur]',
            providers: [__WEBPACK_IMPORTED_MODULE_2__baCardBlurHelper_service__["a" /* BaCardBlurHelper */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__theme__["d" /* BaThemeConfigProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__theme__["d" /* BaThemeConfigProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__baCardBlurHelper_service__["a" /* BaCardBlurHelper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__baCardBlurHelper_service__["a" /* BaCardBlurHelper */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ElementRef */]) === "function" && _c || Object])
    ], BaCardBlur);
    return BaCardBlur;
    var _a, _b, _c;
}());

//# sourceMappingURL=baCardBlur.directive.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaCardBlurHelper; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var BaCardBlurHelper = /** @class */ (function () {
    function BaCardBlurHelper() {
    }
    BaCardBlurHelper.prototype.init = function () {
        this._genBgImage();
        this._genImageLoadSubject();
    };
    BaCardBlurHelper.prototype.bodyBgLoad = function () {
        return this.imageLoadSubject;
    };
    BaCardBlurHelper.prototype.getBodyBgImageSizes = function () {
        var elemW = document.documentElement.clientWidth;
        var elemH = document.documentElement.clientHeight;
        if (elemW <= 640)
            return;
        var imgRatio = (this.image.height / this.image.width); // original img ratio
        var containerRatio = (elemH / elemW); // container ratio
        var finalHeight, finalWidth;
        if (containerRatio > imgRatio) {
            finalHeight = elemH;
            finalWidth = (elemH / imgRatio);
        }
        else {
            finalWidth = elemW;
            finalHeight = (elemW * imgRatio);
        }
        return { width: finalWidth, height: finalHeight, positionX: (elemW - finalWidth) / 2, positionY: (elemH - finalHeight) / 2 };
    };
    BaCardBlurHelper.prototype._genBgImage = function () {
        this.image = new Image();
        var computedStyle = getComputedStyle(document.body.querySelector('main'), ':before');
        this.image.src = computedStyle.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2');
    };
    BaCardBlurHelper.prototype._genImageLoadSubject = function () {
        var _this = this;
        this.imageLoadSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.image.onerror = function (err) {
            _this.imageLoadSubject.complete();
        };
        this.image.onload = function () {
            _this.imageLoadSubject.next(null);
            _this.imageLoadSubject.complete();
        };
    };
    BaCardBlurHelper = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])()
    ], BaCardBlurHelper);
    return BaCardBlurHelper;
}());

//# sourceMappingURL=baCardBlurHelper.service.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baCard_component__ = __webpack_require__(426);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baCard_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chartist__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaChartistChart; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BaChartistChart = /** @class */ (function () {
    function BaChartistChart() {
        this.onChartReady = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
    }
    BaChartistChart.prototype.ngAfterViewInit = function () {
        this.chart = new __WEBPACK_IMPORTED_MODULE_1_chartist__[this.baChartistChartType](this._selector.nativeElement, this.baChartistChartData, this.baChartistChartOptions, this.baChartistChartResponsive);
        this.onChartReady.emit(this.chart);
    };
    BaChartistChart.prototype.ngOnChanges = function (changes) {
        if (this.chart) {
            this.chart.update(this.baChartistChartData, this.baChartistChartOptions);
        }
    };
    BaChartistChart.prototype.ngOnDestroy = function () {
        if (this.chart) {
            this.chart.detach();
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Input */])(),
        __metadata("design:type", String)
    ], BaChartistChart.prototype, "baChartistChartType", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Input */])(),
        __metadata("design:type", Object)
    ], BaChartistChart.prototype, "baChartistChartData", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Input */])(),
        __metadata("design:type", Object)
    ], BaChartistChart.prototype, "baChartistChartOptions", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Input */])(),
        __metadata("design:type", Object)
    ], BaChartistChart.prototype, "baChartistChartResponsive", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Input */])(),
        __metadata("design:type", String)
    ], BaChartistChart.prototype, "baChartistChartClass", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Output */])(),
        __metadata("design:type", Object)
    ], BaChartistChart.prototype, "onChartReady", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ViewChild */])('baChartistChart'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ElementRef */]) === "function" && _a || Object)
    ], BaChartistChart.prototype, "_selector", void 0);
    BaChartistChart = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'ba-chartist-chart',
            template: __webpack_require__(581),
            providers: [],
        })
    ], BaChartistChart);
    return BaChartistChart;
    var _a;
}());

//# sourceMappingURL=baChartistChart.component.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baChartistChart_component__ = __webpack_require__(430);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baChartistChart_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(9);
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


var BaCheckbox = /** @class */ (function () {
    function BaCheckbox(state) {
        this.model = state;
        state.valueAccessor = this;
    }
    BaCheckbox.prototype.onChange = function (value) {
    };
    BaCheckbox.prototype.onTouch = function (value) {
    };
    BaCheckbox.prototype.writeValue = function (state) {
        this.state = state;
    };
    BaCheckbox.prototype.registerOnChange = function (fn) {
        this.onChange = function (state) {
            this.writeValue(state);
            this.model.viewToModelUpdate(state);
        };
    };
    BaCheckbox.prototype.registerOnTouched = function (fn) {
        this.onTouch = fn;
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
            styles: [__webpack_require__(554)],
            template: __webpack_require__(582),
            providers: [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NgModel */]]
        }),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* Self */])()),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NgModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NgModel */]) === "function" && _a || Object])
    ], BaCheckbox);
    return BaCheckbox;
    var _a;
}());

//# sourceMappingURL=baCheckbox.component.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baCheckbox_component__ = __webpack_require__(432);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baCheckbox_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_state__ = __webpack_require__(40);
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


var BaContentTop = /** @class */ (function () {
    function BaContentTop(_state) {
        var _this = this;
        this._state = _state;
        this.activePageTitle = '';
        this._state.subscribe('menu.activeLink', function (activeLink) {
            if (activeLink) {
                _this.activePageTitle = activeLink.title;
            }
        });
    }
    BaContentTop = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'ba-content-top',
            styles: [__webpack_require__(555)],
            template: __webpack_require__(583),
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__global_state__["a" /* GlobalState */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__global_state__["a" /* GlobalState */]) === "function" && _a || Object])
    ], BaContentTop);
    return BaContentTop;
    var _a;
}());

//# sourceMappingURL=baContentTop.component.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baContentTop_component__ = __webpack_require__(434);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baContentTop_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_uploader__ = __webpack_require__(164);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaFileUploader; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BaFileUploader = /** @class */ (function () {
    function BaFileUploader(renderer) {
        this.renderer = renderer;
        this.fileUploaderOptions = { url: '' };
        this.onFileUpload = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
        this.onFileUploadCompleted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
        this.defaultValue = '';
    }
    BaFileUploader.prototype.bringFileSelector = function () {
        this.renderer.invokeElementMethod(this._fileUpload.nativeElement, 'click');
        return false;
    };
    BaFileUploader.prototype.beforeFileUpload = function (uploadingFile) {
        var files = this._fileUpload.nativeElement.files;
        if (files.length) {
            var file = files[0];
            this._onChangeFileSelect(files[0]);
            if (!this._canFleUploadOnServer()) {
                uploadingFile.setAbort();
            }
            else {
                this.uploadFileInProgress = true;
            }
        }
    };
    BaFileUploader.prototype._onChangeFileSelect = function (file) {
        this._inputText.nativeElement.value = file.name;
    };
    BaFileUploader.prototype._onFileUpload = function (data) {
        if (data['done'] || data['abort'] || data['error']) {
            this._onFileUploadCompleted(data);
        }
        else {
            this.onFileUpload.emit(data);
        }
    };
    BaFileUploader.prototype._onFileUploadCompleted = function (data) {
        this.uploadFileInProgress = false;
        this.onFileUploadCompleted.emit(data);
    };
    BaFileUploader.prototype._canFleUploadOnServer = function () {
        return !!this.fileUploaderOptions['url'];
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Input */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_uploader__["b" /* NgUploaderOptions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_uploader__["b" /* NgUploaderOptions */]) === "function" && _a || Object)
    ], BaFileUploader.prototype, "fileUploaderOptions", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Output */])(),
        __metadata("design:type", Object)
    ], BaFileUploader.prototype, "onFileUpload", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Output */])(),
        __metadata("design:type", Object)
    ], BaFileUploader.prototype, "onFileUploadCompleted", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Input */])(),
        __metadata("design:type", String)
    ], BaFileUploader.prototype, "defaultValue", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ViewChild */])('fileUpload'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ElementRef */]) === "function" && _b || Object)
    ], BaFileUploader.prototype, "_fileUpload", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ViewChild */])('inputText'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ElementRef */]) === "function" && _c || Object)
    ], BaFileUploader.prototype, "_inputText", void 0);
    BaFileUploader = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'ba-file-uploader',
            styles: [__webpack_require__(556)],
            template: __webpack_require__(584),
        }),
        __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Renderer */]) === "function" && _d || Object])
    ], BaFileUploader);
    return BaFileUploader;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=baFileUploader.component.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baFileUploader_component__ = __webpack_require__(436);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baFileUploader_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fullcalendar_dist_fullcalendar_js__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fullcalendar_dist_fullcalendar_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_fullcalendar_dist_fullcalendar_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaFullCalendar; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BaFullCalendar = /** @class */ (function () {
    function BaFullCalendar() {
        this.onCalendarReady = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
    }
    BaFullCalendar.prototype.ngAfterViewInit = function () {
        var calendar = __WEBPACK_IMPORTED_MODULE_2_jquery__(this._selector.nativeElement).fullCalendar(this.baFullCalendarConfiguration);
        this.onCalendarReady.emit(calendar);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Input */])(),
        __metadata("design:type", Object)
    ], BaFullCalendar.prototype, "baFullCalendarConfiguration", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Input */])(),
        __metadata("design:type", String)
    ], BaFullCalendar.prototype, "baFullCalendarClass", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Output */])(),
        __metadata("design:type", Object)
    ], BaFullCalendar.prototype, "onCalendarReady", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ViewChild */])('baFullCalendar'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ElementRef */]) === "function" && _a || Object)
    ], BaFullCalendar.prototype, "_selector", void 0);
    BaFullCalendar = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'ba-full-calendar',
            template: __webpack_require__(585)
        })
    ], BaFullCalendar);
    return BaFullCalendar;
    var _a;
}());

//# sourceMappingURL=baFullCalendar.component.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baFullCalendar_component__ = __webpack_require__(438);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baFullCalendar_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_state__ = __webpack_require__(40);
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




var BaMenu = /** @class */ (function () {
    function BaMenu(_router, _service, _state) {
        this._router = _router;
        this._service = _service;
        this._state = _state;
        this.sidebarCollapsed = false;
        this.expandMenu = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
        this.outOfArea = -200;
    }
    BaMenu.prototype.updateMenu = function (newMenuItems) {
        this.menuItems = newMenuItems;
        this.selectMenuAndNotify();
    };
    BaMenu.prototype.selectMenuAndNotify = function () {
        if (this.menuItems) {
            this.menuItems = this._service.selectMenuItem(this.menuItems);
            this._state.notifyDataChanged('menu.activeLink', this._service.getCurrentItem());
        }
    };
    BaMenu.prototype.ngOnInit = function () {
        var _this = this;
        this._onRouteChange = this._router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* NavigationEnd */]) {
                if (_this.menuItems) {
                    _this.selectMenuAndNotify();
                }
                else {
                    // on page load we have to wait as event is fired before menu elements are prepared
                    setTimeout(function () { return _this.selectMenuAndNotify(); });
                }
            }
        });
        this._menuItemsSub = this._service.menuItems.subscribe(this.updateMenu.bind(this));
    };
    BaMenu.prototype.ngOnDestroy = function () {
        this._onRouteChange.unsubscribe();
        this._menuItemsSub.unsubscribe();
    };
    BaMenu.prototype.hoverItem = function ($event) {
        this.showHoverElem = true;
        this.hoverElemHeight = $event.currentTarget.clientHeight;
        // TODO: get rid of magic 66 constant
        this.hoverElemTop = $event.currentTarget.getBoundingClientRect().top - 66;
    };
    BaMenu.prototype.toggleSubMenu = function ($event) {
        var submenu = jQuery($event.currentTarget).next();
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
            template: __webpack_require__(586),
            styles: [__webpack_require__(557)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services__["a" /* BaMenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["a" /* BaMenuService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__global_state__["a" /* GlobalState */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__global_state__["a" /* GlobalState */]) === "function" && _c || Object])
    ], BaMenu);
    return BaMenu;
    var _a, _b, _c;
}());

//# sourceMappingURL=baMenu.component.js.map

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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

var BaMenuItem = /** @class */ (function () {
    function BaMenuItem() {
        this.child = false;
        this.itemHover = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
        this.toggleSubMenu = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
    }
    BaMenuItem.prototype.onHoverItem = function ($event) {
        this.itemHover.emit($event);
    };
    BaMenuItem.prototype.onToggleSubMenu = function ($event, item) {
        $event.item = item;
        this.toggleSubMenu.emit($event);
        return false;
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
            template: __webpack_require__(587),
            styles: [__webpack_require__(558)]
        })
    ], BaMenuItem);
    return BaMenuItem;
}());

//# sourceMappingURL=baMenuItem.component.js.map

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baMenuItem_component__ = __webpack_require__(441);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baMenuItem_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baMenu_component__ = __webpack_require__(440);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baMenu_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__baMsgCenter_service__ = __webpack_require__(445);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaMsgCenter; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BaMsgCenter = /** @class */ (function () {
    function BaMsgCenter(_baMsgCenterService) {
        this._baMsgCenterService = _baMsgCenterService;
        this.notifications = this._baMsgCenterService.getNotifications();
        this.messages = this._baMsgCenterService.getMessages();
    }
    BaMsgCenter = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'ba-msg-center',
            providers: [__WEBPACK_IMPORTED_MODULE_1__baMsgCenter_service__["a" /* BaMsgCenterService */]],
            styles: [__webpack_require__(559)],
            template: __webpack_require__(588)
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__baMsgCenter_service__["a" /* BaMsgCenterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__baMsgCenter_service__["a" /* BaMsgCenterService */]) === "function" && _a || Object])
    ], BaMsgCenter);
    return BaMsgCenter;
    var _a;
}());

//# sourceMappingURL=baMsgCenter.component.js.map

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaMsgCenterService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BaMsgCenterService = /** @class */ (function () {
    function BaMsgCenterService() {
        this._notifications = [
            {
                name: 'Vlad',
                text: 'Vlad posted a new article.',
                time: '1 min ago'
            },
            {
                name: 'Kostya',
                text: 'Kostya changed his contact information.',
                time: '2 hrs ago'
            },
            {
                image: 'assets/img/shopping-cart.svg',
                text: 'New orders received.',
                time: '5 hrs ago'
            },
            {
                name: 'Andrey',
                text: 'Andrey replied to your comment.',
                time: '1 day ago'
            },
            {
                name: 'Nasta',
                text: 'Today is Nasta\'s birthday.',
                time: '2 days ago'
            },
            {
                image: 'assets/img/comments.svg',
                text: 'New comments on your post.',
                time: '3 days ago'
            },
            {
                name: 'Kostya',
                text: 'Kostya invited you to join the event.',
                time: '1 week ago'
            }
        ];
        this._messages = [
            {
                name: 'Nasta',
                text: 'After you get up and running, you can place Font Awesome icons just about...',
                time: '1 min ago'
            },
            {
                name: 'Vlad',
                text: 'You asked, Font Awesome delivers with 40 shiny new icons in version 4.2.',
                time: '2 hrs ago'
            },
            {
                name: 'Kostya',
                text: 'Want to request new icons? Here\'s how. Need vectors or want to use on the...',
                time: '10 hrs ago'
            },
            {
                name: 'Andrey',
                text: 'Explore your passions and discover new ones by getting involved. Stretch your...',
                time: '1 day ago'
            },
            {
                name: 'Nasta',
                text: 'Get to know who we are - from the inside out. From our history and culture, to the...',
                time: '1 day ago'
            },
            {
                name: 'Kostya',
                text: 'Need some support to reach your goals? Apply for scholarships across a variety of...',
                time: '2 days ago'
            },
            {
                name: 'Vlad',
                text: 'Wrap the dropdown\'s trigger and the dropdown menu within .dropdown, or...',
                time: '1 week ago'
            }
        ];
    }
    BaMsgCenterService.prototype.getMessages = function () {
        return this._messages;
    };
    BaMsgCenterService.prototype.getNotifications = function () {
        return this._notifications;
    };
    BaMsgCenterService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])()
    ], BaMsgCenterService);
    return BaMsgCenterService;
}());

//# sourceMappingURL=baMsgCenter.service.js.map

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baMsgCenter_component__ = __webpack_require__(444);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baMsgCenter_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(9);
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


var BaMultiCheckbox = /** @class */ (function () {
    function BaMultiCheckbox(state) {
        this.model = state;
        state.valueAccessor = this;
    }
    BaMultiCheckbox.prototype.getProp = function (item, propName) {
        var prop = this.propertiesMapping[propName];
        if (!prop) {
            return item[propName];
        }
        else if (typeof prop === 'function') {
            return prop(item);
        }
        return item[prop];
    };
    BaMultiCheckbox.prototype.onChange = function (value) { };
    BaMultiCheckbox.prototype.onTouch = function (value) { };
    BaMultiCheckbox.prototype.writeValue = function (state) {
        this.state = state;
    };
    BaMultiCheckbox.prototype.registerOnChange = function (fn) {
        this.onChange = function (state) {
            this.writeValue(state);
            this.model.viewToModelUpdate(state);
        };
    };
    BaMultiCheckbox.prototype.registerOnTouched = function (fn) { this.onTouch = fn; };
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
            template: __webpack_require__(589),
            styles: [__webpack_require__(560)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NgModel */]]
        }),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* Self */])()),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NgModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NgModel */]) === "function" && _a || Object])
    ], BaMultiCheckbox);
    return BaMultiCheckbox;
    var _a;
}());

//# sourceMappingURL=baMultiCheckbox.component.js.map

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baMultiCheckbox_component__ = __webpack_require__(447);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baMultiCheckbox_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_state__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_pages_util_personId_to_name__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(34);
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




var BaPageTop = /** @class */ (function () {
    function BaPageTop(_state, router) {
        var _this = this;
        this._state = _state;
        this.router = router;
        this.isScrolled = false;
        this.isMenuCollapsed = false;
        this.politicians = __WEBPACK_IMPORTED_MODULE_2_app_pages_util_personId_to_name__["a" /* PERSONID_TO_NAME_MAPPING */].map(function (user) { return user["name"]; });
        this.parties = ["SVP", "SP", "CVP", "FDP", "BDP", "GLP", "GPS"];
        this.searchData = this.politicians.concat(this.parties);
        this._state.subscribe('menu.isCollapsed', function (isCollapsed) {
            _this.isMenuCollapsed = isCollapsed;
        });
    }
    BaPageTop.prototype.startSearch = function () {
        console.log('start searching');
    };
    BaPageTop.prototype.onKeyup = function ($event) {
        if ($event.code === "Enter") {
            console.log('enter pressed --- routing to party or politician ' + $event.target.value);
            if (this.parties.includes(this.searchObject)) {
                this.router.navigate(['/pages/party/' + this.searchObject]);
            }
            else {
                this.router.navigate(['/pages/politician/' + this.getIdByName(this.searchObject)]);
            }
        }
    };
    BaPageTop.prototype.getIdByName = function (name) {
        return __WEBPACK_IMPORTED_MODULE_2_app_pages_util_personId_to_name__["a" /* PERSONID_TO_NAME_MAPPING */].find(function (user) { return user['name'] === name; })['id'];
    };
    BaPageTop.prototype.toggleMenu = function () {
        this.isMenuCollapsed = !this.isMenuCollapsed;
        this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
        return false;
    };
    BaPageTop.prototype.scrolledChanged = function (isScrolled) {
        this.isScrolled = isScrolled;
    };
    BaPageTop = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'ba-page-top',
            template: __webpack_require__(590),
            styles: [__webpack_require__(561)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__global_state__["a" /* GlobalState */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__global_state__["a" /* GlobalState */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _b || Object])
    ], BaPageTop);
    return BaPageTop;
    var _a, _b;
}());

//# sourceMappingURL=baPageTop.component.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baPageTop_component__ = __webpack_require__(449);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baPageTop_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_uploader__ = __webpack_require__(164);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaPictureUploader; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BaPictureUploader = /** @class */ (function () {
    function BaPictureUploader(renderer) {
        this.renderer = renderer;
        this.defaultPicture = '';
        this.picture = '';
        this.uploaderOptions = { url: '' };
        this.canDelete = true;
        this.onUpload = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
        this.onUploadCompleted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
    }
    BaPictureUploader.prototype.beforeUpload = function (uploadingFile) {
        var files = this._fileUpload.nativeElement.files;
        if (files.length) {
            var file = files[0];
            this._changePicture(file);
            if (!this._canUploadOnServer()) {
                uploadingFile.setAbort();
            }
            else {
                this.uploadInProgress = true;
            }
        }
    };
    BaPictureUploader.prototype.bringFileSelector = function () {
        this.renderer.invokeElementMethod(this._fileUpload.nativeElement, 'click');
        return false;
    };
    BaPictureUploader.prototype.removePicture = function () {
        this.picture = '';
        return false;
    };
    BaPictureUploader.prototype._changePicture = function (file) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener('load', function (event) {
            _this.picture = event.target.result;
        }, false);
        reader.readAsDataURL(file);
    };
    BaPictureUploader.prototype._onUpload = function (data) {
        if (data['done'] || data['abort'] || data['error']) {
            this._onUploadCompleted(data);
        }
        else {
            this.onUpload.emit(data);
        }
    };
    BaPictureUploader.prototype._onUploadCompleted = function (data) {
        this.uploadInProgress = false;
        this.onUploadCompleted.emit(data);
    };
    BaPictureUploader.prototype._canUploadOnServer = function () {
        return !!this.uploaderOptions['url'];
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Input */])(),
        __metadata("design:type", String)
    ], BaPictureUploader.prototype, "defaultPicture", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Input */])(),
        __metadata("design:type", String)
    ], BaPictureUploader.prototype, "picture", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Input */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_uploader__["b" /* NgUploaderOptions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_uploader__["b" /* NgUploaderOptions */]) === "function" && _a || Object)
    ], BaPictureUploader.prototype, "uploaderOptions", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Input */])(),
        __metadata("design:type", Boolean)
    ], BaPictureUploader.prototype, "canDelete", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Output */])(),
        __metadata("design:type", Object)
    ], BaPictureUploader.prototype, "onUpload", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Output */])(),
        __metadata("design:type", Object)
    ], BaPictureUploader.prototype, "onUploadCompleted", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ViewChild */])('fileUpload'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ElementRef */]) === "function" && _b || Object)
    ], BaPictureUploader.prototype, "_fileUpload", void 0);
    BaPictureUploader = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'ba-picture-uploader',
            styles: [__webpack_require__(562)],
            template: __webpack_require__(591),
        }),
        __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Renderer */]) === "function" && _c || Object])
    ], BaPictureUploader);
    return BaPictureUploader;
    var _a, _b, _c;
}());

//# sourceMappingURL=baPictureUploader.component.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baPictureUploader_component__ = __webpack_require__(451);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baPictureUploader_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_state__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme__ = __webpack_require__(17);
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



var BaSidebar = /** @class */ (function () {
    function BaSidebar(_elementRef, _state) {
        var _this = this;
        this._elementRef = _elementRef;
        this._state = _state;
        this.isMenuCollapsed = false;
        this.isMenuShouldCollapsed = false;
        this._state.subscribe('menu.isCollapsed', function (isCollapsed) {
            _this.isMenuCollapsed = isCollapsed;
        });
    }
    BaSidebar.prototype.ngOnInit = function () {
        if (this._shouldMenuCollapse()) {
            this.menuCollapse();
        }
    };
    BaSidebar.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { return _this.updateSidebarHeight(); });
    };
    BaSidebar.prototype.onWindowResize = function () {
        var isMenuShouldCollapsed = this._shouldMenuCollapse();
        if (this.isMenuShouldCollapsed !== isMenuShouldCollapsed) {
            this.menuCollapseStateChange(isMenuShouldCollapsed);
        }
        this.isMenuShouldCollapsed = isMenuShouldCollapsed;
        this.updateSidebarHeight();
    };
    BaSidebar.prototype.menuExpand = function () {
        this.menuCollapseStateChange(false);
    };
    BaSidebar.prototype.menuCollapse = function () {
        this.menuCollapseStateChange(true);
    };
    BaSidebar.prototype.menuCollapseStateChange = function (isCollapsed) {
        this.isMenuCollapsed = isCollapsed;
        this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    };
    BaSidebar.prototype.updateSidebarHeight = function () {
        // TODO: get rid of magic 84 constant
        this.menuHeight = this._elementRef.nativeElement.childNodes[0].clientHeight - 84;
    };
    BaSidebar.prototype._shouldMenuCollapse = function () {
        return window.innerWidth <= __WEBPACK_IMPORTED_MODULE_2__theme__["f" /* layoutSizes */].resWidthCollapseSidebar;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* HostListener */])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BaSidebar.prototype, "onWindowResize", null);
    BaSidebar = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'ba-sidebar',
            template: __webpack_require__(592),
            styles: [__webpack_require__(563)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__global_state__["a" /* GlobalState */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__global_state__["a" /* GlobalState */]) === "function" && _b || Object])
    ], BaSidebar);
    return BaSidebar;
    var _a, _b;
}());

//# sourceMappingURL=baSidebar.component.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baSidebar_component__ = __webpack_require__(453);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baSidebar_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baPageTop__ = __webpack_require__(450);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_0__baPageTop__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__baMsgCenter__ = __webpack_require__(446);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_1__baMsgCenter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__baSidebar__ = __webpack_require__(454);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_2__baSidebar__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__baMenu_components_baMenuItem__ = __webpack_require__(442);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_3__baMenu_components_baMenuItem__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__baMenu__ = __webpack_require__(443);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_4__baMenu__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__baContentTop__ = __webpack_require__(435);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__baContentTop__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__baCard__ = __webpack_require__(429);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_6__baCard__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__baAmChart__ = __webpack_require__(423);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_7__baAmChart__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__baChartistChart__ = __webpack_require__(431);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_8__baChartistChart__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__baBackTop__ = __webpack_require__(425);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_9__baBackTop__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__baFullCalendar__ = __webpack_require__(439);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_10__baFullCalendar__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__baPictureUploader__ = __webpack_require__(452);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_11__baPictureUploader__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__baCheckbox__ = __webpack_require__(433);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_12__baCheckbox__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__baMultiCheckbox__ = __webpack_require__(448);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_13__baMultiCheckbox__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__baFileUploader__ = __webpack_require__(437);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_14__baFileUploader__["a"]; });















//# sourceMappingURL=index.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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

var BaScrollPosition = /** @class */ (function () {
    function BaScrollPosition() {
        this.scrollChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
    }
    BaScrollPosition.prototype.ngOnInit = function () {
        this.onWindowScroll();
    };
    BaScrollPosition.prototype.onWindowScroll = function () {
        var isScrolled = window.scrollY > this.maxHeight;
        if (isScrolled !== this._isScrolled) {
            this._isScrolled = isScrolled;
            this.scrollChange.emit(isScrolled);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* HostListener */])('window:scroll'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BaScrollPosition.prototype, "onWindowScroll", null);
    BaScrollPosition = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Directive */])({
            selector: '[baScrollPosition]'
        })
    ], BaScrollPosition);
    return BaScrollPosition;
    var _a;
}());

//# sourceMappingURL=baScrollPosition.directive.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baScrollPosition_directive__ = __webpack_require__(456);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baScrollPosition_directive__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery_slimscroll__ = __webpack_require__(568);
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


var BaSlimScroll = /** @class */ (function () {
    function BaSlimScroll(_elementRef) {
        this._elementRef = _elementRef;
    }
    BaSlimScroll.prototype.ngOnChanges = function (changes) {
        this._scroll();
    };
    BaSlimScroll.prototype._scroll = function () {
        this._destroy();
        this._init();
    };
    BaSlimScroll.prototype._init = function () {
        jQuery(this._elementRef.nativeElement).slimScroll(this.baSlimScrollOptions);
    };
    BaSlimScroll.prototype._destroy = function () {
        jQuery(this._elementRef.nativeElement).slimScroll({ destroy: true });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Input */])(),
        __metadata("design:type", Object)
    ], BaSlimScroll.prototype, "baSlimScrollOptions", void 0);
    BaSlimScroll = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Directive */])({
            selector: '[baSlimScroll]'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ElementRef */]) === "function" && _a || Object])
    ], BaSlimScroll);
    return BaSlimScroll;
    var _a;
}());

//# sourceMappingURL=baSlimScroll.directive.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baSlimScroll_directive__ = __webpack_require__(458);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baSlimScroll_directive__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme__ = __webpack_require__(17);
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


var BaThemeRun = /** @class */ (function () {
    function BaThemeRun(_baConfig) {
        this._baConfig = _baConfig;
        this._classes = [];
    }
    BaThemeRun.prototype.ngOnInit = function () {
        this._assignTheme();
        this._assignMobile();
    };
    BaThemeRun.prototype._assignTheme = function () {
        this._addClass(this._baConfig.get().theme.name);
    };
    BaThemeRun.prototype._assignMobile = function () {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__theme__["e" /* isMobile */])()) {
            this._addClass('mobile');
        }
    };
    BaThemeRun.prototype._addClass = function (cls) {
        this._classes.push(cls);
        this.classesString = this._classes.join(' ');
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* HostBinding */])('class'),
        __metadata("design:type", String)
    ], BaThemeRun.prototype, "classesString", void 0);
    BaThemeRun = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Directive */])({
            selector: '[baThemeRun]'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__theme__["d" /* BaThemeConfigProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__theme__["d" /* BaThemeConfigProvider */]) === "function" && _a || Object])
    ], BaThemeRun);
    return BaThemeRun;
    var _a;
}());

//# sourceMappingURL=baThemeRun.directive.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baThemeRun_directive__ = __webpack_require__(460);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baThemeRun_directive__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baScrollPosition__ = __webpack_require__(457);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baScrollPosition__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__baThemeRun__ = __webpack_require__(461);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__baThemeRun__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__baSlimScroll__ = __webpack_require__(459);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__baSlimScroll__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaAppPicturePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var BaAppPicturePipe = /** @class */ (function () {
    function BaAppPicturePipe() {
    }
    BaAppPicturePipe.prototype.transform = function (input) {
        return __WEBPACK_IMPORTED_MODULE_1__theme__["b" /* layoutPaths */].images.root + input;
    };
    BaAppPicturePipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Pipe */])({ name: 'baAppPicture' })
    ], BaAppPicturePipe);
    return BaAppPicturePipe;
}());

//# sourceMappingURL=baAppPicture.pipe.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baAppPicture_pipe__ = __webpack_require__(463);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baAppPicture_pipe__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaKameleonPicturePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var BaKameleonPicturePipe = /** @class */ (function () {
    function BaKameleonPicturePipe() {
    }
    BaKameleonPicturePipe.prototype.transform = function (input) {
        return __WEBPACK_IMPORTED_MODULE_1__theme__["b" /* layoutPaths */].images.root + 'theme/icon/kameleon/' + input + '.svg';
    };
    BaKameleonPicturePipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Pipe */])({ name: 'baKameleonPicture' })
    ], BaKameleonPicturePipe);
    return BaKameleonPicturePipe;
}());

//# sourceMappingURL=baKameleonPicture.pipe.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baKameleonPicture_pipe__ = __webpack_require__(465);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baKameleonPicture_pipe__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaProfilePicturePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var BaProfilePicturePipe = /** @class */ (function () {
    function BaProfilePicturePipe() {
    }
    BaProfilePicturePipe.prototype.transform = function (input, ext) {
        if (ext === void 0) { ext = 'png'; }
        return __WEBPACK_IMPORTED_MODULE_1__theme__["b" /* layoutPaths */].images.profile + input + '.' + ext;
    };
    BaProfilePicturePipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Pipe */])({ name: 'baProfilePicture' })
    ], BaProfilePicturePipe);
    return BaProfilePicturePipe;
}());

//# sourceMappingURL=baProfilePicture.pipe.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baProfilePicture_pipe__ = __webpack_require__(467);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baProfilePicture_pipe__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baProfilePicture__ = __webpack_require__(468);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__baProfilePicture__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__baAppPicture__ = __webpack_require__(464);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__baAppPicture__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__baKameleonPicture__ = __webpack_require__(466);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__baKameleonPicture__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaImageLoaderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BaImageLoaderService = /** @class */ (function () {
    function BaImageLoaderService() {
    }
    BaImageLoaderService.prototype.load = function (src) {
        return new Promise(function (resolve, reject) {
            var img = new Image();
            img.src = src;
            img.onload = function () {
                resolve('Image with src ' + src + ' loaded successfully.');
            };
        });
    };
    BaImageLoaderService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])()
    ], BaImageLoaderService);
    return BaImageLoaderService;
}());

//# sourceMappingURL=baImageLoader.service.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baImageLoader_service__ = __webpack_require__(470);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baImageLoader_service__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__(364);
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




var BaMenuService = /** @class */ (function () {
    function BaMenuService(_router) {
        this._router = _router;
        this.menuItems = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this._currentMenuItem = {};
    }
    /**
     * Updates the routes in the menu
     *
     * @param {Routes} routes Type compatible with app.menu.ts
     */
    BaMenuService.prototype.updateMenuByRoutes = function (routes) {
        var convertedRoutes = this.convertRoutesToMenus(__WEBPACK_IMPORTED_MODULE_2_lodash__["cloneDeep"](routes));
        this.menuItems.next(convertedRoutes);
    };
    BaMenuService.prototype.convertRoutesToMenus = function (routes) {
        var items = this._convertArrayToItems(routes);
        return this._skipEmpty(items);
    };
    BaMenuService.prototype.getCurrentItem = function () {
        return this._currentMenuItem;
    };
    BaMenuService.prototype.selectMenuItem = function (menuItems) {
        var _this = this;
        var items = [];
        menuItems.forEach(function (item) {
            _this._selectItem(item);
            if (item.selected) {
                _this._currentMenuItem = item;
            }
            if (item.children && item.children.length > 0) {
                item.children = _this.selectMenuItem(item.children);
            }
            items.push(item);
        });
        return items;
    };
    BaMenuService.prototype._skipEmpty = function (items) {
        var menu = [];
        items.forEach(function (item) {
            var menuItem;
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
    };
    BaMenuService.prototype._convertArrayToItems = function (routes, parent) {
        var _this = this;
        var items = [];
        routes.forEach(function (route) {
            items.push(_this._convertObjectToItem(route, parent));
        });
        return items;
    };
    BaMenuService.prototype._convertObjectToItem = function (object, parent) {
        var item = {};
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
            if (!!item.route.path)
                item.route.paths.push(item.route.path);
        }
        if (object.children && object.children.length > 0) {
            item.children = this._convertArrayToItems(object.children, item);
        }
        var prepared = this._prepareItem(item);
        // if current item is selected or expanded - then parent is expanded too
        if ((prepared.selected || prepared.expanded) && parent) {
            parent.expanded = true;
        }
        return prepared;
    };
    BaMenuService.prototype._prepareItem = function (object) {
        if (!object.skip) {
            object.target = object.target || '';
            object.pathMatch = object.pathMatch || 'full';
            return this._selectItem(object);
        }
        return object;
    };
    BaMenuService.prototype._selectItem = function (object) {
        object.selected = this._router.isActive(this._router.createUrlTree(object.route.paths), object.pathMatch === 'full');
        return object;
    };
    BaMenuService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
    ], BaMenuService);
    return BaMenuService;
    var _a;
}());

//# sourceMappingURL=baMenu.service.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baMenu_service__ = __webpack_require__(472);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baMenu_service__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaThemePreloader; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BaThemePreloader = /** @class */ (function () {
    function BaThemePreloader() {
    }
    BaThemePreloader_1 = BaThemePreloader;
    BaThemePreloader.registerLoader = function (method) {
        BaThemePreloader_1._loaders.push(method);
    };
    BaThemePreloader.clear = function () {
        BaThemePreloader_1._loaders = [];
    };
    BaThemePreloader.load = function () {
        return new Promise(function (resolve, reject) {
            BaThemePreloader_1._executeAll(resolve);
        });
    };
    BaThemePreloader._executeAll = function (done) {
        setTimeout(function () {
            Promise.all(BaThemePreloader_1._loaders).then(function (values) {
                done.call(null, values);
            }).catch(function (error) {
                console.error(error);
            });
        });
    };
    BaThemePreloader._loaders = [];
    BaThemePreloader = BaThemePreloader_1 = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])()
    ], BaThemePreloader);
    return BaThemePreloader;
    var BaThemePreloader_1;
}());

//# sourceMappingURL=baThemePreloader.service.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baThemePreloader_service__ = __webpack_require__(474);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baThemePreloader_service__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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

var BaThemeSpinner = /** @class */ (function () {
    function BaThemeSpinner() {
        this._selector = 'preloader';
        this._element = document.getElementById(this._selector);
    }
    BaThemeSpinner.prototype.show = function () {
        this._element.style['display'] = 'block';
    };
    BaThemeSpinner.prototype.hide = function (delay) {
        var _this = this;
        if (delay === void 0) { delay = 0; }
        setTimeout(function () {
            _this._element.style['display'] = 'none';
        }, delay);
    };
    BaThemeSpinner = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], BaThemeSpinner);
    return BaThemeSpinner;
}());

//# sourceMappingURL=baThemeSpinner.service.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baThemeSpinner_service__ = __webpack_require__(476);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baThemeSpinner_service__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailValidator; });
var EmailValidator = /** @class */ (function () {
    function EmailValidator() {
    }
    EmailValidator.validate = function (c) {
        var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return EMAIL_REGEXP.test(c.value) ? null : {
            validateEmail: {
                valid: false
            }
        };
    };
    return EmailValidator;
}());

//# sourceMappingURL=email.validator.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EqualPasswordsValidator; });
var EqualPasswordsValidator = /** @class */ (function () {
    function EqualPasswordsValidator() {
    }
    EqualPasswordsValidator.validate = function (firstField, secondField) {
        return function (c) {
            return (c.controls && c.controls[firstField].value == c.controls[secondField].value) ? null : {
                passwordsEqual: {
                    valid: false
                }
            };
        };
    };
    return EqualPasswordsValidator;
}());

//# sourceMappingURL=equalPasswords.validator.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baImageLoader__ = __webpack_require__(471);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__baImageLoader__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__baMenu__ = __webpack_require__(473);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__baMenu__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__baThemePreloader__ = __webpack_require__(475);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__baThemePreloader__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__baThemeSpinner__ = __webpack_require__(477);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__baThemeSpinner__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__email_validator__ = __webpack_require__(478);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__email_validator__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__equalPasswords_validator__ = __webpack_require__(479);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__equalPasswords_validator__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ":host /deep/ .al-sidebar {\n  width: 180px;\n  top: 66px;\n  left: 0;\n  z-index: 1001;\n  display: block;\n  min-height: 100%;\n  background-color: #282828;\n  height: 100%;\n  position: fixed; }\n\n:host /deep/ .al-sidebar-list {\n  margin: 0;\n  overflow: hidden;\n  padding: 18px 0 0 0;\n  list-style: none; }\n\n:host /deep/ .al-sidebar-sublist .subitem-submenu-list {\n  padding-left: 15px; }\n\n:host /deep/ .subitem-submenu-link .fa {\n  top: 7px; }\n\n:host /deep/ .al-sidebar-list-item {\n  display: block;\n  position: relative;\n  float: none;\n  padding: 0; }\n  :host /deep/ .al-sidebar-list-item.selected:not(.with-sub-menu) {\n    background-color: #00abff; }\n    :host /deep/ .al-sidebar-list-item.selected:not(.with-sub-menu) a.al-sidebar-list-link {\n      color: #ffffff; }\n      :host /deep/ .al-sidebar-list-item.selected:not(.with-sub-menu) a.al-sidebar-list-link b {\n        color: #ffffff; }\n\n:host /deep/ .ba-sidebar-item-expanded > ul.al-sidebar-sublist {\n  display: block !important; }\n\n:host /deep/ .al-sidebar-list-item.ba-sidebar-item-expanded > .al-sidebar-list-link b, :host /deep/ .ba-sidebar-sublist-item.ba-sidebar-item-expanded > .al-sidebar-list-link b {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n:host /deep/ .al-sidebar-list-item.ba-sidebar-item-expanded > .al-sidebar-sublist, :host /deep/ .ba-sidebar-sublist-item.ba-sidebar-item-expanded > .al-sidebar-sublist {\n  display: block; }\n\n:host /deep/ a.al-sidebar-list-link {\n  display: block;\n  height: 42px;\n  padding-left: 18px;\n  text-shadow: none;\n  font-size: 13px;\n  text-decoration: none;\n  color: #ffffff;\n  line-height: 42px;\n  white-space: nowrap;\n  overflow: hidden;\n  cursor: pointer; }\n  :host /deep/ a.al-sidebar-list-link:hover {\n    color: #00abff; }\n    :host /deep/ a.al-sidebar-list-link:hover b {\n      color: #00abff; }\n  :host /deep/ a.al-sidebar-list-link i {\n    margin-right: 18px;\n    width: 16px;\n    display: inline-block; }\n  :host /deep/ a.al-sidebar-list-link b {\n    display: block;\n    opacity: 1;\n    width: 14px;\n    height: 14px;\n    line-height: 14px;\n    text-shadow: none;\n    font-size: 18px;\n    position: absolute;\n    right: 10px;\n    top: 12px;\n    padding: 0;\n    text-align: center;\n    color: #ffffff;\n    transition: -webkit-transform 0.2s linear;\n    transition: transform 0.2s linear;\n    transition: transform 0.2s linear, -webkit-transform 0.2s linear; }\n\n:host /deep/ .slimScrollBar, :host /deep/ .slimScrollRail {\n  border-radius: 0 !important;\n  width: 4px !important;\n  left: 176px; }\n\n:host /deep/ .al-sidebar-sublist {\n  padding: 0;\n  list-style: none;\n  position: relative;\n  display: none; }\n  :host /deep/ .al-sidebar-sublist.expanded {\n    display: block; }\n  :host /deep/ .al-sidebar-sublist > ba-menu-item > li {\n    display: block;\n    float: none;\n    padding: 0;\n    border-bottom: none;\n    position: relative; }\n    :host /deep/ .al-sidebar-sublist > ba-menu-item > li a {\n      display: block;\n      text-shadow: none;\n      font-size: 13px;\n      text-decoration: none;\n      color: #ffffff;\n      padding-left: 52px;\n      height: auto;\n      line-height: 29px; }\n      :host /deep/ .al-sidebar-sublist > ba-menu-item > li a:hover {\n        color: #00abff; }\n    :host /deep/ .al-sidebar-sublist > ba-menu-item > li.selected:not(.with-sub-menu) > a {\n      border: none;\n      background-color: #00abff; }\n      :host /deep/ .al-sidebar-sublist > ba-menu-item > li.selected:not(.with-sub-menu) > a:hover {\n        color: #ffffff; }\n\n:host /deep/ .sidebar-hover-elem {\n  width: 4px;\n  background: #00abff;\n  position: absolute;\n  top: -150px;\n  left: 176px;\n  transition: all 0.5s ease;\n  transition-property: top, height;\n  height: 42px;\n  display: block; }\n\n:host /deep/ .sidebar-select-elem {\n  display: block;\n  top: 94px; }\n\n:host /deep/ .menu-collapsed .slimScrollBar, :host /deep/ .menu-collapsed .slimScrollRail {\n  display: none !important; }\n\n@media (min-width: 1200px) {\n  :host /deep/ .menu-collapsed .al-main {\n    margin-left: 50px; }\n  :host /deep/ .menu-collapsed .al-footer {\n    padding-left: 83px; } }\n\n@media (max-width: 1200px) and (min-width: 500px) {\n  :host /deep/ .al-main {\n    margin-left: 50px; }\n  :host /deep/ .al-footer {\n    padding-left: 83px; } }\n\n@media (min-width: 501px) {\n  :host /deep/ .menu-collapsed .al-sidebar {\n    width: 52px; }\n    :host /deep/ .menu-collapsed .al-sidebar .fa-angle-down, :host /deep/ .menu-collapsed .al-sidebar .fa-angle-up {\n      opacity: 0; }\n    :host /deep/ .menu-collapsed .al-sidebar .al-sidebar-sublist {\n      position: absolute;\n      top: -1px;\n      left: 52px;\n      background: rgba(0, 0, 0, 0.8);\n      width: 0;\n      display: block;\n      overflow: hidden;\n      transition: width 0.5s ease; }\n      :host /deep/ .menu-collapsed .al-sidebar .al-sidebar-sublist.slide-right {\n        width: 135px; }\n      :host /deep/ .menu-collapsed .al-sidebar .al-sidebar-sublist::before {\n        display: none; }\n      :host /deep/ .menu-collapsed .al-sidebar .al-sidebar-sublist li::before {\n        display: none; }\n      :host /deep/ .menu-collapsed .al-sidebar .al-sidebar-sublist li a {\n        padding-left: 18px;\n        padding-right: 18px;\n        min-width: 130px;\n        white-space: nowrap; }\n    :host /deep/ .menu-collapsed .al-sidebar .sidebar-hover-elem, :host /deep/ .menu-collapsed .al-sidebar .sidebar-select-elem {\n      left: 48px; } }\n\n@media (max-width: 1200px) {\n  :host /deep/ .al-sidebar {\n    width: 180px;\n    background: rgba(0, 0, 0, 0.75);\n    transition: width 0.5s ease; }\n    :host /deep/ .al-sidebar .fa-angle-down, :host /deep/ .al-sidebar .fa-angle-up {\n      opacity: 1; }\n    :host /deep/ .al-sidebar .al-sidebar-sublist {\n      padding: 0;\n      list-style: none;\n      position: relative;\n      display: none;\n      top: auto;\n      left: auto;\n      background: none;\n      width: auto;\n      overflow: visible;\n      transition: none; }\n      :host /deep/ .al-sidebar .al-sidebar-sublist.expanded {\n        display: block; }\n      :host /deep/ .al-sidebar .al-sidebar-sublist > ba-menu-item > li {\n        display: block;\n        float: none;\n        padding: 0;\n        border-bottom: none;\n        position: relative; }\n        :host /deep/ .al-sidebar .al-sidebar-sublist > ba-menu-item > li a {\n          display: block;\n          text-shadow: none;\n          font-size: 13px;\n          text-decoration: none;\n          color: #ffffff;\n          padding-left: 52px;\n          height: auto;\n          line-height: 29px; }\n          :host /deep/ .al-sidebar .al-sidebar-sublist > ba-menu-item > li a:hover {\n            color: #00abff; }\n        :host /deep/ .al-sidebar .al-sidebar-sublist > ba-menu-item > li.selected:not(.with-sub-menu) > a {\n          border: none;\n          background-color: #00abff; }\n          :host /deep/ .al-sidebar .al-sidebar-sublist > ba-menu-item > li.selected:not(.with-sub-menu) > a:hover {\n            color: #ffffff; }\n    :host /deep/ .al-sidebar .sidebar-hover-elem, :host /deep/ .al-sidebar .sidebar-select-elem {\n      left: 176px;\n      transition: left 0.5s ease; } }\n\n@media (max-width: 500px) {\n  :host /deep/ .menu-collapsed .al-sidebar {\n    width: 0; }\n  :host /deep/ .menu-collapsed .sidebar-hover-elem, :host /deep/ .menu-collapsed .sidebar-select-elem {\n    display: none; }\n  :host /deep/ .al-main {\n    margin-left: 0; }\n  :host /deep/ .al-footer {\n    padding-left: 0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".ammapAlert {\n  display: table-cell;\n  vertical-align: middle;\n  text-align: center;\n  font-family: verdana,helvetica,arial,sans-serif;\n  font-size: 12px;\n  color: #CC0000; }\n\n.ammapDescriptionWindow {\n  font-size: 11px;\n  font-family: verdana,helvetica,arial,sans-serif;\n  background-color: #FFFFFF;\n  border-style: solid;\n  border-color: #DADADA;\n  border-width: 1px;\n  color: #000000;\n  padding: 8px;\n  box-sizing: border-box; }\n\n.ammapDescriptionTitle {\n  font-size: 12px;\n  font-weight: bold;\n  font-family: verdana,helvetica,arial,sans-serif;\n  padding-bottom: 5px; }\n\n.ammapObjectList ul {\n  padding-left: 20px;\n  list-style: square outside;\n  color: #999999;\n  font-family: verdana,helvetica,arial,sans-serif;\n  font-size: 12px; }\n\n.ammapObjectList ul ul {\n  padding-left: 14px; }\n\n.ammapObjectList a {\n  color: #000000; }\n\n.ammapObjectList a {\n  color: #000000;\n  text-decoration: none;\n  display: block;\n  padding: 2px; }\n\n.ammapObjectList a:hover {\n  color: #CC0000;\n  text-decoration: none;\n  background: #FFFFFF;\n  cursor: pointer;\n  display: block; }\n\n.ammapDescriptionText {\n  overflow: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".ba-back-top {\n  position: fixed;\n  width: 52px;\n  height: 52px;\n  cursor: pointer;\n  z-index: 9999;\n  display: none;\n  text-decoration: none;\n  right: 40px;\n  bottom: 40px !important;\n  font-size: 45px;\n  text-align: center;\n  opacity: 0.4;\n  color: #00abff;\n  background-color: rgba(0, 0, 0, 0.75);\n  border-radius: 50%;\n  line-height: 46px; }\n  .ba-back-top:hover {\n    opacity: 0.8; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".has-success {\n  position: relative; }\n  .has-success .control-label {\n    color: #ffffff; }\n  .has-success .form-control {\n    border: 1px solid #a2db59; }\n    .has-success .form-control:focus {\n      box-shadow: none;\n      border-color: #8bd22f; }\n  .has-success label.custom-checkbox {\n    color: #a2db59; }\n    .has-success label.custom-checkbox > span:before {\n      color: #a2db59; }\n    .has-success label.custom-checkbox > span:hover:before {\n      border-color: #a2db59; }\n  .has-success .form-control-feedback {\n    color: #a2db59; }\n  .has-success .input-group-addon {\n    background-color: #a2db59;\n    color: #ffffff; }\n\n.has-warning {\n  position: relative; }\n  .has-warning .control-label {\n    color: #ffffff; }\n  .has-warning .form-control {\n    border: 1px solid #ecc839; }\n    .has-warning .form-control:focus {\n      box-shadow: none;\n      border-color: #e7ba08; }\n  .has-warning label.custom-checkbox {\n    color: #ecc839; }\n    .has-warning label.custom-checkbox > span:before {\n      color: #ecc839; }\n    .has-warning label.custom-checkbox > span:hover:before {\n      border-color: #ecc839; }\n  .has-warning .form-control-feedback {\n    color: #ecc839; }\n  .has-warning .input-group-addon {\n    background-color: #ecc839;\n    color: #ffffff; }\n\n.has-error {\n  position: relative; }\n  .has-error .control-label {\n    color: #ffffff; }\n  .has-error .form-control {\n    border: 1px solid #fa758e; }\n    .has-error .form-control:focus {\n      box-shadow: none;\n      border-color: #f95372; }\n  .has-error label.custom-checkbox {\n    color: #fa758e; }\n    .has-error label.custom-checkbox > span:before {\n      color: #fa758e; }\n    .has-error label.custom-checkbox > span:hover:before {\n      border-color: #fa758e; }\n  .has-error .form-control-feedback {\n    color: #fa758e; }\n  .has-error .input-group-addon {\n    background-color: #fa758e;\n    color: #ffffff; }\n\nlabel.custom-checkbox {\n  margin-bottom: 12px; }\n  label.custom-checkbox > span {\n    display: block;\n    margin-right: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".content-top {\n  padding-top: 13px;\n  padding-bottom: 27px; }\n\nh1.al-title {\n  font-weight: 700;\n  color: #ffffff;\n  float: left;\n  width: auto;\n  margin: 0;\n  padding: 0;\n  font-size: 24px;\n  text-transform: uppercase;\n  opacity: 0.9; }\n\n.al-breadcrumb {\n  background: none;\n  color: #ffffff;\n  padding: 0;\n  margin: 0;\n  float: right;\n  padding-top: 11px; }\n  .al-breadcrumb li {\n    font-size: 18px;\n    font-weight: 400; }\n    .al-breadcrumb li a {\n      color: #4dc4ff; }\n    .al-breadcrumb li.breadcrumb-item.active {\n      color: #ffffff; }\n\n.al-look {\n  float: right;\n  margin-right: 10px;\n  padding-top: 10px; }\n  .al-look > a {\n    font-size: 19px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "/* msg center */\n@-webkit-keyframes pulsate {\n  30% {\n    -webkit-transform: scale(0.1, 0.1);\n    opacity: 0.0; }\n  35% {\n    opacity: 1.0; }\n  40% {\n    -webkit-transform: scale(1.2, 1.2);\n    opacity: 0.0; } }\n\n.al-msg-center {\n  float: right;\n  padding: 0;\n  list-style: none;\n  margin: 13px 47px 0 0; }\n  .al-msg-center li {\n    list-style: none;\n    float: left;\n    margin-left: 30px; }\n    .al-msg-center li:first-child {\n      margin-left: 0; }\n    .al-msg-center li > a {\n      color: #ffffff;\n      text-decoration: none;\n      font-size: 13px;\n      position: relative; }\n      .al-msg-center li > a span {\n        display: inline-block;\n        min-width: 10px;\n        padding: 2px 4px 2px 4px;\n        color: #ffffff;\n        vertical-align: baseline;\n        white-space: nowrap;\n        text-align: center;\n        border-radius: 13px;\n        text-shadow: none;\n        line-height: 11px;\n        background-color: #f95372;\n        position: absolute;\n        top: -5px;\n        right: -14px;\n        font-size: 11px; }\n      .al-msg-center li > a .notification-ring {\n        border: 1px solid #f95372;\n        border-radius: 100px;\n        height: 40px;\n        width: 40px;\n        position: absolute;\n        top: -18px;\n        right: -27px;\n        -webkit-animation: pulsate 8s ease-out;\n                animation: pulsate 8s ease-out;\n        -webkit-animation-iteration-count: infinite;\n                animation-iteration-count: infinite;\n        opacity: 0.0; }\n      .al-msg-center li > a:hover {\n        color: #f95372; }\n        .al-msg-center li > a:hover.msg {\n          color: #00abff; }\n      .al-msg-center li > a.msg span {\n        background-color: #00abff; }\n      .al-msg-center li > a.msg .notification-ring {\n        border-color: #00abff; }\n    .al-msg-center li.open > a {\n      color: #f95372; }\n      .al-msg-center li.open > a.msg {\n        color: #00abff; }\n\n@media (max-width: 435px) {\n  .al-msg-center {\n    margin-right: 20px; }\n    .al-msg-center li {\n      margin-left: 20px; }\n      .al-msg-center li:first-child {\n        margin-left: 0; } }\n\n.msg-block-header {\n  display: inline-block;\n  padding: 0;\n  font-size: 13px;\n  margin: 0 0 0 6px; }\n\n.top-dropdown-menu {\n  width: 316px;\n  left: auto;\n  right: -47px;\n  top: 26px; }\n  .top-dropdown-menu ::-webkit-scrollbar {\n    width: 0.4em;\n    height: 0.4em; }\n  .top-dropdown-menu ::-webkit-scrollbar-thumb {\n    background: rgba(0, 0, 0, 0.5);\n    cursor: pointer; }\n  .top-dropdown-menu ::-webkit-scrollbar-track {\n    background: #fff; }\n  .top-dropdown-menu body {\n    scrollbar-face-color: rgba(0, 0, 0, 0.5);\n    scrollbar-track-color: #fff; }\n  .top-dropdown-menu .header {\n    padding: 10px 12px;\n    border-bottom: 1px solid #ffffff;\n    font-size: 12px; }\n    .top-dropdown-menu .header strong {\n      float: left;\n      color: #7d7d7d; }\n    .top-dropdown-menu .header > a {\n      float: right;\n      margin-left: 12px;\n      text-decoration: none; }\n      .top-dropdown-menu .header > a:hover {\n        color: #7d7d7d; }\n  .top-dropdown-menu .msg-list {\n    max-height: 296px;\n    overflow: scroll;\n    overflow-x: hidden; }\n    .top-dropdown-menu .msg-list > a {\n      border-top: 1px solid #ffffff;\n      padding: 10px 12px;\n      display: block;\n      text-decoration: none;\n      color: #7d7d7d;\n      font-size: 12px; }\n      .top-dropdown-menu .msg-list > a:first-child {\n        border-top: none; }\n      .top-dropdown-menu .msg-list > a .img-area {\n        float: left;\n        width: 36px; }\n        .top-dropdown-menu .msg-list > a .img-area img {\n          width: 36px;\n          height: 36px; }\n          .top-dropdown-menu .msg-list > a .img-area img.photo-msg-item {\n            border-radius: 18px; }\n        .top-dropdown-menu .msg-list > a .img-area > div {\n          width: 36px;\n          height: 36px;\n          border-radius: 4px;\n          font-size: 24px;\n          text-align: center; }\n          .top-dropdown-menu .msg-list > a .img-area > div.comments {\n            color: #e7ba08; }\n          .top-dropdown-menu .msg-list > a .img-area > div.orders {\n            color: #e7ba08; }\n          .top-dropdown-menu .msg-list > a .img-area > div i {\n            width: 36px;\n            line-height: 36px; }\n      .top-dropdown-menu .msg-list > a .msg-area {\n        float: right;\n        width: 230px; }\n        .top-dropdown-menu .msg-list > a .msg-area div {\n          max-height: 34px;\n          overflow: hidden;\n          text-overflow: ellipsis; }\n        .top-dropdown-menu .msg-list > a .msg-area span {\n          font-style: italic;\n          text-align: right;\n          display: block;\n          font-size: 11px; }\n      .top-dropdown-menu .msg-list > a:hover {\n        background: #E2F0FF; }\n  .top-dropdown-menu > a {\n    border-top: 1px solid #ffffff;\n    display: block;\n    text-align: center;\n    padding: 10px;\n    font-size: 12px;\n    text-decoration: none; }\n    .top-dropdown-menu > a:hover {\n      color: #7d7d7d; }\n  .top-dropdown-menu.profile-dropdown {\n    width: 145px;\n    top: 55px;\n    right: -25px; }\n    .top-dropdown-menu.profile-dropdown a {\n      text-align: left;\n      border: none;\n      text-decoration: none;\n      color: #7d7d7d;\n      padding: 4px 16px 4px 20px; }\n      .top-dropdown-menu.profile-dropdown a.signout {\n        border-top: 1px solid #ffffff; }\n      .top-dropdown-menu.profile-dropdown a i {\n        margin-right: 10px; }\n      .top-dropdown-menu.profile-dropdown a:hover {\n        background: #f4fcff; }\n    .top-dropdown-menu.profile-dropdown i.dropdown-arr {\n      right: 25px; }\n  .top-dropdown-menu i.dropdown-arr {\n    position: absolute;\n    top: -22px;\n    right: 42px;\n    display: block;\n    width: 0;\n    height: 0;\n    border: 11px solid transparent;\n    border-bottom-color: rgba(0, 0, 0, 0.15); }\n    .top-dropdown-menu i.dropdown-arr:after {\n      top: -9px;\n      left: 0px;\n      margin-left: -10px;\n      content: \" \";\n      position: absolute;\n      display: block;\n      width: 0;\n      height: 0;\n      border: 10px solid transparent;\n      border-bottom-color: #ffffff; }\n\n@media (max-width: 415px) {\n  .top-dropdown-menu {\n    right: -81px; }\n    .top-dropdown-menu i.dropdown-arr {\n      right: 75px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".container-content {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  .container-content ba-checkbox {\n    width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "/* msg center */\n@-webkit-keyframes pulsate {\n  30% {\n    -webkit-transform: scale(0.1, 0.1);\n    opacity: 0.0; }\n  35% {\n    opacity: 1.0; }\n  40% {\n    -webkit-transform: scale(1.2, 1.2);\n    opacity: 0.0; } }\n\n.al-msg-center {\n  float: right;\n  padding: 0;\n  list-style: none;\n  margin: 13px 47px 0 0; }\n  .al-msg-center li {\n    list-style: none;\n    float: left;\n    margin-left: 30px; }\n    .al-msg-center li:first-child {\n      margin-left: 0; }\n    .al-msg-center li > a {\n      color: #ffffff;\n      text-decoration: none;\n      font-size: 13px;\n      position: relative; }\n      .al-msg-center li > a span {\n        display: inline-block;\n        min-width: 10px;\n        padding: 2px 4px 2px 4px;\n        color: #ffffff;\n        vertical-align: baseline;\n        white-space: nowrap;\n        text-align: center;\n        border-radius: 13px;\n        text-shadow: none;\n        line-height: 11px;\n        background-color: #f95372;\n        position: absolute;\n        top: -5px;\n        right: -14px;\n        font-size: 11px; }\n      .al-msg-center li > a .notification-ring {\n        border: 1px solid #f95372;\n        border-radius: 100px;\n        height: 40px;\n        width: 40px;\n        position: absolute;\n        top: -18px;\n        right: -27px;\n        -webkit-animation: pulsate 8s ease-out;\n                animation: pulsate 8s ease-out;\n        -webkit-animation-iteration-count: infinite;\n                animation-iteration-count: infinite;\n        opacity: 0.0; }\n      .al-msg-center li > a:hover {\n        color: #f95372; }\n        .al-msg-center li > a:hover.msg {\n          color: #00abff; }\n      .al-msg-center li > a.msg span {\n        background-color: #00abff; }\n      .al-msg-center li > a.msg .notification-ring {\n        border-color: #00abff; }\n    .al-msg-center li.open > a {\n      color: #f95372; }\n      .al-msg-center li.open > a.msg {\n        color: #00abff; }\n\n@media (max-width: 435px) {\n  .al-msg-center {\n    margin-right: 20px; }\n    .al-msg-center li {\n      margin-left: 20px; }\n      .al-msg-center li:first-child {\n        margin-left: 0; } }\n\n.msg-block-header {\n  display: inline-block;\n  padding: 0;\n  font-size: 13px;\n  margin: 0 0 0 6px; }\n\n.top-dropdown-menu {\n  width: 316px;\n  left: auto;\n  right: -47px;\n  top: 26px; }\n  .top-dropdown-menu ::-webkit-scrollbar {\n    width: 0.4em;\n    height: 0.4em; }\n  .top-dropdown-menu ::-webkit-scrollbar-thumb {\n    background: rgba(0, 0, 0, 0.5);\n    cursor: pointer; }\n  .top-dropdown-menu ::-webkit-scrollbar-track {\n    background: #fff; }\n  .top-dropdown-menu body {\n    scrollbar-face-color: rgba(0, 0, 0, 0.5);\n    scrollbar-track-color: #fff; }\n  .top-dropdown-menu .header {\n    padding: 10px 12px;\n    border-bottom: 1px solid #ffffff;\n    font-size: 12px; }\n    .top-dropdown-menu .header strong {\n      float: left;\n      color: #7d7d7d; }\n    .top-dropdown-menu .header > a {\n      float: right;\n      margin-left: 12px;\n      text-decoration: none; }\n      .top-dropdown-menu .header > a:hover {\n        color: #7d7d7d; }\n  .top-dropdown-menu .msg-list {\n    max-height: 296px;\n    overflow: scroll;\n    overflow-x: hidden; }\n    .top-dropdown-menu .msg-list > a {\n      border-top: 1px solid #ffffff;\n      padding: 10px 12px;\n      display: block;\n      text-decoration: none;\n      color: #7d7d7d;\n      font-size: 12px; }\n      .top-dropdown-menu .msg-list > a:first-child {\n        border-top: none; }\n      .top-dropdown-menu .msg-list > a .img-area {\n        float: left;\n        width: 36px; }\n        .top-dropdown-menu .msg-list > a .img-area img {\n          width: 36px;\n          height: 36px; }\n          .top-dropdown-menu .msg-list > a .img-area img.photo-msg-item {\n            border-radius: 18px; }\n        .top-dropdown-menu .msg-list > a .img-area > div {\n          width: 36px;\n          height: 36px;\n          border-radius: 4px;\n          font-size: 24px;\n          text-align: center; }\n          .top-dropdown-menu .msg-list > a .img-area > div.comments {\n            color: #e7ba08; }\n          .top-dropdown-menu .msg-list > a .img-area > div.orders {\n            color: #e7ba08; }\n          .top-dropdown-menu .msg-list > a .img-area > div i {\n            width: 36px;\n            line-height: 36px; }\n      .top-dropdown-menu .msg-list > a .msg-area {\n        float: right;\n        width: 230px; }\n        .top-dropdown-menu .msg-list > a .msg-area div {\n          max-height: 34px;\n          overflow: hidden;\n          text-overflow: ellipsis; }\n        .top-dropdown-menu .msg-list > a .msg-area span {\n          font-style: italic;\n          text-align: right;\n          display: block;\n          font-size: 11px; }\n      .top-dropdown-menu .msg-list > a:hover {\n        background: #E2F0FF; }\n  .top-dropdown-menu > a {\n    border-top: 1px solid #ffffff;\n    display: block;\n    text-align: center;\n    padding: 10px;\n    font-size: 12px;\n    text-decoration: none; }\n    .top-dropdown-menu > a:hover {\n      color: #7d7d7d; }\n  .top-dropdown-menu.profile-dropdown {\n    width: 145px;\n    top: 55px;\n    right: -25px; }\n    .top-dropdown-menu.profile-dropdown a {\n      text-align: left;\n      border: none;\n      text-decoration: none;\n      color: #7d7d7d;\n      padding: 4px 16px 4px 20px; }\n      .top-dropdown-menu.profile-dropdown a.signout {\n        border-top: 1px solid #ffffff; }\n      .top-dropdown-menu.profile-dropdown a i {\n        margin-right: 10px; }\n      .top-dropdown-menu.profile-dropdown a:hover {\n        background: #f4fcff; }\n    .top-dropdown-menu.profile-dropdown i.dropdown-arr {\n      right: 25px; }\n  .top-dropdown-menu i.dropdown-arr {\n    position: absolute;\n    top: -22px;\n    right: 42px;\n    display: block;\n    width: 0;\n    height: 0;\n    border: 11px solid transparent;\n    border-bottom-color: rgba(0, 0, 0, 0.15); }\n    .top-dropdown-menu i.dropdown-arr:after {\n      top: -9px;\n      left: 0px;\n      margin-left: -10px;\n      content: \" \";\n      position: absolute;\n      display: block;\n      width: 0;\n      height: 0;\n      border: 10px solid transparent;\n      border-bottom-color: #ffffff; }\n\n@media (max-width: 415px) {\n  .top-dropdown-menu {\n    right: -81px; }\n    .top-dropdown-menu i.dropdown-arr {\n      right: 75px; } }\n\n:host /deep/ .page-top {\n  background-color: #282828;\n  position: fixed;\n  z-index: 904;\n  box-shadow: 2px 0 3px rgba(0, 0, 0, 0.5);\n  height: 66px;\n  width: 100%;\n  min-width: 320px;\n  padding: 0 32px 0 40px; }\n  :host /deep/ .page-top .dropdown-toggle::after {\n    display: none; }\n\n:host /deep/ .blur .page-top.scrolled {\n  background-color: rgba(0, 0, 0, 0.85); }\n\n:host /deep/ a.al-logo {\n  color: #ffffff;\n  display: block;\n  font-size: 24px;\n  font-family: \"Roboto\", sans-serif;\n  white-space: nowrap;\n  float: left;\n  outline: none !important;\n  line-height: 60px; }\n  :host /deep/ a.al-logo span {\n    color: #00abff; }\n\n:host /deep/ a.al-logo:hover {\n  color: #00abff; }\n\n:host /deep/ .user-profile {\n  float: right;\n  min-width: 230px;\n  margin-top: 10px; }\n\n:host /deep/ .al-user-profile {\n  float: right;\n  margin-right: 12px;\n  transition: all .15s ease-in-out;\n  padding: 0;\n  width: 36px;\n  height: 36px;\n  border: 0;\n  opacity: 1;\n  position: relative; }\n  :host /deep/ .al-user-profile ul.profile-dropdown:after {\n    bottom: 100%;\n    right: 0;\n    border: solid transparent;\n    content: \" \";\n    height: 0;\n    width: 0;\n    position: absolute;\n    pointer-events: none;\n    border-color: rgba(255, 255, 255, 0);\n    border-bottom-color: #fff;\n    border-width: 10px;\n    margin-right: 28px; }\n  :host /deep/ .al-user-profile a {\n    display: block; }\n  :host /deep/ .al-user-profile img {\n    width: 45px;\n    height: 45px;\n    border-radius: 50%; }\n\n:host /deep/ a.refresh-data {\n  color: #ffffff;\n  font-size: 13px;\n  text-decoration: none;\n  font-weight: 400;\n  float: right;\n  margin-top: 13px;\n  margin-right: 26px; }\n  :host /deep/ a.refresh-data:hover {\n    color: #e7ba08 !important; }\n\n:host /deep/ a.collapse-menu-link {\n  font-size: 31px;\n  cursor: pointer;\n  display: block;\n  text-decoration: none;\n  line-height: 42px;\n  color: #ffffff;\n  padding: 0;\n  float: left;\n  margin: 11px 0 0 25px; }\n  :host /deep/ a.collapse-menu-link:hover {\n    text-decoration: none;\n    color: #e7ba08; }\n\n:host /deep/ .al-skin-dropdown {\n  float: right;\n  margin-top: 14px;\n  margin-right: 26px; }\n  :host /deep/ .al-skin-dropdown .tpl-skin-panel {\n    max-height: 300px;\n    overflow-y: scroll;\n    overflow-x: hidden; }\n\n:host /deep/ .icon-palette {\n  display: inline-block;\n  width: 14px;\n  height: 13px;\n  background: url(\"/swiss-polytics/img/theme/palette.png\");\n  background-size: cover; }\n\n:host /deep/ .search {\n  text-shadow: none;\n  font-size: 13px;\n  line-height: 25px;\n  transition: all 0.5s ease;\n  white-space: nowrap;\n  overflow: hidden;\n  float: left;\n  margin: 20px 0 0 30px; }\n  :host /deep/ .search label {\n    cursor: pointer; }\n  :host /deep/ .search i {\n    width: 16px;\n    display: inline-block;\n    cursor: pointer;\n    padding-left: 1px;\n    font-size: 16px;\n    margin-right: 13px; }\n  :host /deep/ .search input {\n    color: #ffffff;\n    background: none;\n    border: none;\n    outline: none;\n    padding: 0;\n    width: 300px; }\n  :host /deep/ .search .completer-input {\n    display: inline-block; }\n\n@media screen and (max-width: 660px) {\n  :host /deep/ .search {\n    display: none; } }\n\n@media screen and (max-width: 500px) {\n  :host /deep/ .page-top {\n    padding: 0 20px; } }\n\n@media (max-width: 435px) {\n  :host /deep/ .user-profile {\n    min-width: 136px; }\n  :host /deep/ a.refresh-data {\n    margin-right: 10px; }\n  :host /deep/ a.collapse-menu-link {\n    margin-left: 10px; }\n  :host /deep/ .al-skin-dropdown {\n    display: none; } }\n\n:host /deep/ .profile-toggle-link {\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".picture-group {\n  border: 1px dashed #b8b8b8;\n  width: 202px;\n  height: 202px;\n  position: relative;\n  cursor: pointer; }\n  .picture-group .picture-wrapper {\n    width: 200px;\n    height: 200px;\n    overflow: hidden;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .picture-group img {\n    max-width: 100%;\n    max-height: 100%; }\n  .picture-group i {\n    display: none;\n    position: absolute;\n    font-size: 32px;\n    background: #ffffff;\n    cursor: pointer;\n    color: #00abff;\n    top: -11px;\n    right: -11px;\n    height: 26px;\n    border-radius: 50%; }\n    .picture-group i:before {\n      line-height: 26px; }\n    .picture-group i:hover {\n      color: #f95372; }\n  .picture-group a.change-picture {\n    display: none;\n    width: 202px;\n    background: rgba(0, 0, 0, 0.7);\n    transition: all 200ms ease-in-out;\n    color: #ffffff;\n    text-decoration: none;\n    position: absolute;\n    bottom: -1px;\n    left: -1px;\n    line-height: 32px;\n    text-align: center; }\n  .picture-group:hover i {\n    display: block; }\n  .picture-group:hover .change-picture {\n    display: block; }\n  .picture-group .loading {\n    width: 100%;\n    height: 100%;\n    left: 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    position: absolute;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .picture-group .spinner {\n    width: 60px;\n    height: 60px;\n    position: relative; }\n  .picture-group .double-bounce1, .picture-group .double-bounce2 {\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    background-color: #fff;\n    opacity: 0.6;\n    position: absolute;\n    top: 0;\n    left: 0;\n    -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\n    animation: sk-bounce 2.0s infinite ease-in-out; }\n  .picture-group .double-bounce2 {\n    -webkit-animation-delay: -1.0s;\n    animation-delay: -1.0s; }\n\n@-webkit-keyframes sk-bounce {\n  0%, 100% {\n    -webkit-transform: scale(0); }\n  50% {\n    -webkit-transform: scale(1); } }\n\n@keyframes sk-bounce {\n  0%, 100% {\n    transform: scale(0);\n    -webkit-transform: scale(0); }\n  50% {\n    transform: scale(1);\n    -webkit-transform: scale(1); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ":host /deep/ .al-sidebar {\n  width: 180px;\n  top: 66px;\n  left: 0;\n  z-index: 1001;\n  display: block;\n  min-height: 100%;\n  background-color: #282828;\n  height: 100%;\n  position: fixed; }\n\n:host /deep/ .al-sidebar-list {\n  margin: 0;\n  overflow: hidden;\n  padding: 18px 0 0 0;\n  list-style: none; }\n\n:host /deep/ .al-sidebar-sublist .subitem-submenu-list {\n  padding-left: 15px; }\n\n:host /deep/ .subitem-submenu-link .fa {\n  top: 7px; }\n\n:host /deep/ .al-sidebar-list-item {\n  display: block;\n  position: relative;\n  float: none;\n  padding: 0; }\n  :host /deep/ .al-sidebar-list-item.selected:not(.with-sub-menu) {\n    background-color: #00abff; }\n    :host /deep/ .al-sidebar-list-item.selected:not(.with-sub-menu) a.al-sidebar-list-link {\n      color: #ffffff; }\n      :host /deep/ .al-sidebar-list-item.selected:not(.with-sub-menu) a.al-sidebar-list-link b {\n        color: #ffffff; }\n\n:host /deep/ .ba-sidebar-item-expanded > ul.al-sidebar-sublist {\n  display: block !important; }\n\n:host /deep/ .al-sidebar-list-item.ba-sidebar-item-expanded > .al-sidebar-list-link b, :host /deep/ .ba-sidebar-sublist-item.ba-sidebar-item-expanded > .al-sidebar-list-link b {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n:host /deep/ .al-sidebar-list-item.ba-sidebar-item-expanded > .al-sidebar-sublist, :host /deep/ .ba-sidebar-sublist-item.ba-sidebar-item-expanded > .al-sidebar-sublist {\n  display: block; }\n\n:host /deep/ a.al-sidebar-list-link {\n  display: block;\n  height: 42px;\n  padding-left: 18px;\n  text-shadow: none;\n  font-size: 13px;\n  text-decoration: none;\n  color: #ffffff;\n  line-height: 42px;\n  white-space: nowrap;\n  overflow: hidden;\n  cursor: pointer; }\n  :host /deep/ a.al-sidebar-list-link:hover {\n    color: #00abff; }\n    :host /deep/ a.al-sidebar-list-link:hover b {\n      color: #00abff; }\n  :host /deep/ a.al-sidebar-list-link i {\n    margin-right: 18px;\n    width: 16px;\n    display: inline-block; }\n  :host /deep/ a.al-sidebar-list-link b {\n    display: block;\n    opacity: 1;\n    width: 14px;\n    height: 14px;\n    line-height: 14px;\n    text-shadow: none;\n    font-size: 18px;\n    position: absolute;\n    right: 10px;\n    top: 12px;\n    padding: 0;\n    text-align: center;\n    color: #ffffff;\n    transition: -webkit-transform 0.2s linear;\n    transition: transform 0.2s linear;\n    transition: transform 0.2s linear, -webkit-transform 0.2s linear; }\n\n:host /deep/ .slimScrollBar, :host /deep/ .slimScrollRail {\n  border-radius: 0 !important;\n  width: 4px !important;\n  left: 176px; }\n\n:host /deep/ .al-sidebar-sublist {\n  padding: 0;\n  list-style: none;\n  position: relative;\n  display: none; }\n  :host /deep/ .al-sidebar-sublist.expanded {\n    display: block; }\n  :host /deep/ .al-sidebar-sublist > ba-menu-item > li {\n    display: block;\n    float: none;\n    padding: 0;\n    border-bottom: none;\n    position: relative; }\n    :host /deep/ .al-sidebar-sublist > ba-menu-item > li a {\n      display: block;\n      text-shadow: none;\n      font-size: 13px;\n      text-decoration: none;\n      color: #ffffff;\n      padding-left: 52px;\n      height: auto;\n      line-height: 29px; }\n      :host /deep/ .al-sidebar-sublist > ba-menu-item > li a:hover {\n        color: #00abff; }\n    :host /deep/ .al-sidebar-sublist > ba-menu-item > li.selected:not(.with-sub-menu) > a {\n      border: none;\n      background-color: #00abff; }\n      :host /deep/ .al-sidebar-sublist > ba-menu-item > li.selected:not(.with-sub-menu) > a:hover {\n        color: #ffffff; }\n\n:host /deep/ .sidebar-hover-elem {\n  width: 4px;\n  background: #00abff;\n  position: absolute;\n  top: -150px;\n  left: 176px;\n  transition: all 0.5s ease;\n  transition-property: top, height;\n  height: 42px;\n  display: block; }\n\n:host /deep/ .sidebar-select-elem {\n  display: block;\n  top: 94px; }\n\n:host /deep/ .menu-collapsed .slimScrollBar, :host /deep/ .menu-collapsed .slimScrollRail {\n  display: none !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 569:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 243,
	"./af.js": 243,
	"./ar": 250,
	"./ar-dz": 244,
	"./ar-dz.js": 244,
	"./ar-kw": 245,
	"./ar-kw.js": 245,
	"./ar-ly": 246,
	"./ar-ly.js": 246,
	"./ar-ma": 247,
	"./ar-ma.js": 247,
	"./ar-sa": 248,
	"./ar-sa.js": 248,
	"./ar-tn": 249,
	"./ar-tn.js": 249,
	"./ar.js": 250,
	"./az": 251,
	"./az.js": 251,
	"./be": 252,
	"./be.js": 252,
	"./bg": 253,
	"./bg.js": 253,
	"./bn": 254,
	"./bn.js": 254,
	"./bo": 255,
	"./bo.js": 255,
	"./br": 256,
	"./br.js": 256,
	"./bs": 257,
	"./bs.js": 257,
	"./ca": 258,
	"./ca.js": 258,
	"./cs": 259,
	"./cs.js": 259,
	"./cv": 260,
	"./cv.js": 260,
	"./cy": 261,
	"./cy.js": 261,
	"./da": 262,
	"./da.js": 262,
	"./de": 265,
	"./de-at": 263,
	"./de-at.js": 263,
	"./de-ch": 264,
	"./de-ch.js": 264,
	"./de.js": 265,
	"./dv": 266,
	"./dv.js": 266,
	"./el": 267,
	"./el.js": 267,
	"./en-au": 268,
	"./en-au.js": 268,
	"./en-ca": 269,
	"./en-ca.js": 269,
	"./en-gb": 270,
	"./en-gb.js": 270,
	"./en-ie": 271,
	"./en-ie.js": 271,
	"./en-nz": 272,
	"./en-nz.js": 272,
	"./eo": 273,
	"./eo.js": 273,
	"./es": 275,
	"./es-do": 274,
	"./es-do.js": 274,
	"./es.js": 275,
	"./et": 276,
	"./et.js": 276,
	"./eu": 277,
	"./eu.js": 277,
	"./fa": 278,
	"./fa.js": 278,
	"./fi": 279,
	"./fi.js": 279,
	"./fo": 280,
	"./fo.js": 280,
	"./fr": 283,
	"./fr-ca": 281,
	"./fr-ca.js": 281,
	"./fr-ch": 282,
	"./fr-ch.js": 282,
	"./fr.js": 283,
	"./fy": 284,
	"./fy.js": 284,
	"./gd": 285,
	"./gd.js": 285,
	"./gl": 286,
	"./gl.js": 286,
	"./gom-latn": 287,
	"./gom-latn.js": 287,
	"./he": 288,
	"./he.js": 288,
	"./hi": 289,
	"./hi.js": 289,
	"./hr": 290,
	"./hr.js": 290,
	"./hu": 291,
	"./hu.js": 291,
	"./hy-am": 292,
	"./hy-am.js": 292,
	"./id": 293,
	"./id.js": 293,
	"./is": 294,
	"./is.js": 294,
	"./it": 295,
	"./it.js": 295,
	"./ja": 296,
	"./ja.js": 296,
	"./jv": 297,
	"./jv.js": 297,
	"./ka": 298,
	"./ka.js": 298,
	"./kk": 299,
	"./kk.js": 299,
	"./km": 300,
	"./km.js": 300,
	"./kn": 301,
	"./kn.js": 301,
	"./ko": 302,
	"./ko.js": 302,
	"./ky": 303,
	"./ky.js": 303,
	"./lb": 304,
	"./lb.js": 304,
	"./lo": 305,
	"./lo.js": 305,
	"./lt": 306,
	"./lt.js": 306,
	"./lv": 307,
	"./lv.js": 307,
	"./me": 308,
	"./me.js": 308,
	"./mi": 309,
	"./mi.js": 309,
	"./mk": 310,
	"./mk.js": 310,
	"./ml": 311,
	"./ml.js": 311,
	"./mr": 312,
	"./mr.js": 312,
	"./ms": 314,
	"./ms-my": 313,
	"./ms-my.js": 313,
	"./ms.js": 314,
	"./my": 315,
	"./my.js": 315,
	"./nb": 316,
	"./nb.js": 316,
	"./ne": 317,
	"./ne.js": 317,
	"./nl": 319,
	"./nl-be": 318,
	"./nl-be.js": 318,
	"./nl.js": 319,
	"./nn": 320,
	"./nn.js": 320,
	"./pa-in": 321,
	"./pa-in.js": 321,
	"./pl": 322,
	"./pl.js": 322,
	"./pt": 324,
	"./pt-br": 323,
	"./pt-br.js": 323,
	"./pt.js": 324,
	"./ro": 325,
	"./ro.js": 325,
	"./ru": 326,
	"./ru.js": 326,
	"./sd": 327,
	"./sd.js": 327,
	"./se": 328,
	"./se.js": 328,
	"./si": 329,
	"./si.js": 329,
	"./sk": 330,
	"./sk.js": 330,
	"./sl": 331,
	"./sl.js": 331,
	"./sq": 332,
	"./sq.js": 332,
	"./sr": 334,
	"./sr-cyrl": 333,
	"./sr-cyrl.js": 333,
	"./sr.js": 334,
	"./ss": 335,
	"./ss.js": 335,
	"./sv": 336,
	"./sv.js": 336,
	"./sw": 337,
	"./sw.js": 337,
	"./ta": 338,
	"./ta.js": 338,
	"./te": 339,
	"./te.js": 339,
	"./tet": 340,
	"./tet.js": 340,
	"./th": 341,
	"./th.js": 341,
	"./tl-ph": 342,
	"./tl-ph.js": 342,
	"./tlh": 343,
	"./tlh.js": 343,
	"./tr": 344,
	"./tr.js": 344,
	"./tzl": 345,
	"./tzl.js": 345,
	"./tzm": 347,
	"./tzm-latn": 346,
	"./tzm-latn.js": 346,
	"./tzm.js": 347,
	"./uk": 348,
	"./uk.js": 348,
	"./ur": 349,
	"./ur.js": 349,
	"./uz": 351,
	"./uz-latn": 350,
	"./uz-latn.js": 350,
	"./uz.js": 351,
	"./vi": 352,
	"./vi.js": 352,
	"./x-pseudo": 353,
	"./x-pseudo.js": 353,
	"./yo": 354,
	"./yo.js": 354,
	"./zh-cn": 355,
	"./zh-cn.js": 355,
	"./zh-hk": 356,
	"./zh-hk.js": 356,
	"./zh-tw": 357,
	"./zh-tw.js": 357
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 569;


/***/ }),

/***/ 579:
/***/ (function(module, exports) {

module.exports = "<div #baAmChart class=\"ba-am-chart {{baAmChartClass || ''}}\"></div>\r\n"

/***/ }),

/***/ 580:
/***/ (function(module, exports) {

module.exports = "<div baCardBlur class=\"animated fadeIn card {{cardType}} {{baCardClass || ''}}\" zoom-in>\r\n    <div *ngIf=\"cardTitle\" class=\"card-header clearfix\">\r\n        <h3 class=\"card-title\" translate>{{cardTitle}}</h3>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <ng-content></ng-content>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 581:
/***/ (function(module, exports) {

module.exports = "<div #baChartistChart class=\"ba-chartist-chart {{baChartistChartClass || ''}}\"></div>\r\n"

/***/ }),

/***/ 582:
/***/ (function(module, exports) {

module.exports = "<div class=\"{{baCheckboxClass}}\">\r\n  <label class=\"checkbox-inline custom-checkbox nowrap\">\r\n    <input type=\"checkbox\" [checked]=state\r\n           (change)=\"onChange($event.target.checked)\"\r\n           [disabled]=\"disabled\" [value]=\"value\">\r\n    <span>{{label}}</span>\r\n  </label>\r\n</div>\r\n"

/***/ }),

/***/ 583:
/***/ (function(module, exports) {

module.exports = "<div class=\"content-top clearfix\">\r\n  <h1 class=\"al-title\" translate>{{ activePageTitle }}</h1>\r\n\r\n  <ul class=\"breadcrumb al-breadcrumb\">\r\n    <li class=\"breadcrumb-item\">\r\n      <a routerLink=\"/pages/dashboard\" translate>{{'general.home'}}</a>\r\n    </li>\r\n    <li class=\"breadcrumb-item active\" translate>{{ activePageTitle }}</li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ 584:
/***/ (function(module, exports) {

module.exports = "<input #fileUpload ngFileSelect type=\"file\" [options]=\"fileUploaderOptions\" (onUpload)=\"_onFileUpload($event)\" (beforeUpload)=\"beforeFileUpload($event)\" hidden=\"true\">\r\n<div class=\"input-group\" [ngClass]=\"{uploading: uploadFileInProgress}\">\r\n    <input #inputText type=\"text\" [value]=\"defaultValue\" class=\"form-control\" readonly>\r\n    <span class=\"input-group-btn\">\r\n      <button class=\"btn btn-success\" type=\"button\" (click)=\"bringFileSelector();\">Browse</button>\r\n  </span>\r\n</div>"

/***/ }),

/***/ 585:
/***/ (function(module, exports) {

module.exports = "<div #baFullCalendar class=\"ba-full-calendar {{baFullCalendarClass || ''}}\"></div>\r\n"

/***/ }),

/***/ 586:
/***/ (function(module, exports) {

module.exports = "<ul id=\"al-sidebar-list\" class=\"al-sidebar-list\" baSlimScroll [baSlimScrollOptions]=\"{height: menuHeight}\"\r\n    (mouseleave)=\"hoverElemTop=outOfArea\">\r\n  <ba-menu-item\r\n    [menuItem]=\"item\"\r\n    (itemHover)=\"hoverItem($event)\"\r\n    (toggleSubMenu)=\"toggleSubMenu($event)\"\r\n    *ngFor=\"let item of menuItems\"></ba-menu-item>\r\n</ul>\r\n<div class=\"sidebar-hover-elem\" [ngStyle]=\"{top: hoverElemTop + 'px', height: hoverElemHeight + 'px'}\"\r\n     [ngClass]=\"{'show-hover-elem': showHoverElem }\">\r\n</div>\r\n"

/***/ }),

/***/ 587:
/***/ (function(module, exports) {

module.exports = "<li *ngIf=\"!menuItem.hidden\" [title]=\"menuItem.title | translate\" [ngClass]=\"{'al-sidebar-list-item': !child, 'ba-sidebar-sublist-item': child, 'selected': menuItem.selected && !menuItem.expanded, 'with-sub-menu': menuItem.children, 'ba-sidebar-item-expanded': menuItem.expanded}\">\r\n\r\n  <a *ngIf=\"!menuItem.children && !menuItem.url\" (mouseenter)=\"onHoverItem($event, item)\" [routerLink]=\"menuItem.route.paths\" class=\"al-sidebar-list-link\">\r\n    <i *ngIf=\"menuItem.icon\" class=\"{{ menuItem.icon }}\"></i><span translate>{{ menuItem.title }}</span>\r\n  </a>\r\n\r\n  <a *ngIf=\"!menuItem.children && menuItem.url\" (mouseenter)=\"onHoverItem($event, item)\" [href]=\"menuItem.url\" [target]=\"menuItem.target\" class=\"al-sidebar-list-link\">\r\n    <i *ngIf=\"menuItem.icon\" class=\"{{ menuItem.icon }}\"></i><span translate>{{ menuItem.title }}</span>\r\n  </a>\r\n\r\n  <a *ngIf=\"menuItem.children\" (mouseenter)=\"onHoverItem($event, item)\" href (click)=\"onToggleSubMenu($event, menuItem)\" class=\"al-sidebar-list-link\">\r\n    <i *ngIf=\"menuItem.icon\" class=\"{{ menuItem.icon }}\"></i><span translate>{{ menuItem.title }}</span>\r\n    <b class=\"fa fa-angle-down\" [ngClass]=\"{'fa-angle-up': menuItem.expanded}\"></b>\r\n  </a>\r\n\r\n  <ul *ngIf=\"menuItem.children\" class=\"al-sidebar-sublist\" [ngClass]=\"{'slide-right': menuItem.slideRight}\">\r\n    <ba-menu-item [menuItem]=\"subItem\"\r\n                  [child]=\"true\"\r\n                  (itemHover)=\"onHoverItem($event)\"\r\n                  (toggleSubMenu)=\"onToggleSubMenu($event, subItem)\"\r\n                  *ngFor=\"let subItem of menuItem.children\"></ba-menu-item>\r\n  </ul>\r\n\r\n</li>\r\n"

/***/ }),

/***/ 588:
/***/ (function(module, exports) {

module.exports = "<ul class=\"al-msg-center clearfix\">\r\n  <li class=\"dropdown\">\r\n    <a href class=\"dropdown-toggle\" id=\"msg-dd1\" data-toggle=\"dropdown\" aria-expanded=\"false\">\r\n      <i class=\"fa fa-bell-o\"></i><span>{{ notifications.length }}</span>\r\n\r\n      <div class=\"notification-ring\"></div>\r\n    </a>\r\n\r\n    <div class=\"top-dropdown-menu dropdown-menu\" aria-labelledby=\"msg-dd1\">\r\n      <i class=\"dropdown-arr\"></i>\r\n\r\n      <div class=\"header clearfix\">\r\n        <strong>Notifications</strong>\r\n        <a href>Mark All as Read</a>\r\n        <a href>Settings</a>\r\n      </div>\r\n      <div class=\"msg-list\">\r\n        <a *ngFor=\"let msg of notifications\" href class=\"clearfix\">\r\n          <div class=\"img-area\"><img [ngClass]=\"{'photo-msg-item': !msg.image}\"\r\n                                     src=\"{{ ( msg.image ||  (msg.name | baProfilePicture)) }}\"></div>\r\n          <div class=\"msg-area\">\r\n            <div>{{ msg.text }}</div>\r\n            <span>{{ msg.time }}</span>\r\n          </div>\r\n        </a>\r\n      </div>\r\n      <a href>See all notifications</a>\r\n    </div>\r\n  </li>\r\n  <li class=\"dropdown\">\r\n    <a href class=\"msg dropdown-toggle\" id=\"msg-dd2\" data-toggle=\"dropdown\" aria-expanded=\"false\">\r\n      <i class=\"fa fa-envelope-o\"></i><span>{{ messages.length }}</span>\r\n      <div class=\"notification-ring\"></div>\r\n    </a>\r\n    <div class=\"top-dropdown-menu dropdown-menu\" aria-labelledby=\"msg-dd2\">\r\n      <i class=\"dropdown-arr\"></i>\r\n      <div class=\"header clearfix\">\r\n        <strong>Messages</strong>\r\n        <a href>Mark All as Read</a>\r\n        <a href>Settings</a>\r\n      </div>\r\n      <div class=\"msg-list\">\r\n        <a *ngFor=\"let msg of messages\" href class=\"clearfix\">\r\n          <div class=\"img-area\"><img [ngClass]=\"{'photo-msg-item': !msg.image}\"\r\n                                     src=\"{{ ( msg.image ||  (msg.name | baProfilePicture)) }}\"></div>\r\n          <div class=\"msg-area\">\r\n            <div>{{ msg.text }}</div>\r\n            <span>{{ msg.time }}</span>\r\n          </div>\r\n        </a>\r\n      </div>\r\n      <a href>See all messages</a>\r\n    </div>\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ 589:
/***/ (function(module, exports) {

module.exports = "<div class=\"{{baMultiCheckboxClass}} container-content\">\r\n  <ba-checkbox *ngFor=\"let item of state\"\r\n               [(ngModel)]=\"item[propertiesMapping.model]\"\r\n               [baCheckboxClass]=\"getProp(item, 'baCheckboxClass')\"\r\n               [label]=\"getProp(item, 'label')\"\r\n               [disabled]=\"getProp(item, 'disabled')\"\r\n               [value]=\"getProp(item, 'value')\"\r\n               id=\"{{getProp(item, 'id')}}\">\r\n  </ba-checkbox>\r\n</div>\r\n"

/***/ }),

/***/ 590:
/***/ (function(module, exports) {

module.exports = "<div class=\"page-top clearfix\" baScrollPosition maxHeight=\"50\" (scrollChange)=\"scrolledChanged($event)\"\r\n     [ngClass]=\"{scrolled: isScrolled}\">\r\n  <a routerLink=\"/pages/dashboard\" class=\"al-logo clearfix\"><span>Swiss-</span>Polytics</a>\r\n  <a href (click)=\"toggleMenu()\" class=\"collapse-menu-link ion-navicon\"></a>\r\n\r\n  <div class=\"search\">\r\n    <i class=\"ion-ios-search-strong\" (click)=\"startSearch()\"></i>\r\n    <ng2-completer class=\"completer-input\"\r\n                   [(ngModel)]=\"searchObject\"\r\n                   [datasource]=\"searchData\"\r\n                   [minSearchLength]=\"0\"\r\n                   [placeholder]=\"'Suche Politiker oder Partei'\"\r\n                   [matchClass]=\"'match'\"\r\n                   [autofocus]=\"true\"\r\n                   (keyup)=\"onKeyup($event)\">\r\n    </ng2-completer>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 591:
/***/ (function(module, exports) {

module.exports = "<div class=\"picture-group\" [ngClass]=\"{uploading: uploadInProgress}\">\r\n  <div class=\"picture-wrapper\" (click)=\"bringFileSelector();\">\r\n    <img [src]=\"picture\" *ngIf=\"picture\">\r\n    <img [src]=\"defaultPicture\" *ngIf=\"!!!picture && !!defaultPicture\">\r\n\r\n    <div class=\"loading\" *ngIf=\"uploadInProgress\">\r\n      <div class=\"spinner\">\r\n        <div class=\"double-bounce1\"></div>\r\n        <div class=\"double-bounce2\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <i class=\"ion-ios-close-outline\" (click)=\"removePicture();\" *ngIf=\"picture && canDelete\"></i>\r\n  <a href class=\"change-picture\" (click)=\"bringFileSelector();\">Change profile Picture</a>\r\n  <input #fileUpload ngFileSelect [options]=\"uploaderOptions\"\r\n         (onUpload)=\"_onUpload($event)\"\r\n         (beforeUpload)=\"beforeUpload($event)\"\r\n         type=\"file\" hidden=\"true\">\r\n</div>\r\n"

/***/ }),

/***/ 592:
/***/ (function(module, exports) {

module.exports = "<aside class=\"al-sidebar\" sidebarResize>\r\n  <ba-menu [menuHeight]=\"menuHeight\"\r\n           [sidebarCollapsed]=\"isMenuCollapsed\"\r\n           (expandMenu)=\"menuExpand()\"></ba-menu>\r\n</aside>\r\n"

/***/ }),

/***/ 642:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(383);


/***/ })

},[642]);
//# sourceMappingURL=main.bundle.js.map