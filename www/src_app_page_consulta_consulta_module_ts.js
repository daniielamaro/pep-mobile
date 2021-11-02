(self["webpackChunkpeppaciente"] = self["webpackChunkpeppaciente"] || []).push([["src_app_page_consulta_consulta_module_ts"],{

/***/ 8292:
/*!**********************************************************!*\
  !*** ./src/app/page/consulta/consulta-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsultaPageRoutingModule": () => (/* binding */ ConsultaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _consulta_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consulta.page */ 5557);




const routes = [
    {
        path: '',
        component: _consulta_page__WEBPACK_IMPORTED_MODULE_0__.ConsultaPage
    }
];
let ConsultaPageRoutingModule = class ConsultaPageRoutingModule {
};
ConsultaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ConsultaPageRoutingModule);



/***/ }),

/***/ 6891:
/*!**************************************************!*\
  !*** ./src/app/page/consulta/consulta.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsultaPageModule": () => (/* binding */ ConsultaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _consulta_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consulta-routing.module */ 8292);
/* harmony import */ var _consulta_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./consulta.page */ 5557);
/* harmony import */ var src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/class/url-service */ 2567);
/* harmony import */ var _consulta_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./consulta.service */ 1493);









let ConsultaPageModule = class ConsultaPageModule {
};
ConsultaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _consulta_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConsultaPageRoutingModule
        ],
        declarations: [_consulta_page__WEBPACK_IMPORTED_MODULE_1__.ConsultaPage],
        providers: [
            _consulta_service__WEBPACK_IMPORTED_MODULE_3__.ConsultaService,
            src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_2__.UrlService
        ]
    })
], ConsultaPageModule);



/***/ }),

/***/ 5557:
/*!************************************************!*\
  !*** ./src/app/page/consulta/consulta.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsultaPage": () => (/* binding */ ConsultaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_consulta_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./consulta.page.html */ 9483);
/* harmony import */ var _consulta_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./consulta.page.scss */ 5378);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_shared_class_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/class/storage.service */ 6578);
/* harmony import */ var src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/class/url-service */ 2567);
/* harmony import */ var _consulta_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./consulta.service */ 1493);








let ConsultaPage = class ConsultaPage {
    constructor(router, storage, urlService, consultaService) {
        this.router = router;
        this.storage = storage;
        this.urlService = urlService;
        this.consultaService = consultaService;
        this.loading = false;
        this.dataFiltrada = false;
        this.tipoFiltrado = false;
        this.router.events.subscribe((evt) => {
            if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd && this.router.url == "/page/consultas") {
                this.loading = true;
                this.pageEnter();
            }
        });
    }
    ngOnInit() {
    }
    pageEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let user = yield this.storage.get("user");
            let token = yield this.storage.get("token");
            yield this.urlService.validateToken(token);
            this.listaConsultaFull = undefined;
            this.listaConsulta = undefined;
            yield this.getTiposConsultas();
            (yield this.consultaService.consultarListaConsultas(user.id))
                .subscribe((resp) => {
                this.listaConsultaFull = resp;
                this.listaConsulta = resp;
                if (this.listaConsulta.length == 0)
                    this.mensagem = "Nenhuma consulta salva";
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
    getTiposConsultas() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            (yield this.consultaService.consultarListaTiposConsultas())
                .subscribe((resp) => {
                this.tiposConsultas = resp;
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
            this.listaConsulta = this.listaConsultaFull.filter((item) => {
                return new Date(item.diaRealizacao).getDate() == new Date(this.dataFiltro).getDate() &&
                    new Date(item.diaRealizacao).getMonth() == new Date(this.dataFiltro).getMonth() &&
                    new Date(item.diaRealizacao).getFullYear() == new Date(this.dataFiltro).getFullYear() &&
                    item.tipo.id == this.tipoFiltro;
            });
            this.dataFiltrada = true;
        }
        else if (this.dataFiltro && !this.tipoFiltrado) {
            this.listaConsulta = this.listaConsultaFull.filter((item) => {
                return new Date(item.diaRealizacao).getDate() == new Date(this.dataFiltro).getDate() &&
                    new Date(item.diaRealizacao).getMonth() == new Date(this.dataFiltro).getMonth() &&
                    new Date(item.diaRealizacao).getFullYear() == new Date(this.dataFiltro).getFullYear();
            });
            this.dataFiltrada = true;
        }
    }
    filtroTipo() {
        if (this.tipoFiltro && this.dataFiltrada) {
            this.listaConsulta = this.listaConsultaFull.filter((item) => {
                return new Date(item.diaRealizacao).getDate() == new Date(this.dataFiltro).getDate() &&
                    new Date(item.diaRealizacao).getMonth() == new Date(this.dataFiltro).getMonth() &&
                    new Date(item.diaRealizacao).getFullYear() == new Date(this.dataFiltro).getFullYear() &&
                    item.tipo.id == this.tipoFiltro;
            });
            this.tipoFiltrado = true;
        }
        else if (this.tipoFiltro && !this.dataFiltrada) {
            this.listaConsulta = this.listaConsultaFull.filter((item) => {
                return item.tipo.id == this.tipoFiltro;
            });
            this.tipoFiltrado = true;
        }
    }
    limparFiltro() {
        this.dataFiltro = undefined;
        this.tipoFiltro = undefined;
        this.listaConsulta = this.listaConsultaFull;
        this.dataFiltrada = false;
        this.tipoFiltrado = false;
    }
};
ConsultaPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_shared_class_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService },
    { type: src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_3__.UrlService },
    { type: _consulta_service__WEBPACK_IMPORTED_MODULE_4__.ConsultaService }
];
ConsultaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-consulta',
        template: _raw_loader_consulta_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_consulta_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ConsultaPage);



