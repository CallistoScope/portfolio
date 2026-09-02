import { Routes } from "@angular/router";

export const HOME_ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./pages/home-page').then(m => m.HomePage),
    }
];
