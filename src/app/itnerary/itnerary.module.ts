import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItneraryRoutingModule } from './itnerary-routing.module';
import { ItneraryContainerComponent } from './itnerary-container/itnerary-container.component';


@NgModule({
  declarations: [ItneraryContainerComponent],
  imports: [
    CommonModule,
    ItneraryRoutingModule
  ]
})
export class ItneraryModule { }
