(self["webpackChunkpeppaciente"] = self["webpackChunkpeppaciente"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _shared_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/auth/auth.guard */ 5337);




const routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'page',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_page_page_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./page/page.module */ 5115)).then(m => m.PagePageModule),
        canActivate: [_shared_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 107)).then(m => m.LoginPageModule)
    },
    {
        path: 'cadastro',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_cadastro_cadastro_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./cadastro/cadastro.module */ 8379)).then(m => m.CadastroPageModule)
    },
    {
        path: 'medicamento-view',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./modal/medicamento-view/medicamento-view.module */ 5476)).then(m => m.MedicamentoViewPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 1106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 3069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let AppComponent = class AppComponent {
    constructor() {
    }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/storage */ 1628);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic/storage-angular */ 4925);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _shared_class_url_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/class/url-service */ 2567);
/* harmony import */ var _shared_class_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/class/storage.service */ 6578);
/* harmony import */ var _shared_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/auth/auth.guard */ 5337);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _loading_loading_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loading/loading.module */ 3416);
/* harmony import */ var _modal_fotoperfil_fotoperfil_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modal/fotoperfil/fotoperfil.module */ 9737);
/* harmony import */ var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/location-accuracy/ngx */ 6030);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 7152);
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ 9315);
/* harmony import */ var _modal_endereco_atual_endereco_atual_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modal/endereco-atual/endereco-atual.module */ 9102);
/* harmony import */ var _modal_endereco_confirmacao_endereco_confirmacao_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modal/endereco-confirmacao/endereco-confirmacao.module */ 9462);
/* harmony import */ var _modal_medicamento_view_medicamento_view_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modal/medicamento-view/medicamento-view.module */ 5476);
/* harmony import */ var _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/document-viewer/ngx */ 1663);























let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonicModule.forRoot(),
            _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_19__.IonicStorageModule.forRoot({
                name: '__mydb',
                driverOrder: [_ionic_storage__WEBPACK_IMPORTED_MODULE_0__.Drivers.IndexedDB, _ionic_storage__WEBPACK_IMPORTED_MODULE_0__.Drivers.LocalStorage]
            }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__.ReactiveFormsModule,
            _loading_loading_module__WEBPACK_IMPORTED_MODULE_6__.LoadingPageModule,
            _modal_fotoperfil_fotoperfil_module__WEBPACK_IMPORTED_MODULE_7__.FotoperfilPageModule,
            _modal_endereco_atual_endereco_atual_module__WEBPACK_IMPORTED_MODULE_11__.EnderecoAtualPageModule,
            _modal_endereco_confirmacao_endereco_confirmacao_module__WEBPACK_IMPORTED_MODULE_12__.EnderecoConfirmacaoPageModule,
            _modal_medicamento_view_medicamento_view_module__WEBPACK_IMPORTED_MODULE_13__.MedicamentoViewPageModule
        ],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_22__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonicRouteStrategy },
            _shared_class_url_service__WEBPACK_IMPORTED_MODULE_3__.UrlService,
            _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_8__.LocationAccuracy,
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__.Geolocation,
            _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_10__.AndroidPermissions,
            _shared_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__.AuthGuard,
            _shared_class_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService,
            _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_14__.DocumentViewer
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 1571:
/*!***************************************************!*\
  !*** ./src/app/loading/loading-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingPageRoutingModule": () => (/* binding */ LoadingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _loading_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading.page */ 8532);




const routes = [
    {
        path: '',
        component: _loading_page__WEBPACK_IMPORTED_MODULE_0__.LoadingPage
    }
];
let LoadingPageRoutingModule = class LoadingPageRoutingModule {
};
LoadingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoadingPageRoutingModule);



/***/ }),

/***/ 3416:
/*!*******************************************!*\
  !*** ./src/app/loading/loading.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingPageModule": () => (/* binding */ LoadingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _loading_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading-routing.module */ 1571);
/* harmony import */ var _loading_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading.page */ 8532);







let LoadingPageModule = class LoadingPageModule {
};
LoadingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _loading_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoadingPageRoutingModule
        ],
        declarations: [_loading_page__WEBPACK_IMPORTED_MODULE_1__.LoadingPage]
    })
], LoadingPageModule);



/***/ }),

/***/ 8532:
/*!*****************************************!*\
  !*** ./src/app/loading/loading.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingPage": () => (/* binding */ LoadingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_loading_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./loading.page.html */ 9897);
/* harmony import */ var _loading_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading.page.scss */ 90);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let LoadingPage = class LoadingPage {
    constructor() { }
    ngOnInit() {
    }
};
LoadingPage.ctorParameters = () => [];
LoadingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-loading',
        template: _raw_loader_loading_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_loading_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoadingPage);



/***/ }),

/***/ 2977:
/*!***********************************************************************!*\
  !*** ./src/app/modal/endereco-atual/endereco-atual-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnderecoAtualPageRoutingModule": () => (/* binding */ EnderecoAtualPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _endereco_atual_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./endereco-atual.page */ 4136);




const routes = [
    {
        path: '',
        component: _endereco_atual_page__WEBPACK_IMPORTED_MODULE_0__.EnderecoAtualPage
    }
];
let EnderecoAtualPageRoutingModule = class EnderecoAtualPageRoutingModule {
};
EnderecoAtualPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EnderecoAtualPageRoutingModule);



/***/ }),

/***/ 9102:
/*!***************************************************************!*\
  !*** ./src/app/modal/endereco-atual/endereco-atual.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnderecoAtualPageModule": () => (/* binding */ EnderecoAtualPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _endereco_atual_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./endereco-atual-routing.module */ 2977);
/* harmony import */ var _endereco_atual_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./endereco-atual.page */ 4136);
/* harmony import */ var src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/class/url-service */ 2567);
/* harmony import */ var _endereco_atual_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./endereco-atual.service */ 9371);









