import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page/page.component';

/**
 * In the app we only import another Module that basically manages the 
 * routing on the website.
 */
const routes: Routes = [
  {path: '', loadChildren: () => import('./page/page.module').then(m => m.PageModule), pathMatch: 'full'},
  {path: 'embed', loadChildren: () => import('./embed/embed.module').then(m => m.EmbedModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
