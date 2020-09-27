import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutJiyoPage } from './about-jiyo.page';

const routes: Routes = [
  {
    path: '',
    component: AboutJiyoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutJiyoPageRoutingModule {}
