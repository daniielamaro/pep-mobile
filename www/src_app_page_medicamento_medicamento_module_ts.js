(self["webpackChunkpeppaciente"] = self["webpackChunkpeppaciente"] || []).push([["src_app_page_medicamento_medicamento_module_ts"],{

/***/ 2349:
/*!****************************************************************!*\
  !*** ./src/app/page/medicamento/medicamento-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MedicamentoPageRoutingModule": () => (/* binding */ MedicamentoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _medicamento_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./medicamento.page */ 6895);




const routes = [
    {
        path: '',
        component: _medicamento_page__WEBPACK_IMPORTED_MODULE_0__.MedicamentoPage
    }
];
let MedicamentoPageRoutingModule = class MedicamentoPageRoutingModule {
};
MedicamentoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MedicamentoPageRoutingModule);



/***/ }),

/***/ 6285:
/*!********************************************************!*\
  !*** ./src/app/page/medicamento/medicamento.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MedicamentoPageModule": () => (/* binding */ MedicamentoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _medicamento_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./medicamento-routing.module */ 2349);
/* harmony import */ var _medicamento_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./medicamento.page */ 6895);
/* harmony import */ var src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/class/url-service */ 2567);
/* harmony import */ var _medicamento_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./medicamento.service */ 5418);









let MedicamentoPageModule = class MedicamentoPageModule {
};
MedicamentoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _medicamento_routing_module__WEBPACK_IMPORTED_MODULE_0__.MedicamentoPageRoutingModule
        ],
        declarations: [_medicamento_page__WEBPACK_IMPORTED_MODULE_1__.MedicamentoPage],
        providers: [
            _medicamento_service__WEBPACK_IMPORTED_MODULE_3__.MedicamentoService,
            src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_2__.UrlService
        ]
    })
], MedicamentoPageModule);



/***/ }),

/***/ 6895:
/*!******************************************************!*\
  !*** ./src/app/page/medicamento/medicamento.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MedicamentoPage": () => (/* binding */ MedicamentoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_medicamento_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./medicamento.page.html */ 860);
/* harmony import */ var _medicamento_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./medicamento.page.scss */ 503);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_modal_medicamento_view_medicamento_view_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modal/medicamento-view/medicamento-view.page */ 8487);
/* harmony import */ var src_app_shared_class_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/class/storage.service */ 6578);
/* harmony import */ var src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/class/url-service */ 2567);
/* harmony import */ var _medicamento_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./medicamento.service */ 5418);










let MedicamentoPage = class MedicamentoPage {
    constructor(router, storage, urlService, modalController, medicamentoService) {
        this.router = router;
        this.storage = storage;
        this.urlService = urlService;
        this.modalController = modalController;
        this.medicamentoService = medicamentoService;
        this.loading = false;
        this.router.events.subscribe((evt) => {
            if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd && this.router.url == "/page/medicamentos") {
                this.loading = true;
                this.pageEnter();
            }
        });
    }
    ngOnInit() { }
    pageEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let user = yield this.storage.get("user");
            let token = yield this.storage.get("token");
            yield this.urlService.validateToken(token);
            this.listaMedicamentos = undefined;
            (yield this.medicamentoService.consultarListaMedicamentos(user.id))
                .subscribe((resp) => {
                this.listaMedicamentos = resp;
                if (this.listaMedicamentos.length == 0)
                    this.mensagem = "Nenhum medicamento salvo";
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
    abrirMedicamento(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const loadingScreen = yield this.modalController.create({
                component: src_app_modal_medicamento_view_medicamento_view_page__WEBPACK_IMPORTED_MODULE_2__.MedicamentoViewPage,
                componentProps: {
                    id: id
                }
            });
            loadingScreen.onDidDismiss()
                .then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () { }));
            return yield loadingScreen.present();
        });
    }
};
MedicamentoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_shared_class_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService },
    { type: src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_4__.UrlService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _medicamento_service__WEBPACK_IMPORTED_MODULE_5__.MedicamentoService }
];
MedicamentoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-medicamento',
        template: _raw_loader_medicamento_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_medicamento_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MedicamentoPage);



/***/ }),

