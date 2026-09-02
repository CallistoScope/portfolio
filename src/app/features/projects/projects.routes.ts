import { Routes } from "@angular/router";

export const PROJECTS_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/projects-page').then(m => m.ProjectsPage),
    },
    {
        path: ':slug',
        loadComponent: () => import('./pages/project-page').then(m => m.ProjectPage),
    }
];