let EnderecoAtualPageModule = class EnderecoAtualPageModule {
};
EnderecoAtualPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _endereco_atual_routing_module__WEBPACK_IMPORTED_MODULE_0__.EnderecoAtualPageRoutingModule
        ],
        declarations: [_endereco_atual_page__WEBPACK_IMPORTED_MODULE_1__.EnderecoAtualPage],
        providers: [
            _endereco_atual_service__WEBPACK_IMPORTED_MODULE_3__.EnderecoAtualService,
            src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_2__.UrlService
        ]
    })
], EnderecoAtualPageModule);



/***/ }),

/***/ 4136:
/*!*************************************************************!*\
  !*** ./src/app/modal/endereco-atual/endereco-atual.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnderecoAtualPage": () => (/* binding */ EnderecoAtualPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_endereco_atual_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./endereco-atual.page.html */ 3382);
/* harmony import */ var _endereco_atual_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./endereco-atual.page.scss */ 3464);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _endereco_atual_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./endereco-atual.service */ 9371);






let EnderecoAtualPage = class EnderecoAtualPage {
    constructor(enderecoAtualService, modalController) {
        this.enderecoAtualService = enderecoAtualService;
        this.modalController = modalController;
        this.editandoEnd = false;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = true;
            (yield this.enderecoAtualService.getEnderecoByCoords(this.coords))
                .subscribe((resp) => {
                this.loading = false;
                if (resp.results.length > 0) {
                    this.endereco = resp.results[0].formatted_address;
                }
            });
        });
    }
    editarEndereco() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = true;
            (yield this.enderecoAtualService.getEnderecoByAddress(this.enderecoPre))
                .subscribe((resp) => {
                this.loading = false;
                if (resp.results.length > 0) {
                    this.endereco = resp.results[0].formatted_address;
                    let location = resp.results[0].geometry.location;
                    this.coords = location.lat + "," + location.lng;
                    this.editandoEnd = false;
                }
            });
        });
    }
    closeModal(coords = null) {
        this.modalController.dismiss(coords);
    }
};
EnderecoAtualPage.ctorParameters = () => [
    { type: _endereco_atual_service__WEBPACK_IMPORTED_MODULE_2__.EnderecoAtualService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController }
];
EnderecoAtualPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-endereco-atual',
        template: _raw_loader_endereco_atual_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_endereco_atual_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EnderecoAtualPage);



/***/ }),

/***/ 9371:
/*!****************************************************************!*\
  !*** ./src/app/modal/endereco-atual/endereco-atual.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnderecoAtualService": () => (/* binding */ EnderecoAtualService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/class/url-service */ 2567);



let EnderecoAtualService = class EnderecoAtualService {
    constructor(urlService) {
        this.urlService = urlService;
    }
    getEnderecoByCoords(coords) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.urlService.sendRequestPostCustom("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + coords + "&result_type=street_address&language=pt-BR&key=" + src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_0__.UrlService.GMKey);
        });
    }
    getEnderecoByAddress(address) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.urlService.sendRequestPostCustom("https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&result_type=street_address&language=pt-BR&key=" + src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_0__.UrlService.GMKey);
        });
    }
};
EnderecoAtualService.ctorParameters = () => [
    { type: src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_0__.UrlService }
];
EnderecoAtualService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], EnderecoAtualService);



/***/ }),

/***/ 6148:
/*!***********************************************************************************!*\
  !*** ./src/app/modal/endereco-confirmacao/endereco-confirmacao-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnderecoConfirmacaoPageRoutingModule": () => (/* binding */ EnderecoConfirmacaoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _endereco_confirmacao_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./endereco-confirmacao.page */ 1170);




const routes = [
    {
        path: '',
        component: _endereco_confirmacao_page__WEBPACK_IMPORTED_MODULE_0__.EnderecoConfirmacaoPage
    }
];
let EnderecoConfirmacaoPageRoutingModule = class EnderecoConfirmacaoPageRoutingModule {
};
EnderecoConfirmacaoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EnderecoConfirmacaoPageRoutingModule);



/***/ }),

/***/ 9462:
/*!***************************************************************************!*\
  !*** ./src/app/modal/endereco-confirmacao/endereco-confirmacao.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnderecoConfirmacaoPageModule": () => (/* binding */ EnderecoConfirmacaoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _endereco_confirmacao_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./endereco-confirmacao-routing.module */ 6148);
/* harmony import */ var _endereco_confirmacao_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./endereco-confirmacao.page */ 1170);
/* harmony import */ var src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/class/url-service */ 2567);
/* harmony import */ var _endereco_confirmacao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./endereco-confirmacao.service */ 2967);









let EnderecoConfirmacaoPageModule = class EnderecoConfirmacaoPageModule {
};
EnderecoConfirmacaoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _endereco_confirmacao_routing_module__WEBPACK_IMPORTED_MODULE_0__.EnderecoConfirmacaoPageRoutingModule
        ],
        declarations: [_endereco_confirmacao_page__WEBPACK_IMPORTED_MODULE_1__.EnderecoConfirmacaoPage],
        providers: [
            _endereco_confirmacao_service__WEBPACK_IMPORTED_MODULE_3__.EnderecoConfirmacaoService,
            src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_2__.UrlService
        ]
    })
], EnderecoConfirmacaoPageModule);



/***/ }),

/***/ 1170:
/*!*************************************************************************!*\
  !*** ./src/app/modal/endereco-confirmacao/endereco-confirmacao.page.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnderecoConfirmacaoPage": () => (/* binding */ EnderecoConfirmacaoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_endereco_confirmacao_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./endereco-confirmacao.page.html */ 6017);
/* harmony import */ var _endereco_confirmacao_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./endereco-confirmacao.page.scss */ 2395);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _endereco_confirmacao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./endereco-confirmacao.service */ 2967);






