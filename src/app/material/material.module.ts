import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule, MatCardModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,MatButtonModule, MatCheckboxModule,MatToolbarModule,
    MatIconModule,MatCardModule
  ],
  exports: [MatButtonModule, MatCheckboxModule,MatToolbarModule,
    MatIconModule,MatCardModule],
  declarations: []
})
export class MaterialModule { }
