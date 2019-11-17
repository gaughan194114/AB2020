import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlacestostayRoutingModule } from './placestostay-routing.module';
import { PlacestostayContainerComponent } from './placestostay-container/placestostay-container.component';


@NgModule({
  declarations: [PlacestostayContainerComponent],
  imports: [
    CommonModule,
    PlacestostayRoutingModule
  ]
})
export class PlacestostayModule { }
