import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { SavingsComponent } from './savings/savings.component';
import { UserdataComponent } from './userdata/userdata.component';
import { SavingComponent } from './saving/saving.component';
import { CreditcardComponent } from './creditcard/creditcard.component';
import { CardComponent } from './card/card.component';
import { DepositformComponent } from './saving/depositform/depositform.component';
import { WithdrawformComponent } from './saving/withdrawform/withdrawform.component';
import { TransferformComponent } from './saving/transferform/transferform.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegistrationComponent,
    NavigationComponent,
    DashboardComponent,
    ProfileComponent,
    SavingsComponent,
    UserdataComponent,
    SavingComponent,
    CreditcardComponent,
    CardComponent,
    DepositformComponent,
    WithdrawformComponent,
    TransferformComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
