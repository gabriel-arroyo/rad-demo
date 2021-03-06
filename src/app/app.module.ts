import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { AlternateComponent } from './pagina-alternativa.component';
import {ComponentsModule} from './components/components.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlternateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
