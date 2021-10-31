(self["webpackChunkpeppaciente"] = self["webpackChunkpeppaciente"] || []).push([["src_app_page_criar-exame_criar-exame_module_ts"],{

/***/ 8667:
/*!****************************************************************!*\
  !*** ./src/app/page/criar-exame/criar-exame-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CriarExamePageRoutingModule": () => (/* binding */ CriarExamePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _criar_exame_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./criar-exame.page */ 8268);




const routes = [
    {
        path: '',
        component: _criar_exame_page__WEBPACK_IMPORTED_MODULE_0__.CriarExamePage
    }
];
let CriarExamePageRoutingModule = class CriarExamePageRoutingModule {
};
CriarExamePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CriarExamePageRoutingModule);



/***/ }),

/***/ 4475:
/*!********************************************************!*\
  !*** ./src/app/page/criar-exame/criar-exame.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CriarExamePageModule": () => (/* binding */ CriarExamePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _criar_exame_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./criar-exame-routing.module */ 8667);
/* harmony import */ var _criar_exame_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./criar-exame.page */ 8268);
/* harmony import */ var _exame_exame_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../exame/exame.service */ 2997);








let CriarExamePageModule = class CriarExamePageModule {
};
CriarExamePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _criar_exame_routing_module__WEBPACK_IMPORTED_MODULE_0__.CriarExamePageRoutingModule
        ],
        declarations: [_criar_exame_page__WEBPACK_IMPORTED_MODULE_1__.CriarExamePage],
        providers: [
            _exame_exame_service__WEBPACK_IMPORTED_MODULE_2__.ExameService
        ]
    })
], CriarExamePageModule);



/***/ }),

/***/ 8268:
/*!******************************************************!*\
  !*** ./src/app/page/criar-exame/criar-exame.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CriarExamePage": () => (/* binding */ CriarExamePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_criar_exame_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./criar-exame.page.html */ 910);
/* harmony import */ var _criar_exame_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./criar-exame.page.scss */ 4502);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_shared_class_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/class/storage.service */ 6578);
/* harmony import */ var _exame_exame_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../exame/exame.service */ 2997);







let CriarExamePage = class CriarExamePage {
    constructor(exameService, router, storage) {
        this.exameService = exameService;
        this.router = router;
        this.storage = storage;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.getTiposExames();
            this.user = yield this.storage.get("user");
        });
    }
    getTiposExames() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
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
    fileChange(e) {
        let arquivoPre = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(arquivoPre);
        reader.onload = () => {
            this.arquivo = {
                name: arquivoPre.name,
                type: arquivoPre.type,
                binary: reader.result.toString().split(';')[1].split(',')[1]
            };
        };
    }
    salvarExame() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let request = {
                arquivo: this.arquivo == undefined ? null : {
                    nome: this.arquivo.name,
                    tipo: this.arquivo.type,
                    binario: this.arquivo.binary
                },
                dataRealizacao: this.dataExame.split("T")[0],
                idPaciente: this.user.id,
                idTipoExame: this.tipoExame,
                publico: this.publico,
                observacoes: this.observacoes
            };
            this.arquivo = undefined;
            this.dataExame = undefined;
            this.tipoExame = undefined;
            this.publico = false;
            this.observacoes = undefined;
            (yield this.exameService.salvarExame(request))
                .subscribe(() => {
                this.router.navigateByUrl("/page/exame");
            }, error => {
                if (error.status == 401 || error.status == 403) {
                    this.storage.remove("user");
                    this.router.navigateByUrl("");
                }
            });
        });
    }
};
CriarExamePage.ctorParameters = () => [
    { type: _exame_exame_service__WEBPACK_IMPORTED_MODULE_3__.ExameService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_shared_class_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService }
];
CriarExamePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-criar-exame',
        template: _raw_loader_criar_exame_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_criar_exame_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CriarExamePage);



/***/ }),

/***/ 4502:
/*!********************************************************!*\
  !*** ./src/app/page/criar-exame/criar-exame.page.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".content {\n  margin-top: 13vh;\n  width: 100%;\n  height: 77vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.listaTipo {\n  --placeholder-opacity: 0.5;\n}\n\n.item-form {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.item-form-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyaWFyLWV4YW1lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwwQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0YiLCJmaWxlIjoiY3JpYXItZXhhbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnR7XHJcbiAgbWFyZ2luLXRvcDogMTN2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDc3dmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5saXN0YVRpcG97XHJcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAwLjU7XHJcbn1cclxuXHJcbi5pdGVtLWZvcm17XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLml0ZW0tZm9ybS1jZW50ZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 910:
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/criar-exame/criar-exame.page.html ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"content\">\n    <ion-grid style=\"width: 90%;\">\n      <ion-row>\n        <ion-col class=\"item-form\" size=\"12\">\n          <ion-label color=\"primary\">Tipo de Exame: </ion-label>\n          <ion-select *ngIf=\"tiposExames && tiposExames.length > 0\" [(ngModel)]=\"tipoExame\" class=\"listaTipo\" placeholder=\"Selecione...\">\n            <ion-select-option *ngFor=\"let tipo of tiposExames\" [value]=\"tipo.id\">{{tipo.nome}}</ion-select-option>\n          </ion-select>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"item-form\" size=\"12\">\n          <ion-label color=\"primary\">Data do Exame: </ion-label>\n          <ion-datetime displayFormat=\"DD / MMM / YYYY\" [(ngModel)]=\"dataExame\" placeholder=\"Selecione...\"></ion-datetime>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"item-form\" size=\"12\">\n          <ion-label color=\"primary\">Publico:</ion-label>\n          <ion-toggle [(ngModel)]=\"publico\"></ion-toggle>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"item-form\" size=\"12\">\n          <ion-label color=\"primary\">Exame:</ion-label>\n          <ion-input (change)=\"fileChange($event)\" type=\"file\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"item-form\" size=\"12\">\n          <ion-textarea [(ngModel)]=\"observacoes\" rows=\"7\" style=\"--padding-start: 0; --padding-end: 0\" placeholder=\"Escreva as suas observações...\"></ion-textarea>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"item-form-center\" size=\"12\">\n          <ion-button (click)=\"salvarExame()\" color=\"primary\" expand=\"block\">Salvar Exame</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_criar-exame_criar-exame_module_ts.js.map