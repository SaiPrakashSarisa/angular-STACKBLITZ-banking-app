import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegistrationComponent } from '../registration/registration.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ProfileComponent } from '../profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'navigation', component: NavigationComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
