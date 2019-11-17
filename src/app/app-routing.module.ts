import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { RegistryModule } from './registry/registry.module';
import { PlacestostayModule } from './placestostay/placestostay.module';
import { ThingstodoModule } from './thingstodo/thingstodo.module';
import { ItneraryModule } from './itnerary/itnerary.module';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: ()=> HomeModule
  },
  {
    path: 'registry',
    loadChildren: ()=> RegistryModule
  },
  {
    path: 'placestostay',
    loadChildren: ()=> PlacestostayModule
  },
  {
    path: 'thingstodo',
    loadChildren: ()=> ThingstodoModule
  },
  {
    path: 'itnerary',
    loadChildren: ()=> ItneraryModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
