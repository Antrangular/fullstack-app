import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

/********* CORE module
 * The core functions, services, and models shared globally across the application and didn’t have any relation to the feature module must be a part of the core module.

 * The singleton services should be implemented here that have to have one and only one instance per application. The Module contains an Authentication service and static components like the header, footer, navbar, sidebar, interceptors, guard, constants, enums, utils, and universal models.

* One must import the core module only in the app root module. Other modules must not import the core module.
 */


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
