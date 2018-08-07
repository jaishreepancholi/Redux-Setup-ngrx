import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';





const routes: Routes = [
  {
    path: 'home',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    // children: [
    //    // { path: ':stepName', component: HomeComponent },
    //   //  { path: '', component: HomeComponent }
    // ]
  },
  {
    path: 'aboutus',
    component: AboutusComponent,
  },
  {
    path: 'contactus',
    component: ContactusComponent,
  },
  {
    path: '**',
    component: FormLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
