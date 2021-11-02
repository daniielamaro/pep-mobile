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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _clinicas_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clinicas-routing.module */ 307);
/* harmony import */ var _clinicas_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clinicas.page */ 8873);
/* harmony import */ var _clinicas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clinicas.service */ 4016);
/* harmony import */ var src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/class/url-service */ 2567);









let ClinicasPageModule = class ClinicasPageModule {
};
ClinicasPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _clinicas_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClinicasPageRoutingModule
        ],
        declarations: [_clinicas_page__WEBPACK_IMPORTED_MODULE_1__.ClinicasPage],
        providers: [_clinicas_service__WEBPACK_IMPORTED_MODULE_2__.ClinicasService, src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_3__.UrlService]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_clinicas_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./clinicas.page.html */ 543);
/* harmony import */ var _clinicas_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clinicas.page.scss */ 9804);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _capacitor_community_capacitor_googlemaps_native__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor-community/capacitor-googlemaps-native */ 3215);





let ClinicasPage = class ClinicasPage {
    constructor() { }
    ionViewDidEnter() {
        this.createMap();
    }
    ngOnInit() {
    }
    createMap() {
        const boundingRect = this.mapView.nativeElement.getBoundingClientRect();
        _capacitor_community_capacitor_googlemaps_native__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.create({
            width: Math.round(boundingRect.width),
            height: Math.round(boundingRect.height),
            x: Math.round(boundingRect.x),
            y: Math.round(boundingRect.y),
            zoom: 5
        });
        _capacitor_community_capacitor_googlemaps_native__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.addListener('onMapReady', () => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            _capacitor_community_capacitor_googlemaps_native__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.setMapType({
                type: "normal" // hybrid, satellite, terrain
            });
            this.showCurrentPosition();
        }));
    }
    showCurrentPosition() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            // todo
        });
    }
    ionViewDidLeave() {
        _capacitor_community_capacitor_googlemaps_native__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.close();
    }
};
ClinicasPage.ctorParameters = () => [];
ClinicasPage.propDecorators = {
    mapView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ['map',] }]
};
ClinicasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


let ClinicasService = class ClinicasService {
    constructor() { }
};
ClinicasService.ctorParameters = () => [];
ClinicasService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#map {\n  height: 50vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaW5pY2FzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRiIsImZpbGUiOiJjbGluaWNhcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFwIHtcclxuICBoZWlnaHQ6IDUwdmg7XHJcbn1cclxuIl19 */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      Devdactic Maps\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id=\"map\" #map></div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_clinicas_clinicas_module_ts.js.map