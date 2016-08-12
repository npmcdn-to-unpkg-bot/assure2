import { Routes, RouterModule} from '@angular/router';

import {RfidMonitorFormComponent} from "./rfid-monitor/rfid-monitor-form.component";
import {RfidReaderFormComponent} from "./rfid-reader/rfid-reader-form.component";
import {UserProfileFormComponent} from "./user-profile/user-profile-form.component";
import {AdministrationFormComponent} from "./administration/administration-form.component";

import { LoginRoutes, AUTH_PROVIDERS }     from './login.routes';

import { CanDeactivateGuard } from './interfaces';
import { AuthGuard }             from './auth.guard';

export const appRoutes: Routes = [
  ...LoginRoutes,
  { path: '', redirectTo: 'entity', terminal: true },
  { path: 'entity', component: AdministrationFormComponent },
  { path: 'entity/:entityId/rfid-monitors', component: RfidMonitorFormComponent},
  { path: 'entity/:entityId/rfid-readers',  component: RfidReaderFormComponent,  canActivate: [AuthGuard] },
  { path: 'entity/:entityId/user-profiles', component: UserProfileFormComponent, canActivate: [AuthGuard]}
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
