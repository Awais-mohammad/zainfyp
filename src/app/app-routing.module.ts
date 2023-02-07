import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TrainModelComponent } from './train-model/train-model.component';

const routes: Routes = [{
  path:"",
  component:LandingPageComponent,
  pathMatch:"full"
},
{
  path:'train-model',
  component:TrainModelComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
