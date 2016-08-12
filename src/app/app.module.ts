import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {routing, appRoutingProviders } from "./app.routes";

import { AppComponent } from './app.component';
import {AdministrationFormComponent} from "./administration/administration-form.component";
import {RfidMonitorFormComponent} from "./rfid-monitor/rfid-monitor-form.component";
import {RfidReaderFormComponent} from "./rfid-reader/rfid-reader-form.component";
import {UserProfileFormComponent} from "./user-profile/user-profile-form.component";
import {LoginComponent} from "./login.component";
import {HttpModule} from "@angular/http";
import {AuthGuard} from "./auth.guard";
import {AuthService} from "./auth.service";
import {MdListModule} from "@angular2-material/list";
import {MdButtonModule} from "@angular2-material/button";
import {MdCardModule} from "@angular2-material/card";
import {MdInputModule} from "@angular2-material/input";

@NgModule({
  declarations: [
    AppComponent,
    AdministrationFormComponent,
    RfidMonitorFormComponent,
    RfidReaderFormComponent,
    UserProfileFormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdListModule
  ],
  providers: [
    appRoutingProviders,
    AuthGuard,
    AuthService
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
