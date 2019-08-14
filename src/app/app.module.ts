import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';



import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { TimeworkComponent } from './components/timework/timework.component';
import { FormsModule } from '@angular/forms';
import { TyperoomComponent } from './components/typeroom/typeroom.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ReservamasajeComponent } from './components/reservamasaje/reservamasaje.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    TimeworkComponent,
    TyperoomComponent,
    HeaderComponent,
    FooterComponent,
    PrincipalComponent,
    NosotrosComponent,
    ReservamasajeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
