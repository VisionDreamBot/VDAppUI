(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-layout>\r\n  <mat-sidenav-container>\r\n    <mat-sidenav #sidenav role=\"navigation\">\r\n      <!--this is a place for us to add side-nav code-->\r\n      <app-nav-side (sidenavClose)=\"sidenav.close()\"></app-nav-side>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content>\r\n      <!--in here all the content must reside. We will add a navigation header as well-->\r\n      <!--<app-header></app-header>-->\r\n      <app-nav-main (sidenavToggle)=\"sidenav.toggle()\"></app-nav-main>\r\n      <main>\r\n        <router-outlet></router-outlet>\r\n      </main>\r\n      <app-footer></app-footer>\r\n    </mat-sidenav-content>\r\n  </mat-sidenav-container>\r\n</app-layout>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/contact/contact.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contact/contact.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"page-top\" fxLayoutAlign=\"center\" class=\"vd-container-header vd-bgprimary-dream px-4\">\r\n  <h2 class=\"vd-container-text vd-fgprimary-vision\">Contact Us</h2>\r\n</div>\r\n\r\n<div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" class=\"vd-layout-wrapper\">\r\n  <div fxFlex=\"80%\" fxFlex.lt-md=\"100%\" class=\"vd-flex-wrapper\">\r\n    <div class=\"vd-container\">\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4 text-center\">\r\n          <h4>Head Office</h4>\r\n          <address>\r\n            <ul class=\"list-unstyled\">\r\n              <li>\r\n                <span><mat-icon><fa-icon [icon]=\"vdFaMapMarkerAlt\"></fa-icon></mat-icon></span>\r\n                267 West Avenue\r\n              </li>\r\n              <li style=\"padding-left:26px;\">\r\n                Centurion, 2001\r\n              </li>\r\n              <li style=\"padding-left:26px;\">\r\n                <abbr title=\"Phone\"><strong>P:</strong></abbr> 011 350 7096\r\n              </li>\r\n            </ul>\r\n          </address>\r\n        </div>\r\n\r\n        <hr class=\"clearfix w-100 d-md-none pb\">\r\n\r\n        <div class=\"col-md-8 text-center\">\r\n          <h4>Support &amp; Info</h4>\r\n          <address class=\"text-left\" style=\"padding-left:100px;\">\r\n            <strong>Info:</strong> <a href=\"mailto:info@vision-dream.local\">info@vision-dream.local</a><br />\r\n            <strong>Support:</strong> <a href=\"mailto:support@vision-dream.local\">support@vision-dream.local</a><br />\r\n            <strong>Admin:</strong> <a href=\"mailto:admin@vision-dream.local\">admin@vision-dream.local</a>\r\n          </address>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Scroll to Top Button -->\r\n<a class=\"scroll-to-top rounded\" href=\"#page-top\">\r\n  <fa-icon [icon]=\"vdFaAngleUp\"></fa-icon>\r\n</a>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/auth/components/login/login.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/auth/components/login/login.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"page-top\" fxLayoutAlign=\"center\" class=\"vd-container-header vd-bgprimary-dream px-4\">\r\n  <h2 class=\"vd-container-text vd-fgprimary-vision\">Log In To Vision-Dream</h2>\r\n</div>\r\n\r\n<div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" class=\"vd-layout-wrapper\">\r\n  <div fxFlex=\"80%\" fxFlex.lt-md=\"100%\" class=\"vd-flex-wrapper\">\r\n    <div class=\"vd-container\">\r\n\r\n      <div class=\"form-container\">\r\n        <!----------------- Form Log In Section: Start ----------------->\r\n        <form class=\"form-login\">\r\n          <div class=\"text-center mb-4\">\r\n            <!-- Brand Icon -->\r\n            <a class=\"clearfix form-item\" href=\"/#/home\">\r\n              <img src=\"../../assets/vd/brand/images/vd_brand_yelblu_sol_tra_64x64.png\"\r\n                   class=\"rounded mx-auto\" alt=\"Site Brand\" width=\"64\" height=\"64\" />\r\n            </a>\r\n            <!-- Form Login Header -->\r\n            <h1 class=\"h3 mb-3 font-weight-normal\">Please log in</h1>\r\n          </div>\r\n          <!-- E-mail address -->\r\n          <div class=\"form-label-group\">\r\n            <input type=\"email\" id=\"emailAddress\" name=\"emailAddress\" class=\"form-control\" title=\"Enter a valid e-mail address\"\r\n                   placeholder=\"E-mail address\" required autocomplete=\"off\" autofocus>\r\n            <label for=\"emailAddress\">E-mail address</label>\r\n          </div>\r\n          <!-- Password -->\r\n          <div class=\"form-label-group\">\r\n            <input type=\"password\" id=\"inputPassword\" name=\"inputPassword\" class=\"form-control\" title=\"A minimum of 6 characters\"\r\n                   placeholder=\"Password\" required autocomplete=\"off\">\r\n            <label for=\"inputPassword\">Password</label>\r\n          </div>\r\n\r\n          <div class=\"d-flex justify-content-around\">\r\n            <!-- Checkbox -->\r\n            <div class=\"checkbox mb-3\">\r\n              <label>\r\n                <input type=\"checkbox\" value=\"rememberMe\"> Remember me\r\n              </label>\r\n            </div>\r\n            <!-- Forgot E-mail / Password -->\r\n            <div class=\"form-item\">\r\n              <a href=\"/#/register\">Forgot E-mail / Password?</a>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Log In Button -->\r\n          <div class=\"form-item h3 mb-3\">\r\n            <button class=\"text-uppercase btn vd-button-primary btn-lg btn-block\" type=\"submit\">\r\n              Log in\r\n            </button>\r\n          </div>\r\n\r\n          <!-- New users -->\r\n          <div class=\"form-item text-center\">\r\n            <p>Are you a new user?</p>\r\n          </div>\r\n\r\n          <!-- Register Now Button -->\r\n          <div class=\"text-uppercase\">\r\n            <a mat-button class=\"btn vd-button-secondary btn-lg btn-block\"\r\n               href=\"/#/register\" role=\"button\">\r\n              Register Now\r\n            </a>\r\n          </div>\r\n\r\n          <hr />\r\n\r\n          <!---------- Terms and Conditions link ---------->\r\n          <div class=\"form-item text-muted text-center\">\r\n            <p>\r\n              By logging in, I agree to the <a href=\"/#/legal/terms\">T&Cs</a>.\r\n            </p>\r\n          </div>\r\n\r\n        </form>\r\n        <!----------------- Form Log In Section: End ----------------->\r\n      </div>\r\n\r\n      <hr />\r\n\r\n      <div class=\"card\">\r\n\r\n        <h5 class=\"card-header info-color white-text text-center py-4\">\r\n          <strong>Sign in</strong>\r\n        </h5>\r\n\r\n        <div class=\"card-body px-lg-5 pt-0\">\r\n\r\n          <form class=\"md-form\" style=\"color: #757575;\">\r\n\r\n            <input type=\"email\" id=\"materialLoginFormEmail\" class=\"form-control\">\r\n            <label for=\"materialLoginFormEmail\">E-mail</label>\r\n\r\n\r\n            <input type=\"password\" id=\"materialLoginFormPassword\" class=\"form-control\">\r\n            <label for=\"materialLoginFormPassword\">Password</label>\r\n\r\n\r\n            <div class=\"d-flex align-items-center justify-content-between\">\r\n              <div class=\"form-check\">\r\n                <input type=\"checkbox\" class=\"form-check-input\" id=\"materialLoginFormRemember\">\r\n                <label class=\"form-check-label\" for=\"materialLoginFormRemember\">Remember me</label>\r\n              </div>\r\n              <div>\r\n                <a href=\"\">Forgot password?</a>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <button class=\"btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0\" type=\"submit\">Sign in</button>\r\n\r\n            <div class=\"text-center\">\r\n              <p>\r\n                Not a member?\r\n                <a href=\"\">Register</a>\r\n              </p>\r\n\r\n              <p>or sign in with:</p>\r\n              <a type=\"button\" class=\"btn-floating btn-fb btn-sm\">\r\n                <i class=\"fab fa-facebook-f\"></i>\r\n              </a>\r\n              <a type=\"button\" class=\"btn-floating btn-tw btn-sm\">\r\n                <i class=\"fab fa-twitter\"></i>\r\n              </a>\r\n              <a type=\"button\" class=\"btn-floating btn-li btn-sm\">\r\n                <i class=\"fab fa-linkedin-in\"></i>\r\n              </a>\r\n              <a type=\"button\" class=\"btn-floating btn-git btn-sm\">\r\n                <i class=\"fab fa-github\"></i>\r\n              </a>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Scroll to Top Button -->\r\n<a class=\"scroll-to-top rounded\" href=\"#page-top\">\r\n  <i class=\"fas fa-angle-up\"></i>\r\n  <!--<fa-icon [icon]=\"vdFaAngleUp\"></fa-icon>-->\r\n</a>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/auth/components/register/register.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/auth/components/register/register.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"page-top\" fxLayoutAlign=\"center\" class=\"vd-container-header vd-bgprimary-dream px-4\">\r\n  <h2 class=\"vd-container-text vd-fgprimary-vision\">Register A New Account Profile</h2>\r\n</div>\r\n\r\n<div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" class=\"vd-layout-wrapper\">\r\n  <div fxFlex=\"80%\" fxFlex.lt-md=\"100%\" class=\"vd-flex-wrapper\">\r\n    <div class=\"vd-container\">\r\n\r\n      <p class=\"text-center h4 mb-4 font-weight-normal\">Capture account information below:</p>\r\n      <!--------------------- Card container: Start --------------------->\r\n      <div class=\"card border-dark mb-3 offset-md-3\" style=\"max-width: 540px;\">\r\n        <!---------- Card header ---------->\r\n        <div class=\"card-header text-center\">\r\n          <p class=\"card-title h3 mb-3\">\r\n            <strong>Create account</strong>\r\n          </p>\r\n        </div>\r\n        <!---------- Card body: Start ---------->\r\n        <div class=\"card-body px-lg-5 pt-0\">\r\n          <h5 class=\"card-title h4 mb-4\">\r\n            <span class=\"sr-only\">Special title treatment</span>\r\n          </h5>\r\n          <!---------- Register account form: Start ---------->\r\n          <form class=\"card-text mb-3 form-register\" (ngSubmit)=\"onSubmit()\">\r\n            <div class=\"form-row\">\r\n              <!---------- Form row 1 - First name ---------->\r\n              <div class=\"form-label-group col mb-4\">\r\n                <input type=\"text\" class=\"form-control\" id=\"firstName\" name=\"firstName\" formControlName=\"firstName\"\r\n                       placeholder=\"First name\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\r\n                <label for=\"firstName\">First name</label>\r\n                <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"f.firstName.errors.required\">First name is required.</div>\r\n                </div>\r\n              </div>\r\n              <!---------- Form row 1 - Last name ---------->\r\n              <div class=\"form-label-group col mb-4\">\r\n                <input type=\"text\" class=\"form-control\" id=\"lastName\" name=\"lastName\" formControlName=\"lastName\"\r\n                       placeholder=\"Last name\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\r\n                <label for=\"lastName\">Last name</label>\r\n                <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"f.lastName.errors.required\">Last name is required.</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!---------- Email ---------->\r\n            <div class=\"form-label-group\">\r\n              <input type=\"email\" class=\"form-control mb-4\" id=\"emailAddress\" name=\"emailAddress\" formControlName=\"emailAddress\"\r\n                     placeholder=\"E-mail address\" [ngClass]=\"{ 'is-invalid': submitted && f.emailAddress.errors }\" />\r\n              <label for=\"emailAddress\">E-mail address</label>\r\n              <div *ngIf=\"submitted && f.emailAddress.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.emailAddress.errors.required\">E-mail address is required.</div>\r\n                <div *ngIf=\"f.emailAddress.errors.email\">E-mail address must be a valid e-mail address.</div>\r\n              </div>\r\n            </div>\r\n            <!---------- Password ---------->\r\n            <div class=\"form-label-group\">\r\n              <input type=\"password\" class=\"form-control mb-4\" id=\"inputPassword\" name=\"inputPassword\" formControlName=\"inputPassword\"\r\n                     placeholder=\"Password\" [ngClass]=\"{ 'is-invalid': submitted && f.inputPassword.errors }\" />\r\n              <label for=\"inputPassword\">Password</label>\r\n              <div *ngIf=\"submitted && f.inputPassword.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.inputPassword.errors.required\">Password is required.</div>\r\n                <div *ngIf=\"f.inputPassword.errors.minlength\">Password must be at least 6 characters long.</div>\r\n              </div>\r\n            </div>\r\n            <!---------- Confirm password ---------->\r\n            <div class=\"form-label-group\">\r\n              <input type=\"password\" class=\"form-control mb-4\" id=\"confirmPassword\" name=\"confirmPassword\"\r\n                     formControlName=\"confirmPassword\" placeholder=\"Confirm password\" aria-describedby=\"confirmPasswordHelpBlock\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && f.confirmPassword.errors }\" />\r\n              <label for=\"confirmPassword\">Confirm password</label>\r\n              <!--<div class=\"hint-text text-muted text-center\">\r\n            <p class=\"mb-4\" id=\"confirmPasswordHelpBlock\">\r\n              At least 6 characters for both passwords\r\n            </p>\r\n          </div>-->\r\n              <div *ngIf=\"submitted && f.confirmPassword.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.confirmPassword.errors.required\">Confirm password is required.</div>\r\n                <div *ngIf=\"f.confirmPassword.errors.minlength\">Confirm password must be at least 6 characters long.</div>\r\n              </div>\r\n            </div>\r\n            <!---------- Phone number ---------->\r\n            <div class=\"form-label-group\">\r\n              <input type=\"text\" class=\"form-control mb-4\" id=\"cellNumber\" name=\"cellNumber\" formControlName=\"cellNumber\"\r\n                     placeholder=\"Cellphone number\" aria-describedby=\"cellNumberHelpBlock\">\r\n              <label for=\"cellNumber\">Cellphone number</label>\r\n              <!--<div class=\"hint-text text-muted text-center\">\r\n            <p class=\"mb-4\" id=\"cellNumberHelpBlock\">\r\n              Optional - for two step authentication\r\n            </p>\r\n          </div>-->\r\n              <div *ngIf=\"submitted && f.cellNumber.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.cellNumber.errors.required\">Cellphone number is required.</div>\r\n              </div>\r\n            </div>\r\n            <!---------- Register button ---------->\r\n            <div class=\"form-group my-4 text-center\">\r\n              <button mat-stroked-button [disabled]=\"loading\"\r\n                      class=\"btn vd-button-primary\"\r\n                      aria-label=\"Register new user account\">\r\n                <!--<mat-icon>user</mat-icon>-->\r\n                Register Account\r\n              </button>\r\n              <!--<button [onClick]=\"loading\" class=\"btn btn-primary\">Register</button>-->\r\n            </div>\r\n            <hr />\r\n            <!---------- Terms of Service and Privacy Notice links ---------->\r\n            <div class=\"text-center\">\r\n              <small>\r\n                By clicking <em>Register Account</em> you agree to VisionDream's\r\n                <a href=\"/#/legal/terms\">Terms of Service</a> and\r\n                <a href=\"/#/legal/privacy\">Privacy Notice</a>.\r\n              </small>\r\n            </div>\r\n          </form>\r\n          <!---------- Register account form: End ---------->\r\n        </div>\r\n        <!---------- Card body: End ---------->\r\n      </div>\r\n      <!---------- Card container: End ---------->\r\n\r\n      <hr />\r\n\r\n      <div class=\"card\">\r\n\r\n        <h5 class=\"card-header info-color white-text text-center py-4\">\r\n          <strong>Sign up</strong>\r\n        </h5>\r\n\r\n        <div class=\"card-body px-lg-5 pt-0\">\r\n\r\n          <form class=\"md-form\" style=\"color: #757575;\">\r\n\r\n            <input type=\"text\" id=\"materialRegisterFormFirstName\" class=\"form-control\">\r\n            <label for=\"materialRegisterFormFirstName\">First name</label>\r\n\r\n            <input type=\"email\" id=\"materialRegisterFormLastName\" class=\"form-control\">\r\n            <label for=\"materialRegisterFormLastName\">Last name</label>\r\n\r\n            <input type=\"email\" id=\"materialRegisterFormEmail\" class=\"form-control\">\r\n            <label for=\"materialRegisterFormEmail\">E-mail</label>\r\n\r\n            <input type=\"password\" id=\"materialRegisterFormPassword\" class=\"form-control\" aria-describedby=\"materialRegisterFormPasswordHelpBlock\">\r\n            <label for=\"materialRegisterFormPassword\">Password</label>\r\n\r\n            <small id=\"materialRegisterFormPasswordHelpBlock\" class=\"form-text text-muted mb-4\">\r\n              At least 8 characters and 1 digit\r\n            </small>\r\n\r\n            <input type=\"password\" id=\"materialRegisterFormPhone\" class=\"form-control\" aria-describedby=\"materialRegisterFormPhoneHelpBlock\">\r\n            <label for=\"materialRegisterFormPhone\">Phone number</label>\r\n\r\n            <small id=\"materialRegisterFormPhoneHelpBlock\" class=\"form-text text-muted mb-4\">\r\n              Optional - for two step authentication\r\n            </small>\r\n\r\n            <div class=\"form-check\">\r\n              <input type=\"checkbox\" class=\"form-check-input\" id=\"materialRegisterFormNewsletter\">\r\n              <label class=\"form-check-label\" for=\"materialRegisterFormNewsletter\">Subscribe to our newsletter</label>\r\n            </div>\r\n\r\n\r\n            <button class=\"btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0\" type=\"submit\">Sign in</button>\r\n\r\n            <div class=\"text-center\">\r\n              <p>or sign up with:</p>\r\n\r\n              <a type=\"button\" class=\"btn-floating btn-fb btn-sm\">\r\n                <i class=\"fab fa-facebook-f\"></i>\r\n              </a>\r\n              <a type=\"button\" class=\"btn-floating btn-tw btn-sm\">\r\n                <i class=\"fab fa-twitter\"></i>\r\n              </a>\r\n              <a type=\"button\" class=\"btn-floating btn-li btn-sm\">\r\n                <i class=\"fab fa-linkedin-in\"></i>\r\n              </a>\r\n              <a type=\"button\" class=\"btn-floating btn-git btn-sm\">\r\n                <i class=\"fab fa-github\"></i>\r\n              </a>\r\n\r\n              <hr>\r\n\r\n              <p>\r\n                By clicking\r\n                <em>Sign up</em> you agree to our\r\n                <a href=\"\" target=\"_blank\">terms of service</a> and\r\n                <a href=\"\" target=\"_blank\">terms of service</a>.\r\n              </p>\r\n            </div>\r\n\r\n          </form>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Scroll to Top Button -->\r\n<a class=\"scroll-to-top rounded\" href=\"#page-top\">\r\n  <i class=\"fas fa-angle-up\"></i>\r\n  <!--<fa-icon [icon]=\"vdFaAngleUp\"></fa-icon>-->\r\n</a>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" class=\"vd-layout-wrapper\">\r\n  <div fxFlex=\"100%\" fxFlex.lt-md=\"100%\" class=\"vd-flex-wrapper\">-->\r\n\r\n<footer class=\"vd-bgprimary-dream border-top\">\r\n  <div class=\"container py-3\">\r\n    <div class=\"fg-black\">\r\n      <small>\r\n        <span>\r\n          &copy; {{VDBuildVersionModel.VDCopyright}}\r\n          <mat-icon class=\"vd-icon-balancescale\">\r\n            <fa-icon [icon]=\"vdFaBalanceScale\" class=\"fa-icon-size-small-left\"></fa-icon>\r\n          </mat-icon>\r\n          <a [routerLink]='[\"/legal/terms\"]'>Terms</a>\r\n          <mat-icon class=\"vd-icon-plus\">\r\n            <fa-icon [icon]=\"vdFaPlus\" class=\"fa-icon-size-small\"></fa-icon>\r\n          </mat-icon>\r\n          <a [routerLink]='[\"/legal/privacy\"]'>Privacy</a>\r\n          <mat-icon class=\"vd-icon-usersecret\">\r\n            <fa-icon [icon]=\"vdFaUserSecret\" class=\"fa-icon-size-small-right\"></fa-icon>\r\n          </mat-icon>\r\n        </span>\r\n        <span>\r\n          <mat-icon class=\"vd-icon-circle\">\r\n            <fa-icon [icon]=\"vdFaCircle\" class=\"fa-icon-size-extra-small\"></fa-icon>\r\n          </mat-icon>\r\n          Super-powered by\r\n          <a href=\"{{VDBuildVersionModel.VDUrlLocal}}\" target=\"_blank\" rel=\"noreferrer\">{{VDBuildVersionModel.VDDesc}}</a>\r\n        </span>\r\n      </small>\r\n    </div>\r\n  </div>\r\n</footer>\r\n\r\n  <!--</div>\r\n</div>-->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>header works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"page-top\" fxLayoutAlign=\"center\" class=\"vd-container-header vd-bgprimary-dream px-4\">\r\n  <h1 class=\"vd-container-text vd-fgprimary-vision\">Welcome</h1>\r\n</div>\r\n\r\n<div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" class=\"vd-layout-wrapper\">\r\n  <div fxFlex=\"80%\" fxFlex.lt-md=\"100%\" class=\"vd-flex-wrapper\">\r\n    <div class=\"vd-container\">\r\n\r\n      <div class=\"vd-welcome\">\r\n        <span class=\"vd-fgprimary-vision\">Vision</span>\r\n        <span class=\"vd-fgprimary-dream\">Dream </span>\r\n        <span class=\"vd-fgprimary-hyphen\">ICT Solutions</span>\r\n      </div>\r\n\r\n      <p>\r\n        Our vision to become a dream focuses on providing small and medium enterprises with\r\n        custom designed Information Communications Technology (ICT) solutions. We favour a philosophy of simple, flexible\r\n        and elegant solutions that add value to address business needs. We pride ourselves on delivering solutions that are\r\n        relevant to your business and that keep abreast with current technology standards.\r\n      </p>\r\n      <p>\r\n        We are not driven by ICT technology trends or hype, but by good old-fashioned common\r\n        sense, so to realise your business's ICT <span class=\"vd-fgprimary-vision\">Vision</span> and\r\n        <span class=\"vd-fgprimary-dream\">Dream</span>.\r\n      </p>\r\n\r\n      <h3 class=\"vd-fgprimary-dream text-center\">Recent Projects</h3>\r\n\r\n      <mat-tab-group (selectedTabChange)=\"executeSelectedChange($event)\" class=\"container fg-black\">\r\n        <mat-tab label=\"VisionDream\">\r\n          <p>Our home base project.</p>\r\n        </mat-tab>\r\n        <mat-tab label=\"LCS GFI\">\r\n          <p>LCS Global Forex Institute website project. The business is offering Forex training to all persons interested.</p>\r\n        </mat-tab>\r\n        <mat-tab label=\"Soweto Tutor\">\r\n          <p>\r\n            Soweto Tutor website project. The business is offering teaching of <b>Mathematics</b> and <b>Science</b> that caters\r\n            for children and adults.\r\n          </p>\r\n        </mat-tab>\r\n      </mat-tab-group>\r\n\r\n      <h3 class=\"vd-fgprimary-dream text-center\">Follow us</h3>\r\n      <div id=\"container-social\">\r\n        <a class=\"btn-facebook btn-global-social\"\r\n           href=\"https://web.facebook.com/VisionDreamICT/\" target=\"_blank\" rel=\"noreferrer\">\r\n        </a>\r\n        <a class=\"btn-twitter btn-global-social\"\r\n           href=\"https://twitter.com/VisionDreamICT\" target=\"_blank\" rel=\"noreferrer\">\r\n        </a>\r\n        <a class=\"btn-linkedin btn-global-social\"\r\n           href=\"https://www.linkedin.com/in/vision-dream-ict-solutions-7a73bb14a/\" target=\"_blank\" rel=\"noreferrer\">\r\n        </a>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Scroll to Top Button -->\r\n<a class=\"scroll-to-top rounded\" href=\"#page-top\">\r\n  <!--<i class=\"fas fa-angle-up\"></i>-->\r\n  <fa-icon [icon]=\"vdFaAngleUp\"></fa-icon>\r\n</a>\r\n\r\n\r\n<!--\r\n- Copyright © 2019 VisionDream ICT Solutions. All Rights Reserved.\r\n- Use of this source code is governed by VisionDream-style license\r\n- that can be found in the LICENSE file at the below link address\r\n- http://visiondream.local/#/legal/terms\r\n-->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/layout.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/layout.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" class=\"layout-wrapper\">\r\n  <div fxFlex=\"100%\" fxFlex.lt-md=\"100%\" class=\"flex-wrapper\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navigation/nav-main/nav-main.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navigation/nav-main/nav-main.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" class=\"vd-layout-wrapper\">\r\n  <div fxFlex=\"100%\" fxFlex.lt-md=\"100%\" class=\"vd-flex-wrapper\">-->\r\n\r\n<mat-toolbar color=\"primary\">\r\n  <mat-toolbar-row>\r\n    <!-- Navigation Menu Icon -->\r\n    <span fxHide.gt-xs>\r\n      <button mat-icon-button (click)=\"onToggleSidenav()\">\r\n        <mat-icon class=\"vd-icon-bars\" aria-hidden=\"false\" aria-label=\"Navigation menu\">\r\n          <fa-icon [icon]=\"vdFaBars\"></fa-icon>\r\n        </mat-icon>\r\n      </button>\r\n    </span>\r\n    <div>\r\n      <a class=\"p-2 btn btn-nav-brand btn-lg\" [routerLink]='[\"/home\"]' role=\"button\"\r\n         [routerLinkActive]=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n        VisionDream\r\n      </a>\r\n    </div>\r\n    <div fxFlex fxLayout fxLayoutAlign=\"start\" fxHide.xs>\r\n      <ul fxLayout fxLayoutGap=\"15px\" class=\"navigation-items\">\r\n        <li>\r\n          <a [routerLink]='[\"/services\"]' [routerLinkActive]=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n            Services\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a [routerLink]='[\"/projects\"]' [routerLinkActive]=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n            Projects\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a [routerLink]='[\"/contact\"]' [routerLinkActive]=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n            Contact\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <div fxFlex fxLayout fxLayoutAlign=\"end\" fxHide.xs>\r\n      <ul fxLayout fxLayoutGap=\"15px\" class=\"navigation-items\">\r\n        <li>\r\n          <a [routerLink]='[\"/register\"]' [routerLinkActive]=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n            <mat-icon class=\"vd-icon-user\" aria-hidden=\"false\" aria-label=\"Register account\">\r\n              <fa-icon [icon]=\"vdFaUser\"></fa-icon>\r\n            </mat-icon>\r\n            Register\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a [routerLink]='[\"/login\"]' [routerLinkActive]=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n            <mat-icon class=\"vd-icon-signin\" aria-hidden=\"false\" aria-label=\"Log in\">\r\n              <fa-icon [icon]=\"vdFaSignInAlt\"></fa-icon>\r\n            </mat-icon>\r\n            Log In\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n  <!--</div>\r\n</div>-->\r\n\r\n<!--<nav class=\"navbar navbar-expand-md navbar-light fixed-top vd-bgprimary-dream shadow\">\r\n  <a class=\"p-2 btn vd-btn-nav-brand btn-lg\" [routerLink]='[\"/home\"]' role=\"button\"\r\n     [routerLinkActive]=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n  </a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\"\r\n          aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\r\n    <ul class=\"navbar-nav mr-auto navigation-items\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]='[\"/home\"]' [routerLinkActive]=\"active\"\r\n           [routerLinkActiveOptions]=\"{exact: true}\">\r\n          Vision-Dream\r\n          <span class=\"sr-only\">(current)</span>\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]='[\"/services\"]' [routerLinkActive]=\"active\"\r\n           [routerLinkActiveOptions]=\"{exact: true}\">\r\n          Services\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]='[\"/projects\"]' [routerLinkActive]=\"active\"\r\n           [routerLinkActiveOptions]=\"{exact: true}\">\r\n          Projects\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]='[\"/contact\"]' [routerLinkActive]=\"active\"\r\n           [routerLinkActiveOptions]=\"{exact: true}\">\r\n          Contact\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]='[\"/register\"]' [routerLinkActive]=\"active\"\r\n           [routerLinkActiveOptions]=\"{exact: true}\">\r\n          Register\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]='[\"/login\"]' [routerLinkActive]=\"active\"\r\n           [routerLinkActiveOptions]=\"{exact: true}\">\r\n          Log In\r\n        </a>\r\n      </li>\r\n    </ul>\r\n    <form class=\"form-inline mt-2 mt-md-0\">\r\n      <input type=\"text\" class=\"form-control mr-sm-2\" placeholder=\"Search\" aria-label=\"Search\">\r\n      <button type=\"submit\" class=\"btn btn-outline-success my-2 my-sm-0\">Search</button>\r\n    </form>\r\n  </div>\r\n</nav>-->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navigation/nav-side/nav-side.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navigation/nav-side/nav-side.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-nav-list>\r\n  <a mat-list-item [routerLink]='[\"/home\"]' (click)=\"onSidenavClose()\">\r\n    <mat-icon class=\"vd-icon-padding\">\r\n      <fa-icon [icon]=\"vdFaHome\" class=\"vd-icon-size\"></fa-icon>\r\n    </mat-icon>\r\n    <span class=\"nav-caption\">Home</span>\r\n  </a>\r\n  <a mat-list-item [routerLink]='[\"/services\"]' (click)=\"onSidenavClose()\">\r\n    <mat-icon class=\"vd-icon-padding\">\r\n      <fa-icon [icon]=\"vdFaClipboardList\" class=\"vd-icon-size\"></fa-icon>\r\n    </mat-icon>\r\n    <span class=\"nav-caption\">Services</span>\r\n  </a>\r\n  <a mat-list-item [routerLink]='[\"/projects\"]' (click)=\"onSidenavClose()\">\r\n    <mat-icon class=\"vd-icon-padding\">\r\n      <fa-icon [icon]=\"vdFaProjectDiagram\" class=\"vd-icon-size\"></fa-icon>\r\n    </mat-icon>\r\n    <span class=\"nav-caption\">Projects</span>\r\n  </a>\r\n  <a mat-list-item [routerLink]='[\"/contact\"]' (click)=\"onSidenavClose()\">\r\n    <mat-icon class=\"vd-icon-padding\">\r\n      <fa-icon [icon]=\"vdFaEnvelope\" class=\"vd-icon-size\"></fa-icon>\r\n    </mat-icon>\r\n    <span class=\"nav-caption\">Contact</span>\r\n  </a>\r\n  <a mat-list-item [routerLink]='[\"/register\"]' (click)=\"onSidenavClose()\">\r\n    <mat-icon class=\"vd-icon-padding\">\r\n      <fa-icon [icon]=\"vdFaUser\" class=\"vd-icon-size\"></fa-icon>\r\n    </mat-icon>\r\n    <span class=\"nav-caption\">Register</span>\r\n  </a>\r\n  <a mat-list-item [routerLink]='[\"/login\"]' (click)=\"onSidenavClose()\">\r\n    <mat-icon class=\"vd-icon-padding\">\r\n      <fa-icon [icon]=\"vdFaSignInAlt\" class=\"vd-icon-size\"></fa-icon>\r\n    </mat-icon>\r\n    <span class=\"nav-caption\">Log In</span>\r\n  </a>\r\n</mat-nav-list>\r\n\r\n<mat-list-item [matMenuTriggerFor]=\"menu\">\r\n  <mat-icon>\r\n    <fa-icon [icon]=\"vdFaSort\" class=\"fa-icon-size\"></fa-icon>\r\n  </mat-icon>\r\n  <a matline>Example</a>\r\n</mat-list-item>\r\n<mat-menu #menu=\"matMenu\">\r\n  <button mat-menu-item (click)=\"onSidenavClose()\">View profile</button>\r\n  <button mat-menu-item (click)=\"onSidenavClose()\">Add contact</button>\r\n</mat-menu>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/errors/not-found/not-found.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/errors/not-found/not-found.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section fxLayout=\"column wrap\" fxLayoutGap=\"60px\" fxLayoutAlign=\"center center\">\r\n\r\n  <div fxFlex>\r\n    404 We are searching for your page...\r\n  </div>\r\n\r\n  <div fxFlex>\r\n    <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\r\n  </div>\r\n\r\n  <div fxFlex>\r\n    ... But we cannot find it.\r\n  </div>\r\n\r\n</section>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/errors/server-error/server-error.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/errors/server-error/server-error.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section fxLayout=\"column wrap\" fxLayoutAlign=\"center center\" fxLayoutGap=\"30px\">\r\n\r\n  <div fxFlex>\r\n    <p>500 Server Error</p>\r\n    <p>We are sorry for the inconvinience. Please report this error.</p>\r\n  </div>\r\n\r\n  <div fxFlex>\r\n    <mat-checkbox (change)=\"checkChanged($event)\" color=\"primary\">I want to report this error.</mat-checkbox>\r\n  </div>\r\n\r\n  <div fxFlex *ngIf=\"reportedError\">\r\n    <mat-progress-spinner mode=\"determinate\" [value]=\"errorPercentage\"></mat-progress-spinner>\r\n    <h1>{{errorPercentage}}%</h1>\r\n  </div>\r\n\r\n</section>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/legal/privacy/privacy.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/legal/privacy/privacy.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Privacy page works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/legal/terms/terms.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/legal/terms/terms.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Terms of Service page works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/projects/projects.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/projects/projects.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"page-top\" fxLayoutAlign=\"center\" class=\"vd-container-header vd-bgprimary-dream px-4\">\r\n  <h2 class=\"vd-container-text vd-fgprimary-vision\">Our Projects Portfolio </h2>\r\n</div>\r\n\r\n<div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" class=\"vd-layout-wrapper\">\r\n  <div fxFlex=\"80%\" fxFlex.lt-md=\"100%\" class=\"vd-flex-wrapper\">\r\n    <div class=\"vd-container\">\r\n\r\n      <div class=\"text-center\">\r\n        <a class=\"clearfix form-item\" routerLink=\"/home\">\r\n          <img src=\"../../assets/vd/content/images/construction_girl.jpg\"\r\n               class=\"rounded mx-auto\" alt=\"Under Construction\" width=\"380\" height=\"380\" />\r\n        </a>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Scroll to Top Button -->\r\n<a class=\"scroll-to-top rounded\" href=\"#page-top\">\r\n  <fa-icon [icon]=\"vdFaAngleUp\"></fa-icon>\r\n</a>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/services/services.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/services/services.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"page-top\" fxLayoutAlign=\"center\" class=\"vd-container-header vd-bgprimary-dream px-4\">\r\n  <h2 class=\"vd-container-text vd-fgprimary-vision\">Our Services</h2>\r\n</div>\r\n\r\n<div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" class=\"vd-layout-wrapper\">\r\n  <div fxFlex=\"80%\" fxFlex.lt-md=\"100%\" class=\"vd-flex-wrapper\">\r\n    <div class=\"vd-container\">\r\n\r\n      <h5 class=\"vd-fgprimary-dream\">Software Engineering Services</h5>\r\n      <p>\r\n        Our software engineering services and customized development include:\r\n      </p>\r\n      <ol>\r\n        <li>Websites</li>\r\n        <li>Web-based interfaces</li>\r\n        <li>Database-driven line-of-business systems</li>\r\n        <li>Customized reporting</li>\r\n      </ol>\r\n      <p>\r\n        This allows us to deliver high-quality systems within shorter than expected\r\n        time-frames - translating into lower cost of development for our clients.\r\n      </p>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Scroll to Top Button -->\r\n<a class=\"scroll-to-top rounded\" href=\"#page-top\">\r\n  <fa-icon [icon]=\"vdFaAngleUp\"></fa-icon>\r\n</a>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/dialogs/error-dialog/error-dialog.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/dialogs/error-dialog/error-dialog.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n\r\n  <h1 mat-dialog-title>Error message</h1>\r\n  <mat-dialog-content>\r\n    <p>{{data.errorMessage}}</p>\r\n  </mat-dialog-content>\r\n\r\n  <mat-dialog-actions>\r\n    <button mat-raised-button color=\"warn\" (click)=\"closeDialog()\">OK</button>\r\n  </mat-dialog-actions>\r\n\r\n</section>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/dialogs/global-dialog/global-dialog.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/dialogs/global-dialog/global-dialog.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>global-dialog works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/dialogs/logout-dialog/logout-dialog.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/dialogs/logout-dialog/logout-dialog.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Logout Modal-->\r\n<div class=\"modal fade\" id=\"logoutModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Ready to Leave?</h5>\r\n        <button class=\"close\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">×</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">Select \"Logout\" below if you are ready to end your current session.</div>\r\n      <div class=\"modal-footer\">\r\n        <button class=\"btn btn-secondary\" type=\"button\" data-dismiss=\"modal\">Cancel</button>\r\n        <a class=\"btn btn-primary\" href=\"login.html\">Logout</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/dialogs/success-dialog/success-dialog.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/dialogs/success-dialog/success-dialog.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n\r\n  <h1 mat-dialog-title>Success message</h1>\r\n  <mat-dialog-content>\r\n    <p>Action completed successfully</p>\r\n  </mat-dialog-content>\r\n\r\n  <mat-dialog-actions>\r\n    <button mat-raised-button color=\"primary\" [mat-dialog-close]=\"true\">OK</button>\r\n  </mat-dialog-actions>\r\n\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*----- Side nav css styles -----*/\nmat-sidenav-container, mat-sidenav, mat-sidenav-content {\n  height: var(--full-page-height);\n}\nmat-sidenav {\n  width: 250px;\n}\nmain {\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFZpc2lvbi1EcmVhbVxcdmQtc291cmNlXFxyZXBvc1xcZGV2XFx3ZWJcXFZEU29sdXRpb25cXFZEQXBwVUkvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtDQUFBO0FBQ0E7RUFDRSwrQkFBQTtBQ0NGO0FERUE7RUFDRSxZQUFBO0FDQ0Y7QURFQTtFQUNFLFVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0gU2lkZSBuYXYgY3NzIHN0eWxlcyAtLS0tLSovXHJcbm1hdC1zaWRlbmF2LWNvbnRhaW5lciwgbWF0LXNpZGVuYXYsIG1hdC1zaWRlbmF2LWNvbnRlbnQge1xyXG4gIGhlaWdodDogdmFyKC0tZnVsbC1wYWdlLWhlaWdodCk7XHJcbn1cclxuXHJcbm1hdC1zaWRlbmF2IHtcclxuICB3aWR0aDogMjUwcHg7XHJcbn1cclxuXHJcbm1haW4ge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuIiwiLyotLS0tLSBTaWRlIG5hdiBjc3Mgc3R5bGVzIC0tLS0tKi9cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciwgbWF0LXNpZGVuYXYsIG1hdC1zaWRlbmF2LWNvbnRlbnQge1xuICBoZWlnaHQ6IHZhcigtLWZ1bGwtcGFnZS1oZWlnaHQpO1xufVxuXG5tYXQtc2lkZW5hdiB7XG4gIHdpZHRoOiAyNTBweDtcbn1cblxubWFpbiB7XG4gIHBhZGRpbmc6IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm2015/ngx-logger.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");




























let AppComponent = class AppComponent {
    // Constructor
    constructor(_Logger) {
        this._Logger = _Logger;
        // Properties
        this.appName = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].CLIENT_APP_NAME;
        this.serverSecrete = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_SECRETE;
        this.serverApiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_API_URL;
        // Icons - Generic
        this.vdFaAngleUp = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faAngleUp"];
        this.vdFaAngleDown = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faAngleDown"];
        this.vdFaAngleLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faAngleLeft"];
        this.vdFaAngleRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faAngleRight"];
        this.vdFaMapMarkerAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faMapMarkerAlt"];
        this.vdFaArchive = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faArchive"];
        this.vdFaAsterisk = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faAsterisk"];
        // Icons - Footer
        this.vdFaBalanceScale = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faBalanceScale"];
        this.vdFaPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPlus"];
        this.vdFaUserSecret = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faUserSecret"];
        this.vdFaCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCircle"];
        // Icons - Main Navigation
        this.vdFaBars = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faBars"];
        this.vdFaEnvelope = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faEnvelope"];
        this.vdFaUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faUser"];
        this.vdFaUserCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faUserCircle"];
        this.vdFaSignInAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSignInAlt"];
        this.vdFaQuestion = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faQuestion"];
        this.vdFaWrench = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faWrench"];
        this.vdFaCog = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCog"];
        this.vdFaCogs = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCogs"];
        // Icons - Side Navigation (includes: vdFaEnvelope, vdFaUser, vdFaSignInAlt)
        this.vdFaHome = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faHome"];
        this.vdFaClipboardList = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faClipboardList"];
        this.vdFaProjectDiagram = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faProjectDiagram"];
        this.vdFaSort = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSort"];
        this._Logger.log(`[DEFAULT] - Application name is: ${this.appName}`);
        this._Logger.log(`[DEFAULT] - Server secrete is: ${this.serverSecrete}`);
        this._Logger.log(`[DEFAULT] - Server base api url is: ${this.serverApiUrl}`);
        this._Logger.debug('DEBUG message...');
        this._Logger.info('INFO message');
        this._Logger.log(`DEFAULT log message. App name: ${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].CLIENT_APP_NAME}`);
        this._Logger.warn('WARNING message');
        this._Logger.error('ERROR message');
        this._Logger.fatal('FATAL message');
        this._Logger.trace('TRACE message');
    }
    // Initialize
    ngOnInit() {
    }
};
AppComponent.ctorParameters = () => [
    { type: ngx_logger__WEBPACK_IMPORTED_MODULE_2__["NGXLogger"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _routing_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routing/routing.module */ "./src/app/routing/routing.module.ts");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm2015/ngx-logger.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _navigation_nav_main_nav_main_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./navigation/nav-main/nav-main.component */ "./src/app/navigation/nav-main/nav-main.component.ts");
/* harmony import */ var _navigation_nav_side_nav_side_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./navigation/nav-side/nav-side.component */ "./src/app/navigation/nav-side/nav-side.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _pages_legal_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/legal/privacy/privacy.component */ "./src/app/pages/legal/privacy/privacy.component.ts");
/* harmony import */ var _pages_legal_terms_terms_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/legal/terms/terms.component */ "./src/app/pages/legal/terms/terms.component.ts");
/* harmony import */ var _pages_errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/errors/not-found/not-found.component */ "./src/app/pages/errors/not-found/not-found.component.ts");
/* harmony import */ var _pages_errors_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/errors/server-error/server-error.component */ "./src/app/pages/errors/server-error/server-error.component.ts");


























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
            _layout_layout_component__WEBPACK_IMPORTED_MODULE_13__["LayoutComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
            _navigation_nav_main_nav_main_component__WEBPACK_IMPORTED_MODULE_15__["NavMainComponent"],
            _navigation_nav_side_nav_side_component__WEBPACK_IMPORTED_MODULE_16__["NavSideComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"],
            _services_services_component__WEBPACK_IMPORTED_MODULE_18__["ServicesComponent"],
            _projects_projects_component__WEBPACK_IMPORTED_MODULE_19__["ProjectsComponent"],
            _contact_contact_component__WEBPACK_IMPORTED_MODULE_20__["ContactComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_21__["FooterComponent"],
            _pages_legal_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_22__["PrivacyComponent"],
            _pages_legal_terms_terms_component__WEBPACK_IMPORTED_MODULE_23__["TermsComponent"],
            _pages_errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_24__["NotFoundComponent"],
            _pages_errors_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_25__["ServerErrorComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _routing_routing_module__WEBPACK_IMPORTED_MODULE_9__["RoutingModule"],
            ngx_logger__WEBPACK_IMPORTED_MODULE_10__["LoggerModule"].forRoot({
                serverLoggingUrl: `${_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].SERVER_API_URL}/api/logs`,
                level: _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].logLevel,
                serverLogLevel: _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].serverLogLevel,
                disableConsoleLogging: false
            })
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Custom template CSS\n---------------------- */\na {\n  color: var(--deep-sky-blue-capri) !important;\n  padding: 2px 6px;\n  text-align: center;\n  display: inline-block;\n}\na:hover, a:focus {\n  color: var(--pure-yellow) !important;\n  padding: 2px 6px;\n  text-align: center;\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9DOlxcVmlzaW9uLURyZWFtXFx2ZC1zb3VyY2VcXHJlcG9zXFxkZXZcXHdlYlxcVkRTb2x1dGlvblxcVkRBcHBVSS9zcmNcXGFwcFxcY29udGFjdFxcY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO3dCQUFBO0FBRUE7RUFDRSw0Q0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ0NGO0FEQ0U7RUFDRSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ3VzdG9tIHRlbXBsYXRlIENTU1xyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbmEge1xyXG4gIGNvbG9yOiB2YXIoLS1kZWVwLXNreS1ibHVlLWNhcHJpKSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDJweCA2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4gIGE6aG92ZXIsIGE6Zm9jdXMge1xyXG4gICAgY29sb3I6IHZhcigtLXB1cmUteWVsbG93KSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMnB4IDZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbiIsIi8qIEN1c3RvbSB0ZW1wbGF0ZSBDU1Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbmEge1xuICBjb2xvcjogdmFyKC0tZGVlcC1za3ktYmx1ZS1jYXByaSkgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMnB4IDZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbmE6aG92ZXIsIGE6Zm9jdXMge1xuICBjb2xvcjogdmFyKC0tcHVyZS15ZWxsb3cpICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDJweCA2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactComponent = class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/index.js!./src/app/contact/contact.component.html"),
        styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/core/auth/components/login/login.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/core/auth/components/login/login.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Custom styles for main template\n  --------------------------------*/\na {\n  color: var(--deep-sky-blue-capri) !important;\n  padding: 2px 6px;\n  text-align: center;\n  display: inline-block;\n}\na:hover, a:focus {\n  color: var(--pure-yellow) !important;\n  padding: 2px 6px;\n  text-align: center;\n  display: inline-block;\n}\n/*\n  Custom styles for form template\n  Form name: form-login - start\n  ------------------------------*/\n.form-container {\n  background-color: transparent;\n  display: -ms-flexbox;\n  align-items: center;\n}\n.form-login {\n  width: 100%;\n  max-width: 420px;\n  padding: 20px;\n  margin: auto;\n}\n.fa-city {\n  font-size: 48px;\n  color: #11862f;\n}\n.form-label-group {\n  position: relative;\n  margin-bottom: 1rem;\n}\n.form-label-group > input,\n.form-label-group > label {\n  height: 3.125rem;\n  padding: 0.75rem;\n}\n.form-label-group > label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 100%;\n  margin-bottom: 0;\n  /* Override default `<label>` margin */\n  line-height: 1.5;\n  color: var(--dark-gray) !important;\n  pointer-events: none;\n  cursor: text;\n  /* Match the input under the label */\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n  transition: all 0.1s ease-in-out;\n}\n.form-label-group input::-webkit-input-placeholder {\n  color: transparent;\n}\n.form-label-group input::-ms-input-placeholder {\n  color: transparent;\n}\n.form-label-group input::-moz-placeholder {\n  color: transparent;\n}\n.form-label-group input::placeholder {\n  color: transparent;\n}\n.form-label-group input:not(:placeholder-shown) {\n  padding-top: 1.25rem;\n  padding-bottom: 0.25rem;\n}\n.form-label-group input:not(:placeholder-shown) ~ label {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  font-size: 12px;\n  color: #777;\n}\n/* Fallback for Edge\n-------------------------------------------------- */\n@supports (-ms-ime-align: auto) {\n  .form-label-group > label {\n    display: none;\n  }\n\n  .form-label-group input:-ms-input-placeholder {\n    color: #777;\n  }\n}\n/* Fallback for IE\n-------------------------------------------------- */\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .form-label-group > label {\n    display: none;\n  }\n\n  .form-label-group input:-ms-input-placeholder {\n    color: #777;\n  }\n}\n.form-login .checkbox {\n  font-weight: 400;\n}\n.form-login .form-item {\n  position: relative;\n  box-sizing: unset;\n  height: auto;\n  padding: 0;\n  font-size: 1em;\n  font-weight: 400;\n  background-color: inherit;\n}\n.form-login .form-control {\n  position: relative;\n  box-sizing: border-box;\n  height: auto;\n  padding: 10px;\n  font-size: 16px;\n}\n.form-login .form-control:focus {\n  z-index: 2;\n}\n.form-login input[type=email] {\n  margin-bottom: -1px;\n  /*border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;*/\n}\n.form-login input[type=password] {\n  margin-bottom: 10px;\n  /*border-top-left-radius: 0;\n  border-top-right-radius: 0;*/\n}\n/*-- Custom form styles for: form-login --\n  form-login - end\n  --------------------------------------*/\n*, *:after, *:before {\n  box-sizing: border-box;\n}\n/*!\n* ****************************** Elegant Form ******************************\n*/\n.form-elegant .font-small {\n  font-size: 0.8rem;\n}\n.form-elegant .z-depth-1a {\n  box-shadow: 0 2px 5px 0 rgba(55, 161, 255, 0.26), 0 4px 12px 0 rgba(121, 155, 254, 0.25);\n}\n.form-elegant .z-depth-1-half,\n.form-elegant .btn:hover {\n  box-shadow: 0 5px 11px 0 rgba(85, 182, 255, 0.28), 0 4px 15px 0 rgba(36, 133, 255, 0.15);\n}\n/******************************** Gradient Form ********************************/\n.form-gradient .font-small {\n  font-size: 0.8rem;\n}\n.form-gradient .header {\n  border-top-left-radius: 0.3rem;\n  border-top-right-radius: 0.3rem;\n}\n.form-gradient input[type=text]:focus:not([readonly]) {\n  border-bottom: 1px solid #fd9267;\n  box-shadow: 0 1px 0 0 #fd9267;\n}\n.form-gradient input[type=text]:focus:not([readonly]) + label {\n  color: #4f4f4f;\n}\n.form-gradient input[type=password]:focus:not([readonly]) {\n  border-bottom: 1px solid #fd9267;\n  box-shadow: 0 1px 0 0 #fd9267;\n}\n.form-gradient input[type=password]:focus:not([readonly]) + label {\n  color: #4f4f4f;\n}\n/******************************** Light Form ********************************/\n.form-light .font-small {\n  font-size: 0.8rem;\n}\n.form-light [type=radio] + label,\n.form-light [type=checkbox] + label {\n  font-size: 0.8rem;\n}\n.form-light [type=checkbox] + label:before {\n  top: 2px;\n  width: 15px;\n  height: 15px;\n}\n.form-light input[type=checkbox] + label:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 17px;\n  height: 17px;\n  z-index: 0;\n  border-radius: 1px;\n  margin-top: 2px;\n  transition: 0.2s;\n}\n.form-light input[type=checkbox]:checked + label:before {\n  top: -4px;\n  left: -3px;\n  width: 12px;\n  height: 22px;\n  border-style: solid;\n  border-width: 2px;\n  border-color: transparent #EB3573 #EB3573 transparent;\n  transform: rotate(40deg);\n  -webkit-backface-visibility: hidden;\n  transform-origin: 100% 100%;\n}\n.form-light .footer {\n  border-bottom-left-radius: 0.3rem;\n  border-bottom-right-radius: 0.3rem;\n}\n/******************************** Dark Form ********************************/\n.form-dark .font-small {\n  font-size: 0.8rem;\n}\n.form-dark [type=radio] + label,\n.form-dark [type=checkbox] + label {\n  font-size: 0.8rem;\n}\n.form-dark [type=checkbox] + label:before {\n  top: 2px;\n  width: 15px;\n  height: 15px;\n}\n.form-dark .md-form label {\n  color: #fff;\n}\n.form-dark input[type=text]:focus:not([readonly]) {\n  border-bottom: 1px solid #00C851;\n  box-shadow: 0 1px 0 0 #00C851;\n}\n.form-dark input[type=text]:focus:not([readonly]) + label {\n  color: #fff;\n}\n.form-dark input[type=password]:focus:not([readonly]) {\n  border-bottom: 1px solid #00C851;\n  box-shadow: 0 1px 0 0 #00C851;\n}\n.form-dark input[type=password]:focus:not([readonly]) + label {\n  color: #fff;\n}\n.form-dark input[type=checkbox] + label:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 17px;\n  height: 17px;\n  z-index: 0;\n  border: 1.5px solid #fff;\n  border-radius: 1px;\n  margin-top: 2px;\n  transition: 0.2s;\n}\n.form-dark input[type=checkbox]:checked + label:before {\n  top: -4px;\n  left: -3px;\n  width: 12px;\n  height: 22px;\n  border-style: solid;\n  border-width: 2px;\n  border-color: transparent #00c851 #00c851 transparent;\n  transform: rotate(40deg);\n  -webkit-backface-visibility: hidden;\n  transform-origin: 100% 100%;\n}\n/******************************** Simple Form ********************************/\n.form-simple .font-small {\n  font-size: 0.8rem;\n}\n.form-simple .header {\n  border-top-left-radius: 0.3rem;\n  border-top-right-radius: 0.3rem;\n}\n.form-simple input[type=text]:focus:not([readonly]) {\n  border-bottom: 1px solid #ff3547;\n  box-shadow: 0 1px 0 0 #ff3547;\n}\n.form-simple input[type=text]:focus:not([readonly]) + label {\n  color: #4f4f4f;\n}\n.form-simple input[type=password]:focus:not([readonly]) {\n  border-bottom: 1px solid #ff3547;\n  box-shadow: 0 1px 0 0 #ff3547;\n}\n.form-simple input[type=password]:focus:not([readonly]) + label {\n  color: #4f4f4f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9hdXRoL2NvbXBvbmVudHMvbG9naW4vQzpcXFZpc2lvbi1EcmVhbVxcdmQtc291cmNlXFxyZXBvc1xcZGV2XFx3ZWJcXFZEU29sdXRpb25cXFZEQXBwVUkvc3JjXFxhcHBcXGNvcmVcXGF1dGhcXGNvbXBvbmVudHNcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9hdXRoL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7bUNBQUE7QUFFQTtFQUNFLDRDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDQ0Y7QURDRTtFQUNFLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDRUo7QURDQTs7O2lDQUFBO0FBSUE7RUFDRSw2QkFBQTtFQUNBLG9CQUFBO0VBRUEsbUJBQUE7QUNFRjtBRENBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNFRjtBRENBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNFRjtBRENBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQ0VGO0FEQ0E7O0VBRUUsZ0JBQUE7RUFDQSxnQkFBQTtBQ0VGO0FEQ0E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUFrQixzQ0FBQTtFQUNsQixnQkFBQTtFQUNBLGtDQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQWMsb0NBQUE7RUFDZCw2QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7QUNJRjtBRERBO0VBQ0Usa0JBQUE7QUNJRjtBREdBO0VBQ0Usa0JBQUE7QUNJRjtBRERBO0VBQ0Usa0JBQUE7QUNJRjtBRERBO0VBQ0Usa0JBQUE7QUNJRjtBRERBO0VBQ0Usb0JBQUE7RUFDQSx1QkFBQTtBQ0lGO0FEREE7RUFDRSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNJRjtBRERBO29EQUFBO0FBRUE7RUFDRTtJQUNFLGFBQUE7RUNJRjs7RUREQTtJQUNFLFdBQUE7RUNJRjtBQUNGO0FEREE7b0RBQUE7QUFFQTtFQUNFO0lBQ0UsYUFBQTtFQ0dGOztFREFBO0lBQ0UsV0FBQTtFQ0dGO0FBQ0Y7QURBQTtFQUNFLGdCQUFBO0FDRUY7QURDQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FDRUY7QURDQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNFRjtBRENBO0VBQ0UsVUFBQTtBQ0VGO0FEQ0E7RUFDRSxtQkFBQTtFQUNBO2dDQUFBO0FDR0Y7QURDQTtFQUNFLG1CQUFBO0VBQ0E7OEJBQUE7QUNHRjtBRENBOzt5Q0FBQTtBQUlBO0VBR0Usc0JBQUE7QUNDRjtBREVBOztDQUFBO0FBR0E7RUFDRSxpQkFBQTtBQ0NGO0FERUE7RUFFRSx3RkFBQTtBQ0NGO0FERUE7O0VBR0Usd0ZBQUE7QUNDRjtBREVBLGdGQUFBO0FBQ0E7RUFDRSxpQkFBQTtBQ0NGO0FERUE7RUFDRSw4QkFBQTtFQUNBLCtCQUFBO0FDQ0Y7QURFQTtFQUNFLGdDQUFBO0VBRUEsNkJBQUE7QUNDRjtBREVBO0VBQ0UsY0FBQTtBQ0NGO0FERUE7RUFDRSxnQ0FBQTtFQUVBLDZCQUFBO0FDQ0Y7QURFQTtFQUNFLGNBQUE7QUNDRjtBREVBLDZFQUFBO0FBQ0E7RUFDRSxpQkFBQTtBQ0NGO0FERUE7O0VBRUUsaUJBQUE7QUNDRjtBREVBO0VBQ0UsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7QURFQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBRUEsZ0JBQUE7QUNDRjtBREVBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxxREFBQTtFQUdBLHdCQUFBO0VBQ0EsbUNBQUE7RUFHQSwyQkFBQTtBQ0NGO0FERUE7RUFDRSxpQ0FBQTtFQUNBLGtDQUFBO0FDQ0Y7QURFQSw0RUFBQTtBQUNBO0VBQ0UsaUJBQUE7QUNDRjtBREVBOztFQUVFLGlCQUFBO0FDQ0Y7QURFQTtFQUNFLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NGO0FERUE7RUFDRSxXQUFBO0FDQ0Y7QURFQTtFQUNFLGdDQUFBO0VBRUEsNkJBQUE7QUNDRjtBREVBO0VBQ0UsV0FBQTtBQ0NGO0FERUE7RUFDRSxnQ0FBQTtFQUVBLDZCQUFBO0FDQ0Y7QURFQTtFQUNFLFdBQUE7QUNDRjtBREVBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUVBLGdCQUFBO0FDQ0Y7QURFQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EscURBQUE7RUFHQSx3QkFBQTtFQUNBLG1DQUFBO0VBR0EsMkJBQUE7QUNDRjtBREVBLDhFQUFBO0FBQ0E7RUFDRSxpQkFBQTtBQ0NGO0FERUE7RUFDRSw4QkFBQTtFQUNBLCtCQUFBO0FDQ0Y7QURFQTtFQUNFLGdDQUFBO0VBRUEsNkJBQUE7QUNDRjtBREVBO0VBQ0UsY0FBQTtBQ0NGO0FERUE7RUFDRSxnQ0FBQTtFQUVBLDZCQUFBO0FDQ0Y7QURFQTtFQUNFLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvYXV0aC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ3VzdG9tIHN0eWxlcyBmb3IgbWFpbiB0ZW1wbGF0ZVxyXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuYSB7XHJcbiAgY29sb3I6IHZhcigtLWRlZXAtc2t5LWJsdWUtY2FwcmkpICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMnB4IDZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbiAgYTpob3ZlciwgYTpmb2N1cyB7XHJcbiAgICBjb2xvcjogdmFyKC0tcHVyZS15ZWxsb3cpICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAycHggNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuXHJcbi8qXHJcbiAgQ3VzdG9tIHN0eWxlcyBmb3IgZm9ybSB0ZW1wbGF0ZVxyXG4gIEZvcm0gbmFtZTogZm9ybS1sb2dpbiAtIHN0YXJ0XHJcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLmZvcm0tY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mb3JtLWxvZ2luIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDQyMHB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uZmEtY2l0eSB7XHJcbiAgZm9udC1zaXplOiA0OHB4O1xyXG4gIGNvbG9yOiAjMTE4NjJmO1xyXG59XHJcblxyXG4uZm9ybS1sYWJlbC1ncm91cCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsLWdyb3VwID4gaW5wdXQsXHJcbi5mb3JtLWxhYmVsLWdyb3VwID4gbGFiZWwge1xyXG4gIGhlaWdodDogMy4xMjVyZW07XHJcbiAgcGFkZGluZzogLjc1cmVtO1xyXG59XHJcblxyXG4uZm9ybS1sYWJlbC1ncm91cCA+IGxhYmVsIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDsgLyogT3ZlcnJpZGUgZGVmYXVsdCBgPGxhYmVsPmAgbWFyZ2luICovXHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBjb2xvcjogdmFyKC0tZGFyay1ncmF5KSAhaW1wb3J0YW50O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIGN1cnNvcjogdGV4dDsgLyogTWF0Y2ggdGhlIGlucHV0IHVuZGVyIHRoZSBsYWJlbCAqL1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikge1xyXG4gIHBhZGRpbmctdG9wOiAxLjI1cmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAuMjVyZW07XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pIH4gbGFiZWwge1xyXG4gIHBhZGRpbmctdG9wOiAuMjVyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IC4yNXJlbTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6ICM3Nzc7XHJcbn1cclxuXHJcbi8qIEZhbGxiYWNrIGZvciBFZGdlXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbkBzdXBwb3J0cyAoLW1zLWltZS1hbGlnbjogYXV0bykge1xyXG4gIC5mb3JtLWxhYmVsLWdyb3VwID4gbGFiZWwge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogIzc3NztcclxuICB9XHJcbn1cclxuXHJcbi8qIEZhbGxiYWNrIGZvciBJRVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5AbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpLCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xyXG4gIC5mb3JtLWxhYmVsLWdyb3VwID4gbGFiZWwge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogIzc3NztcclxuICB9XHJcbn1cclxuXHJcbi5mb3JtLWxvZ2luIC5jaGVja2JveCB7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLmZvcm0tbG9naW4gLmZvcm0taXRlbSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJveC1zaXppbmc6IHVuc2V0O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBwYWRkaW5nOiAwO1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxuLmZvcm0tbG9naW4gLmZvcm0tY29udHJvbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uZm9ybS1sb2dpbiAuZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uZm9ybS1sb2dpbiBpbnB1dFt0eXBlPVwiZW1haWxcIl0ge1xyXG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XHJcbiAgLypib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwOyovXHJcbn1cclxuXHJcbi5mb3JtLWxvZ2luIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAvKmJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7Ki9cclxufVxyXG5cclxuLyotLSBDdXN0b20gZm9ybSBzdHlsZXMgZm9yOiBmb3JtLWxvZ2luIC0tXHJcbiAgZm9ybS1sb2dpbiAtIGVuZFxyXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbiosICo6YWZ0ZXIsICo6YmVmb3JlIHtcclxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi8qIVxyXG4qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBFbGVnYW50IEZvcm0gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiovXHJcbi5mb3JtLWVsZWdhbnQgLmZvbnQtc21hbGwge1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG59XHJcblxyXG4uZm9ybS1lbGVnYW50IC56LWRlcHRoLTFhIHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoNTUsIDE2MSwgMjU1LCAwLjI2KSwgMCA0cHggMTJweCAwIHJnYmEoMTIxLCAxNTUsIDI1NCwgMC4yNSk7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSg1NSwgMTYxLCAyNTUsIDAuMjYpLCAwIDRweCAxMnB4IDAgcmdiYSgxMjEsIDE1NSwgMjU0LCAwLjI1KTtcclxufVxyXG5cclxuLmZvcm0tZWxlZ2FudCAuei1kZXB0aC0xLWhhbGYsXHJcbi5mb3JtLWVsZWdhbnQgLmJ0bjpob3ZlciB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDVweCAxMXB4IDAgcmdiYSg4NSwgMTgyLCAyNTUsIDAuMjgpLCAwIDRweCAxNXB4IDAgcmdiYSgzNiwgMTMzLCAyNTUsIDAuMTUpO1xyXG4gIGJveC1zaGFkb3c6IDAgNXB4IDExcHggMCByZ2JhKDg1LCAxODIsIDI1NSwgMC4yOCksIDAgNHB4IDE1cHggMCByZ2JhKDM2LCAxMzMsIDI1NSwgMC4xNSk7XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBHcmFkaWVudCBGb3JtICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4uZm9ybS1ncmFkaWVudCAuZm9udC1zbWFsbCB7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbn1cclxuXHJcbi5mb3JtLWdyYWRpZW50IC5oZWFkZXIge1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IC4zcmVtO1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAuM3JlbTtcclxufVxyXG5cclxuLmZvcm0tZ3JhZGllbnQgaW5wdXRbdHlwZT10ZXh0XTpmb2N1czpub3QoW3JlYWRvbmx5XSkge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmQ5MjY3O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMCAwICNmZDkyNjc7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMCAwICNmZDkyNjc7XHJcbn1cclxuXHJcbi5mb3JtLWdyYWRpZW50IGlucHV0W3R5cGU9dGV4dF06Zm9jdXM6bm90KFtyZWFkb25seV0pICsgbGFiZWwge1xyXG4gIGNvbG9yOiAjNGY0ZjRmO1xyXG59XHJcblxyXG4uZm9ybS1ncmFkaWVudCBpbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1czpub3QoW3JlYWRvbmx5XSkge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmQ5MjY3O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMCAwICNmZDkyNjc7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMCAwICNmZDkyNjc7XHJcbn1cclxuXHJcbi5mb3JtLWdyYWRpZW50IGlucHV0W3R5cGU9cGFzc3dvcmRdOmZvY3VzOm5vdChbcmVhZG9ubHldKSArIGxhYmVsIHtcclxuICBjb2xvcjogIzRmNGY0ZjtcclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIExpZ2h0IEZvcm0gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi5mb3JtLWxpZ2h0IC5mb250LXNtYWxsIHtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxufVxyXG5cclxuLmZvcm0tbGlnaHQgW3R5cGU9XCJyYWRpb1wiXSArIGxhYmVsLFxyXG4uZm9ybS1saWdodCBbdHlwZT1cImNoZWNrYm94XCJdICsgbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG59XHJcblxyXG4uZm9ybS1saWdodCBbdHlwZT1cImNoZWNrYm94XCJdICsgbGFiZWw6YmVmb3JlIHtcclxuICB0b3A6IDJweDtcclxuICB3aWR0aDogMTVweDtcclxuICBoZWlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi5mb3JtLWxpZ2h0IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSArIGxhYmVsOmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxN3B4O1xyXG4gIGhlaWdodDogMTdweDtcclxuICB6LWluZGV4OiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFweDtcclxuICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzO1xyXG4gIHRyYW5zaXRpb246IDAuMnM7XHJcbn1cclxuXHJcbi5mb3JtLWxpZ2h0IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgbGFiZWw6YmVmb3JlIHtcclxuICB0b3A6IC00cHg7XHJcbiAgbGVmdDogLTNweDtcclxuICB3aWR0aDogMTJweDtcclxuICBoZWlnaHQ6IDIycHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDJweDtcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNFQjM1NzMgI0VCMzU3MyB0cmFuc3BhcmVudDtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDBkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDQwZGVnKTtcclxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMTAwJTtcclxuICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAxMDAlO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMTAwJTtcclxufVxyXG5cclxuLmZvcm0tbGlnaHQgLmZvb3RlciB7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogLjNyZW07XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IC4zcmVtO1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogRGFyayBGb3JtICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4uZm9ybS1kYXJrIC5mb250LXNtYWxsIHtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxufVxyXG5cclxuLmZvcm0tZGFyayBbdHlwZT1cInJhZGlvXCJdICsgbGFiZWwsXHJcbi5mb3JtLWRhcmsgW3R5cGU9XCJjaGVja2JveFwiXSArIGxhYmVsIHtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxufVxyXG5cclxuLmZvcm0tZGFyayBbdHlwZT1cImNoZWNrYm94XCJdICsgbGFiZWw6YmVmb3JlIHtcclxuICB0b3A6IDJweDtcclxuICB3aWR0aDogMTVweDtcclxuICBoZWlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi5mb3JtLWRhcmsgLm1kLWZvcm0gbGFiZWwge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uZm9ybS1kYXJrIGlucHV0W3R5cGU9dGV4dF06Zm9jdXM6bm90KFtyZWFkb25seV0pIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwQzg1MTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDAgMCAjMDBDODUxO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgMCAjMDBDODUxO1xyXG59XHJcblxyXG4uZm9ybS1kYXJrIGlucHV0W3R5cGU9dGV4dF06Zm9jdXM6bm90KFtyZWFkb25seV0pICsgbGFiZWwge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uZm9ybS1kYXJrIGlucHV0W3R5cGU9cGFzc3dvcmRdOmZvY3VzOm5vdChbcmVhZG9ubHldKSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMEM4NTE7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAwIDAgIzAwQzg1MTtcclxuICBib3gtc2hhZG93OiAwIDFweCAwIDAgIzAwQzg1MTtcclxufVxyXG5cclxuLmZvcm0tZGFyayBpbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1czpub3QoW3JlYWRvbmx5XSkgKyBsYWJlbCB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5mb3JtLWRhcmsgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdICsgbGFiZWw6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDE3cHg7XHJcbiAgaGVpZ2h0OiAxN3B4O1xyXG4gIHotaW5kZXg6IDA7XHJcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFweDtcclxuICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzO1xyXG4gIHRyYW5zaXRpb246IDAuMnM7XHJcbn1cclxuXHJcbi5mb3JtLWRhcmsgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyBsYWJlbDpiZWZvcmUge1xyXG4gIHRvcDogLTRweDtcclxuICBsZWZ0OiAtM3B4O1xyXG4gIHdpZHRoOiAxMnB4O1xyXG4gIGhlaWdodDogMjJweDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogMnB4O1xyXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIzAwYzg1MSAjMDBjODUxIHRyYW5zcGFyZW50O1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0MGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDBkZWcpO1xyXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAxMDAlO1xyXG4gIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDEwMCU7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAxMDAlO1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogU2ltcGxlIEZvcm0gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi5mb3JtLXNpbXBsZSAuZm9udC1zbWFsbCB7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbn1cclxuXHJcbi5mb3JtLXNpbXBsZSAuaGVhZGVyIHtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAuM3JlbTtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogLjNyZW07XHJcbn1cclxuXHJcbi5mb3JtLXNpbXBsZSBpbnB1dFt0eXBlPXRleHRdOmZvY3VzOm5vdChbcmVhZG9ubHldKSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZjM1NDc7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAwIDAgI2ZmMzU0NztcclxuICBib3gtc2hhZG93OiAwIDFweCAwIDAgI2ZmMzU0NztcclxufVxyXG5cclxuLmZvcm0tc2ltcGxlIGlucHV0W3R5cGU9dGV4dF06Zm9jdXM6bm90KFtyZWFkb25seV0pICsgbGFiZWwge1xyXG4gIGNvbG9yOiAjNGY0ZjRmO1xyXG59XHJcblxyXG4uZm9ybS1zaW1wbGUgaW5wdXRbdHlwZT1wYXNzd29yZF06Zm9jdXM6bm90KFtyZWFkb25seV0pIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmMzU0NztcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDAgMCAjZmYzNTQ3O1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgMCAjZmYzNTQ3O1xyXG59XHJcblxyXG4uZm9ybS1zaW1wbGUgaW5wdXRbdHlwZT1wYXNzd29yZF06Zm9jdXM6bm90KFtyZWFkb25seV0pICsgbGFiZWwge1xyXG4gIGNvbG9yOiAjNGY0ZjRmO1xyXG59XHJcbiIsIi8qIEN1c3RvbSBzdHlsZXMgZm9yIG1haW4gdGVtcGxhdGVcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuYSB7XG4gIGNvbG9yOiB2YXIoLS1kZWVwLXNreS1ibHVlLWNhcHJpKSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAycHggNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuYTpob3ZlciwgYTpmb2N1cyB7XG4gIGNvbG9yOiB2YXIoLS1wdXJlLXllbGxvdykgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMnB4IDZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi8qXG4gIEN1c3RvbSBzdHlsZXMgZm9yIGZvcm0gdGVtcGxhdGVcbiAgRm9ybSBuYW1lOiBmb3JtLWxvZ2luIC0gc3RhcnRcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi5mb3JtLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZvcm0tbG9naW4ge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA0MjBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uZmEtY2l0eSB7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgY29sb3I6ICMxMTg2MmY7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCA+IGlucHV0LFxuLmZvcm0tbGFiZWwtZ3JvdXAgPiBsYWJlbCB7XG4gIGhlaWdodDogMy4xMjVyZW07XG4gIHBhZGRpbmc6IDAuNzVyZW07XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwID4gbGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICAvKiBPdmVycmlkZSBkZWZhdWx0IGA8bGFiZWw+YCBtYXJnaW4gKi9cbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6IHZhcigtLWRhcmstZ3JheSkgIWltcG9ydGFudDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGN1cnNvcjogdGV4dDtcbiAgLyogTWF0Y2ggdGhlIGlucHV0IHVuZGVyIHRoZSBsYWJlbCAqL1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pIHtcbiAgcGFkZGluZy10b3A6IDEuMjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjI1cmVtO1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSB+IGxhYmVsIHtcbiAgcGFkZGluZy10b3A6IDAuMjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjI1cmVtO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNzc3O1xufVxuXG4vKiBGYWxsYmFjayBmb3IgRWRnZVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbkBzdXBwb3J0cyAoLW1zLWltZS1hbGlnbjogYXV0bykge1xuICAuZm9ybS1sYWJlbC1ncm91cCA+IGxhYmVsIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogIzc3NztcbiAgfVxufVxuLyogRmFsbGJhY2sgZm9yIElFXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSwgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcbiAgLmZvcm0tbGFiZWwtZ3JvdXAgPiBsYWJlbCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICM3Nzc7XG4gIH1cbn1cbi5mb3JtLWxvZ2luIC5jaGVja2JveCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5mb3JtLWxvZ2luIC5mb3JtLWl0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJveC1zaXppbmc6IHVuc2V0O1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xufVxuXG4uZm9ybS1sb2dpbiAuZm9ybS1jb250cm9sIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmZvcm0tbG9naW4gLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5mb3JtLWxvZ2luIGlucHV0W3R5cGU9ZW1haWxdIHtcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcbiAgLypib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDsqL1xufVxuXG4uZm9ybS1sb2dpbiBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIC8qYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7Ki9cbn1cblxuLyotLSBDdXN0b20gZm9ybSBzdHlsZXMgZm9yOiBmb3JtLWxvZ2luIC0tXG4gIGZvcm0tbG9naW4gLSBlbmRcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuKiwgKjphZnRlciwgKjpiZWZvcmUge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLyohXG4qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBFbGVnYW50IEZvcm0gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4qL1xuLmZvcm0tZWxlZ2FudCAuZm9udC1zbWFsbCB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4uZm9ybS1lbGVnYW50IC56LWRlcHRoLTFhIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDU1LCAxNjEsIDI1NSwgMC4yNiksIDAgNHB4IDEycHggMCByZ2JhKDEyMSwgMTU1LCAyNTQsIDAuMjUpO1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDU1LCAxNjEsIDI1NSwgMC4yNiksIDAgNHB4IDEycHggMCByZ2JhKDEyMSwgMTU1LCAyNTQsIDAuMjUpO1xufVxuXG4uZm9ybS1lbGVnYW50IC56LWRlcHRoLTEtaGFsZixcbi5mb3JtLWVsZWdhbnQgLmJ0bjpob3ZlciB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA1cHggMTFweCAwIHJnYmEoODUsIDE4MiwgMjU1LCAwLjI4KSwgMCA0cHggMTVweCAwIHJnYmEoMzYsIDEzMywgMjU1LCAwLjE1KTtcbiAgYm94LXNoYWRvdzogMCA1cHggMTFweCAwIHJnYmEoODUsIDE4MiwgMjU1LCAwLjI4KSwgMCA0cHggMTVweCAwIHJnYmEoMzYsIDEzMywgMjU1LCAwLjE1KTtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIEdyYWRpZW50IEZvcm0gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4uZm9ybS1ncmFkaWVudCAuZm9udC1zbWFsbCB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4uZm9ybS1ncmFkaWVudCAuaGVhZGVyIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC4zcmVtO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC4zcmVtO1xufVxuXG4uZm9ybS1ncmFkaWVudCBpbnB1dFt0eXBlPXRleHRdOmZvY3VzOm5vdChbcmVhZG9ubHldKSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmQ5MjY3O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDAgMCAjZmQ5MjY3O1xuICBib3gtc2hhZG93OiAwIDFweCAwIDAgI2ZkOTI2Nztcbn1cblxuLmZvcm0tZ3JhZGllbnQgaW5wdXRbdHlwZT10ZXh0XTpmb2N1czpub3QoW3JlYWRvbmx5XSkgKyBsYWJlbCB7XG4gIGNvbG9yOiAjNGY0ZjRmO1xufVxuXG4uZm9ybS1ncmFkaWVudCBpbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1czpub3QoW3JlYWRvbmx5XSkge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZkOTI2NztcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAwIDAgI2ZkOTI2NztcbiAgYm94LXNoYWRvdzogMCAxcHggMCAwICNmZDkyNjc7XG59XG5cbi5mb3JtLWdyYWRpZW50IGlucHV0W3R5cGU9cGFzc3dvcmRdOmZvY3VzOm5vdChbcmVhZG9ubHldKSArIGxhYmVsIHtcbiAgY29sb3I6ICM0ZjRmNGY7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBMaWdodCBGb3JtICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLmZvcm0tbGlnaHQgLmZvbnQtc21hbGwge1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLmZvcm0tbGlnaHQgW3R5cGU9cmFkaW9dICsgbGFiZWwsXG4uZm9ybS1saWdodCBbdHlwZT1jaGVja2JveF0gKyBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4uZm9ybS1saWdodCBbdHlwZT1jaGVja2JveF0gKyBsYWJlbDpiZWZvcmUge1xuICB0b3A6IDJweDtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbn1cblxuLmZvcm0tbGlnaHQgaW5wdXRbdHlwZT1jaGVja2JveF0gKyBsYWJlbDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDE3cHg7XG4gIGhlaWdodDogMTdweDtcbiAgei1pbmRleDogMDtcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycztcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cblxuLmZvcm0tbGlnaHQgaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIGxhYmVsOmJlZm9yZSB7XG4gIHRvcDogLTRweDtcbiAgbGVmdDogLTNweDtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMjJweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgI0VCMzU3MyAjRUIzNTczIHRyYW5zcGFyZW50O1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDBkZWcpO1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDEwMCU7XG4gIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDEwMCU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMTAwJTtcbn1cblxuLmZvcm0tbGlnaHQgLmZvb3RlciB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuM3JlbTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuM3JlbTtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIERhcmsgRm9ybSAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi5mb3JtLWRhcmsgLmZvbnQtc21hbGwge1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLmZvcm0tZGFyayBbdHlwZT1yYWRpb10gKyBsYWJlbCxcbi5mb3JtLWRhcmsgW3R5cGU9Y2hlY2tib3hdICsgbGFiZWwge1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLmZvcm0tZGFyayBbdHlwZT1jaGVja2JveF0gKyBsYWJlbDpiZWZvcmUge1xuICB0b3A6IDJweDtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbn1cblxuLmZvcm0tZGFyayAubWQtZm9ybSBsYWJlbCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uZm9ybS1kYXJrIGlucHV0W3R5cGU9dGV4dF06Zm9jdXM6bm90KFtyZWFkb25seV0pIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMEM4NTE7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMCAwICMwMEM4NTE7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgMCAjMDBDODUxO1xufVxuXG4uZm9ybS1kYXJrIGlucHV0W3R5cGU9dGV4dF06Zm9jdXM6bm90KFtyZWFkb25seV0pICsgbGFiZWwge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmZvcm0tZGFyayBpbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1czpub3QoW3JlYWRvbmx5XSkge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwQzg1MTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAwIDAgIzAwQzg1MTtcbiAgYm94LXNoYWRvdzogMCAxcHggMCAwICMwMEM4NTE7XG59XG5cbi5mb3JtLWRhcmsgaW5wdXRbdHlwZT1wYXNzd29yZF06Zm9jdXM6bm90KFtyZWFkb25seV0pICsgbGFiZWwge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmZvcm0tZGFyayBpbnB1dFt0eXBlPWNoZWNrYm94XSArIGxhYmVsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTdweDtcbiAgaGVpZ2h0OiAxN3B4O1xuICB6LWluZGV4OiAwO1xuICBib3JkZXI6IDEuNXB4IHNvbGlkICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDFweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnM7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG5cbi5mb3JtLWRhcmsgaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIGxhYmVsOmJlZm9yZSB7XG4gIHRvcDogLTRweDtcbiAgbGVmdDogLTNweDtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMjJweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIzAwYzg1MSAjMDBjODUxIHRyYW5zcGFyZW50O1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDBkZWcpO1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDEwMCU7XG4gIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDEwMCU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMTAwJTtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIFNpbXBsZSBGb3JtICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLmZvcm0tc2ltcGxlIC5mb250LXNtYWxsIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5mb3JtLXNpbXBsZSAuaGVhZGVyIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC4zcmVtO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC4zcmVtO1xufVxuXG4uZm9ybS1zaW1wbGUgaW5wdXRbdHlwZT10ZXh0XTpmb2N1czpub3QoW3JlYWRvbmx5XSkge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmMzU0NztcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAwIDAgI2ZmMzU0NztcbiAgYm94LXNoYWRvdzogMCAxcHggMCAwICNmZjM1NDc7XG59XG5cbi5mb3JtLXNpbXBsZSBpbnB1dFt0eXBlPXRleHRdOmZvY3VzOm5vdChbcmVhZG9ubHldKSArIGxhYmVsIHtcbiAgY29sb3I6ICM0ZjRmNGY7XG59XG5cbi5mb3JtLXNpbXBsZSBpbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1czpub3QoW3JlYWRvbmx5XSkge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmMzU0NztcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAwIDAgI2ZmMzU0NztcbiAgYm94LXNoYWRvdzogMCAxcHggMCAwICNmZjM1NDc7XG59XG5cbi5mb3JtLXNpbXBsZSBpbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1czpub3QoW3JlYWRvbmx5XSkgKyBsYWJlbCB7XG4gIGNvbG9yOiAjNGY0ZjRmO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/core/auth/components/login/login.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/core/auth/components/login/login.component.ts ***!
  \***************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoginComponent = class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
};
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/auth/components/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/core/auth/components/login/login.component.scss")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/core/auth/components/register/register.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/core/auth/components/register/register.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Navigation links */\na {\n  color: var(--deep-sky-blue-capri) !important;\n  padding: 2px 6px;\n  text-align: center;\n  display: inline-block;\n}\na:hover, a:focus {\n  color: var(--pure-yellow) !important;\n  padding: 2px 6px;\n  text-align: center;\n  display: inline-block;\n}\n/*\n  Custom styles for generic form container\n------------------------------------------ */\n.form-container {\n  background-color: transparent;\n  display: -ms-flexbox;\n  align-items: center;\n}\n.form-register {\n  width: auto;\n  max-width: 420px;\n  padding: 5px;\n  margin: auto;\n}\n.form-label-group {\n  position: relative;\n  margin-bottom: 1em;\n}\n.form-label-group > input,\n.form-label-group > label {\n  height: 3.125em;\n  padding: 0.75em;\n}\n.form-label-group > label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 100%;\n  margin-bottom: 0;\n  /* Override default `<label>` margin */\n  line-height: 1.5;\n  color: #495057;\n  pointer-events: none;\n  cursor: text;\n  /* Match the input under the label */\n  border: 1px solid transparent;\n  border-radius: 0.25em;\n  transition: all 0.1s ease-in-out;\n}\n.form-label-group input::-webkit-input-placeholder {\n  color: transparent;\n}\n.form-label-group input::-ms-input-placeholder {\n  color: transparent;\n}\n.form-label-group input::-moz-placeholder {\n  color: transparent;\n}\n.form-label-group input::placeholder {\n  color: transparent;\n}\n.form-label-group input:not(:placeholder-shown) {\n  padding-top: 1.25em;\n  padding-bottom: 0.25em;\n}\n.form-label-group input:not(:placeholder-shown) ~ label {\n  padding-top: 0.25em;\n  padding-bottom: 0.25em;\n  font-size: 12px;\n  color: #777;\n}\n/* Fallback for Edge\n-------------------------------------------------- */\n@supports (-ms-ime-align: auto) {\n  .form-label-group > label {\n    display: none;\n  }\n\n  .form-label-group input::-ms-input-placeholder {\n    color: #777;\n  }\n}\n/* Fallback for IE\n-------------------------------------------------- */\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .form-label-group > label {\n    display: none;\n  }\n\n  .form-label-group input:-ms-input-placeholder {\n    color: #777;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9hdXRoL2NvbXBvbmVudHMvcmVnaXN0ZXIvQzpcXFZpc2lvbi1EcmVhbVxcdmQtc291cmNlXFxyZXBvc1xcZGV2XFx3ZWJcXFZEU29sdXRpb25cXFZEQXBwVUkvc3JjXFxhcHBcXGNvcmVcXGF1dGhcXGNvbXBvbmVudHNcXHJlZ2lzdGVyXFxyZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9hdXRoL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUJBQUE7QUFDQTtFQUNFLDRDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDQ0Y7QURDRTtFQUNFLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDRUo7QURDQTs7NENBQUE7QUFHQTtFQUNFLDZCQUFBO0VBQ0Esb0JBQUE7RUFFQSxtQkFBQTtBQ0VGO0FEQ0E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0VGO0FEQ0E7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FDRUY7QURDQTs7RUFFRSxlQUFBO0VBQ0EsZUFBQTtBQ0VGO0FEQ0E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUFrQixzQ0FBQTtFQUNsQixnQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFBYyxvQ0FBQTtFQUNkLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQ0FBQTtBQ0lGO0FEREE7RUFDRSxrQkFBQTtBQ0lGO0FER0E7RUFDRSxrQkFBQTtBQ0lGO0FEREE7RUFDRSxrQkFBQTtBQ0lGO0FEREE7RUFDRSxrQkFBQTtBQ0lGO0FEREE7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0FDSUY7QUREQTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ0lGO0FEREE7b0RBQUE7QUFFQTtFQUNFO0lBQ0UsYUFBQTtFQ0lGOztFRERBO0lBQ0UsV0FBQTtFQ0lGO0FBQ0Y7QUREQTtvREFBQTtBQUVBO0VBQ0U7SUFDRSxhQUFBO0VDR0Y7O0VEQUE7SUFDRSxXQUFBO0VDR0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvYXV0aC9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTmF2aWdhdGlvbiBsaW5rcyAqL1xyXG5hIHtcclxuICBjb2xvcjogdmFyKC0tZGVlcC1za3ktYmx1ZS1jYXByaSkgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAycHggNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuICBhOmhvdmVyLCBhOmZvY3VzIHtcclxuICAgIGNvbG9yOiB2YXIoLS1wdXJlLXllbGxvdykgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDJweCA2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG5cclxuLypcclxuICBDdXN0b20gc3R5bGVzIGZvciBnZW5lcmljIGZvcm0gY29udGFpbmVyXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4uZm9ybS1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmZvcm0tcmVnaXN0ZXIge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIG1heC13aWR0aDogNDIwcHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmZvcm0tbGFiZWwtZ3JvdXAge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsLWdyb3VwID4gaW5wdXQsXHJcbi5mb3JtLWxhYmVsLWdyb3VwID4gbGFiZWwge1xyXG4gIGhlaWdodDogMy4xMjVlbTtcclxuICBwYWRkaW5nOiAuNzVlbTtcclxufVxyXG5cclxuLmZvcm0tbGFiZWwtZ3JvdXAgPiBsYWJlbCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7IC8qIE92ZXJyaWRlIGRlZmF1bHQgYDxsYWJlbD5gIG1hcmdpbiAqL1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgY29sb3I6ICM0OTUwNTc7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgY3Vyc29yOiB0ZXh0OyAvKiBNYXRjaCB0aGUgaW5wdXQgdW5kZXIgdGhlIGxhYmVsICovXHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogLjI1ZW07XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4xcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pIHtcclxuICBwYWRkaW5nLXRvcDogMS4yNWVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAuMjVlbTtcclxufVxyXG5cclxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikgfiBsYWJlbCB7XHJcbiAgcGFkZGluZy10b3A6IC4yNWVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAuMjVlbTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6ICM3Nzc7XHJcbn1cclxuXHJcbi8qIEZhbGxiYWNrIGZvciBFZGdlXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbkBzdXBwb3J0cyAoLW1zLWltZS1hbGlnbjogYXV0bykge1xyXG4gIC5mb3JtLWxhYmVsLWdyb3VwID4gbGFiZWwge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICM3Nzc7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBGYWxsYmFjayBmb3IgSUVcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSwgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcclxuICAuZm9ybS1sYWJlbC1ncm91cCA+IGxhYmVsIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICM3Nzc7XHJcbiAgfVxyXG59XHJcbiIsIi8qIE5hdmlnYXRpb24gbGlua3MgKi9cbmEge1xuICBjb2xvcjogdmFyKC0tZGVlcC1za3ktYmx1ZS1jYXByaSkgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMnB4IDZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbmE6aG92ZXIsIGE6Zm9jdXMge1xuICBjb2xvcjogdmFyKC0tcHVyZS15ZWxsb3cpICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDJweCA2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4vKlxuICBDdXN0b20gc3R5bGVzIGZvciBnZW5lcmljIGZvcm0gY29udGFpbmVyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi5mb3JtLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZvcm0tcmVnaXN0ZXIge1xuICB3aWR0aDogYXV0bztcbiAgbWF4LXdpZHRoOiA0MjBweDtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwID4gaW5wdXQsXG4uZm9ybS1sYWJlbC1ncm91cCA+IGxhYmVsIHtcbiAgaGVpZ2h0OiAzLjEyNWVtO1xuICBwYWRkaW5nOiAwLjc1ZW07XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwID4gbGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICAvKiBPdmVycmlkZSBkZWZhdWx0IGA8bGFiZWw+YCBtYXJnaW4gKi9cbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBjdXJzb3I6IHRleHQ7XG4gIC8qIE1hdGNoIHRoZSBpbnB1dCB1bmRlciB0aGUgbGFiZWwgKi9cbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pIHtcbiAgcGFkZGluZy10b3A6IDEuMjVlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuMjVlbTtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikgfiBsYWJlbCB7XG4gIHBhZGRpbmctdG9wOiAwLjI1ZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjI1ZW07XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM3Nzc7XG59XG5cbi8qIEZhbGxiYWNrIGZvciBFZGdlXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuQHN1cHBvcnRzICgtbXMtaW1lLWFsaWduOiBhdXRvKSB7XG4gIC5mb3JtLWxhYmVsLWdyb3VwID4gbGFiZWwge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogIzc3NztcbiAgfVxufVxuLyogRmFsbGJhY2sgZm9yIElFXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSwgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcbiAgLmZvcm0tbGFiZWwtZ3JvdXAgPiBsYWJlbCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICM3Nzc7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/core/auth/components/register/register.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/core/auth/components/register/register.component.ts ***!
  \*********************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RegisterComponent = class RegisterComponent {
    constructor() { }
    ngOnInit() {
    }
};
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/auth/components/register/register.component.html"),
        styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/core/auth/components/register/register.component.scss")]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _auth_components_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/components/register/register.component */ "./src/app/core/auth/components/register/register.component.ts");
/* harmony import */ var _auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/components/login/login.component */ "./src/app/core/auth/components/login/login.component.ts");






let CoreModule = class CoreModule {
};
CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_auth_components_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"], _auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ],
        exports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]
    })
], CoreModule);



