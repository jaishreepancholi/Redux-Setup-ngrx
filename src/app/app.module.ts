import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { LoginService } from './services/login.service';
/*reducer*/
import { reducers, metaReducers } from '../reducers/index';

// Effects
import { LoginEffect } from '../effects/login.effect';
@NgModule({
  declarations: [
    AppComponent,
    FormLoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !false ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([LoginEffect]),
    FormsModule, ReactiveFormsModule, AppRoutingModule


  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
