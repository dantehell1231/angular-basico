import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContadorComponents } from './contador.component';





@NgModule({
  declarations: [
    ContadorComponents
  ],
  exports: [
    ContadorComponents
  ],
  imports: [
    CommonModule
  ]
})
export class ContadorModule { }
