import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoHideDirective } from './directives/auto-hide.directive';

/******** SHARE module
 * The components, directives, and pipes shared across various modules should be kept in a shared module.
 *** For example, search and loaders could be used across multiple features. The items stored in a shared module will be re-used and referenced by the components declared in other feature modules.

 * A Shared Module is more beneficial while working on large applications where we consider lazy loading of the application to increase the performance and decrease the bundle size of the application and initial build-time. The shared Module should not depend on any other module in the application.

Note: You must not define the services here. Since the shared modules are imported everywhere, it may create a new instance of the service if imported in the lazy-loaded modules.
 */


@NgModule({
  declarations: [
    AutoHideDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
