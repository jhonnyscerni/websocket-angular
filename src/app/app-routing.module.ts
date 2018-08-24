import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '../../node_modules/@angular/core';

const appRoutes: Routes = [

  {
    path        : 'sample02',
    loadChildren: './main/sample02/sample02.module#Sample02Module'
 },

 {
  path        : '**',
  redirectTo: 'sample'
 },
];




@NgModule({
  imports: [
      RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }