(self["webpackChunkpeppaciente"] = self["webpackChunkpeppaciente"] || []).push([["src_app_page_home_home_module_ts"],{

/***/ 6455:
/*!**************************************************!*\
  !*** ./src/app/page/home/home-routing.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 8261);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 2040:
/*!******************************************!*\
  !*** ./src/app/page/home/home.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 6455);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 8261);
/* harmony import */ var src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/class/url-service */ 2567);








let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage],
        providers: [
            src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_2__.UrlService
        ],
    })
], HomePageModule);



/***/ }),

/***/ 8261:
/*!****************************************!*\
  !*** ./src/app/page/home/home.page.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 7457);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 7346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_shared_class_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/class/storage.service */ 6578);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_modal_fotoperfil_fotoperfil_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modal/fotoperfil/fotoperfil.page */ 5751);








let HomePage = class HomePage {
    constructor(storage, modalController, router) {
        this.storage = storage;
        this.modalController = modalController;
        this.router = router;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.user = yield this.storage.get("user");
        });
    }
    openPhoto() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loadingScreen = yield this.modalController.create({
                component: src_app_modal_fotoperfil_fotoperfil_page__WEBPACK_IMPORTED_MODULE_3__.FotoperfilPage
            });
            loadingScreen.onDidDismiss()
                .then((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                const userReturn = data['data'];
                this.user = userReturn;
                yield this.storage.set("user", this.user);
            }));
            return yield loadingScreen.present();
        });
    }
    logout() {
        this.storage.remove("user");
        this.router.navigateByUrl("");
    }
};
HomePage.ctorParameters = () => [
    { type: src_app_shared_class_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 7346:
/*!******************************************!*\
  !*** ./src/app/page/home/home.page.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".content {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.fotoarea {\n  width: 26vw;\n  height: 26vw;\n  background-color: #fff;\n  border: 3px solid #3535c9;\n  border-radius: 13vw;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.fotoarea img {\n  flex-shrink: 0;\n  min-width: 100%;\n  min-height: 100%;\n  object-fit: cover;\n}\n\n.area-identification {\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 30px;\n}\n\n.area-identification span {\n  margin-top: 25px;\n  font-size: 5vw;\n}\n\n.camera-perfil {\n  font-size: 5vw;\n  background-color: #3535c9;\n  color: #fff;\n  border-radius: 4vw;\n  width: 7vw;\n  height: 7vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: -7vw;\n  margin-left: 18vw;\n}\n\n.menu-sector {\n  padding: 3vh;\n  margin-bottom: 10vh;\n  width: 100%;\n  height: auto;\n}\n\n.btHome {\n  height: 10vh;\n  font-size: 4vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FBQ0YiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uZm90b2FyZWF7XHJcbiAgd2lkdGg6IDI2dnc7XHJcbiAgaGVpZ2h0OiAyNnZ3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgcmdiKDUzLCA1MywgMjAxKTtcclxuICBib3JkZXItcmFkaXVzOiAxM3Z3O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZm90b2FyZWEgaW1ne1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIG1pbi13aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG4uYXJlYS1pZGVudGlmaWNhdGlvbntcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLmFyZWEtaWRlbnRpZmljYXRpb24gc3BhbntcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gIGZvbnQtc2l6ZTogNXZ3O1xyXG59XHJcblxyXG4uY2FtZXJhLXBlcmZpbHtcclxuICBmb250LXNpemU6IDV2dztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTMsIDUzLCAyMDEpO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDR2dztcclxuICB3aWR0aDogN3Z3O1xyXG4gIGhlaWdodDogN3Z3O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAtN3Z3O1xyXG4gIG1hcmdpbi1sZWZ0OiAxOHZ3O1xyXG59XHJcblxyXG4ubWVudS1zZWN0b3J7XHJcbiAgcGFkZGluZzogM3ZoO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uYnRIb21le1xyXG4gIGhlaWdodDogMTB2aDtcclxuICBmb250LXNpemU6IDR2dztcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 7457:
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/home/home.page.html ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <div style=\"display: flex; justify-content: space-between; padding-right: 10px;\">\n    <ion-title>\n      PEP - Paciente\n    </ion-title>\n    <ion-button (click)=\"logout()\" color=\"danger\">Sair</ion-button>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"content\">\n    <div class=\"area-identification\">\n      <div (click)=\"openPhoto()\" class=\"fotoarea\">\n        <img *ngIf=\"user && user.photo\" [src]=\"'data:'+user.photo.tipo+';base64,'+user.photo.binario\" />\n        <img src=\"../../assets/nophoto.png\" *ngIf=\"!user || !user.photo\" />\n      </div>\n      <div class=\"camera-perfil\">\n        <ion-icon name=\"camera\"></ion-icon>\n      </div>\n      <span *ngIf=\"user\">{{user.nome}}</span>\n    </div>\n\n    <div class=\"menu-sector\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"6\">\n            <ion-button class=\"btHome\" expand=\"block\">Exames</ion-button>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-button class=\"btHome\" expand=\"block\">Consultas</ion-button>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-button class=\"btHome\" expand=\"block\">Hospitais e Clinicas</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_home_home_module_ts.js.map