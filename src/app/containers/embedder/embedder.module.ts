import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmbedderComponent } from './embedder.component';

// replace this by your component lib
import { MatButtonModule } from "@angular/material/button";


@NgModule({
  declarations: [
    EmbedderComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    EmbedderComponent
  ]
})
export class EmbedderModule { }
