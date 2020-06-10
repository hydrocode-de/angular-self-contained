import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmbedComponent } from './embed.component';
import { ResultTableComponent } from '../containers/result-table/result-table.component';

/**
 * Here you put all the embbeded URLs. So each compontent that 
 * can exist on its own needs a route here.
 * 
 * Before all of them are implemented by hand, you can also 
 * use URL parameters or use a rout path like embed/:name 
 * and then the name can be used to load the correct Component 
 * from a lookup table like:
 * 
 * const COMPONENTS = {
 *      'result-table' : ResultTableCompontent
 * }
 * 
 * and so on. To keeep it simple, I will hard-code the name here
 * which is completely fine for the beginning
 */
const routes: Routes = [
    {path: 'result-table', component: ResultTableComponent}
];


@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports: [ RouterModule ]
})
export class EmbedRoutingModule {}