/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  background-color: transparent;\n  color: var(--white) !important;\n  padding: 1px 5px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n}\n\na:hover, a:focus {\n  background-color: inherit;\n  color: var(--pure-yellow) !important;\n  padding: 1px 5px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n}\n\n.nav-caption {\n  display: inline-block;\n  padding-left: 10px;\n}\n\n.flex-right-spacer {\n  flex: 1 1 auto;\n}\n\n.flex-left-spacer {\n  flex: auto 1 1;\n}\n\n.fa-icon-size-small {\n  font-size: 12px;\n  padding: 0 10px;\n}\n\n.fa-icon-size-extra-small {\n  font-size: 8px;\n  padding: 0 10px;\n}\n\n.fa-icon-size-small-left {\n  font-size: 12px;\n  padding-left: 10px;\n}\n\n.fa-icon-size-small-right {\n  font-size: 12px;\n  padding-right: 10px;\n}\n\n/*.fa-icon-size {\n  font-size: 16px;\n  padding: 0 8px;\n}*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0M6XFxWaXNpb24tRHJlYW1cXHZkLXNvdXJjZVxccmVwb3NcXGRldlxcd2ViXFxWRFNvbHV0aW9uXFxWREFwcFVJL3NyY1xcYXBwXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtBQ0NGOztBRENFO0VBQ0UseUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0FDRUo7O0FEQ0E7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FDRUY7O0FEQ0E7RUFDRSxjQUFBO0FDRUY7O0FEQ0E7RUFDRSxjQUFBO0FDRUY7O0FEQ0E7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQ0VGOztBRENBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNFRjs7QURDQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ0VGOztBRENBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FDRUY7O0FEQ0E7OztFQUFBIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSkgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAxcHggNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbiAgYTpob3ZlciwgYTpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgY29sb3I6IHZhcigtLXB1cmUteWVsbG93KSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMXB4IDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcblxyXG4ubmF2LWNhcHRpb24ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5mbGV4LXJpZ2h0LXNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbi5mbGV4LWxlZnQtc3BhY2VyIHtcclxuICBmbGV4OiBhdXRvIDEgMTtcclxufVxyXG5cclxuLmZhLWljb24tc2l6ZS1zbWFsbCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDAgMTBweDtcclxufVxyXG5cclxuLmZhLWljb24tc2l6ZS1leHRyYS1zbWFsbCB7XHJcbiAgZm9udC1zaXplOiA4cHg7XHJcbiAgcGFkZGluZzogMCAxMHB4O1xyXG59XHJcblxyXG4uZmEtaWNvbi1zaXplLXNtYWxsLWxlZnQge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5mYS1pY29uLXNpemUtc21hbGwtcmlnaHQge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4vKi5mYS1pY29uLXNpemUge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBwYWRkaW5nOiAwIDhweDtcclxufSovXHJcbiIsImEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLXdoaXRlKSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxcHggNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5hOmhvdmVyLCBhOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgY29sb3I6IHZhcigtLXB1cmUteWVsbG93KSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxcHggNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ubmF2LWNhcHRpb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLmZsZXgtcmlnaHQtc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi5mbGV4LWxlZnQtc3BhY2VyIHtcbiAgZmxleDogYXV0byAxIDE7XG59XG5cbi5mYS1pY29uLXNpemUtc21hbGwge1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cblxuLmZhLWljb24tc2l6ZS1leHRyYS1zbWFsbCB7XG4gIGZvbnQtc2l6ZTogOHB4O1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG5cbi5mYS1pY29uLXNpemUtc21hbGwtbGVmdCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4uZmEtaWNvbi1zaXplLXNtYWxsLXJpZ2h0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4vKi5mYS1pY29uLXNpemUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDAgOHB4O1xufSovIl19 */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_models_vd_buildversion_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/models/vd-buildversion-model */ "./src/app/shared/models/vd-buildversion-model.ts");



