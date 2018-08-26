import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,BrowserAnimationsModule,MatButtonModule, MatCheckboxModule,MatToolbarModule,
    MatIconModule
  ],
  exports: [BrowserAnimationsModule,MatButtonModule, MatCheckboxModule,MatToolbarModule,
    MatIconModule],
  declarations: []
})
export class MaterialModule { }
