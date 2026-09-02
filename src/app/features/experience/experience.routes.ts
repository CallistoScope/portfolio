import { Routes } from "@angular/router";

export const EXPERIENCE_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/experience-page').then(m => m.ExperiencePage),
    },
];
