import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultTableComponent } from './result-table.component';

// import the components needed here
// here, you would need a charting component etc
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [ResultTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
  ],

  // here you specify, what of the self-contained module should 
  // be available outsite the module
  exports: [ResultTableComponent]

})
export class ResultTableModule { }