/***/ }),

/***/ 5378:
/*!**************************************************!*\
  !*** ./src/app/page/consulta/consulta.page.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".content {\n  margin-top: 10vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.sector-nova-consulta {\n  width: 100%;\n  height: auto;\n}\n\n.area-lista-vazia {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 55vh;\n}\n\n.btFiltrar {\n  height: 100%;\n  font-size: 12px;\n}\n\n.col-lista-consulta {\n  --ion-grid-column-padding: 0 !important;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.col-lista-consulta-dia {\n  --ion-grid-column-padding: 0 !important;\n}\n\n.listaTipo {\n  --placeholder-opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnN1bHRhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsdUNBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsdUNBQUE7QUFDRjs7QUFFQTtFQUNFLDBCQUFBO0FBQ0YiLCJmaWxlIjoiY29uc3VsdGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnR7XHJcbiAgbWFyZ2luLXRvcDogMTB2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5zZWN0b3Itbm92YS1jb25zdWx0YXtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5hcmVhLWxpc3RhLXZhemlhe1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDU1dmg7XHJcbn1cclxuXHJcbi5idEZpbHRyYXJ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmNvbC1saXN0YS1jb25zdWx0YXtcclxuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbC1saXN0YS1jb25zdWx0YS1kaWF7XHJcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGlzdGFUaXBve1xyXG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMC41O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 9483:
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/consulta/consulta.page.html ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"content\">\n    <div class=\"sector-nova-consulta\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"8\">\n            <ion-datetime displayFormat=\"DD / MMM / YYYY\" [(ngModel)]=\"dataFiltro\" (ionChange)=\"filtroData()\" placeholder=\"Data da Consulta\"></ion-datetime>\n            <ion-select *ngIf=\"tiposConsultas && tiposConsultas.length > 0\" [(ngModel)]=\"tipoFiltro\" (ionChange)=\"filtroTipo()\" class=\"listaTipo\" placeholder=\"Especialidade\">\n              <ion-select-option *ngFor=\"let tipo of tiposConsultas\" [value]=\"tipo.id\">{{tipo.nome}}</ion-select-option>\n            </ion-select>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-button class=\"btFiltrar\" (click)=\"limparFiltro()\" [disabled]=\"!dataFiltro && !tipoFiltro\" color=\"secondary\" expand=\"block\">Limpar Filtro</ion-button>\n          </ion-col>\n        </ion-row>\n        <ion-item-divider></ion-item-divider>\n        <ion-row>\n          <ion-col size=\"12\">\n            <div *ngIf=\"!listaConsulta || listaConsulta.length == 0\" class=\"area-lista-vazia\">\n              <span *ngIf=\"!loading\">{{mensagem}}</span>\n              <div *ngIf=\"loading\" class=\"preloader-wrapper big active\">\n                <div class=\"spinner-layer spinner-blue-only\">\n                  <div class=\"circle-clipper left\">\n                    <div class=\"circle\"></div>\n                  </div><div class=\"gap-patch\">\n                    <div class=\"circle\"></div>\n                  </div><div class=\"circle-clipper right\">\n                    <div class=\"circle\"></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <ion-list *ngIf=\"listaConsulta && listaConsulta.length > 0\">\n              <ion-item *ngFor=\"let item of listaConsulta\">\n                <ion-label class=\"ion-text-wrap\">\n                  <ion-grid>\n                    <ion-row>\n                      <ion-col class=\"col-lista-consulta\" size=\"1\">\n                        <i *ngIf=\"!item.publico\" style=\"color:#D63742\" class=\"fa fa-lock\"></i>\n                        <i *ngIf=\"item.publico\" style=\"color:#168A32\" class=\"fa fa-unlock\"></i>\n                      </ion-col>\n                      <ion-col class=\"col-lista-consulta\" size=\"6\">\n                        <ion-text color=\"primary\">\n                          <h2>{{item.tipo.nome}}</h2>\n                        </ion-text>\n                      </ion-col>\n                      <ion-col class=\"col-lista-consulta-dia\" size=\"5\">\n                        <p>Data de Realização</p>\n                        <ion-text color=\"secondary\">\n                          <p>{{item.diaRealizacao | date: 'dd/MMM/yyyy'}}</p>\n                        </ion-text>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n\n                </ion-label>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n  </div>\n</ion-content>\n<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n  <ion-fab-button routerLink=\"/page/criar-consulta\">\n    <ion-icon name=\"add\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_consulta_consulta_module_ts.js.map