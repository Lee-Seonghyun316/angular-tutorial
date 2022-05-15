import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "src/app/app-routing.module";

import {AppComponent} from 'src/app/app.component';
import {HeroesComponent} from "src/app/heroes/heroes.component";
import {MessageComponent} from "src/app/message/message.component";
import {DashboardComponent} from "src/app/dashboard/dashboard.component";
import {HeroDetailComponent} from "src/app/hero-detail/hero-detail.component";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "src/app/in-memory-data.service";

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessageComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
