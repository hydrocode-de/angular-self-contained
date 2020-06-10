import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page.component';
import { PageRoutingModule } from './page-routing.module';

// Page is handling all available 'pages' or 'sites'
// each one goes into its own module.
import { HomeModule } from './home/home.module';

// other components and modules needed on building the layout
// here you would import Kendo's menu and toolbar components
// or build your own
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [PageComponent],
  imports: [
    CommonModule,
    PageRoutingModule,
    HomeModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule
  ]
})
export class PageModule { }
