import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/****** Featured Based Architecture
 * We split application requirements and break down the application into features
 *** e.g. Suppose we are building a healthcare application. We must have features for appointments, prescriptions, patients, payments, etc.
 * Each Module should name its folder after the Module Name or Feature. Each Module has components, directives, pipes, pages, dialogs, and services required by the Module and a store in case you use a Redux pattern, creating each as a block.
 */

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class FeaturesModule { }