let FooterComponent = class FooterComponent {
    // Constructor
    constructor() {
        this.VDBuildVersionModel = new _shared_models_vd_buildversion_model__WEBPACK_IMPORTED_MODULE_2__["VDBuildVersionModel"]();
    }
    // Initialize
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** Custom CSS styles for home-index component sections and mat tab\n-------------------------------------------------------------------\n*/\n.control-font-text {\n  font-size: 16px;\n  font-weight: 500;\n}\n.button-size {\n  background-color: inherit;\n  padding: 10px 20px;\n  margin-left: 60px;\n  width: 200px;\n  font-size: 20px;\n  font-weight: 600;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  border: none;\n  border-radius: 4px;\n  transition: 0.4s;\n  cursor: pointer;\n}\n.button-primary {\n  color: #28a745;\n  border: 2px solid #28a745;\n}\n.button-primary:hover,\n.button-primary:focus {\n  background-color: #28a745;\n  color: #ffffff;\n}\n.button-secondary {\n  color: #000;\n  border: 2px solid #000;\n}\n.button-secondary:hover,\n.button-secondary:focus {\n  background-color: #000;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVmlzaW9uLURyZWFtXFx2ZC1zb3VyY2VcXHJlcG9zXFxkZXZcXHdlYlxcVkRTb2x1dGlvblxcVkRBcHBVSS9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUFBO0FBR0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNDRjtBREVBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0NGO0FERUE7RUFDRSxjQUFBO0VBQ0EseUJBQUE7QUNDRjtBRENFOztFQUVFLHlCQUFBO0VBQ0EsY0FBQTtBQ0VKO0FEQ0E7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7QUNFRjtBREFFOztFQUVFLHNCQUFBO0VBQ0EsY0FBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEN1c3RvbSBDU1Mgc3R5bGVzIGZvciBob21lLWluZGV4IGNvbXBvbmVudCBzZWN0aW9ucyBhbmQgbWF0IHRhYlxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiovXHJcbi5jb250cm9sLWZvbnQtdGV4dCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5idXR0b24tc2l6ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5idXR0b24tcHJpbWFyeSB7XHJcbiAgY29sb3I6ICMyOGE3NDU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzI4YTc0NTtcclxufVxyXG4gIC5idXR0b24tcHJpbWFyeTpob3ZlcixcclxuICAuYnV0dG9uLXByaW1hcnk6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuXHJcbi5idXR0b24tc2Vjb25kYXJ5IHtcclxuICBjb2xvcjogIzAwMDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xyXG59XHJcbiAgLmJ1dHRvbi1zZWNvbmRhcnk6aG92ZXIsXHJcbiAgLmJ1dHRvbi1zZWNvbmRhcnk6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuIiwiLyoqIEN1c3RvbSBDU1Mgc3R5bGVzIGZvciBob21lLWluZGV4IGNvbXBvbmVudCBzZWN0aW9ucyBhbmQgbWF0IHRhYlxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cbi5jb250cm9sLWZvbnQtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmJ1dHRvbi1zaXplIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBtYXJnaW4tbGVmdDogNjBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0cmFuc2l0aW9uOiAwLjRzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5idXR0b24tcHJpbWFyeSB7XG4gIGNvbG9yOiAjMjhhNzQ1O1xuICBib3JkZXI6IDJweCBzb2xpZCAjMjhhNzQ1O1xufVxuXG4uYnV0dG9uLXByaW1hcnk6aG92ZXIsXG4uYnV0dG9uLXByaW1hcnk6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmJ1dHRvbi1zZWNvbmRhcnkge1xuICBjb2xvcjogIzAwMDtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcbn1cblxuLmJ1dHRvbi1zZWNvbmRhcnk6aG92ZXIsXG4uYnV0dG9uLXNlY29uZGFyeTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    // Constructor
    constructor() {
        // Method Function - executeSelectedChange method function that logs 
        // to the console the index number of the selected mat-tab.
        this.executeSelectedChange = (event) => {
            console.log(event);
        };
    }
    // Initialize
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/layout/layout.component.scss":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".layout-wrapper {\n  height: 100%;\n}\n\n.flex-wrapper {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L0M6XFxWaXNpb24tRHJlYW1cXHZkLXNvdXJjZVxccmVwb3NcXGRldlxcd2ViXFxWRFNvbHV0aW9uXFxWREFwcFVJL3NyY1xcYXBwXFxsYXlvdXRcXGxheW91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGF5b3V0LXdyYXBwZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmZsZXgtd3JhcHBlciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbiIsIi5sYXlvdXQtd3JhcHBlciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmZsZXgtd3JhcHBlciB7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LayoutComponent = class LayoutComponent {
    constructor() { }
    ngOnInit() {
    }
};
LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-layout',
        template: __webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/layout.component.html"),
        styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/layout/layout.component.scss")]
    })
], LayoutComponent);



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");























