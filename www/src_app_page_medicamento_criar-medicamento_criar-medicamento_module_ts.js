(self["webpackChunkpeppaciente"] = self["webpackChunkpeppaciente"] || []).push([["src_app_page_medicamento_criar-medicamento_criar-medicamento_module_ts"],{

/***/ 8279:
/*!****************************************************************************************!*\
  !*** ./src/app/page/medicamento/criar-medicamento/criar-medicamento-routing.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CriarMedicamentoPageRoutingModule": () => (/* binding */ CriarMedicamentoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _criar_medicamento_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./criar-medicamento.page */ 4834);




const routes = [
    {
        path: '',
        component: _criar_medicamento_page__WEBPACK_IMPORTED_MODULE_0__.CriarMedicamentoPage
    }
];
let CriarMedicamentoPageRoutingModule = class CriarMedicamentoPageRoutingModule {
};
CriarMedicamentoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CriarMedicamentoPageRoutingModule);



/***/ }),

/***/ 4078:
/*!********************************************************************************!*\
  !*** ./src/app/page/medicamento/criar-medicamento/criar-medicamento.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CriarMedicamentoPageModule": () => (/* binding */ CriarMedicamentoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _criar_medicamento_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./criar-medicamento-routing.module */ 8279);
/* harmony import */ var _criar_medicamento_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./criar-medicamento.page */ 4834);
/* harmony import */ var _medicamento_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../medicamento.service */ 5418);








let CriarMedicamentoPageModule = class CriarMedicamentoPageModule {
};
CriarMedicamentoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _criar_medicamento_routing_module__WEBPACK_IMPORTED_MODULE_0__.CriarMedicamentoPageRoutingModule
        ],
        declarations: [_criar_medicamento_page__WEBPACK_IMPORTED_MODULE_1__.CriarMedicamentoPage],
        providers: [
            _medicamento_service__WEBPACK_IMPORTED_MODULE_2__.MedicamentoService
        ]
    })
], CriarMedicamentoPageModule);



/***/ }),

/***/ 4834:
/*!******************************************************************************!*\
  !*** ./src/app/page/medicamento/criar-medicamento/criar-medicamento.page.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CriarMedicamentoPage": () => (/* binding */ CriarMedicamentoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_criar_medicamento_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./criar-medicamento.page.html */ 2961);
/* harmony import */ var _criar_medicamento_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./criar-medicamento.page.scss */ 8304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_shared_class_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/class/storage.service */ 6578);
/* harmony import */ var _medicamento_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../medicamento.service */ 5418);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_loading_loading_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/loading/loading.page */ 8532);
/* harmony import */ var src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/class/url-service */ 2567);










let CriarMedicamentoPage = class CriarMedicamentoPage {
    constructor(medicamentoService, modalController, toastController, urlService, router, storage) {
        this.medicamentoService = medicamentoService;
        this.modalController = modalController;
        this.toastController = toastController;
        this.urlService = urlService;
        this.router = router;
        this.storage = storage;
        this.router.events.subscribe((evt) => {
            if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd && this.router.url == "/page/criar-medicamento") {
                this.pageEnter();
            }
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () { });
    }
    pageEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.user = yield this.storage.get("user");
            let token = yield this.storage.get("token");
            yield this.urlService.validateToken(token);
        });
    }
    salvarMedicamento() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.showLoadingScreen()
                .then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                let request = {
                    idPaciente: this.user.id,
                    nome: this.nome,
                    numQuantidade: this.numQuantidade ? Number(this.numQuantidade) : 0,
                    tipoQuantidade: this.tipoQuantidade,
                    outraQuantidade: this.outraQuantidade,
                    numIntervalo: this.numIntervalo ? Number(this.numIntervalo) : 0,
                    tipoIntervalo: this.tipoIntervalo,
                    outroIntervalo: this.outroIntervalo,
                    publico: this.publico,
                    dataInicio: this.dataInicio,
                    dataTermino: this.dataTermino,
                    usoContinuo: this.usoContinuo
                };
                this.nome = undefined;
                this.numQuantidade = undefined;
                this.tipoQuantidade = undefined;
                this.outraQuantidade = undefined;
                this.numIntervalo = undefined;
                this.tipoIntervalo = undefined;
                this.outroIntervalo = undefined;
                this.usoContinuo = undefined;
                this.dataInicio = undefined;
                this.dataTermino = undefined;
                this.publico = undefined;
                (yield this.medicamentoService.salvarMedicamento(request))
                    .subscribe(() => {
                    this.router.navigateByUrl("/page/medicamentos");
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
                component: src_app_loading_loading_page__WEBPACK_IMPORTED_MODULE_4__.LoadingPage
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
CriarMedicamentoPage.ctorParameters = () => [
    { type: _medicamento_service__WEBPACK_IMPORTED_MODULE_3__.MedicamentoService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_5__.UrlService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_shared_class_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService }
];
CriarMedicamentoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-criar-medicamento',
        template: _raw_loader_criar_medicamento_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_criar_medicamento_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CriarMedicamentoPage);



/***/ }),

