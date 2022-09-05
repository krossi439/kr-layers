import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutRootComponent } from './lib/layout-root/layout-root.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LayoutRootComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
