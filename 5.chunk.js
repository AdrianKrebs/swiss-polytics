webpackJsonp([5],{

/***/ "../../../../../src/app/pages/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return About; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let About = class About {
    constructor() {
    }
    ngAfterViewInit() {
    }
};
About = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'about',
        styles: [__webpack_require__("../../../../../src/app/pages/about/about.scss")],
        template: __webpack_require__("../../../../../src/app/pages/about/about.html"),
    }),
    __metadata("design:paramtypes", [])
], About);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/about/about.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-lg-12 col-sm-12 col-12\">\r\n\r\n    <ba-card baCardClass=\"banner-column-panel\">\r\n      <div class=\"banner\">\r\n        <div class=\"large-banner-wrapper\">\r\n        </div>\r\n        <div class=\"banner-text-wrapper\">\r\n          <div class=\"banner-text\">\r\n            <h1>Swiss-Polytics</h1>\r\n\r\n            <p>Das schweizer Parlament im Netz</p>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"section\">\r\n        <div class=\"separator\"></div>\r\n        <p>Diese Seite ist im Rahmen einer Projektarbeit im CAS HTML5/Javascript an der Berner Fachhochschule BFH\r\n          entstanden.<br>\r\n          Es werden die Twitter Profile aller Politiker der vereinigten Schweizer Bundesversammlung berücksichtigt. <br>\r\n          Als Quelle für die Informationen zu den jeweiligen Parlamentariern wird der Open Data Webservice der <a href=\"https://www.parlament.ch/de/services/open-data-webservices\" target=\"_blank\">Parlamentsdienste der Bundesversammlung Bern</a> verwendet.\r\n        <p>Kontaktiere uns via <a href=\"https://twitter.com/swiss_polytics\" target=\"_blank\">Twitter</a></p>\r\n        <p>Der Sourcecode für diese Seite ist öffentlich auf <a href=\"https://github.com/AdrianKrebs/swiss-poliytics\" target=\"_blank\">Github</a> zugänglich. Contributions sind herzlich willkommen.</p>\r\n      </div>\r\n    </ba-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/about/about.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_translation_module__ = __webpack_require__("../../../../../src/app/app.translation.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_nga_module__ = __webpack_require__("../../../../../src/app/theme/nga.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_helper_service__ = __webpack_require__("../../../../../src/app/pages/util/helper.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("../../../../../src/app/pages/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_routing__ = __webpack_require__("../../../../../src/app/pages/about/about.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__about_component__ = __webpack_require__("../../../../../src/app/pages/about/about.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









let AboutModule = class AboutModule {
};
AboutModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__app_translation_module__["a" /* AppTranslationModule */],
            __WEBPACK_IMPORTED_MODULE_4__theme_nga_module__["a" /* NgaModule */],
            __WEBPACK_IMPORTED_MODULE_7__about_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__about_component__["a" /* About */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__util_helper_service__["a" /* Helper */],
        ],
    })
], AboutModule);

//# sourceMappingURL=about.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/about/about.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_component__ = __webpack_require__("../../../../../src/app/pages/about/about.component.ts");


// noinspection TypeScriptValidateTypes
const routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__about_component__["a" /* About */],
        children: [],
    },
];
/* unused harmony export routes */

const routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(routes);
/* harmony export (immutable) */ __webpack_exports__["a"] = routing;

//# sourceMappingURL=about.routing.js.map

/***/ }),

/***/ "../../../../../src/app/pages/about/about.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".banner {\n  margin-bottom: 19px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ })

});
//# sourceMappingURL=5.chunk.js.map