//import { MatAutocomplete, MatAutocompleteModule } from '@angular/material/autocomplete';
//import { MatSnackBar, MatSnackBarConfig, MatSnackBarModule  } from '@angular/material';
let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__["MatSortModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__["MatProgressSpinnerModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatNativeDateModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"]
            //MatSnackBar,
            //MatSnackBarConfig,
            //MatSnackBarModule,
            //MatAutocomplete,
            //MatAutocompleteModule
        ],
        exports: [
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__["MatSortModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__["MatProgressSpinnerModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatNativeDateModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"]
            //MatSnackBar,
            //MatSnackBarConfig,
            //MatSnackBarModule,
            //MatAutocomplete,
            //MatAutocompleteModule
        ]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/navigation/nav-main/nav-main.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/navigation/nav-main/nav-main.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Highlighting rules for social icons, using normal link items */\n/*li .glyphicon {\n  margin-right: 10px;\n}\n\nli.link-active a,\nli.link-active a:hover,\nli.link-active a:focus {\n  background-color: inherit;\n  color: lightgray;\n}*/\n/*.nav-item-group {\n  color: var(--dark-gray) !important;\n  font-size: 1em;\n  font-weight: 500;\n  display: inline-block;\n  position: relative;\n  margin-bottom: 1rem;\n}*/\na {\n  font-size: 1em;\n  font-weight: 500;\n  display: inline-block;\n}\na:hover, a:focus {\n  color: var(--very-light-gray) !important;\n  display: inline-block;\n}\n/* Button links */\n.btn {\n  background-color: transparent;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  border: none;\n  border-radius: 4px;\n  transition: 0.4s ease-in-out;\n  cursor: pointer;\n}\n.btn-nav-brand {\n  width: 200px;\n  box-sizing: border-box;\n  text-align: right;\n  color: var(--white) !important;\n  font-size: 1em;\n  background-image: url('vd_brand_yelblu_sol_tra_64x64.png');\n  background-position: left center;\n  background-repeat: no-repeat;\n  padding: 5px 10px;\n  margin: 10px 5px;\n}\n.btn-nav-brand:hover,\n.btn-nav-brand:focus {\n  background-color: inherit;\n  color: var(--pure-yellow) !important;\n}\n.navigation-items {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\nmat-toolbar {\n  border-radius: 3px;\n}\n@media (max-width: 959px) {\n  mat-toolbar {\n    border-radius: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9uYXYtbWFpbi9DOlxcVmlzaW9uLURyZWFtXFx2ZC1zb3VyY2VcXHJlcG9zXFxkZXZcXHdlYlxcVkRTb2x1dGlvblxcVkRBcHBVSS9zcmNcXGFwcFxcbmF2aWdhdGlvblxcbmF2LW1haW5cXG5hdi1tYWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uYXZpZ2F0aW9uL25hdi1tYWluL25hdi1tYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlFQUFBO0FBQ0E7Ozs7Ozs7OztFQUFBO0FBV0E7Ozs7Ozs7RUFBQTtBQVNBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUNERjtBREdFO0VBQ0Usd0NBQUE7RUFDQSxxQkFBQTtBQ0FKO0FER0EsaUJBQUE7QUFDQTtFQUNFLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBRUEsNEJBQUE7RUFDQSxlQUFBO0FDQUY7QURHQTtFQUNFLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0EsMERBQUE7RUFDQSxnQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0FGO0FERUU7O0VBRUUseUJBQUE7RUFDQSxvQ0FBQTtBQ0NKO0FERUE7RUFDRSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDQ0Y7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7QURFQTtFQUNFO0lBQ0Usa0JBQUE7RUNDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbmF2aWdhdGlvbi9uYXYtbWFpbi9uYXYtbWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEhpZ2hsaWdodGluZyBydWxlcyBmb3Igc29jaWFsIGljb25zLCB1c2luZyBub3JtYWwgbGluayBpdGVtcyAqL1xyXG4vKmxpIC5nbHlwaGljb24ge1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxubGkubGluay1hY3RpdmUgYSxcclxubGkubGluay1hY3RpdmUgYTpob3ZlcixcclxubGkubGluay1hY3RpdmUgYTpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICBjb2xvcjogbGlnaHRncmF5O1xyXG59Ki9cclxuXHJcbi8qLm5hdi1pdGVtLWdyb3VwIHtcclxuICBjb2xvcjogdmFyKC0tZGFyay1ncmF5KSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59Ki9cclxuXHJcbmEge1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbiAgYTpob3ZlciwgYTpmb2N1cyB7XHJcbiAgICBjb2xvcjogdmFyKC0tdmVyeS1saWdodC1ncmF5KSAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuXHJcbi8qIEJ1dHRvbiBsaW5rcyAqL1xyXG4uYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2UtaW4tb3V0O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJ0bi1uYXYtYnJhbmQge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSkgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDFlbTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy92ZC9icmFuZC9pbWFnZXMvdmRfYnJhbmRfeWVsYmx1X3NvbF90cmFfNjR4NjQucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICBtYXJnaW46IDEwcHggNXB4O1xyXG59XHJcbiAgLmJ0bi1uYXYtYnJhbmQ6aG92ZXIsXHJcbiAgLmJ0bi1uYXYtYnJhbmQ6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICAgIGNvbG9yOiB2YXIoLS1wdXJlLXllbGxvdykgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4ubmF2aWdhdGlvbi1pdGVtcyB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5tYXQtdG9vbGJhciB7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiA5NTlweCkge1xyXG4gIG1hdC10b29sYmFyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICB9XHJcbn1cclxuIiwiLyogSGlnaGxpZ2h0aW5nIHJ1bGVzIGZvciBzb2NpYWwgaWNvbnMsIHVzaW5nIG5vcm1hbCBsaW5rIGl0ZW1zICovXG4vKmxpIC5nbHlwaGljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbmxpLmxpbmstYWN0aXZlIGEsXG5saS5saW5rLWFjdGl2ZSBhOmhvdmVyLFxubGkubGluay1hY3RpdmUgYTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIGNvbG9yOiBsaWdodGdyYXk7XG59Ki9cbi8qLm5hdi1pdGVtLWdyb3VwIHtcbiAgY29sb3I6IHZhcigtLWRhcmstZ3JheSkgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufSovXG5hIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuYTpob3ZlciwgYTpmb2N1cyB7XG4gIGNvbG9yOiB2YXIoLS12ZXJ5LWxpZ2h0LWdyYXkpICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLyogQnV0dG9uIGxpbmtzICovXG4uYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZS1pbi1vdXQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ0bi1uYXYtYnJhbmQge1xuICB3aWR0aDogMjAwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogdmFyKC0td2hpdGUpICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvdmQvYnJhbmQvaW1hZ2VzL3ZkX2JyYW5kX3llbGJsdV9zb2xfdHJhXzY0eDY0LnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBtYXJnaW46IDEwcHggNXB4O1xufVxuXG4uYnRuLW5hdi1icmFuZDpob3Zlcixcbi5idG4tbmF2LWJyYW5kOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgY29sb3I6IHZhcigtLXB1cmUteWVsbG93KSAhaW1wb3J0YW50O1xufVxuXG4ubmF2aWdhdGlvbi1pdGVtcyB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG5tYXQtdG9vbGJhciB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk1OXB4KSB7XG4gIG1hdC10b29sYmFyIHtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/navigation/nav-main/nav-main.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/navigation/nav-main/nav-main.component.ts ***!
  \***********************************************************/
/*! exports provided: NavMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMainComponent", function() { return NavMainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavMainComponent = class NavMainComponent {
    // Constructor
    constructor() {
        // Field Properties
        this.sidenavToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // mat-icon-button click event function
        this.onToggleSidenav = () => {
            this.sidenavToggle.emit();
        };
    }
    // Initialize
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NavMainComponent.prototype, "sidenavToggle", void 0);
NavMainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-main',
        template: __webpack_require__(/*! raw-loader!./nav-main.component.html */ "./node_modules/raw-loader/index.js!./src/app/navigation/nav-main/nav-main.component.html"),
        styles: [__webpack_require__(/*! ./nav-main.component.scss */ "./src/app/navigation/nav-main/nav-main.component.scss")]
    })
], NavMainComponent);



