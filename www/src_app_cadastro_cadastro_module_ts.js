(self["webpackChunkpeppaciente"] = self["webpackChunkpeppaciente"] || []).push([["src_app_cadastro_cadastro_module_ts"],{

/***/ 4981:
/*!*****************************************************!*\
  !*** ./src/app/cadastro/cadastro-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CadastroPageRoutingModule": () => (/* binding */ CadastroPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _cadastro_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cadastro.page */ 4809);




const routes = [
    {
        path: '',
        component: _cadastro_page__WEBPACK_IMPORTED_MODULE_0__.CadastroPage
    }
];
let CadastroPageRoutingModule = class CadastroPageRoutingModule {
};
CadastroPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CadastroPageRoutingModule);



/***/ }),

/***/ 8379:
/*!*********************************************!*\
  !*** ./src/app/cadastro/cadastro.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CadastroPageModule": () => (/* binding */ CadastroPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _cadastro_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cadastro-routing.module */ 4981);
/* harmony import */ var _cadastro_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cadastro.page */ 4809);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _shared_class_url_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/class/url-service */ 2567);
/* harmony import */ var _cadastro_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cadastro.service */ 7725);










let CadastroPageModule = class CadastroPageModule {
};
CadastroPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _cadastro_routing_module__WEBPACK_IMPORTED_MODULE_0__.CadastroPageRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule
        ],
        declarations: [_cadastro_page__WEBPACK_IMPORTED_MODULE_1__.CadastroPage],
        providers: [
            _shared_class_url_service__WEBPACK_IMPORTED_MODULE_2__.UrlService,
            _cadastro_service__WEBPACK_IMPORTED_MODULE_3__.CadastroService
        ],
    })
], CadastroPageModule);



/***/ }),

/***/ 4809:
/*!*******************************************!*\
  !*** ./src/app/cadastro/cadastro.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CadastroPage": () => (/* binding */ CadastroPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_cadastro_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./cadastro.page.html */ 5525);
/* harmony import */ var _cadastro_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cadastro.page.scss */ 3583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _loading_loading_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loading/loading.page */ 8532);
/* harmony import */ var _cadastro_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cadastro.service */ 7725);









let CadastroPage = class CadastroPage {
    constructor(toastController, modalController, cadastroService, fb, router) {
        this.toastController = toastController;
        this.modalController = modalController;
        this.cadastroService = cadastroService;
        this.fb = fb;
        this.router = router;
        this.cadastroForm = this.fb.group({
            nome: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            rg: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            cpf: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            dataNasc: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            email: this.fb.control(''),
            endereco: this.fb.control(''),
            senha: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            confSenha: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])
        });
    }
    ngOnInit() {
    }
    cadastrar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (this.cadastroForm.get("senha").value != this.cadastroForm.get("confSenha").value) {
                this.toastController.create({
                    message: "As senhas não coincidem",
                    duration: 2000
                }).then(toast => {
                    toast.present();
                });
                return;
            }
            let request = {
                nome: this.cadastroForm.get("nome").value,
                rg: this.cadastroForm.get("rg").value,
                cpf: this.cadastroForm.get("cpf").value,
                email: this.cadastroForm.get("email").value,
                dataNasc: this.cadastroForm.get("dataNasc").value,
                endereco: this.cadastroForm.get("endereco").value,
                senha: this.cadastroForm.get("senha").value,
            };
            (yield this.cadastroService.cadastrar(request))
                .subscribe(() => {
                this.toastController.create({
                    message: "Cadastrado!",
                    duration: 2000
                }).then(toast => {
                    toast.present();
                    this.router.navigateByUrl("/login");
                });
            });
        });
    }
    showLoadingScreen() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const loadingScreen = yield this.modalController.create({
                component: _loading_loading_page__WEBPACK_IMPORTED_MODULE_2__.LoadingPage
            });
            return yield loadingScreen.present();
        });
    }
    closeLoadingScreen() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.modalController.getTop().then(loader => {
                if (loader) {
                    loader.dismiss();
                }
            });
        });
    }
};
CadastroPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _cadastro_service__WEBPACK_IMPORTED_MODULE_3__.CadastroService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
CadastroPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-cadastro',
        template: _raw_loader_cadastro_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_cadastro_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CadastroPage);



/***/ }),

/***/ 7725:
/*!**********************************************!*\
  !*** ./src/app/cadastro/cadastro.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CadastroService": () => (/* binding */ CadastroService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _shared_class_url_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/class/url-service */ 2567);



let CadastroService = class CadastroService {
    constructor(urlService) {
        this.urlService = urlService;
    }
    cadastrar(request) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.urlService.sendRequestPost("/Paciente/Cadastrar", JSON.stringify(request));
        });
    }
};
CadastroService.ctorParameters = () => [
    { type: _shared_class_url_service__WEBPACK_IMPORTED_MODULE_0__.UrlService }
];
CadastroService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], CadastroService);



/***/ }),

/***/ 3583:
/*!*********************************************!*\
  !*** ./src/app/cadastro/cadastro.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".content {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.button-area {\n  margin-top: 40px;\n}\n\n.row {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhZGFzdHJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7QUFDRiIsImZpbGUiOiJjYWRhc3Ryby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idXR0b24tYXJlYXtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcblxyXG4ucm93e1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 5525:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cadastro/cadastro.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <div style=\"display: flex; justify-content: space-between; padding-right: 10px;\">\n      <ion-title>Cadastro de Paciente</ion-title>\n      <ion-button routerLink=\"/login\" color=\"secondary\">Voltar</ion-button>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"content\">\n\n    <form [formGroup]=\"cadastroForm\" style=\"width: 100%; padding-left: 7vw; padding-right: 7vw;\">\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <input id=\"nome\" formControlName=\"nome\" type=\"text\" class=\"validate\">\n          <label for=\"nome\">Nome completo</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"input-field col s6\">\n          <input id=\"rg\" formControlName=\"rg\" type=\"text\" class=\"validate\">\n          <label for=\"rg\">RG</label>\n        </div>\n        <div class=\"input-field col s6\">\n          <input id=\"cpf\" formControlName=\"cpf\" type=\"text\" class=\"validate\">\n          <label for=\"cpf\">CPF</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <input id=\"dataNasc\" formControlName=\"dataNasc\" type=\"date\" class=\"validate\">\n          <label for=\"dataNasc\">Data de Nascimento</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <input id=\"email\" formControlName=\"email\" type=\"email\" class=\"validate\">\n          <label for=\"email\">Email</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <textarea id=\"endereco\" formControlName=\"endereco\" class=\"materialize-textarea\"></textarea>\n          <label for=\"endereco\">Endereço</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"input-field col s6\">\n          <input id=\"senha\" formControlName=\"senha\" type=\"password\" class=\"validate\">\n          <label for=\"senha\">Senha</label>\n        </div>\n        <div class=\"input-field col s6\">\n          <input id=\"confSenha\" formControlName=\"confSenha\" type=\"password\" class=\"validate\">\n          <label for=\"confSenha\">Confirme a senha</label>\n        </div>\n      </div>\n    </form>\n\n    <div class=\"row button-area\">\n        <ion-button (click)=\"cadastrar()\" expand=\"block\" >Finalizar cadastro</ion-button>\n    </div>\n\n  </div>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_cadastro_cadastro_module_ts.js.map