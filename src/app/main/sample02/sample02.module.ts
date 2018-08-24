import { Sample02Routes } from './sample02.routing';
import { ComponentExemploComponent } from './component-exemplo/component-exemplo.component';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { CommonModule } from '../../../../node_modules/@angular/common';

@NgModule({
  declarations: [
      ComponentExemploComponent
  ],
  imports     : [
      Sample02Routes,
      CommonModule,
      MatIconModule,
      FuseSharedModule
  ]
})
export class Sample02Module { }
