import { Routes } from "@angular/router";

export const CONTACT_ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./pages/contact-page').then(m => m.ContactPage),
    }
];
