import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { ContactComponent } from './components/contact/contact.component';
import { TimeworkComponent } from './components/timework/timework.component';
import { TyperoomComponent } from './components/typeroom/typeroom.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';


const routes: Routes = [
  { path: '', component: PrincipalComponent},
  { path: 'principal', component: PrincipalComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'timework', component: TimeworkComponent},
  { path: 'typeroom', component: TyperoomComponent},
  { path: 'timework', component: TimeworkComponent},
  { path: 'nosotros', component: NosotrosComponent},


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
