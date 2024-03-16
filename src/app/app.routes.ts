import { Routes } from '@angular/router';
import { ForgotPasswordComponent } from './modules/security/components/forgot-password/forgot-password.component';
import { LoginComponent } from './modules/security/components/login/login.component';
import { RegisterComponent } from './modules/security/components/register/register.component';
import { authGuard } from './modules/security/guards/auth.guard';
import { MenuComponent } from './modules/shared/menu/menu.component';
import { HomeComponent } from './modules/user/components/home/home.component';
import { ConfigureComponent } from './modules/user/components/configure/configure.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [authGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'admin',
    canActivate: [authGuard],
    component: MenuComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      {path: 'configure', component:ConfigureComponent}
    ],
  },
  {
    path: 'user',
    canActivate: [authGuard],
    component: MenuComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      {path: 'configure', component:ConfigureComponent}
    ],
  },
];
