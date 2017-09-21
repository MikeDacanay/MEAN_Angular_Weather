import { SanJoseComponent } from './san-jose/san-jose.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: '', pathMatch: 'full', component: SanJoseComponent },
	{ path: 'sanjose', pathMatch: 'full', component: SanJoseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
