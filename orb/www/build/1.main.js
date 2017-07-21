webpackJsonp([1],{

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit__ = __webpack_require__(288);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPageModule", function() { return EditPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditPageModule = (function () {
    function EditPageModule() {
    }
    return EditPageModule;
}());
EditPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__edit__["a" /* EditPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit__["a" /* EditPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__edit__["a" /* EditPage */]
        ]
    })
], EditPageModule);

//# sourceMappingURL=edit.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_plans_plans__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_signup__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__invite_invite__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__popover_popover__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_auth_auth__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the EditPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var EditPage = (function () {
    function EditPage(navCtrl, navParams, modalCtrl, viewCtrl, planService, popoverCtrl, authService, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.planService = planService;
        this.popoverCtrl = popoverCtrl;
        this.authService = authService;
        this.storage = storage;
        //getting data about plan from home!
        this.plan = this.navParams.data;
        this.user = this.navParams.get('user');
        this.storage.set('data', this.navParams.data);
        this.storage.get('data').then(function (data) {
            console.log(data);
        });
        this.numbers = Array.apply(null, {
            length: this.plan.days
        }).map(Number.call, Number);
        this.tab1Root = 'template';
    }
    EditPage.prototype.ionViewWillLoad = function () {
        var _this = this;
        //allows this.plan to retrieve data from storage upon being loaded
        this.storage.get('data').then(function (data) {
            _this.plan = data;
        });
        // console.log(this.plan); plan is correctly passed from home.ts
        // console.log(this.user);
        // console.log(this.authService.getUser(this.navParams.get('id')));
    };
    EditPage.prototype.ngOnInit = function () {
        //this.authService.getUser(this.navParams.get('id'));
    };
    EditPage.prototype.launchInvitePage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__invite_invite__["a" /* InvitePage */]);
        modal.present();
    };
    EditPage.prototype.launchLoginPage = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
        modal.onDidDismiss(function (data) {
            if (data) {
                _this.user = data;
                //this.logged = true;
                _this.storage.set('currUser', data);
            }
            else {
                //this.logged = false;
            }
        });
        modal.present();
    };
    EditPage.prototype.launchSignupPage = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__signup_signup__["a" /* SignupPage */]);
        modal.onDidDismiss(function (data) {
            if (data) {
                _this.user = data;
                //this.logged = true;
                _this.storage.set('currUser', data);
            }
            else {
                //this.logged = false;
            }
            // console.log(data);
        });
        modal.present();
    };
    EditPage.prototype.goToHome = function () {
        var opts = { animate: true, animation: "transition", direction: 'forward', duration: 1000 };
        this.navCtrl.setRoot('welcome', true, opts);
        this.navCtrl.popToRoot();
    };
    EditPage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_7__popover_popover__["a" /* PopoverPage */]);
        popover.present({
            ev: myEvent
        });
    };
    EditPage.prototype.logout = function () {
        // console.log(this.user);
        this.authService.logout();
        this.user = null;
        this.navCtrl.setRoot('welcome', false);
        this.navCtrl.popToRoot();
        // console.log(this.user);
    };
    return EditPage;
}());
EditPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])({
        name: 'edit',
        segment: 'edit/:id'
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-edit',template:/*ion-inline-start:"/home/vivek/webdev/angular2app/orbital2017/orb/src/pages/edit/edit.html"*/'<!--\n  Generated template for the EditPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <button ion-button icon-only (click)="goToHome()">\n        <ion-icon name="home"></ion-icon>\n      </button>\n      <h2 style="display:inline; ">You are travelling to {{plan.country}} during {{plan.month}}</h2>\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button *ngIf="user && user.isLoggedIn" (click)="launchInvitePage()">\n        <ion-icon name="person-add"></ion-icon>Invite\n      </button>\n      <button ion-button *ngIf="!user || !user.isLoggedIn" (click)="launchLoginPage()">\n        <ion-icon name="person-add"></ion-icon>Invite\n      </button>\n      <button ion-button *ngIf="user && user.isLoggedIn" (click)="logout()">\n        Logout\n      </button>\n      <button ion-button *ngIf="user && user.isLoggedIn">\n        {{user.email}}\n      </button>\n      <button ion-button *ngIf="!user || !user.isLoggedIn" (click)="launchLoginPage()">\n        Login\n      </button>\n      <button ion-button *ngIf="!user || !user.isLoggedIn" (click)="launchSignupPage()">\n        SignUp\n      </button>\n      <button ion-button (click)="presentPopover($event)">\n      	Plans\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n	<ion-tabs>\n		<ion-tab *ngFor="let number of numbers" [root]="tab1Root" tabTitle="Day {{number + 1}}" [rootParams]="number"></ion-tab>\n	</ion-tabs>\n\n</ion-content>\n'/*ion-inline-end:"/home/vivek/webdev/angular2app/orbital2017/orb/src/pages/edit/edit.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__providers_plans_plans__["a" /* PlansProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_plans_plans__["a" /* PlansProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* PopoverController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* PopoverController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__providers_auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__providers_auth_auth__["a" /* AuthProvider */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]) === "function" && _h || Object])
], EditPage);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=edit.js.map

/***/ })

});
//# sourceMappingURL=1.main.js.map