import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlacestostayContainerComponent } from './placestostay-container/placestostay-container.component';


const routes: Routes = [
  {
    path:'',
    component: PlacestostayContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlacestostayRoutingModule { }
