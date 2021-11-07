(self["webpackChunkpeppaciente"] = self["webpackChunkpeppaciente"] || []).push([["src_app_page_clinicas_clinicas_module_ts"],{

/***/ 307:
/*!**********************************************************!*\
  !*** ./src/app/page/clinicas/clinicas-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClinicasPageRoutingModule": () => (/* binding */ ClinicasPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _clinicas_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clinicas.page */ 8873);




const routes = [
    {
        path: '',
        component: _clinicas_page__WEBPACK_IMPORTED_MODULE_0__.ClinicasPage
    }
];
let ClinicasPageRoutingModule = class ClinicasPageRoutingModule {
};
ClinicasPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ClinicasPageRoutingModule);



/***/ }),

/***/ 5590:
/*!**************************************************!*\
  !*** ./src/app/page/clinicas/clinicas.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClinicasPageModule": () => (/* binding */ ClinicasPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _clinicas_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clinicas-routing.module */ 307);
/* harmony import */ var _clinicas_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clinicas.page */ 8873);
/* harmony import */ var _clinicas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clinicas.service */ 4016);
/* harmony import */ var src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/class/url-service */ 2567);
/* harmony import */ var src_app_modal_endereco_atual_endereco_atual_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modal/endereco-atual/endereco-atual.service */ 9371);










let ClinicasPageModule = class ClinicasPageModule {
};
ClinicasPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _clinicas_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClinicasPageRoutingModule
        ],
        declarations: [_clinicas_page__WEBPACK_IMPORTED_MODULE_1__.ClinicasPage],
        providers: [_clinicas_service__WEBPACK_IMPORTED_MODULE_2__.ClinicasService, src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_3__.UrlService, src_app_modal_endereco_atual_endereco_atual_service__WEBPACK_IMPORTED_MODULE_4__.EnderecoAtualService]
    })
], ClinicasPageModule);



/***/ }),

/***/ 8873:
/*!************************************************!*\
  !*** ./src/app/page/clinicas/clinicas.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClinicasPage": () => (/* binding */ ClinicasPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_clinicas_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./clinicas.page.html */ 543);
/* harmony import */ var _clinicas_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clinicas.page.scss */ 9804);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_shared_class_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/class/storage.service */ 6578);
/* harmony import */ var src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/class/url-service */ 2567);
/* harmony import */ var _clinicas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clinicas.service */ 4016);
/* harmony import */ var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/location-accuracy/ngx */ 6030);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 7152);
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ 9315);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_modal_endereco_atual_endereco_atual_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modal/endereco-atual/endereco-atual.page */ 4136);
/* harmony import */ var src_app_modal_endereco_confirmacao_endereco_confirmacao_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/modal/endereco-confirmacao/endereco-confirmacao.page */ 1170);














let ClinicasPage = class ClinicasPage {
    constructor(router, storage, locationAccuracy, modalController, geolocation, plt, androidPermissions, urlService, clinicasService) {
        this.router = router;
        this.storage = storage;
        this.locationAccuracy = locationAccuracy;
        this.modalController = modalController;
        this.geolocation = geolocation;
        this.plt = plt;
        this.androidPermissions = androidPermissions;
        this.urlService = urlService;
        this.clinicasService = clinicasService;
        this.loading = false;
        this.locationCordinates = {
            latitude: "",
            longitude: "",
            accuracy: "",
            timestamp: ""
        };
        this.router.events.subscribe((evt) => {
            if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_10__.NavigationEnd && this.router.url == "/page/clinicas") {
                this.plataformas = this.plt.platforms();
                this.pageEnter();
            }
        });
    }
    checkPermission() {
        if (this.plataformas.includes("cordova")) {
            this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(result => {
                if (result.hasPermission) {
                    this.enableGPS();
                }
                else {
                    this.locationAccPermission();
                }
            }, error => {
                alert(error);
            });
        }
        else {
            this.currentLocPosition();
        }
    }
    locationAccPermission() {
        this.locationAccuracy.canRequest().then((canRequest) => {
            if (canRequest) {
                this.enableGPS();
            }
            else {
                this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
                    .then(() => {
                    this.enableGPS();
                }, error => {
                    alert(error);
                });
            }
        });
    }
    enableGPS() {
        this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(() => {
            this.currentLocPosition();
        }, error => this.router.navigateByUrl("/page/home"));
    }
    currentLocPosition() {
        this.geolocation.getCurrentPosition().then((response) => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.locationCordinates.latitude = response.coords.latitude;
            this.locationCordinates.longitude = response.coords.longitude;
            this.locationCordinates.accuracy = response.coords.accuracy;
            this.locationCordinates.timestamp = response.timestamp;
            this.coords = this.locationCordinates.latitude + "," + this.locationCordinates.longitude;
            this.exibirModal(this.coords);
        })).catch((error) => {
            alert('Error: ' + error);
        });
    }
    exibirModal(coords) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const loadingScreen = yield this.modalController.create({
                component: src_app_modal_endereco_atual_endereco_atual_page__WEBPACK_IMPORTED_MODULE_8__.EnderecoAtualPage,
                componentProps: {
                    coords: coords
                }
            });
            loadingScreen.onDidDismiss()
                .then((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                const coords = data['data'];
                this.coords = coords;
                if (this.coords == null)
                    this.router.navigateByUrl("/page/home");
                else {
                    this.getListaClinicas(this.coords);
                }
            }));
            return yield loadingScreen.present();
        });
    }
    exibirModalEnderecoConf(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const loadingScreen = yield this.modalController.create({
                component: src_app_modal_endereco_confirmacao_endereco_confirmacao_page__WEBPACK_IMPORTED_MODULE_9__.EnderecoConfirmacaoPage,
                componentProps: {
                    item: item
                }
            });
            loadingScreen.onDidDismiss()
                .then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            }));
            return yield loadingScreen.present();
        });
    }
    pageEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            let token = yield this.storage.get("token");
            yield this.urlService.validateToken(token);
            this.listaClinicas = undefined;
            this.loading = true;
            this.checkPermission();
        });
    }
    editarEndereco() {
        this.exibirModal(this.coords);
    }
    getListaClinicas(coords) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            (yield this.clinicasService.consultarListaClinica(coords))
                .subscribe((resp) => {
                this.listaClinicas = resp;
                if (this.listaClinicas.length == 0)
                    this.mensagem = "Nenhuma clinica cadastrada!";
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
    ngOnInit() { }
    formatarDistancia(distancia) {
        if (distancia < 1000)
            return distancia + (distancia > 1 ? " metros" : " metro");
        else
            return (distancia / 1000).toFixed(1) + " Km";
    }
};
ClinicasPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: src_app_shared_class_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService },
    { type: _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_5__.LocationAccuracy },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__.Geolocation },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__.AndroidPermissions },
    { type: src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_3__.UrlService },
    { type: _clinicas_service__WEBPACK_IMPORTED_MODULE_4__.ClinicasService }
];
ClinicasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-clinicas',
        template: _raw_loader_clinicas_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_clinicas_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ClinicasPage);



