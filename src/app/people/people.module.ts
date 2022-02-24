import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PeopleContainerComponent } from './components';
import { PeopleRoutingModule } from './people-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PeopleContainerComponent
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    HttpClientModule,
  ]
})
export class PeopleModule {}
