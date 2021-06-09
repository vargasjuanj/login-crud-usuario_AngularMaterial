import { NgModule } from '@angular/core';
import { LandingRoutingModule } from './landing-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LandingComponent } from './landing/landing.component';


@NgModule({
  declarations: [LandingComponent],
  imports: [
    LandingRoutingModule,
    SharedModule
  ]
})
export class LandingModule { }
