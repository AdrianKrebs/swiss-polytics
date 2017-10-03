webpackJsonp([3],{

/***/ "../../../../../src/app/pages/politician/politician.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_paralament_service__ = __webpack_require__("../../../../../src/app/pages/shared/services/paralament.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_politician_model__ = __webpack_require__("../../../../../src/app/pages/model/politician.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_helper_service__ = __webpack_require__("../../../../../src/app/pages/util/helper.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Politician; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let Politician = class Politician {
    constructor(service, helper, route) {
        this.service = service;
        this.helper = helper;
        this.route = route;
    }
    ngOnInit() {
        this.politician$ = this.route.paramMap
            .switchMap((params) => {
            this.selectedPoliticianId = parseInt(params.get('id'), 10);
            return this.service.getPoliticanInfos(this.selectedPoliticianId);
        }).map((result) => {
            const p = new __WEBPACK_IMPORTED_MODULE_3__model_politician_model__["a" /* PoliticianModel */]().mapJsonToPolitican(result);
            const twitterData = this.getTwitterData(this.selectedPoliticianId);
            if (twitterData) {
                p.twitterName = twitterData['twitterName'];
                p.twitterId = twitterData['id'];
            }
            this.helper.initTwitterWidget();
            return p;
        });
        this.politician$.subscribe((result) => {
            this.politician = result;
        });
    }
    ngAfterViewInit() {
        this.helper.initTwitterWidget();
    }
    getTwitterData(personId) {
        return this.helper.getUserByPersonId(personId);
    }
};
Politician = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'politician',
        template: __webpack_require__("../../../../../src/app/pages/politician/politician.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_paralament_service__["a" /* ParlamentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_paralament_service__["a" /* ParlamentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__util_helper_service__["a" /* Helper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__util_helper_service__["a" /* Helper */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object])
], Politician);

var _a, _b, _c;
//# sourceMappingURL=politician.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/politician/politician.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-8\">\r\n    <div *ngIf=\"politician?.twitterId\">\r\n      <tile [politicianId]=\"politician.twitterId\"></tile>\r\n    </div>\r\n    <div *ngIf=\"politician?.twitterId\">\r\n      <div class=\"row\" *ngIf=\"politician\">\r\n        <div class=\"col-md-6\"><app-sentiments [politicianId]=\"politician.twitterId\"></app-sentiments></div>\r\n        <div class=\"col-md-6\"><app-mentions [politicianId]=\"politician.twitterId\"></app-mentions></div>\r\n      </div>\r\n    </div>\r\n    <ba-card class=\"col-xlg-6 col-lg-6\" cardTitle=\"{{politician?.firstLastName}}\">\r\n      <profil [politicanModel]=\"politician\"></profil>\r\n    </ba-card>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <div *ngIf=\"politician?.twitterName\">\r\n      <feed [twitterName]=\"politician.twitterName\"></feed>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/politician/politician.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_nga_module__ = __webpack_require__("../../../../../src/app/theme/nga.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__politician_routing__ = __webpack_require__("../../../../../src/app/pages/politician/politician.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__politician_component__ = __webpack_require__("../../../../../src/app/pages/politician/politician.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__profil_profil_component__ = __webpack_require__("../../../../../src/app/pages/politician/profil/profil.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__ = __webpack_require__("../../../../../src/app/pages/shared/shared.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoliticianModule", function() { return PoliticianModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









let PoliticianModule = class PoliticianModule {
};
PoliticianModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__theme_nga_module__["a" /* NgaModule */],
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["d" /* NgbDropdownModule */],
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbModalModule */],
            __WEBPACK_IMPORTED_MODULE_5__politician_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__["a" /* SharedModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__politician_component__["a" /* Politician */],
            __WEBPACK_IMPORTED_MODULE_7__profil_profil_component__["a" /* Profil */],
        ],
        providers: [],
    })
], PoliticianModule);

//# sourceMappingURL=politician.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/politician/politician.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__politician_component__ = __webpack_require__("../../../../../src/app/pages/politician/politician.component.ts");


// noinspection TypeScriptValidateTypes
const routes = [
    {
        path: ':id',
        component: __WEBPACK_IMPORTED_MODULE_1__politician_component__["a" /* Politician */],
        children: [],
    },
];
const routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(routes);
/* harmony export (immutable) */ __webpack_exports__["a"] = routing;

