(self["webpackChunkpeppaciente"] = self["webpackChunkpeppaciente"] || []).push([["src_app_page_page_module_ts"],{

/***/ 7733:
/*!*********************************************!*\
  !*** ./src/app/page/page-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagePageRoutingModule": () => (/* binding */ PagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page.page */ 9071);




const routes = [
    {
        path: '',
        component: _page_page__WEBPACK_IMPORTED_MODULE_0__.PagePage,
        children: [
            {
                path: 'home',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_page_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 2040)).then(m => m.HomePageModule)
            },
            {
                path: 'exames',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_page_exame_exame_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./exame/exame.module */ 7281)).then(m => m.ExamePageModule)
            },
            {
                path: 'criar-exame',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_page_exame_criar-exame_criar-exame_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./exame/criar-exame/criar-exame.module */ 9000)).then(m => m.CriarExamePageModule)
            },
            {
                path: 'consultas',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_page_consulta_consulta_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./consulta/consulta.module */ 6891)).then(m => m.ConsultaPageModule)
            },
            {
                path: 'criar-consulta',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_page_consulta_criar-consulta_criar-consulta_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./consulta/criar-consulta/criar-consulta.module */ 6199)).then(m => m.CriarConsultaPageModule)
            },
            {
                path: 'medicamentos',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_page_medicamento_medicamento_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./medicamento/medicamento.module */ 6285)).then(m => m.MedicamentoPageModule)
            },
            {
                path: 'criar-medicamento/:id',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_page_medicamento_criar-medicamento_criar-medicamento_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./medicamento/criar-medicamento/criar-medicamento.module */ 4078)).then(m => m.CriarMedicamentoPageModule)
            },
            {
                path: 'clinicas',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_page_clinicas_clinicas_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./clinicas/clinicas.module */ 5590)).then(m => m.ClinicasPageModule)
            },
            {
                path: '',
                redirectTo: '/page/home',
                pathMatch: 'full'
            }
        ]
    }
];
let PagePageRoutingModule = class PagePageRoutingModule {
};
PagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PagePageRoutingModule);



/***/ }),

/***/ 5115:
/*!*************************************!*\
  !*** ./src/app/page/page.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagePageModule": () => (/* binding */ PagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-routing.module */ 7733);
/* harmony import */ var _page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page.page */ 9071);
/* harmony import */ var _shared_class_url_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/class/url-service */ 2567);








let PagePageModule = class PagePageModule {
};
PagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _page_routing_module__WEBPACK_IMPORTED_MODULE_0__.PagePageRoutingModule
        ],
        declarations: [_page_page__WEBPACK_IMPORTED_MODULE_1__.PagePage],
        providers: [
            _shared_class_url_service__WEBPACK_IMPORTED_MODULE_2__.UrlService
        ],
    })
], PagePageModule);



/***/ }),

/***/ 9071:
/*!***********************************!*\
  !*** ./src/app/page/page.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagePage": () => (/* binding */ PagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_page_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./page.page.html */ 92);
/* harmony import */ var _page_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page.page.scss */ 4703);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _shared_class_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/class/storage.service */ 6578);






let PagePage = class PagePage {
    constructor(storage, router) {
        this.storage = storage;
        this.router = router;
        this.router.events.subscribe((evt) => {
            this.rotaAtual = this.router.url;
        });
    }
    ngOnInit() { }
    logout() {
        this.storage.remove("user");
        this.router.navigateByUrl("");
    }
};
PagePage.ctorParameters = () => [
    { type: _shared_class_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
PagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-page',
        template: _raw_loader_page_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_page_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PagePage);



/***/ }),

/***/ 4703:
/*!*************************************!*\
  !*** ./src/app/page/page.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-tab-bar {\n  overflow-x: scroll;\n  justify-content: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtBQUNKIiwiZmlsZSI6InBhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRhYi1iYXIge1xyXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG4gfVxyXG4iXX0= */");

/***/ }),

/***/ 92:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/page.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <div style=\"display: flex; justify-content: space-between; padding-right: 10px;\">\n    <ion-title>\n      PEP - Paciente\n    </ion-title>\n    <ion-button (click)=\"logout()\" color=\"danger\">Sair</ion-button>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n\n    <ion-tab-button tab=\"home\">\n      <ion-icon name=\"home\"></ion-icon>\n      <ion-label *ngIf=\"rotaAtual == '/page/home'\">Home</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"clinicas\">\n      <ion-icon name=\"map\"></ion-icon>\n      <ion-label *ngIf=\"rotaAtual == '/page/clinicas'\">Clinicas da Familia</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"medicamentos\">\n      <ion-icon name=\"water\"></ion-icon>\n      <ion-label *ngIf=\"rotaAtual == '/page/medicamentos'\">Medicamentos</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"exames\">\n      <ion-icon name=\"clipboard\"></ion-icon>\n      <ion-label *ngIf=\"rotaAtual == '/page/exames'\">Exames</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"consultas\">\n      <ion-icon name=\"pulse\"></ion-icon>\n      <ion-label *ngIf=\"rotaAtual == '/page/consultas'\">Consultas</ion-label>\n    </ion-tab-button>\n\n  </ion-tab-bar>\n</ion-tabs>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_page_module_ts.js.map