let EnderecoConfirmacaoPage = class EnderecoConfirmacaoPage {
    constructor(enderecoConfirmacaoService, plt, modalController) {
        this.enderecoConfirmacaoService = enderecoConfirmacaoService;
        this.plt = plt;
        this.modalController = modalController;
        this.plataformas = this.plt.platforms();
    }
    ngOnInit() {
        console.log(this.item);
    }
    closeModal() {
        this.modalController.dismiss();
    }
    abrirClinica(clinica) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            (yield this.enderecoConfirmacaoService.getEnderecoByAddress(clinica.endereco.logradouro +
                (clinica.endereco.numero ? ", " + clinica.endereco.numero : ", S/N") +
                " - " + clinica.endereco.bairro))
                .subscribe((resp) => {
                if (resp.results.length > 0) {
                    let location = resp.results[0].geometry.location;
                    let coords = location.lat + "," + location.lng;
                    let a = document.createElement("a");
                    if (this.plataformas.includes("cordova")) {
                        a.href = "geo:?q=" + coords;
                        a.target = "_system";
                    }
                    else {
                        a.href = "http://maps.google.com/maps?q=" + coords + "&ll=" + coords + "&z=18";
                        a.target = "_blank";
                    }
                    document.body.appendChild(a);
                    a.click();
                }
            });
        });
    }
    formatarDistancia(distancia) {
        if (distancia < 1000)
            return distancia + (distancia > 1 ? " metros" : " metro");
        else
            return (distancia / 1000).toFixed(1) + " Km";
    }
    formatarTempo(tempo) {
        let dias = Math.floor(tempo / 86400);
        let horas = Math.floor((tempo - (dias * 86400)) / 3600);
        let minutos = Math.floor((tempo - (dias * 86400) - (horas * 3600)) / 60);
        let segundos = (tempo - (dias * 86400) - (horas * 3600) - (minutos * 60));
        if (dias > 0)
            return dias > 1 ? dias + " dias" : dias + " dia";
        else if (horas > 0)
            return horas > 1 ? horas + " horas" : horas + " hora";
        else if (minutos > 0)
            return minutos > 1 ? minutos + " minutos" : minutos + " minuto";
        else if (segundos > 0)
            return segundos > 1 ? segundos + " segundos" : segundos + " segundo";
    }
};
EnderecoConfirmacaoPage.ctorParameters = () => [
    { type: _endereco_confirmacao_service__WEBPACK_IMPORTED_MODULE_2__.EnderecoConfirmacaoService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController }
];
EnderecoConfirmacaoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-endereco-confirmacao',
        template: _raw_loader_endereco_confirmacao_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_endereco_confirmacao_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EnderecoConfirmacaoPage);



/***/ }),

/***/ 2967:
/*!****************************************************************************!*\
  !*** ./src/app/modal/endereco-confirmacao/endereco-confirmacao.service.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnderecoConfirmacaoService": () => (/* binding */ EnderecoConfirmacaoService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/class/url-service */ 2567);



let EnderecoConfirmacaoService = class EnderecoConfirmacaoService {
    constructor(urlService) {
        this.urlService = urlService;
    }
    getEnderecoByAddress(address) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.urlService.sendRequestPostCustom("https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&result_type=street_address&language=pt-BR&key=" + src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_0__.UrlService.GMKey);
        });
    }
};
EnderecoConfirmacaoService.ctorParameters = () => [
    { type: src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_0__.UrlService }
];
EnderecoConfirmacaoService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], EnderecoConfirmacaoService);



/***/ }),

/***/ 7979:
/*!***************************************************************!*\
  !*** ./src/app/modal/fotoperfil/fotoperfil-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FotoperfilPageRoutingModule": () => (/* binding */ FotoperfilPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _fotoperfil_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fotoperfil.page */ 5751);




const routes = [
    {
        path: '',
        component: _fotoperfil_page__WEBPACK_IMPORTED_MODULE_0__.FotoperfilPage
    }
];
let FotoperfilPageRoutingModule = class FotoperfilPageRoutingModule {
};
FotoperfilPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FotoperfilPageRoutingModule);



/***/ }),

/***/ 9737:
/*!*******************************************************!*\
  !*** ./src/app/modal/fotoperfil/fotoperfil.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FotoperfilPageModule": () => (/* binding */ FotoperfilPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _fotoperfil_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fotoperfil-routing.module */ 7979);
/* harmony import */ var _fotoperfil_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fotoperfil.page */ 5751);
/* harmony import */ var src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/class/url-service */ 2567);
/* harmony import */ var _fotoperfil_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fotoperfil.service */ 4621);










let FotoperfilPageModule = class FotoperfilPageModule {
};
FotoperfilPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _fotoperfil_routing_module__WEBPACK_IMPORTED_MODULE_0__.FotoperfilPageRoutingModule
        ],
        declarations: [_fotoperfil_page__WEBPACK_IMPORTED_MODULE_1__.FotoperfilPage],
        providers: [
            _fotoperfil_service__WEBPACK_IMPORTED_MODULE_3__.FotoperfilService,
            src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_2__.UrlService
        ]
    })
], FotoperfilPageModule);



/***/ }),

/***/ 5751:
/*!*****************************************************!*\
  !*** ./src/app/modal/fotoperfil/fotoperfil.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FotoperfilPage": () => (/* binding */ FotoperfilPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_fotoperfil_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./fotoperfil.page.html */ 6718);
/* harmony import */ var _fotoperfil_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fotoperfil.page.scss */ 6113);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_shared_class_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/class/storage.service */ 6578);
/* harmony import */ var _fotoperfil_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fotoperfil.service */ 4621);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/camera */ 7673);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);









