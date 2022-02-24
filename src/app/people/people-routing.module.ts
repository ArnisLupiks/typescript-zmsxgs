import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleContainerComponent } from './components';


export const routes: Routes = [
  {
    path: '',
    component: PeopleContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class PeopleRoutingModule {}
