import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItneraryContainerComponent } from './itnerary-container/itnerary-container.component';


const routes: Routes = [
  {
    path: '',
    component: ItneraryContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItneraryRoutingModule { }
