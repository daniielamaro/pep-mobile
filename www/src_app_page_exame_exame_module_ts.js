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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_exame_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./exame.page.html */ 3134);
/* harmony import */ var _exame_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exame.page.scss */ 7283);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_shared_class_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/class/storage.service */ 6578);
/* harmony import */ var src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/class/url-service */ 2567);
/* harmony import */ var _exame_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./exame.service */ 2997);








let ExamePage = class ExamePage {
    constructor(router, storage, urlService, exameService) {
        this.router = router;
        this.storage = storage;
        this.urlService = urlService;
        this.exameService = exameService;
        this.loading = false;
        this.dataFiltrada = false;
        this.tipoFiltrado = false;
        this.router.events.subscribe((evt) => {
            if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd && this.router.url == "/page/exames") {
                this.loading = true;
                this.pageEnter();
            }
        });
    }
    ngOnInit() { }
    pageEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let user = yield this.storage.get("user");
            let token = yield this.storage.get("token");
            yield this.urlService.validateToken(token);
            this.listaExameFull = undefined;
            this.listaExame = undefined;
            yield this.getTiposExames();
            (yield this.exameService.consultarListaExames(user.id))
                .subscribe((resp) => {
                this.listaExameFull = resp;
                this.listaExame = resp;
                if (this.listaExame.length == 0)
                    this.mensagem = "Nenhum exame salvo";
                this.loading = false;
            }, error => {
                if (error.status == 401 || error.status == 403) {
                    this.storage.remove("user");
                    this.router.navigateByUrl("");
                }
                this.mensagem = error.error;
                this.loading = false;
            });
        });
    }
    getTiposExames() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            (yield this.exameService.consultarListaTiposExames())
                .subscribe((resp) => {
                this.tiposExames = resp;
            }, error => {
                if (error.status == 401 || error.status == 403) {
                    this.storage.remove("user");
                    this.router.navigateByUrl("");
                }
            });
        });
    }
    filtroData() {
        if (this.dataFiltro && this.tipoFiltrado) {
            this.listaExame = this.listaExameFull.filter((item) => {
                return new Date(item.diaRealizacao).getDate() == new Date(this.dataFiltro).getDate() &&
                    new Date(item.diaRealizacao).getMonth() == new Date(this.dataFiltro).getMonth() &&
                    new Date(item.diaRealizacao).getFullYear() == new Date(this.dataFiltro).getFullYear() &&
                    item.tipo.id == this.tipoFiltro;
            });
            this.dataFiltrada = true;
        }
        else if (this.dataFiltro && !this.tipoFiltrado) {
            this.listaExame = this.listaExameFull.filter((item) => {
                return new Date(item.diaRealizacao).getDate() == new Date(this.dataFiltro).getDate() &&
                    new Date(item.diaRealizacao).getMonth() == new Date(this.dataFiltro).getMonth() &&
                    new Date(item.diaRealizacao).getFullYear() == new Date(this.dataFiltro).getFullYear();
            });
            this.dataFiltrada = true;
        }
    }
    filtroTipo() {
        if (this.tipoFiltro && this.dataFiltrada) {
            this.listaExame = this.listaExameFull.filter((item) => {
                return new Date(item.diaRealizacao).getDate() == new Date(this.dataFiltro).getDate() &&
                    new Date(item.diaRealizacao).getMonth() == new Date(this.dataFiltro).getMonth() &&
                    new Date(item.diaRealizacao).getFullYear() == new Date(this.dataFiltro).getFullYear() &&
                    item.tipo.id == this.tipoFiltro;
            });
            this.tipoFiltrado = true;
        }
        else if (this.tipoFiltro && !this.dataFiltrada) {
            this.listaExame = this.listaExameFull.filter((item) => {
                return item.tipo.id == this.tipoFiltro;
            });
            this.tipoFiltrado = true;
        }
    }
    limparFiltro() {
        this.dataFiltro = undefined;
        this.tipoFiltro = undefined;
        this.listaExame = this.listaExameFull;
        this.dataFiltrada = false;
        this.tipoFiltrado = false;
    }
};
ExamePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_shared_class_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService },
    { type: src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_3__.UrlService },
    { type: _exame_service__WEBPACK_IMPORTED_MODULE_4__.ExameService }
];
ExamePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-exame',
        template: _raw_loader_exame_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_exame_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ExamePage);



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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".content {\n  margin-top: 10vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.sector-novo-exame {\n  width: 100%;\n  height: auto;\n}\n\n.area-lista-vazia {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 55vh;\n}\n\n.btFiltrar {\n  height: 100%;\n  font-size: 12px;\n}\n\n.col-lista-exame {\n  --ion-grid-column-padding: 0 !important;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.col-lista-exame-dia {\n  --ion-grid-column-padding: 0 !important;\n}\n\n.listaTipo {\n  --placeholder-opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsdUNBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsdUNBQUE7QUFDRjs7QUFFQTtFQUNFLDBCQUFBO0FBQ0YiLCJmaWxlIjoiZXhhbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnR7XHJcbiAgbWFyZ2luLXRvcDogMTB2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5zZWN0b3Itbm92by1leGFtZXtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5hcmVhLWxpc3RhLXZhemlhe1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDU1dmg7XHJcbn1cclxuXHJcbi5idEZpbHRyYXJ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmNvbC1saXN0YS1leGFtZXtcclxuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbC1saXN0YS1leGFtZS1kaWF7XHJcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGlzdGFUaXBve1xyXG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMC41O1xyXG59XHJcbiJdfQ== */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"content\">\n    <div class=\"sector-novo-exame\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"8\">\n            <ion-datetime displayFormat=\"DD / MMM / YYYY\" [(ngModel)]=\"dataFiltro\" (ionChange)=\"filtroData()\" placeholder=\"Data do Exame\"></ion-datetime>\n            <ion-select *ngIf=\"tiposExames && tiposExames.length > 0\" [(ngModel)]=\"tipoFiltro\" (ionChange)=\"filtroTipo()\" class=\"listaTipo\" placeholder=\"Tipo do Exame\">\n              <ion-select-option *ngFor=\"let tipo of tiposExames\" [value]=\"tipo.id\">{{tipo.nome}}</ion-select-option>\n            </ion-select>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-button class=\"btFiltrar\" (click)=\"limparFiltro()\" [disabled]=\"!dataFiltro && !tipoFiltro\" color=\"secondary\" expand=\"block\">Limpar Filtro</ion-button>\n          </ion-col>\n        </ion-row>\n        <ion-item-divider></ion-item-divider>\n        <ion-row>\n          <ion-col size=\"12\">\n            <div *ngIf=\"!listaExame || listaExame.length == 0\" class=\"area-lista-vazia\">\n              <span *ngIf=\"!loading\">{{mensagem}}</span>\n              <div *ngIf=\"loading\" class=\"preloader-wrapper big active\">\n                <div class=\"spinner-layer spinner-blue-only\">\n                  <div class=\"circle-clipper left\">\n                    <div class=\"circle\"></div>\n                  </div><div class=\"gap-patch\">\n                    <div class=\"circle\"></div>\n                  </div><div class=\"circle-clipper right\">\n                    <div class=\"circle\"></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <ion-list *ngIf=\"listaExame && listaExame.length > 0\">\n              <ion-item *ngFor=\"let item of listaExame\">\n                <ion-label class=\"ion-text-wrap\">\n                  <ion-grid>\n                    <ion-row>\n                      <ion-col class=\"col-lista-exame\" size=\"1\">\n                        <i *ngIf=\"!item.publico\" style=\"color:#D63742\" class=\"fa fa-lock\"></i>\n                        <i *ngIf=\"item.publico\" style=\"color:#168A32\" class=\"fa fa-unlock\"></i>\n                      </ion-col>\n                      <ion-col class=\"col-lista-exame\" size=\"6\">\n                        <ion-text color=\"primary\">\n                          <h2>{{item.tipo.nome}}</h2>\n                        </ion-text>\n                      </ion-col>\n                      <ion-col class=\"col-lista-exame-dia\" size=\"5\">\n                        <p>Data de Realização</p>\n                        <ion-text color=\"secondary\">\n                          <p>{{item.diaRealizacao | date: 'dd/MMM/yyyy'}}</p>\n                        </ion-text>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n\n                </ion-label>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n  </div>\n</ion-content>\n<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n  <ion-fab-button routerLink=\"/page/criar-exame\">\n    <ion-icon name=\"add\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_exame_exame_module_ts.js.map