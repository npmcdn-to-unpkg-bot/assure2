import {Component} from '@angular/core';
import {OnInit} from "@angular/core";
import {REACTIVE_FORM_DIRECTIVES, FormControl, FormGroup} from '@angular/forms';

import {AdministrationService} from "./administration.service";
import {Entity} from "../entity";
import {EntityService} from "../entity.service";
import {AuthService} from "../auth.service";

@Component({
  selector: 'administration-form',
  templateUrl: 'administration-form.component.html'
})
export class AdministrationFormComponent implements OnInit {

    entitys:any = [];
    entitySelect = false;
    //entityId:number;
    private selectedId: number;

    constructor(private http:AdministrationService,
                private entityService:EntityService,
                private authService:AuthService) {

    }

  ngOnInit() {
    console.log('AssureAppComponent - ngOnInit called');
    this.onGetEntity();
  }

  isSelected(entity: Entity) {
    return entity.entity_id === this.selectedId;
  }

  onGetEntity() {
    this.http.getEntity()
      .subscribe(
        data => this.entitys = data,
        error => console.log(error), //alert(error.toString()),
        () => console.log('getEntity Finished')
      )
  }
  onSelectEntity(entity: Entity) {
    console.log('onSelectEntity Called - entity_id =' + entity.entity_id );
    this.entitySelect = true;

    // AMS TODO - Temp method for checking entity selected before showing children
    this.authService.isLoggedIn = true;
    console.log('onSelectEntity Called - this.authService.isLoggedIn=' + this.authService.isLoggedIn);
    //this.entityId = entity.entity_id;
    this.entityService.setEntity(entity.entity_id);
  }

}
