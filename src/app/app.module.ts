import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ActionAreaComponent } from './action-area/action-area.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { OrdersPageComponent } from './orders-page/orders-page.component';
import { PortalModule } from '@angular/cdk/portal';
import { ActionsButtonsComponent } from './actions-buttons/actions-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ActionAreaComponent,
    ActionsButtonsComponent,
    UsersPageComponent,
    OrdersPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    PortalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
