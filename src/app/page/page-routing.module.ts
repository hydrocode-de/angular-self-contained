import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// load the pages here
import { HomeComponent } from './home/home.component';
import { PageComponent } from './page.component';

const routes: Routes = [
    {path: '', component: PageComponent, children: [
        {path: '', component: HomeComponent, pathMatch: 'full'}
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [ RouterModule ]
})
export class PageRoutingModule {}