//# sourceMappingURL=politician.routing.js.map

/***/ }),

/***/ "../../../../../src/app/pages/politician/profil/profil.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_politician_model__ = __webpack_require__("../../../../../src/app/pages/model/politician.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_helper_service__ = __webpack_require__("../../../../../src/app/pages/util/helper.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Profil; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let Profil = class Profil {
    constructor(_helper) {
        this._helper = _helper;
    }
    // hacky lifecycle hook to load twitter feed
    ngAfterViewInit() {
        this._helper.initTwitterWidget();
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__model_politician_model__["a" /* PoliticianModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__model_politician_model__["a" /* PoliticianModel */]) === "function" && _a || Object)
], Profil.prototype, "politicanModel", void 0);
Profil = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'profil',
        styles: [__webpack_require__("../../../../../src/app/pages/politician/profil/profil.scss")],
        template: __webpack_require__("../../../../../src/app/pages/politician/profil/profil.html"),
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__util_helper_service__["a" /* Helper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__util_helper_service__["a" /* Helper */]) === "function" && _b || Object])
], Profil);

var _a, _b;
//# sourceMappingURL=profil.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/politician/profil/profil.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\r\n  <div class=\"col-md-4 profile-picture\">\r\n      <img src=\"{{politicanModel?.imageUrl}}\" />\r\n  </div>\r\n\r\n  <div class=\"col-md-8\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-6\">\r\n        <div class=\"form-group\">\r\n          <label for=\"inputCouncil\">Rat</label>\r\n          <label for=\"inputCouncil\" class=\"form-control\">{{politicanModel?.council}}</label>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-sm-6\">\r\n        <div class=\"form-group\">\r\n          <label for=\"inputDateOfBirth\">Geboren</label>\r\n          <label for=\"inputDateOfBirth\" class=\"form-control\">{{politicanModel?.dateOfBirth}}</label>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-sm-6\">\r\n        <div class=\"form-group\">\r\n          <label for=\"inputCanton\">Kanton</label>\r\n          <label for=\"inputDateOfBirth\" class=\"form-control\">{{politicanModel?.canton}}</label>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-sm-6\">\r\n        <div class=\"form-group\">\r\n          <label for=\"inputJob\">Beruf</label>\r\n          <label for=\"inputDateOfBirth\" class=\"form-control\">{{politicanModel?.job}}</label>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-sm-6\">\r\n        <div class=\"form-group\">\r\n          <label for=\"inputParty\">Partei</label>\r\n          <label for=\"inputDateOfBirth\" class=\"form-control\">{{politicanModel?.party}}</label>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-sm-6\">\r\n        <div class=\"form-group\">\r\n          <label for=\"inputAddress\">Wohnadresse</label>\r\n          <label for=\"inputDateOfBirth\" class=\"form-control\">{{politicanModel?.address}}</label>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-sm-6\">\r\n        <div class=\"form-group\">\r\n          <label for=\"inputMail\">Email</label>\r\n          <label for=\"inputDateOfBirth\" class=\"form-control\">{{politicanModel?.email}}</label>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-sm-6\">\r\n        <div class=\"form-group\">\r\n          <label for=\"inputWebpage\">Webseite</label>\r\n\r\n          <div *ngIf=\"politicanModel?.webpage == '-'\">\r\n            <label for=\"inputDateOfBirth\" class=\"form-control\">{{politicanModel?.webpage}}</label>\r\n          </div>\r\n\r\n          <div *ngIf=\"politicanModel?.webpage != '-'\">\r\n            <label class=\"form-control\">\r\n                  <a class=\"aform-control\" href=\"{{politicanModel?.webpageUrl}}\" target=\"_blank\">{{politicanModel?.webpage}}</a>\r\n            </label>\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/politician/profil/profil.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-control {\n  border: none; }\n\n.profile-picture {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\nimg {\n  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);\n  border-radius: 7px;\n  margin: 15px;\n  display: block;\n  vertical-align: middle;\n  max-width: 200px;\n  height: auto;\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ })

});
//# sourceMappingURL=3.chunk.js.map