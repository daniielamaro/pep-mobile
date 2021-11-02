(self["webpackChunkpeppaciente"] = self["webpackChunkpeppaciente"] || []).push([["src_app_page_consulta_criar-consulta_criar-consulta_module_ts"],{

/***/ 131:
/*!*******************************************************************************!*\
  !*** ./src/app/page/consulta/criar-consulta/criar-consulta-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CriarConsultaPageRoutingModule": () => (/* binding */ CriarConsultaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _criar_consulta_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./criar-consulta.page */ 8669);




const routes = [
    {
        path: '',
        component: _criar_consulta_page__WEBPACK_IMPORTED_MODULE_0__.CriarConsultaPage
    }
];
let CriarConsultaPageRoutingModule = class CriarConsultaPageRoutingModule {
};
CriarConsultaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CriarConsultaPageRoutingModule);



/***/ }),

/***/ 6199:
/*!***********************************************************************!*\
  !*** ./src/app/page/consulta/criar-consulta/criar-consulta.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CriarConsultaPageModule": () => (/* binding */ CriarConsultaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _criar_consulta_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./criar-consulta-routing.module */ 131);
/* harmony import */ var _criar_consulta_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./criar-consulta.page */ 8669);
/* harmony import */ var _consulta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../consulta.service */ 1493);








let CriarConsultaPageModule = class CriarConsultaPageModule {
};
CriarConsultaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _criar_consulta_routing_module__WEBPACK_IMPORTED_MODULE_0__.CriarConsultaPageRoutingModule
        ],
        declarations: [_criar_consulta_page__WEBPACK_IMPORTED_MODULE_1__.CriarConsultaPage],
        providers: [
            _consulta_service__WEBPACK_IMPORTED_MODULE_2__.ConsultaService
        ]
    })
], CriarConsultaPageModule);



/***/ }),

/***/ 8669:
/*!*********************************************************************!*\
  !*** ./src/app/page/consulta/criar-consulta/criar-consulta.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CriarConsultaPage": () => (/* binding */ CriarConsultaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_criar_consulta_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./criar-consulta.page.html */ 5797);
/* harmony import */ var _criar_consulta_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./criar-consulta.page.scss */ 2925);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_loading_loading_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/loading/loading.page */ 8532);
/* harmony import */ var src_app_shared_class_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/class/storage.service */ 6578);
/* harmony import */ var src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/class/url-service */ 2567);
/* harmony import */ var _consulta_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../consulta.service */ 1493);










let CriarConsultaPage = class CriarConsultaPage {
    constructor(consultaService, modalController, toastController, urlService, router, storage) {
        this.consultaService = consultaService;
        this.modalController = modalController;
        this.toastController = toastController;
        this.urlService = urlService;
        this.router = router;
        this.storage = storage;
        this.router.events.subscribe((evt) => {
            if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd && this.router.url == "/page/criar-consulta") {
                this.pageEnter();
            }
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () { });
    }
    pageEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.getTiposExames();
            this.user = yield this.storage.get("user");
            let token = yield this.storage.get("token");
            yield this.urlService.validateToken(token);
        });
    }
    getTiposExames() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.showLoadingScreen()
                .then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                (yield this.consultaService.consultarListaTiposConsultas())
                    .subscribe((resp) => {
                    this.tiposConsultas = resp;
                }, error => {
                    if (error.status == 401 || error.status == 403) {
                        this.storage.remove("user");
                        this.router.navigateByUrl("");
                    }
                    else {
                        this.toastController.create({
                            message: error.error,
                            duration: 5000
                        }).then(toast => {
                            toast.present();
                        });
                    }
                }, () => {
                    this.closeLoadingScreen();
                });
            }));
        });
    }
    salvarConsulta() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.showLoadingScreen()
                .then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                let request = {
                    idPaciente: this.user.id,
                    idTipoConsulta: this.tipoConsulta,
                    diaRealizacao: this.dataConsulta.split("T")[0],
                    publico: this.publico,
                    resumo: this.resumo,
                    observacoes: this.observacoes
                };
                this.dataConsulta = undefined;
                this.tipoConsulta = undefined;
                this.publico = false;
                this.resumo = undefined;
                this.observacoes = undefined;
                (yield this.consultaService.salvarConsulta(request))
                    .subscribe(() => {
                    this.router.navigateByUrl("/page/consultas");
                }, error => {
                    if (error.status == 401 || error.status == 403) {
                        this.storage.remove("user");
                        this.router.navigateByUrl("");
                    }
                    else {
                        this.toastController.create({
                            message: error.error,
                            duration: 5000
                        }).then(toast => {
                            toast.present();
                        });
                    }
                }, () => {
                    this.closeLoadingScreen();
                });
            }));
        });
    }
    showLoadingScreen() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const loadingScreen = yield this.modalController.create({
                component: src_app_loading_loading_page__WEBPACK_IMPORTED_MODULE_2__.LoadingPage
            });
            return yield loadingScreen.present();
        });
    }
    closeLoadingScreen() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.modalController.getTop().then(loader => {
                if (loader) {
                    loader.dismiss();
                }
            });
        });
    }
};
CriarConsultaPage.ctorParameters = () => [
    { type: _consulta_service__WEBPACK_IMPORTED_MODULE_5__.ConsultaService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_4__.UrlService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_shared_class_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService }
];
CriarConsultaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-criar-consulta',
        template: _raw_loader_criar_consulta_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_criar_consulta_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CriarConsultaPage);



