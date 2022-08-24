import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllBirthdaysComponent } from './core/components/all-birthdays/all-birthdays.component';
import { MainPageComponent } from './core/components/main-page/main-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'AllBirthdays',
    component: AllBirthdaysComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
