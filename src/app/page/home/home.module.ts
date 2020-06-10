// angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

/**
 * Home page, or any other page can now import 
 * the self-contained components, that go into a 
 * module of their own
 * 
 * By importing the module, you make all exported
 * Components available to this module. Thus, if two Components
 * 'belong together, that's not a problem
 */
import { ResultTableModule } from 'src/app/containers/result-table/result-table.module';
import { EmbedderModule } from 'src/app/containers/embedder/embedder.module';




@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ResultTableModule,
    EmbedderModule,
  ]
})
export class HomeModule { }