/***/ }),

/***/ "./src/app/navigation/nav-side/nav-side.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/navigation/nav-side/nav-side.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Highlighting rules for navigation links */\na {\n  color: var(--very-dark-gray) !important;\n  font-size: 1em;\n  font-weight: 500;\n  display: inline-block;\n}\na:hover, a:focus {\n  color: var(--deep-sky-blue-capri) !important;\n  display: inline-block;\n}\n.nav-caption {\n  display: inline-block;\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9uYXYtc2lkZS9DOlxcVmlzaW9uLURyZWFtXFx2ZC1zb3VyY2VcXHJlcG9zXFxkZXZcXHdlYlxcVkRTb2x1dGlvblxcVkRBcHBVSS9zcmNcXGFwcFxcbmF2aWdhdGlvblxcbmF2LXNpZGVcXG5hdi1zaWRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uYXZpZ2F0aW9uL25hdi1zaWRlL25hdi1zaWRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRDQUFBO0FBQ0E7RUFDRSx1Q0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDQ0Y7QURDRTtFQUNFLDRDQUFBO0VBQ0EscUJBQUE7QUNFSjtBRENBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvbmF2aWdhdGlvbi9uYXYtc2lkZS9uYXYtc2lkZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEhpZ2hsaWdodGluZyBydWxlcyBmb3IgbmF2aWdhdGlvbiBsaW5rcyAqL1xyXG5hIHtcclxuICBjb2xvcjogdmFyKC0tdmVyeS1kYXJrLWdyYXkpICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuICBhOmhvdmVyLCBhOmZvY3VzIHtcclxuICAgIGNvbG9yOiB2YXIoLS1kZWVwLXNreS1ibHVlLWNhcHJpKSAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuXHJcbi5uYXYtY2FwdGlvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG4iLCIvKiBIaWdobGlnaHRpbmcgcnVsZXMgZm9yIG5hdmlnYXRpb24gbGlua3MgKi9cbmEge1xuICBjb2xvcjogdmFyKC0tdmVyeS1kYXJrLWdyYXkpICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbmE6aG92ZXIsIGE6Zm9jdXMge1xuICBjb2xvcjogdmFyKC0tZGVlcC1za3ktYmx1ZS1jYXByaSkgIWltcG9ydGFudDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ubmF2LWNhcHRpb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/navigation/nav-side/nav-side.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/navigation/nav-side/nav-side.component.ts ***!
  \***********************************************************/