/***/ }),

/***/ 4016:
/*!***************************************************!*\
  !*** ./src/app/page/clinicas/clinicas.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClinicasService": () => (/* binding */ ClinicasService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/class/url-service */ 2567);



let ClinicasService = class ClinicasService {
    constructor(urlService) {
        this.urlService = urlService;
    }
    consultarListaClinica(coordenada) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.urlService.sendRequestPost("/Clinica/GetListaClinicaByDistancia?coordenada=" + coordenada);
        });
    }
};
ClinicasService.ctorParameters = () => [
    { type: src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_0__.UrlService }
];
ClinicasService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], ClinicasService);



/***/ }),

/***/ 9804:
/*!**************************************************!*\
  !*** ./src/app/page/clinicas/clinicas.page.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".content {\n  margin-top: 10vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.sector-novo-clinicas {\n  width: 100%;\n  height: auto;\n}\n\n.area-lista-vazia {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 65vh;\n}\n\n.clinicas-nome {\n  --ion-grid-column-padding: 0 !important;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.clinicas-publico {\n  --ion-grid-column-padding: 0 !important;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.clinicas-quantidade {\n  --ion-grid-column-padding: 0 !important;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.clinicas-dataTermino {\n  --ion-grid-column-padding: 0 !important;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  text-align: center;\n}\n\n.listaTipo {\n  --placeholder-opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaW5pY2FzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1Q0FBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1Q0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1Q0FBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1Q0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLDBCQUFBO0FBQ0YiLCJmaWxlIjoiY2xpbmljYXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnR7XHJcbiAgbWFyZ2luLXRvcDogMTB2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5zZWN0b3Itbm92by1jbGluaWNhc3tcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5hcmVhLWxpc3RhLXZhemlhe1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDY1dmg7XHJcbn1cclxuXHJcbi5jbGluaWNhcy1ub21le1xyXG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY2xpbmljYXMtcHVibGljb3tcclxuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jbGluaWNhcy1xdWFudGlkYWRle1xyXG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY2xpbmljYXMtZGF0YVRlcm1pbm97XHJcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmxpc3RhVGlwb3tcclxuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDAuNTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 543:
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/clinicas/clinicas.page.html ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"content\">\n    <div class=\"sector-novo-clinicas\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-button *ngIf=\"!loading\" (click)=\"editarEndereco()\" color=\"primary\" expand=\"block\">Editar endereço</ion-button>\n            <div *ngIf=\"!listaClinicas || listaClinicas.length == 0 || loading\" class=\"area-lista-vazia\">\n              <span *ngIf=\"!loading\">{{mensagem}}</span>\n              <div *ngIf=\"loading\" class=\"preloader-wrapper big active\">\n                <div class=\"spinner-layer spinner-blue-only\">\n                  <div class=\"circle-clipper left\">\n                    <div class=\"circle\"></div>\n                  </div><div class=\"gap-patch\">\n                    <div class=\"circle\"></div>\n                  </div><div class=\"circle-clipper right\">\n                    <div class=\"circle\"></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <ion-list *ngIf=\"!loading && listaClinicas && listaClinicas.length > 0\">\n\n              <ion-item (click)=\"exibirModalEnderecoConf(item)\" *ngFor=\"let item of listaClinicas\">\n                <ion-label class=\"ion-text-wrap\">\n                  <ion-grid>\n                    <ion-row>\n                      <ion-col class=\"clinicas-nome\" size=\"12\">\n                        <ion-text color=\"primary\">\n                          <h2>{{item.clinica.nomeClinica}}</h2>\n                        </ion-text>\n                      </ion-col>\n                    </ion-row>\n                    <ion-row>\n                      <ion-col class=\"clinicas-quantidade\" size=\"12\">\n                        <p>{{'Distancia: ' +\n                          formatarDistancia(item.distancia)\n                        }}</p>\n                      </ion-col>\n                    </ion-row>\n                    <ion-row>\n                      <ion-col class=\"clinicas-quantidade\" size=\"12\">\n                        <p>{{'Endereço: ' +\n                          item.clinica.endereco.logradouro +\n                          (item.clinica.endereco.numero ? \", \"+item.clinica.endereco.numero : \", S/N\") +\n                          \" - \" +item.clinica.endereco.bairro\n                        }}</p>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </ion-label>\n              </ion-item>\n\n            </ion-list>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_clinicas_clinicas_module_ts.js.map