import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviesComponent } from './movies/movies.component';
import { MovielistComponent } from './movielist/movielist.component';
import { RegisterComponent } from './register/register.component';
import { LoginnComponent } from './login/loginn.component';


@NgModule({
  declarations: [
    AppComponent,

    
    SignupComponent,
    
    LoginnComponent,
    RegisterComponent,
  
    MoviesComponent,
    MovielistComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     
   // NgModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