let FotoperfilPage = class FotoperfilPage {
    constructor(router, storage, fotoperfilService, modalController) {
        this.router = router;
        this.storage = storage;
        this.fotoperfilService = fotoperfilService;
        this.modalController = modalController;
        this.loadingPhoto = false;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.user = yield this.storage.get("user");
        });
    }
    mudarFoto() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.Camera.getPhoto({
                quality: 90,
                allowEditing: false,
                direction: _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.CameraDirection.Front,
                source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.CameraSource.Camera,
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.CameraResultType.DataUrl
            });
            const photoObj = image.dataUrl;
            this.loadingPhoto = true;
            (yield this.fotoperfilService.mudarFoto(this.getBinaryPhoto(photoObj), this.getTypePhoto(photoObj), this.user.id))
                .subscribe((resp) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                this.user = resp;
                this.loadingPhoto = false;
                this.closeFoto();
            }), error => {
                if (error.status == 401 || error.status == 403) {
                    this.storage.remove("user");
                    this.router.navigateByUrl("");
                }
            });
        });
    }
    removerFoto() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.loadingPhoto = true;
            (yield this.fotoperfilService.removerFoto(this.user.id))
                .subscribe(() => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                this.user.fotoPerfil = null;
                this.loadingPhoto = false;
                this.closeFoto();
            }), error => {
                if (error.status == 401 || error.status == 403) {
                    this.storage.remove("user");
                    this.router.navigateByUrl("");
                }
            });
        });
    }
    getTypePhoto(photo) {
        return photo.split(';')[0].split(':')[1];
    }
    getBinaryPhoto(photo) {
        return photo.split(';')[1].split(',')[1];
    }
    closeFoto() {
        this.modalController.dismiss(this.user);
    }
};
FotoperfilPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_shared_class_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService },
    { type: _fotoperfil_service__WEBPACK_IMPORTED_MODULE_3__.FotoperfilService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController }
];
FotoperfilPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-fotoperfil',
        template: _raw_loader_fotoperfil_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_fotoperfil_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FotoperfilPage);



/***/ }),

/***/ 4621:
/*!********************************************************!*\
  !*** ./src/app/modal/fotoperfil/fotoperfil.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FotoperfilService": () => (/* binding */ FotoperfilService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/class/url-service */ 2567);



let FotoperfilService = class FotoperfilService {
    constructor(urlService) {
        this.urlService = urlService;
    }
    mudarFoto(fotoBin, fotoTipo, id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let request = {
                id: id,
                foto: {
                    nome: Date.now.toString(),
                    tipo: fotoTipo,
                    binario: fotoBin
                }
            };
            return yield this.urlService.sendRequestPost("/Paciente/AlterarFotoPerfil", JSON.stringify(request));
        });
    }
    removerFoto(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.urlService.sendRequestPost("/Paciente/DeletarFotoPerfil?id=" + id);
        });
    }
};
FotoperfilService.ctorParameters = () => [
    { type: src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_0__.UrlService }
];
FotoperfilService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], FotoperfilService);



/***/ }),

/***/ 8081:
/*!***************************************************************************!*\
  !*** ./src/app/modal/medicamento-view/medicamento-view-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MedicamentoViewPageRoutingModule": () => (/* binding */ MedicamentoViewPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _medicamento_view_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./medicamento-view.page */ 8487);




const routes = [
    {
        path: '',
        component: _medicamento_view_page__WEBPACK_IMPORTED_MODULE_0__.MedicamentoViewPage
    }
];
let MedicamentoViewPageRoutingModule = class MedicamentoViewPageRoutingModule {
};
MedicamentoViewPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MedicamentoViewPageRoutingModule);



/***/ }),

/***/ 5476:
/*!*******************************************************************!*\
  !*** ./src/app/modal/medicamento-view/medicamento-view.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MedicamentoViewPageModule": () => (/* binding */ MedicamentoViewPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _medicamento_view_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./medicamento-view-routing.module */ 8081);
/* harmony import */ var _medicamento_view_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./medicamento-view.page */ 8487);
/* harmony import */ var src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/class/url-service */ 2567);
/* harmony import */ var _medicamento_view_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./medicamento-view.service */ 4778);









let MedicamentoViewPageModule = class MedicamentoViewPageModule {
};
MedicamentoViewPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _medicamento_view_routing_module__WEBPACK_IMPORTED_MODULE_0__.MedicamentoViewPageRoutingModule
        ],
        declarations: [_medicamento_view_page__WEBPACK_IMPORTED_MODULE_1__.MedicamentoViewPage],
        providers: [
            _medicamento_view_service__WEBPACK_IMPORTED_MODULE_3__.MedicamentoViewService,
            src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_2__.UrlService
        ]
    })
], MedicamentoViewPageModule);



/***/ }),

/***/ 8487:
/*!*****************************************************************!*\
  !*** ./src/app/modal/medicamento-view/medicamento-view.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MedicamentoViewPage": () => (/* binding */ MedicamentoViewPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_medicamento_view_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./medicamento-view.page.html */ 1619);
/* harmony import */ var _medicamento_view_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./medicamento-view.page.scss */ 4019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _medicamento_view_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./medicamento-view.service */ 4778);







let MedicamentoViewPage = class MedicamentoViewPage {
    constructor(medicamentoViewService, router, modalController) {
        this.medicamentoViewService = medicamentoViewService;
        this.router = router;
        this.modalController = modalController;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = true;
            (yield this.medicamentoViewService.getMedicamentoById(this.id))
                .subscribe((resp) => {
                this.loading = false;
                this.medicamento = resp;
            });
        });
    }
    // openReceita(receita: any){
    //   let pdfWindow = window.open("");
    //   pdfWindow.document.write('<html><head></head><body style="margin: 0; padding: 0;">');
    //   pdfWindow.document.write(
    //     "<iframe width='100%' height='100%' style='border:none;' frameBorder='0' src='data:application/pdf;base64, " +
    //     encodeURI(receita.binario) + "'></iframe>"
    //   );
    //   pdfWindow.document.write('</body></html>');
    // }
    editarMedicamento(id) {
        this.router.navigateByUrl("/page/criar-medicamento/" + id);
        this.closeModal();
    }
    closeModal() {
        this.modalController.dismiss();
    }
};
MedicamentoViewPage.ctorParameters = () => [
    { type: _medicamento_view_service__WEBPACK_IMPORTED_MODULE_2__.MedicamentoViewService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
MedicamentoViewPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-medicamento-view',
        template: _raw_loader_medicamento_view_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_medicamento_view_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MedicamentoViewPage);



/***/ }),

/***/ 4778:
/*!********************************************************************!*\
  !*** ./src/app/modal/medicamento-view/medicamento-view.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MedicamentoViewService": () => (/* binding */ MedicamentoViewService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/class/url-service */ 2567);