/***/ 503:
/*!********************************************************!*\
  !*** ./src/app/page/medicamento/medicamento.page.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".content {\n  margin-top: 10vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.sector-novo-medicamento {\n  width: 100%;\n  height: auto;\n}\n\n.area-lista-vazia {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 75vh;\n}\n\n.medicamento-nome {\n  --ion-grid-column-padding: 0 !important;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.medicamento-publico {\n  --ion-grid-column-padding: 0 !important;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.medicamento-quantidade {\n  --ion-grid-column-padding: 0 !important;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.medicamento-dataTermino {\n  --ion-grid-column-padding: 0 !important;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  text-align: center;\n}\n\n.listaTipo {\n  --placeholder-opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZGljYW1lbnRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1Q0FBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1Q0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1Q0FBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1Q0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLDBCQUFBO0FBQ0YiLCJmaWxlIjoibWVkaWNhbWVudG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnR7XHJcbiAgbWFyZ2luLXRvcDogMTB2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5zZWN0b3Itbm92by1tZWRpY2FtZW50b3tcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5hcmVhLWxpc3RhLXZhemlhe1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDc1dmg7XHJcbn1cclxuXHJcbi5tZWRpY2FtZW50by1ub21le1xyXG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubWVkaWNhbWVudG8tcHVibGljb3tcclxuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tZWRpY2FtZW50by1xdWFudGlkYWRle1xyXG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubWVkaWNhbWVudG8tZGF0YVRlcm1pbm97XHJcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmxpc3RhVGlwb3tcclxuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDAuNTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 860:
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/medicamento/medicamento.page.html ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"content\">\n    <div class=\"sector-novo-medicamento\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\">\n            <div *ngIf=\"!listaMedicamentos || listaMedicamentos.length == 0\" class=\"area-lista-vazia\">\n              <span *ngIf=\"!loading\">{{mensagem}}</span>\n              <div *ngIf=\"loading\" class=\"preloader-wrapper big active\">\n                <div class=\"spinner-layer spinner-blue-only\">\n                  <div class=\"circle-clipper left\">\n                    <div class=\"circle\"></div>\n                  </div><div class=\"gap-patch\">\n                    <div class=\"circle\"></div>\n                  </div><div class=\"circle-clipper right\">\n                    <div class=\"circle\"></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <ion-list *ngIf=\"listaMedicamentos && listaMedicamentos.length > 0\">\n\n              <ion-item (click)=\"abrirMedicamento(item.id)\" *ngFor=\"let item of listaMedicamentos\">\n                <ion-label class=\"ion-text-wrap\">\n                  <ion-grid>\n                    <ion-row>\n                      <ion-col class=\"medicamento-nome\" size=\"11\">\n                        <ion-text color=\"primary\">\n                          <h2>{{item.nome}}</h2>\n                        </ion-text>\n                      </ion-col>\n                      <ion-col class=\"medicamento-publico\" size=\"1\">\n                        <i *ngIf=\"!item.publico\" style=\"color:#D63742\" class=\"fa fa-lock\"></i>\n                        <i *ngIf=\"item.publico\" style=\"color:#168A32\" class=\"fa fa-unlock\"></i>\n                      </ion-col>\n                    </ion-row>\n                    <ion-row>\n                      <ion-col class=\"medicamento-quantidade\" size=\"7\">\n                        <p>{{(item.tipoQuantidade != \"Outro\" ? item.numQuantidade + \" \" + item.tipoQuantidade : item.outraQuantidade)}}\n                          {{(item.tipoIntervalo != \"Outro\" ? \"a cada \" + item.numIntervalo + \" \" + item.tipoIntervalo : item.outroIntervalo)}}</p>\n                      </ion-col>\n                      <ion-col class=\"medicamento-dataTermino\" size=\"5\">\n                        <ion-text color=\"secondary\">\n                          <p *ngIf=\"!item.usoContinuo\">Até: {{item.dataTermino | date: 'dd/MMM/yyyy'}}</p>\n                          <p *ngIf=\"item.usoContinuo\">Uso contínuo</p>\n                        </ion-text>\n                      </ion-col>\n                    </ion-row>\n                    <ion-row>\n                      <ion-text *ngIf=\"item.tipoCadastro == 0\" color=\"danger\">Não receitado</ion-text>\n                      <ion-text *ngIf=\"item.tipoCadastro == 1\" color=\"success\">Receitado</ion-text>\n                      <ion-text *ngIf=\"item.tipoCadastro == 2\" color=\"warning\">Receitado manualmente</ion-text>\n                    </ion-row>\n                  </ion-grid>\n                </ion-label>\n              </ion-item>\n\n            </ion-list>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n  </div>\n</ion-content>\n<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n  <ion-fab-button routerLink=\"/page/criar-medicamento/0\">\n    <ion-icon name=\"add\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_medicamento_medicamento_module_ts.js.map