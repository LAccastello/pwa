import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { RoutesModule } from './modules/routes/routes.module';
import { DrinksComponent } from './components/drinks/drinks.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { DrinkComponent } from './components/drink/drink.component';
import { DrinksService } from './services/drinks.service';

@NgModule({
  declarations: [
    AppComponent,
    DrinksComponent,
    CategoriesComponent,
    DrinkComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    RoutesModule
  ],
  providers: [DrinksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