let MedicamentoViewService = class MedicamentoViewService {
    constructor(urlService) {
        this.urlService = urlService;
    }
    getMedicamentoById(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.urlService.sendRequestPost("/Medicamento/ConsultarMedicamentoById?idMedicamento=" + id);
        });
    }
};
MedicamentoViewService.ctorParameters = () => [
    { type: src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_0__.UrlService }
];
MedicamentoViewService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], MedicamentoViewService);



/***/ }),

/***/ 5337:
/*!*******************************************!*\
  !*** ./src/app/shared/auth/auth.guard.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _class_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../class/storage.service */ 6578);




let AuthGuard = class AuthGuard {
    constructor(router, storage) {
        this.router = router;
        this.storage = storage;
    }
    canActivate(route, state) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            if (yield this.storage.existKey("user"))
                return true;
            this.router.navigateByUrl("login");
            return false;
        });
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _class_storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService }
];
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ 6578:
/*!*************************************************!*\
  !*** ./src/app/shared/class/storage.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageService": () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage-angular */ 1628);
var StorageService_1;



let StorageService = StorageService_1 = class StorageService {
    constructor(storage) {
        this.storage = storage;
    }
    init() {
        return Promise.resolve(this.storage.create()
            .then(storage => {
            StorageService_1._storage = storage;
            return true;
        }).catch(err => {
            return false;
        }));
    }
    set(key, value) {
        var _a, _b;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            if (StorageService_1._storage == null) {
                if (yield this.init())
                    (_a = StorageService_1._storage) === null || _a === void 0 ? void 0 : _a.set(key, value);
            }
            else {
                (_b = StorageService_1._storage) === null || _b === void 0 ? void 0 : _b.set(key, value);
            }
        });
    }
    get(key) {
        var _a, _b;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            if (StorageService_1._storage == null) {
                if (yield this.init())
                    return (_a = StorageService_1._storage) === null || _a === void 0 ? void 0 : _a.get(key).then(value => { return value; });
            }
            else {
                return yield ((_b = StorageService_1._storage) === null || _b === void 0 ? void 0 : _b.get(key));
            }
        });
    }
    remove(key) {
        var _a, _b;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            if (StorageService_1._storage == null) {
                if (yield this.init())
                    (_a = StorageService_1._storage) === null || _a === void 0 ? void 0 : _a.remove(key);
            }
            else {
                (_b = StorageService_1._storage) === null || _b === void 0 ? void 0 : _b.remove(key);
            }
        });
    }
    existKey(keyComp) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            return (yield this.getKeys()).includes(keyComp);
        });
    }
    getKeys() {
        var _a, _b;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            if (StorageService_1._storage == null) {
                if (yield this.init())
                    return (_a = StorageService_1._storage) === null || _a === void 0 ? void 0 : _a.keys().then(value => { return value; });
            }
            else {
                return yield ((_b = StorageService_1._storage) === null || _b === void 0 ? void 0 : _b.keys());
            }
        });
    }
};
StorageService._storage = null;
StorageService.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_1__.Storage }
];
StorageService = StorageService_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], StorageService);



/***/ }),

/***/ 2567:
/*!*********************************************!*\
  !*** ./src/app/shared/class/url-service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UrlService": () => (/* binding */ UrlService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.service */ 6578);
var UrlService_1;





