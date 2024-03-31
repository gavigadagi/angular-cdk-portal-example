import { ApplicationRef, Component, ComponentFactoryResolver, Inject, Injector, OnDestroy, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { PortalBridgeService } from '../portal-bridge.service';
import { CdkPortal, ComponentPortal, DomPortal, DomPortalOutlet, TemplatePortal } from '@angular/cdk/portal';
import { ActionsButtonsComponent } from '../actions-buttons/actions-buttons.component';
import { DOCUMENT } from '@angular/common';

export interface User {
  name: string;
  lastName: string;
  profession: string;
}


const USER_DATA: User[] = [
  {name: 'Dmytro', lastName: 'Mezhenskyi', profession: 'Frontend Developer'},
  {name: 'Daria', lastName: 'Lazurenko', profession: 'UI Designer'},
];


@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['name', 'lastName', 'profession'];
  dataSource = USER_DATA;

  @ViewChild(CdkPortal, {  static: true})
  portalContent: CdkPortal;


  constructor(
    private portalBridge: PortalBridgeService,
    ) { }


    ngOnInit(): void {
      this.portalBridge.setPortal(this.portalContent);
    }

    ngOnDestroy(): void {
      this.portalContent.detach();
    }

  clickHandler() {
    console.log('add user');
  }
}