/*! exports provided: NavSideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavSideComponent", function() { return NavSideComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavSideComponent = class NavSideComponent {
    // Constructor
    constructor() {
        // Field Properties
        this.sidenavClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // Function Methods - onSidenavClose function
        this.onSidenavClose = () => {
            this.sidenavClose.emit();
        };
    }
    // Initialize
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NavSideComponent.prototype, "sidenavClose", void 0);
NavSideComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-side',
        template: __webpack_require__(/*! raw-loader!./nav-side.component.html */ "./node_modules/raw-loader/index.js!./src/app/navigation/nav-side/nav-side.component.html"),
        styles: [__webpack_require__(/*! ./nav-side.component.scss */ "./src/app/navigation/nav-side/nav-side.component.scss")]
    })
], NavSideComponent);



/***/ }),

/***/ "./src/app/pages/errors/not-found/not-found.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/errors/not-found/not-found.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section div:nth-child(1),\nsection div:nth-child(3) {\n  color: blue;\n  font-size: 50px;\n}\n\nsection div:nth-child(1) {\n  margin-top: 20px;\n}\n\nsection div:nth-child(2) {\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXJyb3JzL25vdC1mb3VuZC9DOlxcVmlzaW9uLURyZWFtXFx2ZC1zb3VyY2VcXHJlcG9zXFxkZXZcXHdlYlxcVkRTb2x1dGlvblxcVkRBcHBVSS9zcmNcXGFwcFxccGFnZXNcXGVycm9yc1xcbm90LWZvdW5kXFxub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Vycm9ycy9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLFdBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZXJyb3JzL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIGRpdjpudGgtY2hpbGQoMSksXHJcbnNlY3Rpb24gZGl2Om50aC1jaGlsZCgzKSB7XHJcbiAgY29sb3I6IGJsdWU7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG59XHJcblxyXG5zZWN0aW9uIGRpdjpudGgtY2hpbGQoMSkge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbnNlY3Rpb24gZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG4iLCJzZWN0aW9uIGRpdjpudGgtY2hpbGQoMSksXG5zZWN0aW9uIGRpdjpudGgtY2hpbGQoMykge1xuICBjb2xvcjogYmx1ZTtcbiAgZm9udC1zaXplOiA1MHB4O1xufVxuXG5zZWN0aW9uIGRpdjpudGgtY2hpbGQoMSkge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5zZWN0aW9uIGRpdjpudGgtY2hpbGQoMikge1xuICB3aWR0aDogNTAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/errors/not-found/not-found.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/errors/not-found/not-found.component.ts ***!
  \***************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotFoundComponent = class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-not-found',
        template: __webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/errors/not-found/not-found.component.html"),
        styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/pages/errors/not-found/not-found.component.scss")]
    })
], NotFoundComponent);



