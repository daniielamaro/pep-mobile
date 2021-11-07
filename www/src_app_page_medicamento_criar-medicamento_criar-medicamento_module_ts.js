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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_shared_class_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/class/storage.service */ 6578);
/* harmony import */ var _medicamento_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../medicamento.service */ 5418);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_loading_loading_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/loading/loading.page */ 8532);
/* harmony import */ var src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/class/url-service */ 2567);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 9075);











let CriarMedicamentoPage = class CriarMedicamentoPage {
    constructor(medicamentoService, modalController, toastController, urlService, dom, router, storage) {
        this.medicamentoService = medicamentoService;
        this.modalController = modalController;
        this.toastController = toastController;
        this.urlService = urlService;
        this.dom = dom;
        this.router = router;
        this.storage = storage;
        this.temReceita = false;
        this.receita = null;
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
            this.nome = undefined;
            this.numQuantidade = undefined;
            this.tipoQuantidade = undefined;
            this.outraQuantidade = undefined;
            this.numIntervalo = undefined;
            this.tipoIntervalo = undefined;
            this.outroIntervalo = undefined;
            this.temReceita = undefined;
            this.usoContinuo = undefined;
            this.dataInicio = undefined;
            this.dataTermino = undefined;
            this.publico = undefined;
            this.receita = undefined;
        });
    }
    fileChange(e) {
        let arquivoPre = e.target.files[0];
        if (arquivoPre) {
            let reader = new FileReader();
            reader.readAsDataURL(arquivoPre);
            reader.onload = () => {
                this.receita = {
                    nome: arquivoPre.name,
                    tipo: arquivoPre.type,
                    binario: reader.result.toString().split(';')[1].split(',')[1]
                };
            };
        }
        else {
            this.receita = undefined;
        }
    }
    formularioValido() {
        if (!this.nome || !this.nome.trim())
            return false;
        else if (!this.numQuantidade && this.tipoQuantidade != 'Outro')
            return false;
        else if (!this.tipoQuantidade || !this.tipoQuantidade.trim())
            return false;
        else if (!this.outraQuantidade && this.tipoQuantidade == 'Outro')
            return false;
        else if (!this.numIntervalo && this.tipoIntervalo != 'Outro')
            return false;
        else if (!this.tipoIntervalo || !this.tipoIntervalo.trim())
            return false;
        else if (!this.outroIntervalo && this.tipoIntervalo == 'Outro')
            return false;
        else if (this.temReceita && !this.receita)
            return false;
        else if (!this.dataInicio || !this.dataInicio.trim())
            return false;
        else if ((!this.dataTermino || !this.dataTermino.trim()) && !this.usoContinuo)
            return false;
        return true;
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
                    tipoCadastro: this.temReceita ? 2 : 0,
                    receita: this.receita,
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
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.DomSanitizer },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_shared_class_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService }
];
CriarMedicamentoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".content {\n  margin-top: 13vh;\n  width: 100%;\n  height: 77vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n}\n\n.listaTipo {\n  --placeholder-opacity: 0.5;\n}\n\n.item-form {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.input-text-custom {\n  height: 30px !important;\n  max-height: 30px !important;\n}\n\n.input-text-right {\n  text-align: right;\n}\n\n.item-form-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.item-inner {\n  border-style: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyaWFyLW1lZGljYW1lbnRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwwQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0VBQ0EsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsNkJBQUE7QUFDRiIsImZpbGUiOiJjcmlhci1tZWRpY2FtZW50by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudHtcclxuICBtYXJnaW4tdG9wOiAxM3ZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNzd2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi5saXN0YVRpcG97XHJcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAwLjU7XHJcbn1cclxuXHJcbi5pdGVtLWZvcm17XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmlucHV0LXRleHQtY3VzdG9te1xyXG4gIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xyXG4gIG1heC1oZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlucHV0LXRleHQtcmlnaHR7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5pdGVtLWZvcm0tY2VudGVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLml0ZW0taW5uZXJ7XHJcbiAgYm9yZGVyLXN0eWxlOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"content\">\n    <ion-grid style=\"width: 90%;\">\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-label color=\"primary\">Nome do medicamento: </ion-label>\n              <ion-input  [(ngModel)]=\"nome\" class=\"input-text-custom\" size=\"1\" type=\"text\"></ion-input>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-row>\n            <ion-col class=\"item-form\" size=\"12\">\n              <ion-label color=\"primary\">Quantidade: </ion-label>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"item-form\" size=\"3\">\n              <ion-input  [(ngModel)]=\"numQuantidade\" [disabled]=\"tipoQuantidade == 'Outro'\" class=\"input-text-right input-text-custom\" type=\"number\"></ion-input>\n            </ion-col>\n            <ion-col class=\"item-form\" size=\"9\">\n              <ion-select [(ngModel)]=\"tipoQuantidade\" class=\"listaTipo\" placeholder=\"Selecione...\">\n                <ion-select-option>comprimido(s)</ion-select-option>\n                <ion-select-option>Mg</ion-select-option>\n                <ion-select-option>G</ion-select-option>\n                <ion-select-option>gota(s)</ion-select-option>\n                <ion-select-option>ML</ion-select-option>\n                <ion-select-option>L</ion-select-option>\n                <ion-select-option>Outro</ion-select-option>\n              </ion-select>\n            </ion-col>\n          </ion-row>\n          <ion-row *ngIf=\"tipoQuantidade == 'Outro'\">\n            <ion-col class=\"item-form\" size=\"12\">\n              <ion-input  [(ngModel)]=\"outraQuantidade\" type=\"text\" class=\"input-text-custom\" placeholder=\"Digite a medida...\"></ion-input>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-row>\n            <ion-col class=\"item-form\" size=\"12\">\n              <ion-label color=\"primary\">Intervalo: </ion-label>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"item-form\" size=\"3\">\n              <ion-input [(ngModel)]=\"numIntervalo\" [disabled]=\"tipoIntervalo == 'Outro'\" class=\"input-text-right input-text-custom\" type=\"number\"></ion-input>\n            </ion-col>\n            <ion-col class=\"item-form\" size=\"9\">\n              <ion-select [(ngModel)]=\"tipoIntervalo\" class=\"listaTipo\" placeholder=\"Selecione...\">\n                <ion-select-option>Minuto(s)</ion-select-option>\n                <ion-select-option>Hora(s)</ion-select-option>\n                <ion-select-option>Dia(s)</ion-select-option>\n                <ion-select-option>Semana(s)</ion-select-option>\n                <ion-select-option>Mes(es)</ion-select-option>\n                <ion-select-option>Outro</ion-select-option>\n              </ion-select>\n            </ion-col>\n          </ion-row>\n          <ion-row *ngIf=\"tipoIntervalo == 'Outro'\">\n            <ion-col class=\"item-form\" size=\"12\">\n              <ion-input  [(ngModel)]=\"outroIntervalo\" type=\"text\" class=\"input-text-custom\" placeholder=\"Digite o intervalo...\"></ion-input>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"item-form\" size=\"12\">\n          <ion-radio-group [(ngModel)]=\"temReceita\">\n            <ion-list-header style=\"padding-left: 5px;\">\n              <ion-label color=\"primary\">Este medicamento tem receita?</ion-label>\n            </ion-list-header>\n            <div style=\"display: flex;\">\n              <ion-item style=\"--border-style: none;\">\n                <ion-label>Sim</ion-label>\n                <ion-radio slot=\"start\" [value]=\"true\"></ion-radio>\n              </ion-item>\n              <ion-item style=\"--border-style: none;\">\n                <ion-label>Não</ion-label>\n                <ion-radio slot=\"start\" [value]=\"false\"></ion-radio>\n              </ion-item>\n            </div>\n          </ion-radio-group>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"temReceita\">\n        <ion-col class=\"item-form\" size=\"12\">\n          <ion-item style=\"--border-style: none; --padding-start: 0px;\">\n            <ion-label color=\"primary\" style=\"font-size: 18px !important;\" position=\"stacked\">Receita:</ion-label>\n            <ion-label *ngIf=\"!receita\" color=\"secondary\" style=\"font-size: 15px !important;\" position=\"stacked\">O arquivo precisa estar no formato PDF</ion-label>\n            <ion-input (change)=\"fileChange($event)\" accept=\"application/pdf\" type=\"file\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"item-form\" size=\"12\">\n          <ion-row>\n            <ion-col class=\"item-form\" size=\"12\">\n              <ion-checkbox [(ngModel)]=\"publico\" color=\"primary\"></ion-checkbox>\n              <ion-label style=\"margin-left: 15px;\" color=\"primary\">Publico</ion-label>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"item-form\" size=\"12\">\n          <ion-row>\n            <ion-col class=\"item-form\" size=\"12\">\n              <ion-checkbox [(ngModel)]=\"usoContinuo\" color=\"primary\"></ion-checkbox>\n              <ion-label style=\"margin-left: 15px;\" color=\"primary\">Uso contínuo</ion-label>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"item-form\" size=\"12\">\n          <ion-label color=\"primary\">Data de Inicio: </ion-label>\n          <ion-datetime displayFormat=\"DD / MMM / YYYY\" [(ngModel)]=\"dataInicio\" placeholder=\"Selecione...\"></ion-datetime>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"!usoContinuo\">\n        <ion-col class=\"item-form\" size=\"12\">\n          <ion-label color=\"primary\">Data de Termino: </ion-label>\n          <ion-datetime displayFormat=\"DD / MMM / YYYY\" [(ngModel)]=\"dataTermino\" placeholder=\"Selecione...\"></ion-datetime>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"item-form-center\" size=\"12\">\n          <ion-button (click)=\"salvarMedicamento()\" [disabled]=\"!formularioValido()\" color=\"primary\" expand=\"block\">Salvar Medicamento</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_medicamento_criar-medicamento_criar-medicamento_module_ts.js.map