import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ServicesComponent } from '../services/services.component';
import { ContactComponent } from '../contact/contact.component';
import { RegisterComponent } from '../core/auth/components/register/register.component';
import { LoginComponent } from '../core/auth/components/login/login.component';

import { TermsComponent } from '../pages/legal/terms/terms.component';
import { PrivacyComponent } from '../pages/legal/privacy/privacy.component';
import { NotFoundComponent } from '../pages/errors/not-found/not-found.component';
import { ServerErrorComponent } from '../pages/errors/server-error/server-error.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'legal/terms', component: TermsComponent },
  { path: 'legal/privacy', component: PrivacyComponent },
  { path: '404', component: NotFoundComponent },
  { path: '500', component: ServerErrorComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/404', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