/***/ 8304:
/*!********************************************************************************!*\
  !*** ./src/app/page/medicamento/criar-medicamento/criar-medicamento.page.scss ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".content {\n  margin-top: 13vh;\n  width: 100%;\n  height: 77vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.listaTipo {\n  --placeholder-opacity: 0.5;\n}\n\n.item-form {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.input-text-custom {\n  height: 30px !important;\n  max-height: 30px !important;\n}\n\n.input-text-right {\n  text-align: right;\n}\n\n.item-form-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyaWFyLW1lZGljYW1lbnRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwwQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0VBQ0EsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGIiwiZmlsZSI6ImNyaWFyLW1lZGljYW1lbnRvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50e1xyXG4gIG1hcmdpbi10b3A6IDEzdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA3N3ZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ubGlzdGFUaXBve1xyXG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG4uaXRlbS1mb3Jte1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbnB1dC10ZXh0LWN1c3RvbXtcclxuICBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcclxuICBtYXgtaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbnB1dC10ZXh0LXJpZ2h0e1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uaXRlbS1mb3JtLWNlbnRlcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 2961:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/medicamento/criar-medicamento/criar-medicamento.page.html ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"content\">\n    <ion-grid style=\"width: 90%;\">\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-label color=\"primary\">Nome: </ion-label>\n              <ion-input  [(ngModel)]=\"nome\" class=\"input-text-custom\" size=\"1\" type=\"text\"></ion-input>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-row>\n            <ion-col class=\"item-form\" size=\"12\">\n              <ion-label color=\"primary\">Quantidade: </ion-label>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"item-form\" size=\"3\">\n              <ion-input  [(ngModel)]=\"numQuantidade\" [disabled]=\"tipoQuantidade == 'Outro'\" class=\"input-text-right input-text-custom\" type=\"number\"></ion-input>\n            </ion-col>\n            <ion-col class=\"item-form\" size=\"9\">\n              <ion-select [(ngModel)]=\"tipoQuantidade\" class=\"listaTipo\" placeholder=\"Selecione...\">\n                <ion-select-option>comprimido(s)</ion-select-option>\n                <ion-select-option>Mg</ion-select-option>\n                <ion-select-option>G</ion-select-option>\n                <ion-select-option>gota(s)</ion-select-option>\n                <ion-select-option>ML</ion-select-option>\n                <ion-select-option>L</ion-select-option>\n                <ion-select-option>Outro</ion-select-option>\n              </ion-select>\n            </ion-col>\n          </ion-row>\n          <ion-row *ngIf=\"tipoQuantidade == 'Outro'\">\n            <ion-col class=\"item-form\" size=\"12\">\n              <ion-input  [(ngModel)]=\"outraQuantidade\" type=\"text\" class=\"input-text-custom\" placeholder=\"Digite a medida...\"></ion-input>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-row>\n            <ion-col class=\"item-form\" size=\"12\">\n              <ion-label color=\"primary\">Intervalo: </ion-label>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"item-form\" size=\"3\">\n              <ion-input [(ngModel)]=\"numIntervalo\" [disabled]=\"tipoIntervalo == 'Outro'\" class=\"input-text-right input-text-custom\" type=\"number\"></ion-input>\n            </ion-col>\n            <ion-col class=\"item-form\" size=\"9\">\n              <ion-select [(ngModel)]=\"tipoIntervalo\" class=\"listaTipo\" placeholder=\"Selecione...\">\n                <ion-select-option>Minuto(s)</ion-select-option>\n                <ion-select-option>Hora(s)</ion-select-option>\n                <ion-select-option>Dia(s)</ion-select-option>\n                <ion-select-option>Semana(s)</ion-select-option>\n                <ion-select-option>Mes(es)</ion-select-option>\n                <ion-select-option>Outro</ion-select-option>\n              </ion-select>\n            </ion-col>\n          </ion-row>\n          <ion-row *ngIf=\"tipoIntervalo == 'Outro'\">\n            <ion-col class=\"item-form\" size=\"12\">\n              <ion-input  [(ngModel)]=\"outroIntervalo\" type=\"text\" class=\"input-text-custom\" placeholder=\"Digite o intervalo...\"></ion-input>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"item-form\" size=\"12\">\n          <ion-row>\n            <ion-col class=\"item-form\" size=\"12\">\n              <ion-checkbox [(ngModel)]=\"publico\" color=\"primary\"></ion-checkbox>\n              <ion-label style=\"margin-left: 15px;\" color=\"primary\">Publico</ion-label>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"item-form\" size=\"12\">\n          <ion-row>\n            <ion-col class=\"item-form\" size=\"12\">\n              <ion-checkbox [(ngModel)]=\"usoContinuo\" color=\"primary\"></ion-checkbox>\n              <ion-label style=\"margin-left: 15px;\" color=\"primary\">Uso contínuo</ion-label>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"item-form\" size=\"12\">\n          <ion-label color=\"primary\">Data de Inicio: </ion-label>\n          <ion-datetime displayFormat=\"DD / MMM / YYYY\" [(ngModel)]=\"dataInicio\" placeholder=\"Selecione...\"></ion-datetime>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"!usoContinuo\">\n        <ion-col class=\"item-form\" size=\"12\">\n          <ion-label color=\"primary\">Data de Termino: </ion-label>\n          <ion-datetime displayFormat=\"DD / MMM / YYYY\" [(ngModel)]=\"dataTermino\" placeholder=\"Selecione...\"></ion-datetime>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"item-form-center\" size=\"12\">\n          <ion-button (click)=\"salvarMedicamento()\" color=\"primary\" expand=\"block\">Salvar Medicamento</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_medicamento_criar-medicamento_criar-medicamento_module_ts.js.map