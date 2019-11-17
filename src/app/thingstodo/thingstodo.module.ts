import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThingstodoRoutingModule } from './thingstodo-routing.module';
import { ThingstodoContainerComponent } from './thingstodo-container/thingstodo-container.component';


@NgModule({
  declarations: [ThingstodoContainerComponent],
  imports: [
    CommonModule,
    ThingstodoRoutingModule
  ]
})
export class ThingstodoModule { }