/***/ }),

/***/ "./src/app/pages/errors/server-error/server-error.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/errors/server-error/server-error.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section div p:nth-child(1) {\n  font-size: 50px;\n  text-align: center;\n  color: #f44336;\n}\n\nsection div p:nth-child(2) {\n  font-size: 20px;\n  text-align: center;\n  color: #3f51b5;\n}\n\nmat-checkbox {\n  color: #3f51b5;\n}\n\nsection div h1 {\n  text-align: center;\n  color: #3f51b5;\n  position: relative;\n  top: -85px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXJyb3JzL3NlcnZlci1lcnJvci9DOlxcVmlzaW9uLURyZWFtXFx2ZC1zb3VyY2VcXHJlcG9zXFxkZXZcXHdlYlxcVkRTb2x1dGlvblxcVkRBcHBVSS9zcmNcXGFwcFxccGFnZXNcXGVycm9yc1xcc2VydmVyLWVycm9yXFxzZXJ2ZXItZXJyb3IuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Vycm9ycy9zZXJ2ZXItZXJyb3Ivc2VydmVyLWVycm9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9lcnJvcnMvc2VydmVyLWVycm9yL3NlcnZlci1lcnJvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24gZGl2IHA6bnRoLWNoaWxkKDEpIHtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjZjQ0MzM2O1xyXG59XHJcblxyXG5zZWN0aW9uIGRpdiBwOm50aC1jaGlsZCgyKSB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzNmNTFiNTtcclxufVxyXG5cclxubWF0LWNoZWNrYm94IHtcclxuICBjb2xvcjogIzNmNTFiNTtcclxufVxyXG5cclxuc2VjdGlvbiBkaXYgaDEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzNmNTFiNTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAtODVweDtcclxufVxyXG4iLCJzZWN0aW9uIGRpdiBwOm50aC1jaGlsZCgxKSB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2Y0NDMzNjtcbn1cblxuc2VjdGlvbiBkaXYgcDpudGgtY2hpbGQoMikge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMzZjUxYjU7XG59XG5cbm1hdC1jaGVja2JveCB7XG4gIGNvbG9yOiAjM2Y1MWI1O1xufVxuXG5zZWN0aW9uIGRpdiBoMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMzZjUxYjU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtODVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/errors/server-error/server-error.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/errors/server-error/server-error.component.ts ***!
  \*********************************************************************/
/*! exports provided: ServerErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerErrorComponent", function() { return ServerErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ServerErrorComponent = class ServerErrorComponent {
    // Constructor
    constructor() {
        this.errorPercentage = 0;
        // Public Method Functions - CheckBox checkChanged function
        this.checkChanged = (event) => {
            this.reportedError = event.checked;
            this.reportedError ? this.startTimer() : this.stopTimer();
        };
        // Private Method Functions - Private helper startTimer function
        this.startTimer = () => {
            this.timer = setInterval(() => {
                this.errorPercentage += 1;
                if (this.errorPercentage === 100) {
                    clearInterval(this.timer);
                }
            }, 30);
        };
        // Private Method Functions - Private helper stopTimer function
        this.stopTimer = () => {
            clearInterval(this.timer);
            this.errorPercentage = 0;
        };
    }
    // Initialize
    ngOnInit() {
    }
};
ServerErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-server-error',
        template: __webpack_require__(/*! raw-loader!./server-error.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/errors/server-error/server-error.component.html"),
        styles: [__webpack_require__(/*! ./server-error.component.scss */ "./src/app/pages/errors/server-error/server-error.component.scss")]
    })
], ServerErrorComponent);



/***/ }),

/***/ "./src/app/pages/legal/privacy/privacy.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/legal/privacy/privacy.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xlZ2FsL3ByaXZhY3kvcHJpdmFjeS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/legal/privacy/privacy.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/legal/privacy/privacy.component.ts ***!
  \**********************************************************/
/*! exports provided: PrivacyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyComponent", function() { return PrivacyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PrivacyComponent = class PrivacyComponent {
    constructor() { }
    ngOnInit() {
    }
};
PrivacyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-privacy',
        template: __webpack_require__(/*! raw-loader!./privacy.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/legal/privacy/privacy.component.html"),
        styles: [__webpack_require__(/*! ./privacy.component.scss */ "./src/app/pages/legal/privacy/privacy.component.scss")]
    })
], PrivacyComponent);



/***/ }),

/***/ "./src/app/pages/legal/terms/terms.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/legal/terms/terms.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xlZ2FsL3Rlcm1zL3Rlcm1zLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/legal/terms/terms.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/legal/terms/terms.component.ts ***!
  \******************************************************/
/*! exports provided: TermsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsComponent", function() { return TermsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TermsComponent = class TermsComponent {
    constructor() { }
    ngOnInit() {
    }
};
TermsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-terms',
        template: __webpack_require__(/*! raw-loader!./terms.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/legal/terms/terms.component.html"),
        styles: [__webpack_require__(/*! ./terms.component.scss */ "./src/app/pages/legal/terms/terms.component.scss")]
    })
], TermsComponent);



/***/ }),

/***/ "./src/app/projects/projects.component.scss":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProjectsComponent = class ProjectsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-projects',
        template: __webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/index.js!./src/app/projects/projects.component.html"),
        styles: [__webpack_require__(/*! ./projects.component.scss */ "./src/app/projects/projects.component.scss")]
    })
], ProjectsComponent);



/***/ }),

/***/ "./src/app/routing/routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/routing/routing.module.ts ***!
  \*******************************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _core_auth_components_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/auth/components/register/register.component */ "./src/app/core/auth/components/register/register.component.ts");
/* harmony import */ var _core_auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/auth/components/login/login.component */ "./src/app/core/auth/components/login/login.component.ts");
/* harmony import */ var _pages_legal_terms_terms_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pages/legal/terms/terms.component */ "./src/app/pages/legal/terms/terms.component.ts");
/* harmony import */ var _pages_legal_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pages/legal/privacy/privacy.component */ "./src/app/pages/legal/privacy/privacy.component.ts");
/* harmony import */ var _pages_errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../pages/errors/not-found/not-found.component */ "./src/app/pages/errors/not-found/not-found.component.ts");
/* harmony import */ var _pages_errors_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../pages/errors/server-error/server-error.component */ "./src/app/pages/errors/server-error/server-error.component.ts");














const routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"] },
    { path: 'services', component: _services_services_component__WEBPACK_IMPORTED_MODULE_6__["ServicesComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"] },
    { path: 'register', component: _core_auth_components_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"] },
    { path: 'login', component: _core_auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
    { path: 'legal/terms', component: _pages_legal_terms_terms_component__WEBPACK_IMPORTED_MODULE_10__["TermsComponent"] },
    { path: 'legal/privacy', component: _pages_legal_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_11__["PrivacyComponent"] },
    { path: '404', component: _pages_errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__["NotFoundComponent"] },
    { path: '500', component: _pages_errors_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_13__["ServerErrorComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/404', pathMatch: 'full' }
];
let RoutingModule = class RoutingModule {
};
RoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, { useHash: true })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], RoutingModule);



/***/ }),

/***/ "./src/app/services/services.component.scss":
/*!**************************************************!*\
  !*** ./src/app/services/services.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2VzL3NlcnZpY2VzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/services/services.component.ts":
/*!************************************************!*\
  !*** ./src/app/services/services.component.ts ***!
  \************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ServicesComponent = class ServicesComponent {
    constructor() { }
    ngOnInit() {
    }
};
ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-services',
        template: __webpack_require__(/*! raw-loader!./services.component.html */ "./node_modules/raw-loader/index.js!./src/app/services/services.component.html"),
        styles: [__webpack_require__(/*! ./services.component.scss */ "./src/app/services/services.component.scss")]
    })
], ServicesComponent);



/***/ }),

/***/ "./src/app/shared/dialogs/error-dialog/error-dialog.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/shared/dialogs/error-dialog/error-dialog.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9kaWFsb2dzL2Vycm9yLWRpYWxvZy9lcnJvci1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/dialogs/error-dialog/error-dialog.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared/dialogs/error-dialog/error-dialog.component.ts ***!
  \***********************************************************************/
/*! exports provided: ErrorDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorDialogComponent", function() { return ErrorDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let ErrorDialogComponent = class ErrorDialogComponent {
    // Constructor
    constructor(dialogRef, // dialogRef manipulates the opened dialog and in this case 
    data // it is the ErrorDialogComponent's template reference. The
    ) {
        this.dialogRef = dialogRef;
        this.data = data;
        // Public Method Functions - closeDialog function
        this.closeDialog = () => {
            this.dialogRef.close();
        };
    } // data variable accepts any information passed to this component.
    // Initialize
    ngOnInit() {
    }
};
ErrorDialogComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
ErrorDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-error-dialog',
        template: __webpack_require__(/*! raw-loader!./error-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/dialogs/error-dialog/error-dialog.component.html"),
        styles: [__webpack_require__(/*! ./error-dialog.component.scss */ "./src/app/shared/dialogs/error-dialog/error-dialog.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], ErrorDialogComponent);



/***/ }),

/***/ "./src/app/shared/dialogs/global-dialog/global-dialog.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/shared/dialogs/global-dialog/global-dialog.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9kaWFsb2dzL2dsb2JhbC1kaWFsb2cvZ2xvYmFsLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/dialogs/global-dialog/global-dialog.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/shared/dialogs/global-dialog/global-dialog.component.ts ***!
  \*************************************************************************/
/*! exports provided: GlobalDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalDialogComponent", function() { return GlobalDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GlobalDialogComponent = class GlobalDialogComponent {
    constructor() { }
    ngOnInit() {
    }
};
GlobalDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-global-dialog',
        template: __webpack_require__(/*! raw-loader!./global-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/dialogs/global-dialog/global-dialog.component.html"),
        styles: [__webpack_require__(/*! ./global-dialog.component.scss */ "./src/app/shared/dialogs/global-dialog/global-dialog.component.scss")]
    })
], GlobalDialogComponent);



/***/ }),