let UrlService = UrlService_1 = class UrlService {
    constructor(storage, router, http) {
        this.storage = storage;
        this.router = router;
        this.http = http;
    }
    validateToken(token) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            (yield this.sendRequestPost("/Usuario/VerificarToken?token=" + token))
                .subscribe(() => { }, error => {
                if (error.status == 400 || error.status == 401 || error.status == 403) {
                    this.storage.remove("user");
                    this.router.navigateByUrl("");
                }
            });
        });
    }
    sendRequestPost(url, body = "") {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let token = yield this.storage.get("token");
            return this.http.post(UrlService_1.BACKEND_URL + url, body, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders()
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'BEARER ' + token)
            });
        });
    }
    sendRequestPostCustom(url) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return this.http.post(url, "");
        });
    }
};
UrlService.BACKEND_URL = 'http://localhost:54439';
//static BACKEND_URL = 'http://34.68.18.75:8080';
UrlService.GMKey = 'AIzaSyA80PyFxRJVIlrTgA_beY_r_YOZtAFK-6w';
UrlService.ctorParameters = () => [
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
UrlService = UrlService_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()
], UrlService);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);
/* harmony import */ var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/pwa-elements/loader */ 2404);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));
(0,_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_2__.defineCustomElements)(window);


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-action-sheet.entry.js": [
		7321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		6108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		1489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		5830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		7757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		6911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		8695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		6034,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		8837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		4195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		1709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		5931,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		4513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		8056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		6272,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		1855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		8708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		3527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		4694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		9222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		9921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		3122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		1602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		6164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		7162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		7896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		5043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		7802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		9072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		2191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		7110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 5899:
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/pwa-elements/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \**************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./pwa-action-sheet.entry.js": [
		9437,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-action-sheet_entry_js"
	],
	"./pwa-camera-modal-instance.entry.js": [
		8025,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera-modal-instance_entry_js"
	],
	"./pwa-camera-modal.entry.js": [
		4262,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera-modal_entry_js"
	],
	"./pwa-camera.entry.js": [
		8206,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera_entry_js"
	],
	"./pwa-toast.entry.js": [
		4297,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-toast_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 5899;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 3069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 90:
/*!*******************************************!*\
  !*** ./src/app/loading/loading.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: transparent;\n}\n\n.content {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.spinner-layer {\n  border-color: #2d68cf;\n}\n\n.circle {\n  border-width: 5px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBR0E7RUFDRSw0QkFBQTtBQUFGIiwiZmlsZSI6ImxvYWRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmNvbnRlbnR7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnNwaW5uZXItbGF5ZXIge1xyXG4gIGJvcmRlci1jb2xvcjogIzJkNjhjZjtcclxuXHJcbn1cclxuXHJcbi5jaXJjbGV7XHJcbiAgYm9yZGVyLXdpZHRoOiA1cHggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 3464:
/*!***************************************************************!*\
  !*** ./src/app/modal/endereco-atual/endereco-atual.page.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: transparent;\n}\n\n.content {\n  width: 100%;\n  height: 100%;\n  padding: 5vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.areaendereco {\n  background-color: #fff;\n  width: 100%;\n  height: auto;\n  padding: 3vw;\n  border-radius: 4vw;\n  z-index: 1000;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  color: #000;\n}\n\n.areaendereco h3 {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n\n.btclose {\n  --border-radius: 6vw;\n  --padding: 0;\n  --padding-start: 0;\n  --padding-end: 0;\n  width: 12vw;\n  height: 12vw;\n  --background:white;\n  color: var(--ion-color-primary);\n}\n\n.closebtarea {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  width: 100%;\n}\n\n.areabt {\n  margin-top: 3vw;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZGVyZWNvLWF0dWFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFDRiIsImZpbGUiOiJlbmRlcmVjby1hdHVhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uY29udGVudHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogNXZ3O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYXJlYWVuZGVyZWNve1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDN2dztcclxuICBib3JkZXItcmFkaXVzOiA0dnc7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuLmFyZWFlbmRlcmVjbyBoM3tcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5idGNsb3Nle1xyXG4gIC0tYm9yZGVyLXJhZGl1czogNnZ3O1xyXG4gIC0tcGFkZGluZzogMDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgLS1wYWRkaW5nLWVuZDogMDtcclxuICB3aWR0aDogMTJ2dztcclxuICBoZWlnaHQ6IDEydnc7XHJcbiAgLS1iYWNrZ3JvdW5kOndoaXRlO1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuXHJcbi5jbG9zZWJ0YXJlYXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmFyZWFidHtcclxuICBtYXJnaW4tdG9wOiAzdnc7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 2395:
/*!***************************************************************************!*\
  !*** ./src/app/modal/endereco-confirmacao/endereco-confirmacao.page.scss ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: transparent;\n}\n\n.content {\n  width: 100%;\n  height: 100%;\n  padding: 5vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.areaendereco {\n  background-color: #fff;\n  width: 100%;\n  height: auto;\n  padding: 3vw;\n  border-radius: 4vw;\n  z-index: 1000;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  color: #000;\n}\n\n.areaendereco .nomeclinica {\n  margin-bottom: 20px;\n  text-align: center;\n  font-size: large;\n}\n\n.areaendereco .enderecoclinica {\n  text-align: center;\n  font-size: medium;\n}\n\n.areaendereco .distanciaduracao {\n  text-align: left;\n  width: 100%;\n}\n\n.btclose {\n  --border-radius: 6vw;\n  --padding: 0;\n  --padding-start: 0;\n  --padding-end: 0;\n  width: 12vw;\n  height: 12vw;\n  --background:white;\n  color: var(--ion-color-primary);\n}\n\n.closebtarea {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  width: 100%;\n}\n\n.areabt {\n  margin-top: 3vw;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZGVyZWNvLWNvbmZpcm1hY2FvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUNGIiwiZmlsZSI6ImVuZGVyZWNvLWNvbmZpcm1hY2FvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5jb250ZW50e1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiA1dnc7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hcmVhZW5kZXJlY297XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZzogM3Z3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDR2dztcclxuICB6LWluZGV4OiAxMDAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4uYXJlYWVuZGVyZWNvIC5ub21lY2xpbmljYXtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG59XHJcblxyXG4uYXJlYWVuZGVyZWNvIC5lbmRlcmVjb2NsaW5pY2F7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG59XHJcblxyXG4uYXJlYWVuZGVyZWNvIC5kaXN0YW5jaWFkdXJhY2Fve1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5idGNsb3Nle1xyXG4gIC0tYm9yZGVyLXJhZGl1czogNnZ3O1xyXG4gIC0tcGFkZGluZzogMDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgLS1wYWRkaW5nLWVuZDogMDtcclxuICB3aWR0aDogMTJ2dztcclxuICBoZWlnaHQ6IDEydnc7XHJcbiAgLS1iYWNrZ3JvdW5kOndoaXRlO1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuXHJcbi5jbG9zZWJ0YXJlYXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmFyZWFidHtcclxuICBtYXJnaW4tdG9wOiAzdnc7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 6113:
/*!*******************************************************!*\
  !*** ./src/app/modal/fotoperfil/fotoperfil.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: transparent;\n}\n\n.content {\n  width: 100%;\n  height: 100%;\n  padding: 5vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.areafoto {\n  background-color: #fff;\n  width: 100%;\n  height: auto;\n  padding: 3vw;\n  border-radius: 4vw;\n  z-index: 1000;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.areafoto img {\n  width: 100%;\n  height: auto;\n}\n\n.btclose {\n  --border-radius: 6vw;\n  --padding: 0;\n  --padding-start: 0;\n  --padding-end: 0;\n  width: 12vw;\n  height: 12vw;\n  --background:white;\n  color: var(--ion-color-primary);\n}\n\n.closebtarea {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  width: 100%;\n}\n\n.areabt {\n  margin-top: 3vw;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvdG9wZXJmaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBQ0YiLCJmaWxlIjoiZm90b3BlcmZpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uY29udGVudHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogNXZ3O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYXJlYWZvdG97XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZzogM3Z3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDR2dztcclxuICB6LWluZGV4OiAxMDAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmFyZWFmb3RvIGltZ3tcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5idGNsb3Nle1xyXG4gIC0tYm9yZGVyLXJhZGl1czogNnZ3O1xyXG4gIC0tcGFkZGluZzogMDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgLS1wYWRkaW5nLWVuZDogMDtcclxuICB3aWR0aDogMTJ2dztcclxuICBoZWlnaHQ6IDEydnc7XHJcbiAgLS1iYWNrZ3JvdW5kOndoaXRlO1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuXHJcbi5jbG9zZWJ0YXJlYXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmFyZWFidHtcclxuICBtYXJnaW4tdG9wOiAzdnc7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 4019:
/*!*******************************************************************!*\
  !*** ./src/app/modal/medicamento-view/medicamento-view.page.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: transparent;\n}\n\n.content {\n  width: 100%;\n  height: 100%;\n  padding: 5vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.area {\n  background-color: #fff;\n  width: 100%;\n  height: auto;\n  padding: 3vw;\n  border-radius: 4vw;\n  z-index: 1000;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  color: #000;\n}\n\n.area .nomemedicamento {\n  margin-bottom: 10px;\n  text-align: center;\n  font-size: large;\n}\n\n.area .quantidade {\n  margin-bottom: 15px;\n  text-align: center;\n  font-size: medium;\n}\n\n.area .datafinal {\n  text-align: left;\n  width: 100%;\n}\n\n.area .receitado {\n  text-align: left;\n  width: 100%;\n}\n\n.area .atencao {\n  font-size: medium;\n  text-align: center;\n  margin-top: 20px;\n}\n\n.btclose {\n  --border-radius: 6vw;\n  --padding: 0;\n  --padding-start: 0;\n  --padding-end: 0;\n  width: 12vw;\n  height: 12vw;\n  --background:white;\n  color: var(--ion-color-primary);\n}\n\n.closebtarea {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  width: 100%;\n}\n\n.areabt {\n  margin-top: 3vw;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZGljYW1lbnRvLXZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBQ0YiLCJmaWxlIjoibWVkaWNhbWVudG8tdmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uY29udGVudHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogNXZ3O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYXJlYXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBwYWRkaW5nOiAzdnc7XHJcbiAgYm9yZGVyLXJhZGl1czogNHZ3O1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbi5hcmVhIC5ub21lbWVkaWNhbWVudG97XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxufVxyXG5cclxuLmFyZWEgLnF1YW50aWRhZGV7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiBtZWRpdW07XHJcbn1cclxuXHJcbi5hcmVhIC5kYXRhZmluYWx7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmFyZWEgLnJlY2VpdGFkb3tcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYXJlYSAuYXRlbmNhb3tcclxuICBmb250LXNpemU6IG1lZGl1bTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLmJ0Y2xvc2V7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiA2dnc7XHJcbiAgLS1wYWRkaW5nOiAwO1xyXG4gIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAtLXBhZGRpbmctZW5kOiAwO1xyXG4gIHdpZHRoOiAxMnZ3O1xyXG4gIGhlaWdodDogMTJ2dztcclxuICAtLWJhY2tncm91bmQ6d2hpdGU7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufVxyXG5cclxuLmNsb3NlYnRhcmVhe1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYXJlYWJ0e1xyXG4gIG1hcmdpbi10b3A6IDN2dztcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 1106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ 9897:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loading/loading.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"content\">\n    <div class=\"preloader-wrapper big active\">\n      <div class=\"spinner-layer spinner-blue-only\">\n        <div class=\"circle-clipper left\">\n          <div class=\"circle\"></div>\n        </div><div class=\"gap-patch\">\n          <div class=\"circle\"></div>\n        </div><div class=\"circle-clipper right\">\n          <div class=\"circle\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 3382:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/endereco-atual/endereco-atual.page.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content >\n  <div class=\"content\">\n\n    <div *ngIf=\"!loading\" class=\"closebtarea\">\n      <ion-button (click)=\"closeModal()\" [disabled]=\"loading\" class=\"btclose\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </div>\n\n    <div class=\"areaendereco\">\n      <h3 *ngIf=\"!loading\">Endereço de partida:</h3>\n      <span *ngIf=\"!loading && !editandoEnd\">{{endereco}}</span>\n      <ion-input type=\"text\" *ngIf=\"!loading && editandoEnd\" [(ngModel)]=\"enderecoPre\" placeholder=\"Digite o endereço...\"></ion-input>\n      <div *ngIf=\"loading\" class=\"preloader-wrapper active\">\n        <div class=\"spinner-layer spinner-blue-only\">\n          <div class=\"circle-clipper left\">\n            <div class=\"circle\"></div>\n          </div><div class=\"gap-patch\">\n            <div class=\"circle\"></div>\n          </div><div class=\"circle-clipper right\">\n            <div class=\"circle\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div *ngIf=\"!loading && editandoEnd\" class=\"areabt row\">\n      <div style=\"padding: 0;\" class=\"col s6\">\n        <ion-button (click)=\"editandoEnd = false\" color=\"danger\" expand=\"block\">Cancelar</ion-button>\n      </div>\n      <div style=\"padding: 0;\" class=\"col s6\">\n        <ion-button (click)=\"editarEndereco()\" color=\"primary\" expand=\"block\">Confirmar</ion-button>\n      </div>\n    </div>\n\n    <div *ngIf=\"!loading && !editandoEnd\" class=\"areabt row\">\n      <div style=\"padding: 0;\" class=\"col s6\">\n        <ion-button (click)=\"editandoEnd = true; enderecoPre = undefined;\" color=\"secondary\" expand=\"block\">Editar</ion-button>\n      </div>\n      <div style=\"padding: 0;\" class=\"col s6\">\n        <ion-button (click)=\"closeModal(coords)\" color=\"primary\" expand=\"block\">Confirmar</ion-button>\n      </div>\n    </div>\n\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 6017:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/endereco-confirmacao/endereco-confirmacao.page.html ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content >\n  <div class=\"content\">\n\n    <div class=\"closebtarea\">\n      <ion-button (click)=\"closeModal()\" class=\"btclose\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </div>\n\n    <div class=\"areaendereco\">\n      <ion-text class=\"nomeclinica\" color=\"primary\">\n        <span>{{item.clinica.nomeClinica}}</span>\n      </ion-text>\n      <ion-text class=\"enderecoclinica\" color=\"secondary\">\n        <span>{{item.clinica.endereco.logradouro +\n          (item.clinica.endereco.numero ? \", \"+item.clinica.endereco.numero : \", S/N\") +\n          \" - \" +item.clinica.endereco.bairro+\", \"+item.clinica.endereco.localidade+\", \"+item.clinica.endereco.uf}}</span>\n      </ion-text>\n      <ion-text class=\"distanciaduracao\">\n        <span>{{'Distancia: ' +\n          formatarDistancia(item.distancia)\n        }}</span>\n      </ion-text>\n      <ion-text class=\"distanciaduracao\">\n        <span>{{'Tempo estimado de caminhada: ' +\n          formatarTempo(item.duracao)\n        }}</span>\n      </ion-text>\n    </div>\n\n    <div class=\"areabt row\">\n      <div style=\"padding: 0;\" class=\"col s12\">\n        <ion-button (click)=\"abrirClinica(item.clinica)\" color=\"primary\" expand=\"block\">\n          Abrir no mapa\n        </ion-button>\n      </div>\n    </div>\n\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 6718:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/fotoperfil/fotoperfil.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content >\n  <div class=\"content\">\n\n    <div *ngIf=\"!loadingPhoto\" class=\"closebtarea\">\n      <ion-button (click)=\"closeFoto()\" [disabled]=\"loadingPhoto\" class=\"btclose\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </div>\n\n    <div class=\"areafoto\">\n      <img *ngIf=\"user && user.fotoPerfil && !loadingPhoto\" [src]=\"'data:'+user.fotoPerfil.tipo+';base64,'+user.fotoPerfil.binario\" />\n      <img *ngIf=\"(!user || !user.fotoPerfil) && !loadingPhoto\" src=\"../../assets/nophoto.png\"  />\n      <div *ngIf=\"loadingPhoto\" class=\"preloader-wrapper active\">\n        <div class=\"spinner-layer spinner-blue-only\">\n          <div class=\"circle-clipper left\">\n            <div class=\"circle\"></div>\n          </div><div class=\"gap-patch\">\n            <div class=\"circle\"></div>\n          </div><div class=\"circle-clipper right\">\n            <div class=\"circle\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div *ngIf=\"user && user.fotoPerfil && !loadingPhoto\" class=\"areabt row\">\n      <div style=\"padding: 0;\" class=\"col s6\">\n        <ion-button (click)=\"removerFoto()\" [disabled]=\"loadingPhoto\" color=\"danger\" expand=\"block\">Remover Foto</ion-button>\n      </div>\n      <div style=\"padding: 0;\" class=\"col s6\">\n        <ion-button (click)=\"mudarFoto()\" [disabled]=\"loadingPhoto\" color=\"primary\" expand=\"block\">Mudar Foto</ion-button>\n      </div>\n    </div>\n\n    <div *ngIf=\"user && !user.fotoPerfil && !loadingPhoto\" class=\"areabt row\">\n      <div style=\"padding: 0;\" class=\"col s12\">\n        <ion-button (click)=\"mudarFoto()\" [disabled]=\"loadingPhoto\" color=\"primary\" expand=\"block\">Adicionar Foto</ion-button>\n      </div>\n    </div>\n\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 1619:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/medicamento-view/medicamento-view.page.html ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content >\n  <div class=\"content\">\n\n    <div *ngIf=\"!loading\" class=\"closebtarea\">\n      <ion-button (click)=\"closeModal()\" [disabled]=\"loading\" class=\"btclose\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </div>\n\n    <div *ngIf=\"!loading\" class=\"area\">\n      <ion-text class=\"nomemedicamento\" color=\"primary\">\n        <span>{{medicamento.nome}}</span>\n      </ion-text>\n      <ion-text class=\"quantidade\" color=\"secondary\">\n        <span>{{(medicamento.tipoQuantidade != \"Outro\" ? medicamento.numQuantidade + \" \" + medicamento.tipoQuantidade : medicamento.outraQuantidade)}}\n          {{(medicamento.tipoIntervalo != \"Outro\" ? \"a cada \" + medicamento.numIntervalo + \" \" + medicamento.tipoIntervalo : medicamento.outroIntervalo)}}</span>\n      </ion-text>\n      <!-- <ion-button *ngIf=\"medicamento.receita\" style=\"margin-bottom: 10px;\" (click)=\"openReceita(medicamento.receita)\" color=\"primary\" expand=\"block\">Abrir receita</ion-button> -->\n      <ion-text class=\"datafinal\">\n        <span>Começou: {{medicamento.dataInicio | date: 'dd/MMM/yyyy'}}</span>\n      </ion-text>\n      <ion-text class=\"datafinal\">\n        <span *ngIf=\"!medicamento.usoContinuo\">Até: {{medicamento.dataTermino | date: 'dd/MMM/yyyy'}}</span>\n        <span *ngIf=\"medicamento.usoContinuo\">Uso contínuo</span>\n      </ion-text>\n      <ion-text class=\"receitado\">\n        Status:\n        <ion-text *ngIf=\"medicamento.tipoCadastro == 0\" color=\"danger\">Não receitado</ion-text>\n        <ion-text *ngIf=\"medicamento.tipoCadastro == 1\" color=\"success\">Receitado</ion-text>\n        <ion-text *ngIf=\"medicamento.tipoCadastro == 2\" color=\"warning\">Receitado manualmente</ion-text>\n      </ion-text>\n      <ion-text *ngIf=\"medicamento.tipoCadastro == 0\" class=\"atencao\" color=\"danger\">\n        Atenção tomar medicamentos não receitados pelo médico pode trazer sérias consequências, como por exemplo, intoxicação.\n      </ion-text>\n    </div>\n\n    <div *ngIf=\"loading\" class=\"area\">\n      <div class=\"preloader-wrapper active\">\n        <div class=\"spinner-layer spinner-blue-only\">\n          <div class=\"circle-clipper left\">\n            <div class=\"circle\"></div>\n          </div><div class=\"gap-patch\">\n            <div class=\"circle\"></div>\n          </div><div class=\"circle-clipper right\">\n            <div class=\"circle\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div *ngIf=\"!loading\" class=\"areabt row\">\n      <div style=\"padding: 0;\" class=\"col s12\">\n        <ion-button (click)=\"editarMedicamento(medicamento.id)\" color=\"primary\" expand=\"block\">Editar medicamento</ion-button>\n      </div>\n    </div>\n\n  </div>\n</ion-content>\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map