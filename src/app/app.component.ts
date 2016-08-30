import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AdministrationService} from './administration/administration.service';
import {EntityService} from './entity.service';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [ AdministrationService, EntityService]
})
export class AppComponent {

  title: string = 'Next Gen Assure';

  constructor(
    private router: Router,
    private entityService: EntityService,
    private authService: AuthService) {}

    // AMS TODO - just a workaround for now
    isEntitySelected(): boolean {
      return this.authService.isLoggedIn;
    }

    onSelectRfidMonitor() {
      console.log('onSelectRfidMonitor Called - entity_id =' + this.entityService.selectedEntityId);
      this.router.navigate(['/entity', this.entityService.selectedEntityId, 'rfid-monitors']);
    }
    onSelectRfidReader() {
      console.log('onSelectRfidReader Called - entity_id =' + this.entityService.selectedEntityId);
      this.router.navigate(['/entity', this.entityService.selectedEntityId, 'rfid-readers']);
    }
    onSelectUserProfile() {
      console.log('onSelectUserProfile Called - entity_id =' + this.entityService.selectedEntityId);
      this.router.navigate(['/entity', this.entityService.selectedEntityId, 'user-profiles']);
    }

}
