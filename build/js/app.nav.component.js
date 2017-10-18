"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngAfterViewInit = function () {
        $('.navbar-collapse ul li a').click(function () {
            $('.navbar-toggle:visible').click();
        });
        $('a.page-scroll').bind('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: ($($anchor.attr('href')).offset().top - 50)
            }, 1250, 'easeInOutExpo');
            event.preventDefault();
        });
        $('#mainNav').affix({
            offset: {
                top: 50
            }
        });
    };
    NavComponent = __decorate([
        core_1.Component({
            selector: 'na-nav',
            templateUrl: 'build/nav.html',
            styleUrls: ['build/css/new-age-nav.css']
        })
    ], NavComponent);
    return NavComponent;
}());
exports.NavComponent = NavComponent;

//# sourceMappingURL=app.nav.component.js.map
