import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaMaterialComponent } from './material/listar/lista-material.component';
import { GuardarMaterialComponent } from './material/guardar/guardar-material.component';

const routes: Routes = [

  {path: '', component: ListaMaterialComponent},
  {path: 'nuevo', component: GuardarMaterialComponent},
  {path: 'editar/:idMaterial', component: GuardarMaterialComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
