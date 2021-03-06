webpackJsonp([2],{

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit__ = __webpack_require__(289);
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

/***/ 289:
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
        // this.storage.set('data', this.navParams.data);
        // this.storage.get('data').then((data)=>{
        //   console.log(data);
        // });
        var _this = this;
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
        this.numbers = [0, 1];
        this.counter = -3;
        // this.numbers = Array.apply(null, {
        //     length: this.plan.days
        //   }).map(Number.call, Number);
        this.storage.get('currUser').then(function (data) {
            // console.log(data);
            _this.user = data;
        });
        console.log(this.plan.days, this.plan.month, this.plan.country, this.navParams.data, this.user);
        this.tab1Root = 'template';
    }
    EditPage.prototype.ionViewWillLoad = function () {
        var _this = this;
        //allows this.plan to retrieve data from storage upon being loaded
        // this.storage.get('data').then((data)=>{
        //     this.plan = data;
        // });
        this.authService.getUser(this.navParams.get('id')).subscribe(function (data) {
            console.log(data.plans[data.plans.length - 1]);
            _this.plansID = data.plans[data.plans.length - 1];
            console.log(_this.plansID);
            _this.planService.getPlan(_this.plansID).subscribe(function (data) {
                _this.plan = data;
                console.log(_this.plan);
                console.log(_this.plan.days, _this.plan.month, _this.plan.country);
            });
        });
        // console.log(this.plan); plan is correctly passed from home.ts
        // console.log(this.user);
        //console.log(this.plansID);
    };
    EditPage.prototype.next = function () {
        this.counter++;
        if (this.counter <= this.plan.days.length) {
            this.navCtrl.push('temp', this.plan);
        }
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
        selector: 'page-edit',template:/*ion-inline-start:"/home/vivek/webdev/angular2app/orbital2017/orb/src/pages/edit/edit.html"*/'<!--\n  Generated template for the EditPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <button ion-button icon-only (click)="goToHome()">\n        <ion-icon name="home"></ion-icon>\n      </button>\n      <h2 style="display:inline; ">You are travelling to {{plan.country}} during {{plan.month}} for {{plan.days}} days</h2>\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button *ngIf="user && user.isLoggedIn" (click)="launchInvitePage()">\n        <ion-icon name="person-add"></ion-icon>Invite\n      </button>\n      <button ion-button *ngIf="!user || !user.isLoggedIn" (click)="launchLoginPage()">\n        <ion-icon name="person-add"></ion-icon>Invite\n      </button>\n      <button ion-button *ngIf="user && user.isLoggedIn" (click)="logout()">\n        Logout\n      </button>\n      <button ion-button *ngIf="user && user.isLoggedIn">\n        {{user.email}}\n      </button>\n      <button ion-button *ngIf="!user || !user.isLoggedIn" (click)="launchLoginPage()">\n        Login\n      </button>\n      <button ion-button *ngIf="!user || !user.isLoggedIn" (click)="launchSignupPage()">\n        SignUp\n      </button>\n      <button ion-button (click)="presentPopover($event)">\n      	Plans\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n	<ion-tabs>\n  <!-- {{plan.days}} -->\n		<ion-tab [root]="tab1Root" tabTitle="Day 1" [rootParams]="plan"></ion-tab>\n    <ion-buttons>\n      <button ion-button (click)="next()">\n        Next\n      </button>\n    </ion-buttons>\n	</ion-tabs>\n\n</ion-content>\n'/*ion-inline-end:"/home/vivek/webdev/angular2app/orbital2017/orb/src/pages/edit/edit.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_plans_plans__["a" /* PlansProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_8__providers_auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
], EditPage);

//# sourceMappingURL=edit.js.map

/***/ })

});
//# sourceMappingURL=2.main.js.map