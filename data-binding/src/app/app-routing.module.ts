import { CicloComponent } from './ciclo/ciclo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';

const routes: Routes = [{
  path: '',
  component: DataBindingComponent
},
{
  path: 'circle',
  component: CicloComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
