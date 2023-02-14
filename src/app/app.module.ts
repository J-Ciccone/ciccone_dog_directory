import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreedListComponent } from './breed-list/breed-list.component';
import { NavComponent } from './nav/nav.component';
import { BreedInformationComponent } from './breed-information/breed-information.component';


@NgModule({
  declarations: [
    AppComponent,
    BreedListComponent,
    NavComponent,
    BreedInformationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
