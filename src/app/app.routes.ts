import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Receitas } from './pages/receitas/receitas';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'receitas', component: Receitas},
  { path: '**', redirectTo: 'home' }

];