/***/ "./src/app/shared/dialogs/logout-dialog/logout-dialog.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/shared/dialogs/logout-dialog/logout-dialog.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/********************** Modal Styles - Start **********************/\n.modal-open {\n  overflow: hidden;\n}\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  outline: 0;\n}\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 0.5rem;\n  pointer-events: none;\n}\n.modal.fade .modal-dialog {\n  transition: transform 0.3s ease-out;\n  transform: translate(0, -50px);\n}\n@media (prefers-reduced-motion: reduce) {\n  .modal.fade .modal-dialog {\n    transition: none;\n  }\n}\n.modal.show .modal-dialog {\n  transform: none;\n}\n.modal-dialog-scrollable {\n  display: flex;\n  max-height: calc(100% - 1rem);\n}\n.modal-dialog-scrollable .modal-content {\n  max-height: calc(100vh - 1rem);\n  overflow: hidden;\n}\n.modal-dialog-scrollable .modal-header,\n.modal-dialog-scrollable .modal-footer {\n  flex-shrink: 0;\n}\n.modal-dialog-scrollable .modal-body {\n  overflow-y: auto;\n}\n.modal-dialog-centered {\n  display: flex;\n  align-items: center;\n  min-height: calc(100% - 1rem);\n}\n.modal-dialog-centered::before {\n  display: block;\n  height: calc(100vh - 1rem);\n  content: \"\";\n}\n.modal-dialog-centered.modal-dialog-scrollable {\n  flex-direction: column;\n  justify-content: center;\n  height: 100%;\n}\n.modal-dialog-centered.modal-dialog-scrollable .modal-content {\n  max-height: none;\n}\n.modal-dialog-centered.modal-dialog-scrollable::before {\n  content: none;\n}\n.modal-content {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  pointer-events: auto;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem;\n  outline: 0;\n}\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1040;\n  width: 100vw;\n  height: 100vh;\n  background-color: #000;\n}\n.modal-backdrop.fade {\n  opacity: 0;\n}\n.modal-backdrop.show {\n  opacity: 0.5;\n}\n.modal-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 1rem 1rem;\n  border-bottom: 1px solid #e3e6f0;\n  border-top-left-radius: 0.3rem;\n  border-top-right-radius: 0.3rem;\n}\n.modal-header .close {\n  padding: 1rem 1rem;\n  margin: -1rem -1rem -1rem auto;\n}\n.modal-title {\n  margin-bottom: 0;\n  line-height: 1.5;\n}\n.modal-body {\n  position: relative;\n  flex: 1 1 auto;\n  padding: 1rem;\n}\n.modal-footer {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 1rem;\n  border-top: 1px solid #e3e6f0;\n  border-bottom-right-radius: 0.3rem;\n  border-bottom-left-radius: 0.3rem;\n}\n.modal-footer > :not(:first-child) {\n  margin-left: 0.25rem;\n}\n.modal-footer > :not(:last-child) {\n  margin-right: 0.25rem;\n}\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll;\n}\n@media (min-width: 576px) {\n  .modal-dialog {\n    max-width: 500px;\n    margin: 1.75rem auto;\n  }\n\n  .modal-dialog-scrollable {\n    max-height: calc(100% - 3.5rem);\n  }\n\n  .modal-dialog-scrollable .modal-content {\n    max-height: calc(100vh - 3.5rem);\n  }\n\n  .modal-dialog-centered {\n    min-height: calc(100% - 3.5rem);\n  }\n\n  .modal-dialog-centered::before {\n    height: calc(100vh - 3.5rem);\n  }\n\n  .modal-sm {\n    max-width: 300px;\n  }\n}\n@media (min-width: 992px) {\n  .modal-lg,\n.modal-xl {\n    max-width: 800px;\n  }\n}\n@media (min-width: 1200px) {\n  .modal-xl {\n    max-width: 1140px;\n  }\n}\n/********************** Modal Styles - End **********************/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2RpYWxvZ3MvbG9nb3V0LWRpYWxvZy9DOlxcVmlzaW9uLURyZWFtXFx2ZC1zb3VyY2VcXHJlcG9zXFxkZXZcXHdlYlxcVkRTb2x1dGlvblxcVkRBcHBVSS9zcmNcXGFwcFxcc2hhcmVkXFxkaWFsb2dzXFxsb2dvdXQtZGlhbG9nXFxsb2dvdXQtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvZGlhbG9ncy9sb2dvdXQtZGlhbG9nL2xvZ291dC1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUVBQUE7QUFDQTtFQUNFLGdCQUFBO0FDQ0Y7QURFQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDRjtBREVBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQ0NGO0FERUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUNDRjtBREVBO0VBR0UsbUNBQUE7RUFHQSw4QkFBQTtBQ0NGO0FERUE7RUFDRTtJQUVFLGdCQUFBO0VDQ0Y7QUFDRjtBREVBO0VBRUUsZUFBQTtBQ0FGO0FER0E7RUFHRSxhQUFBO0VBQ0EsNkJBQUE7QUNBRjtBREdBO0VBQ0UsOEJBQUE7RUFDQSxnQkFBQTtBQ0FGO0FER0E7O0VBR0UsY0FBQTtBQ0FGO0FER0E7RUFDRSxnQkFBQTtBQ0FGO0FER0E7RUFHRSxhQUFBO0VBR0EsbUJBQUE7RUFDQSw2QkFBQTtBQ0FGO0FER0E7RUFDRSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0FDQUY7QURHQTtFQUlFLHNCQUFBO0VBR0EsdUJBQUE7RUFDQSxZQUFBO0FDQUY7QURHQTtFQUNFLGdCQUFBO0FDQUY7QURHQTtFQUNFLGFBQUE7QUNBRjtBREdBO0VBQ0Usa0JBQUE7RUFHQSxhQUFBO0VBSUEsc0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7QUNBRjtBREdBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNBRjtBREdBO0VBQ0UsVUFBQTtBQ0FGO0FER0E7RUFDRSxZQUFBO0FDQUY7QURHQTtFQUdFLGFBQUE7RUFHQSx1QkFBQTtFQUdBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7QUNBRjtBREdBO0VBQ0Usa0JBQUE7RUFDQSw4QkFBQTtBQ0FGO0FER0E7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDQUY7QURHQTtFQUNFLGtCQUFBO0VBR0EsY0FBQTtFQUNBLGFBQUE7QUNBRjtBREdBO0VBR0UsYUFBQTtFQUdBLG1CQUFBO0VBR0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0FDQUY7QURHQTtFQUNFLG9CQUFBO0FDQUY7QURHQTtFQUNFLHFCQUFBO0FDQUY7QURHQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNBRjtBREdBO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLG9CQUFBO0VDQUY7O0VER0E7SUFDRSwrQkFBQTtFQ0FGOztFREdBO0lBQ0UsZ0NBQUE7RUNBRjs7RURHQTtJQUNFLCtCQUFBO0VDQUY7O0VER0E7SUFDRSw0QkFBQTtFQ0FGOztFREdBO0lBQ0UsZ0JBQUE7RUNBRjtBQUNGO0FER0E7RUFDRTs7SUFFRSxnQkFBQTtFQ0RGO0FBQ0Y7QURJQTtFQUNFO0lBQ0UsaUJBQUE7RUNGRjtBQUNGO0FESUEsaUVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvZGlhbG9ncy9sb2dvdXQtZGlhbG9nL2xvZ291dC1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKiBNb2RhbCBTdHlsZXMgLSBTdGFydCAqKioqKioqKioqKioqKioqKioqKioqL1xyXG4ubW9kYWwtb3BlbiB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLm1vZGFsLW9wZW4gLm1vZGFsIHtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLm1vZGFsIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogMTA1MDtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG91dGxpbmU6IDA7XHJcbn1cclxuXHJcbi5tb2RhbC1kaWFsb2cge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogYXV0bztcclxuICBtYXJnaW46IDAuNXJlbTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLm1vZGFsLmZhZGUgLm1vZGFsLWRpYWxvZyB7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjNzIGVhc2Utb3V0O1xyXG4gIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuM3MgZWFzZS1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1vdXQsIC13ZWJraXQtdHJhbnNmb3JtIDAuM3MgZWFzZS1vdXQ7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTBweCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwcHgpO1xyXG59XHJcblxyXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xyXG4gIC5tb2RhbC5mYWRlIC5tb2RhbC1kaWFsb2cge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5tb2RhbC5zaG93IC5tb2RhbC1kaWFsb2cge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xyXG4gIHRyYW5zZm9ybTogbm9uZTtcclxufVxyXG5cclxuLm1vZGFsLWRpYWxvZy1zY3JvbGxhYmxlIHtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDFyZW0pO1xyXG59XHJcblxyXG4ubW9kYWwtZGlhbG9nLXNjcm9sbGFibGUgLm1vZGFsLWNvbnRlbnQge1xyXG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxcmVtKTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ubW9kYWwtZGlhbG9nLXNjcm9sbGFibGUgLm1vZGFsLWhlYWRlcixcclxuLm1vZGFsLWRpYWxvZy1zY3JvbGxhYmxlIC5tb2RhbC1mb290ZXIge1xyXG4gIC1tcy1mbGV4LW5lZ2F0aXZlOiAwO1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcblxyXG4ubW9kYWwtZGlhbG9nLXNjcm9sbGFibGUgLm1vZGFsLWJvZHkge1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5tb2RhbC1kaWFsb2ctY2VudGVyZWQge1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWluLWhlaWdodDogY2FsYygxMDAlIC0gMXJlbSk7XHJcbn1cclxuXHJcbi5tb2RhbC1kaWFsb2ctY2VudGVyZWQ6OmJlZm9yZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMXJlbSk7XHJcbiAgY29udGVudDogXCJcIjtcclxufVxyXG5cclxuLm1vZGFsLWRpYWxvZy1jZW50ZXJlZC5tb2RhbC1kaWFsb2ctc2Nyb2xsYWJsZSB7XHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubW9kYWwtZGlhbG9nLWNlbnRlcmVkLm1vZGFsLWRpYWxvZy1zY3JvbGxhYmxlIC5tb2RhbC1jb250ZW50IHtcclxuICBtYXgtaGVpZ2h0OiBub25lO1xyXG59XHJcblxyXG4ubW9kYWwtZGlhbG9nLWNlbnRlcmVkLm1vZGFsLWRpYWxvZy1zY3JvbGxhYmxlOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IG5vbmU7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XHJcbiAgb3V0bGluZTogMDtcclxufVxyXG5cclxuLm1vZGFsLWJhY2tkcm9wIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogMTA0MDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4ubW9kYWwtYmFja2Ryb3AuZmFkZSB7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLm1vZGFsLWJhY2tkcm9wLnNob3cge1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtd2Via2l0LWJveC1hbGlnbjogc3RhcnQ7XHJcbiAgLW1zLWZsZXgtYWxpZ246IHN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XHJcbiAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogMXJlbSAxcmVtO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTNlNmYwO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuM3JlbTtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC4zcmVtO1xyXG59XHJcblxyXG4ubW9kYWwtaGVhZGVyIC5jbG9zZSB7XHJcbiAgcGFkZGluZzogMXJlbSAxcmVtO1xyXG4gIG1hcmdpbjogLTFyZW0gLTFyZW0gLTFyZW0gYXV0bztcclxufVxyXG5cclxuLm1vZGFsLXRpdGxlIHtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcclxuICAtbXMtZmxleDogMSAxIGF1dG87XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbiAgcGFkZGluZzogMXJlbTtcclxufVxyXG5cclxuLm1vZGFsLWZvb3RlciB7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAtd2Via2l0LWJveC1wYWNrOiBlbmQ7XHJcbiAgLW1zLWZsZXgtcGFjazogZW5kO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2UzZTZmMDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC4zcmVtO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuM3JlbTtcclxufVxyXG5cclxuLm1vZGFsLWZvb3RlciA+IDpub3QoOmZpcnN0LWNoaWxkKSB7XHJcbiAgbWFyZ2luLWxlZnQ6IC4yNXJlbTtcclxufVxyXG5cclxuLm1vZGFsLWZvb3RlciA+IDpub3QoOmxhc3QtY2hpbGQpIHtcclxuICBtYXJnaW4tcmlnaHQ6IC4yNXJlbTtcclxufVxyXG5cclxuLm1vZGFsLXNjcm9sbGJhci1tZWFzdXJlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtOTk5OXB4O1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBvdmVyZmxvdzogc2Nyb2xsO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAubW9kYWwtZGlhbG9nIHtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICBtYXJnaW46IDEuNzVyZW0gYXV0bztcclxuICB9XHJcblxyXG4gIC5tb2RhbC1kaWFsb2ctc2Nyb2xsYWJsZSB7XHJcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSAzLjVyZW0pO1xyXG4gIH1cclxuXHJcbiAgLm1vZGFsLWRpYWxvZy1zY3JvbGxhYmxlIC5tb2RhbC1jb250ZW50IHtcclxuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAzLjVyZW0pO1xyXG4gIH1cclxuXHJcbiAgLm1vZGFsLWRpYWxvZy1jZW50ZXJlZCB7XHJcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMCUgLSAzLjVyZW0pO1xyXG4gIH1cclxuXHJcbiAgLm1vZGFsLWRpYWxvZy1jZW50ZXJlZDo6YmVmb3JlIHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDMuNXJlbSk7XHJcbiAgfVxyXG5cclxuICAubW9kYWwtc20ge1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gIC5tb2RhbC1sZyxcclxuICAubW9kYWwteGwge1xyXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAubW9kYWwteGwge1xyXG4gICAgbWF4LXdpZHRoOiAxMTQwcHg7XHJcbiAgfVxyXG59XHJcbi8qKioqKioqKioqKioqKioqKioqKioqIE1vZGFsIFN0eWxlcyAtIEVuZCAqKioqKioqKioqKioqKioqKioqKioqL1xyXG4iLCIvKioqKioqKioqKioqKioqKioqKioqKiBNb2RhbCBTdHlsZXMgLSBTdGFydCAqKioqKioqKioqKioqKioqKioqKioqL1xuLm1vZGFsLW9wZW4ge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubW9kYWwtb3BlbiAubW9kYWwge1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5tb2RhbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDUwO1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvdXRsaW5lOiAwO1xufVxuXG4ubW9kYWwtZGlhbG9nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luOiAwLjVyZW07XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4ubW9kYWwuZmFkZSAubW9kYWwtZGlhbG9nIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjNzIGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjNzIGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1vdXQsIC13ZWJraXQtdHJhbnNmb3JtIDAuM3MgZWFzZS1vdXQ7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwcHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTBweCk7XG59XG5cbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XG4gIC5tb2RhbC5mYWRlIC5tb2RhbC1kaWFsb2cge1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBub25lO1xuICB9XG59XG4ubW9kYWwuc2hvdyAubW9kYWwtZGlhbG9nIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XG4gIHRyYW5zZm9ybTogbm9uZTtcbn1cblxuLm1vZGFsLWRpYWxvZy1zY3JvbGxhYmxlIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSAxcmVtKTtcbn1cblxuLm1vZGFsLWRpYWxvZy1zY3JvbGxhYmxlIC5tb2RhbC1jb250ZW50IHtcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDFyZW0pO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubW9kYWwtZGlhbG9nLXNjcm9sbGFibGUgLm1vZGFsLWhlYWRlcixcbi5tb2RhbC1kaWFsb2ctc2Nyb2xsYWJsZSAubW9kYWwtZm9vdGVyIHtcbiAgLW1zLWZsZXgtbmVnYXRpdmU6IDA7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4ubW9kYWwtZGlhbG9nLXNjcm9sbGFibGUgLm1vZGFsLWJvZHkge1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4ubW9kYWwtZGlhbG9nLWNlbnRlcmVkIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMCUgLSAxcmVtKTtcbn1cblxuLm1vZGFsLWRpYWxvZy1jZW50ZXJlZDo6YmVmb3JlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDFyZW0pO1xuICBjb250ZW50OiBcIlwiO1xufVxuXG4ubW9kYWwtZGlhbG9nLWNlbnRlcmVkLm1vZGFsLWRpYWxvZy1zY3JvbGxhYmxlIHtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm1vZGFsLWRpYWxvZy1jZW50ZXJlZC5tb2RhbC1kaWFsb2ctc2Nyb2xsYWJsZSAubW9kYWwtY29udGVudCB7XG4gIG1heC1oZWlnaHQ6IG5vbmU7XG59XG5cbi5tb2RhbC1kaWFsb2ctY2VudGVyZWQubW9kYWwtZGlhbG9nLXNjcm9sbGFibGU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IG5vbmU7XG59XG5cbi5tb2RhbC1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcbiAgb3V0bGluZTogMDtcbn1cblxuLm1vZGFsLWJhY2tkcm9wIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwNDA7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbn1cblxuLm1vZGFsLWJhY2tkcm9wLmZhZGUge1xuICBvcGFjaXR5OiAwO1xufVxuXG4ubW9kYWwtYmFja2Ryb3Auc2hvdyB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLm1vZGFsLWhlYWRlciB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IHN0YXJ0O1xuICAtbXMtZmxleC1hbGlnbjogc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xuICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDFyZW0gMXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlM2U2ZjA7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuM3JlbTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuM3JlbTtcbn1cblxuLm1vZGFsLWhlYWRlciAuY2xvc2Uge1xuICBwYWRkaW5nOiAxcmVtIDFyZW07XG4gIG1hcmdpbjogLTFyZW0gLTFyZW0gLTFyZW0gYXV0bztcbn1cblxuLm1vZGFsLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLm1vZGFsLWJvZHkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gIC1tcy1mbGV4OiAxIDEgYXV0bztcbiAgZmxleDogMSAxIGF1dG87XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbi5tb2RhbC1mb290ZXIge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LXBhY2s6IGVuZDtcbiAgLW1zLWZsZXgtcGFjazogZW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2UzZTZmMDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuM3JlbTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC4zcmVtO1xufVxuXG4ubW9kYWwtZm9vdGVyID4gOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgbWFyZ2luLWxlZnQ6IDAuMjVyZW07XG59XG5cbi5tb2RhbC1mb290ZXIgPiA6bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcbn1cblxuLm1vZGFsLXNjcm9sbGJhci1tZWFzdXJlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC05OTk5cHg7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAubW9kYWwtZGlhbG9nIHtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIG1hcmdpbjogMS43NXJlbSBhdXRvO1xuICB9XG5cbiAgLm1vZGFsLWRpYWxvZy1zY3JvbGxhYmxlIHtcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSAzLjVyZW0pO1xuICB9XG5cbiAgLm1vZGFsLWRpYWxvZy1zY3JvbGxhYmxlIC5tb2RhbC1jb250ZW50IHtcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMy41cmVtKTtcbiAgfVxuXG4gIC5tb2RhbC1kaWFsb2ctY2VudGVyZWQge1xuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwJSAtIDMuNXJlbSk7XG4gIH1cblxuICAubW9kYWwtZGlhbG9nLWNlbnRlcmVkOjpiZWZvcmUge1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDMuNXJlbSk7XG4gIH1cblxuICAubW9kYWwtc20ge1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAubW9kYWwtbGcsXG4ubW9kYWwteGwge1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLm1vZGFsLXhsIHtcbiAgICBtYXgtd2lkdGg6IDExNDBweDtcbiAgfVxufVxuLyoqKioqKioqKioqKioqKioqKioqKiogTW9kYWwgU3R5bGVzIC0gRW5kICoqKioqKioqKioqKioqKioqKioqKiovIl19 */"

/***/ }),

/***/ "./src/app/shared/dialogs/logout-dialog/logout-dialog.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/shared/dialogs/logout-dialog/logout-dialog.component.ts ***!
  \*************************************************************************/
/*! exports provided: LogoutDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutDialogComponent", function() { return LogoutDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LogoutDialogComponent = class LogoutDialogComponent {
    constructor() { }
    ngOnInit() {
    }
};
LogoutDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-logout-dialog',
        template: __webpack_require__(/*! raw-loader!./logout-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/dialogs/logout-dialog/logout-dialog.component.html"),
        styles: [__webpack_require__(/*! ./logout-dialog.component.scss */ "./src/app/shared/dialogs/logout-dialog/logout-dialog.component.scss")]
    })
], LogoutDialogComponent);



/***/ }),

/***/ "./src/app/shared/dialogs/success-dialog/success-dialog.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/dialogs/success-dialog/success-dialog.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9kaWFsb2dzL3N1Y2Nlc3MtZGlhbG9nL3N1Y2Nlc3MtZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/dialogs/success-dialog/success-dialog.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shared/dialogs/success-dialog/success-dialog.component.ts ***!
  \***************************************************************************/
/*! exports provided: SuccessDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessDialogComponent", function() { return SuccessDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SuccessDialogComponent = class SuccessDialogComponent {
    constructor() { }
    ngOnInit() {
    }
};
SuccessDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-success-dialog',
        template: __webpack_require__(/*! raw-loader!./success-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/dialogs/success-dialog/success-dialog.component.html"),
        styles: [__webpack_require__(/*! ./success-dialog.component.scss */ "./src/app/shared/dialogs/success-dialog/success-dialog.component.scss")]
    })
], SuccessDialogComponent);



/***/ }),

/***/ "./src/app/shared/directives/datepicker.directive.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/directives/datepicker.directive.ts ***!
  \***********************************************************/
/*! exports provided: DatePickerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerDirective", function() { return DatePickerDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DatePickerDirective = class DatePickerDirective {
    constructor() { }
};
DatePickerDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appDatePicker]'
    })
], DatePickerDirective);



/***/ }),

/***/ "./src/app/shared/directives/requiredlabel.directive.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/directives/requiredlabel.directive.ts ***!
  \**************************************************************/
/*! exports provided: RequiredLabelDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequiredLabelDirective", function() { return RequiredLabelDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RequiredLabelDirective = class RequiredLabelDirective {
    constructor() { }
};
RequiredLabelDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appRequiredLabel]'
    })
], RequiredLabelDirective);



/***/ }),

/***/ "./src/app/shared/models/vd-buildversion-model.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/models/vd-buildversion-model.ts ***!
  \********************************************************/
/*! exports provided: VDBuildVersionModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VDBuildVersionModel", function() { return VDBuildVersionModel; });
class VDBuildVersionModel {
    constructor() {
        this.SystemInformationID = 1;
        this.Title = 'VisionDream';
        this.Alias = 'App ver: ';
        this.Version = '2.2.1';
        this.VDDesc = 'VisionDream ICT Solutions';
        this.VDCopyright = '2019 VisionDream ICT Solutions. All Rights Reserved';
        this.VDUrlLocal = 'http://visiondream.local';
        this.VDUrlExternal = 'https://visiondreamict.wordpress.com/';
    }
}


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _dialogs_global_dialog_global_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dialogs/global-dialog/global-dialog.component */ "./src/app/shared/dialogs/global-dialog/global-dialog.component.ts");
/* harmony import */ var _dialogs_success_dialog_success_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dialogs/success-dialog/success-dialog.component */ "./src/app/shared/dialogs/success-dialog/success-dialog.component.ts");
/* harmony import */ var _dialogs_error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dialogs/error-dialog/error-dialog.component */ "./src/app/shared/dialogs/error-dialog/error-dialog.component.ts");
/* harmony import */ var _dialogs_logout_dialog_logout_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dialogs/logout-dialog/logout-dialog.component */ "./src/app/shared/dialogs/logout-dialog/logout-dialog.component.ts");
/* harmony import */ var _directives_datepicker_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives/datepicker.directive */ "./src/app/shared/directives/datepicker.directive.ts");
/* harmony import */ var _directives_requiredlabel_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/requiredlabel.directive */ "./src/app/shared/directives/requiredlabel.directive.ts");











let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _dialogs_global_dialog_global_dialog_component__WEBPACK_IMPORTED_MODULE_5__["GlobalDialogComponent"],
            _dialogs_success_dialog_success_dialog_component__WEBPACK_IMPORTED_MODULE_6__["SuccessDialogComponent"],
            _dialogs_error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ErrorDialogComponent"],
            _dialogs_logout_dialog_logout_dialog_component__WEBPACK_IMPORTED_MODULE_8__["LogoutDialogComponent"],
            _directives_datepicker_directive__WEBPACK_IMPORTED_MODULE_9__["DatePickerDirective"],
            _directives_requiredlabel_directive__WEBPACK_IMPORTED_MODULE_10__["RequiredLabelDirective"],
            _dialogs_global_dialog_global_dialog_component__WEBPACK_IMPORTED_MODULE_5__["GlobalDialogComponent"],
            _dialogs_success_dialog_success_dialog_component__WEBPACK_IMPORTED_MODULE_6__["SuccessDialogComponent"],
            _dialogs_error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ErrorDialogComponent"],
            _dialogs_logout_dialog_logout_dialog_component__WEBPACK_IMPORTED_MODULE_8__["LogoutDialogComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"]
        ],
        exports: [
            _material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
            _dialogs_global_dialog_global_dialog_component__WEBPACK_IMPORTED_MODULE_5__["GlobalDialogComponent"],
            _dialogs_success_dialog_success_dialog_component__WEBPACK_IMPORTED_MODULE_6__["SuccessDialogComponent"],
            _dialogs_error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ErrorDialogComponent"],
            _dialogs_logout_dialog_logout_dialog_component__WEBPACK_IMPORTED_MODULE_8__["LogoutDialogComponent"],
            _directives_datepicker_directive__WEBPACK_IMPORTED_MODULE_9__["DatePickerDirective"],
            _directives_requiredlabel_directive__WEBPACK_IMPORTED_MODULE_10__["RequiredLabelDirective"]
        ],
        entryComponents: [
            _dialogs_global_dialog_global_dialog_component__WEBPACK_IMPORTED_MODULE_5__["GlobalDialogComponent"],
            _dialogs_success_dialog_success_dialog_component__WEBPACK_IMPORTED_MODULE_6__["SuccessDialogComponent"],
            _dialogs_error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ErrorDialogComponent"],
            _dialogs_logout_dialog_logout_dialog_component__WEBPACK_IMPORTED_MODULE_8__["LogoutDialogComponent"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm2015/ngx-logger.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    SERVER_SECRETE: "7IV1S10NJO41PQZNWJC4DR34MYG",
    SERVER_API_URL: undefined,
    CLIENT_APP_NAME: "VDAppUI",
    logLevel: ngx_logger__WEBPACK_IMPORTED_MODULE_0__["NgxLoggerLevel"].TRACE,
    serverLogLevel: ngx_logger__WEBPACK_IMPORTED_MODULE_0__["NgxLoggerLevel"].OFF
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Vision-Dream\vd-source\repos\dev\web\VDSolution\VDAppUI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map