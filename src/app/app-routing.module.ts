import { NgModule } from '@angular/core';
import { SubmitALinkComponent } from './submit-a-link/submit-a-link.component';
import { RouterModule, Routes } from '@angular/router';
import { LinkListComponent } from './link-list/link-list.component';

const routes: Routes = [
  { path: '', component: LinkListComponent},
  { path: "submitALink", component: SubmitALinkComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
