import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegistrationComponent } from '../registration/registration.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ProfileComponent } from '../profile/profile.component';
import { SavingsComponent } from '../savings/savings.component';
import { UserdataComponent } from '../userdata/userdata.component';
import { SavingComponent } from '../saving/saving.component';
import { CreditcardComponent } from '../creditcard/creditcard.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'navigation', component: NavigationComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'savings', component: SavingsComponent },
  { path: 'userdata', component: UserdataComponent },
  { path: 'usersavings', component: SavingComponent },
  { path: 'creditcards', component: CreditcardComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
