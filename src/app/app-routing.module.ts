import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChamberCervezasComponent } from './cervezas/chamber-cervezas.component';
import { ChamberContactosComponent } from './contactos/chamber-contactos.component';

const routes: Routes = [
  {
    path:'',
    redirectTo :'cervezas',
    pathMatch:'full'
  },
  {
    path:'cervezas',
    component: ChamberCervezasComponent
  },
  {
    path:'contactos',
    component: ChamberContactosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
