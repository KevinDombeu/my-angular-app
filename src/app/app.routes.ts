import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { AccueilComponent } from './accueil/accueil.component';

export const routes: Routes = [
    { path: '', component: AccueilComponent },
    { path: 'accueil', component: AccueilComponent },
    { path: 'user-list', component: UserListComponent },
    { path: '**', redirectTo: '/user-list', pathMatch: 'full' }
];
