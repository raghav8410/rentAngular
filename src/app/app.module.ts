import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ExclusiveOfferComponent } from './exclusive-offer/exclusive-offer.component';
import { SubscriptionPlanComponent } from './subscription-plan/subscription-plan.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { ProfileSummaryComponent } from './profile-summary/profile-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ExclusiveOfferComponent,
    SubscriptionPlanComponent,
    FaqComponent,
    HomeComponent,
    ProfileSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