/***/ }),

/***/ 2925:
/*!***********************************************************************!*\
  !*** ./src/app/page/consulta/criar-consulta/criar-consulta.page.scss ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".content {\n  margin-top: 13vh;\n  width: 100%;\n  height: 77vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.listaTipo {\n  --placeholder-opacity: 0.5;\n}\n\n.item-form {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.item-form-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyaWFyLWNvbnN1bHRhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBREY7O0FBSUE7RUFDRSwwQkFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBREYiLCJmaWxlIjoiY3JpYXItY29uc3VsdGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uY29udGVudHtcclxuICBtYXJnaW4tdG9wOiAxM3ZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNzd2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmxpc3RhVGlwb3tcclxuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuLml0ZW0tZm9ybXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaXRlbS1mb3JtLWNlbnRlcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 5797:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/consulta/criar-consulta/criar-consulta.page.html ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"content\">\n    <ion-grid style=\"width: 90%;\">\n      <ion-row>\n        <ion-col class=\"item-form\" size=\"12\">\n          <ion-label color=\"primary\">Especialidade: </ion-label>\n          <ion-select *ngIf=\"tiposConsultas && tiposConsultas.length > 0\" [(ngModel)]=\"tipoConsulta\" class=\"listaTipo\" placeholder=\"Selecione...\">\n            <ion-select-option *ngFor=\"let tipo of tiposConsultas\" [value]=\"tipo.id\">{{tipo.nome}}</ion-select-option>\n          </ion-select>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"item-form\" size=\"12\">\n          <ion-label color=\"primary\">Data da Consulta: </ion-label>\n          <ion-datetime displayFormat=\"DD / MMM / YYYY\" [(ngModel)]=\"dataConsulta\" placeholder=\"Selecione...\"></ion-datetime>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"item-form\" size=\"12\">\n          <ion-label color=\"primary\">Publico:</ion-label>\n          <ion-toggle [(ngModel)]=\"publico\"></ion-toggle>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"item-form\" size=\"12\">\n          <ion-textarea [(ngModel)]=\"resumo\" rows=\"4\" style=\"--padding-start: 0; --padding-end: 0\" placeholder=\"Resumo da consulta...\"></ion-textarea>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"item-form\" size=\"12\">\n          <ion-textarea [(ngModel)]=\"observacoes\" rows=\"4\" style=\"--padding-start: 0; --padding-end: 0\" placeholder=\"Escreva as suas observações...\"></ion-textarea>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"item-form-center\" size=\"12\">\n          <ion-button (click)=\"salvarConsulta()\" color=\"primary\" expand=\"block\">Salvar Consulta</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_consulta_criar-consulta_criar-consulta_module_ts.js.map