import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThingstodoContainerComponent } from './thingstodo-container/thingstodo-container.component';


const routes: Routes = [
  {
    path: '',
    component: ThingstodoContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThingstodoRoutingModule { }
