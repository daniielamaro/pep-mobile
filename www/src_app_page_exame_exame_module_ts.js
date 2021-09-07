(self["webpackChunkpeppaciente"] = self["webpackChunkpeppaciente"] || []).push([["src_app_page_exame_exame_module_ts"],{

/***/ 3232:
/*!****************************************************!*\
  !*** ./src/app/page/exame/exame-routing.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamePageRoutingModule": () => (/* binding */ ExamePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _exame_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exame.page */ 1223);




const routes = [
    {
        path: '',
        component: _exame_page__WEBPACK_IMPORTED_MODULE_0__.ExamePage
    }
];
let ExamePageRoutingModule = class ExamePageRoutingModule {
};
ExamePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ExamePageRoutingModule);



/***/ }),

/***/ 7281:
/*!********************************************!*\
  !*** ./src/app/page/exame/exame.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamePageModule": () => (/* binding */ ExamePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _exame_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exame-routing.module */ 3232);
/* harmony import */ var _exame_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exame.page */ 1223);
/* harmony import */ var src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/class/url-service */ 2567);
/* harmony import */ var _exame_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exame.service */ 2997);









let ExamePageModule = class ExamePageModule {
};
ExamePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _exame_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExamePageRoutingModule
        ],
        declarations: [_exame_page__WEBPACK_IMPORTED_MODULE_1__.ExamePage],
        providers: [
            _exame_service__WEBPACK_IMPORTED_MODULE_3__.ExameService,
            src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_2__.UrlService
        ]
    })
], ExamePageModule);



/***/ }),

/***/ 1223:
/*!******************************************!*\
  !*** ./src/app/page/exame/exame.page.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamePage": () => (/* binding */ ExamePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_exame_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./exame.page.html */ 3134);
/* harmony import */ var _exame_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exame.page.scss */ 7283);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_shared_class_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/class/storage.service */ 6578);
/* harmony import */ var _exame_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exame.service */ 2997);







let ExamePage = class ExamePage {
    constructor(router, storage, exameService) {
        this.router = router;
        this.storage = storage;
        this.exameService = exameService;
        this.loading = false;
        this.router.events.subscribe((evt) => {
            if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd && this.router.url == "/page/exame") {
                this.loading = true;
                this.pageEnter();
            }
        });
    }
    ngOnInit() { }
    pageEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let user = yield this.storage.get("user");
            this.exameService.consultarListaExames(user.id)
                .subscribe((resp) => {
                this.listaExame = resp;
                if (this.listaExame.length == 0)
                    this.mensagem = "Nenhum exame salvo";
                this.loading = false;
            }, error => {
                this.mensagem = error.error;
                this.loading = false;
            });
        });
    }
};
ExamePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_shared_class_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService },
    { type: _exame_service__WEBPACK_IMPORTED_MODULE_3__.ExameService }
];
ExamePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-exame',
        template: _raw_loader_exame_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_exame_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ExamePage);



/***/ }),

/***/ 2997:
/*!*********************************************!*\
  !*** ./src/app/page/exame/exame.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExameService": () => (/* binding */ ExameService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/class/url-service */ 2567);



let ExameService = class ExameService {
    constructor(urlService) {
        this.urlService = urlService;
    }
    consultarListaExames(id) {
        return this.urlService.sendRequestPost("/Exame/ConsultarListaExame?id=" + id);
    }
};
ExameService.ctorParameters = () => [
    { type: src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_0__.UrlService }
];
ExameService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], ExameService);



/***/ }),

/***/ 7283:
/*!********************************************!*\
  !*** ./src/app/page/exame/exame.page.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".content {\n  margin-top: 10vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.sector-novo-exame {\n  width: 100%;\n  height: auto;\n}\n\n.area-lista-vazia {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 65vh;\n}\n\n.col-lista-exame {\n  --ion-grid-column-padding: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1Q0FBQTtBQUNGIiwiZmlsZSI6ImV4YW1lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50e1xyXG4gIG1hcmdpbi10b3A6IDEwdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uc2VjdG9yLW5vdm8tZXhhbWV7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uYXJlYS1saXN0YS12YXppYXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA2NXZoO1xyXG59XHJcblxyXG4uY29sLWxpc3RhLWV4YW1le1xyXG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 3134:
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/exame/exame.page.html ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"content\">\n\n    <div class=\"sector-novo-exame\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-button routerLink=\"/page/criar-exame\" expand=\"block\">salvar novo exame</ion-button>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <div *ngIf=\"!listaExame || listaExame.length == 0\" class=\"area-lista-vazia\">\n              <span *ngIf=\"!loading\">{{mensagem}}</span>\n              <div *ngIf=\"loading\" class=\"preloader-wrapper big active\">\n                <div class=\"spinner-layer spinner-blue-only\">\n                  <div class=\"circle-clipper left\">\n                    <div class=\"circle\"></div>\n                  </div><div class=\"gap-patch\">\n                    <div class=\"circle\"></div>\n                  </div><div class=\"circle-clipper right\">\n                    <div class=\"circle\"></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <ion-list *ngIf=\"listaExame && listaExame.length > 0\">\n              <ion-item *ngFor=\"let item of listaExame\">\n                <ion-label class=\"ion-text-wrap\">\n\n                  <ion-grid>\n                    <ion-row>\n                      <ion-col class=\"col-lista-exame\" size=\"7\">\n                        <ion-text color=\"primary\">\n                          <h2>{{item.tipo.nome}}</h2>\n                        </ion-text>\n                      </ion-col>\n                      <ion-col class=\"col-lista-exame\" size=\"5\">\n                        <p>Data de Realização</p>\n                        <ion-text color=\"secondary\">\n                          <p>{{item.diaRealizacao | date: 'dd/MM/yyyy'}}</p>\n                        </ion-text>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n\n                </ion-label>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_exame_exame_module_ts.js.map