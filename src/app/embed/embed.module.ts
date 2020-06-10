import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmbedComponent } from './embed.component';

// here are all routes defined, that can be embedded
import { EmbedRoutingModule } from './embed-routing.module';

// you need to import all modules that are can be embedded here,
// so that angular can render them as needed.
import { ResultTableModule } from '../containers/result-table/result-table.module';


@NgModule({
  declarations: [
    EmbedComponent
  ],
  imports: [
    CommonModule,
    EmbedRoutingModule,
    ResultTableModule
  ]
})
export class EmbedModule { }
