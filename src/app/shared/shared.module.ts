import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentModule } from './component/component.module';
import { StructureModule } from './structure/structure.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    StructureModule,
    ComponentModule
  ]
})
export class SharedModule { }
