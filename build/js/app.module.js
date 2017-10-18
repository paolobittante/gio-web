"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var app_nav_component_1 = require("./app.nav.component");
var app_header_component_1 = require("./app.header.component");
var app_section_list_component_1 = require("./app.section.list.component");
var app_section_downloads_component_1 = require("./app.section.downloads.component");
var app_section_features_component_1 = require("./app.section.features.component");
var app_section_cta_component_1 = require("./app.section.cta.component");
var app_section_contact_component_1 = require("./app.section.contact.component");
var app_footer_component_1 = require("./app.footer.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule],
            declarations: [app_component_1.AppComponent, app_nav_component_1.NavComponent, app_header_component_1.HeaderComponent, app_section_list_component_1.SectionListComponent, app_section_downloads_component_1.DownloadComponent, app_section_features_component_1.FeaturesComponent,
                app_section_cta_component_1.CtaComponent, app_section_contact_component_1.ContactComponent, app_footer_component_1.FooterComponent],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=app.module.js.map
