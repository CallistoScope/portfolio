import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },
    {
        path: 'home',
        title: 'EscobeDev',
        loadChildren: () => import('./features/home').then(m => m.HOME_ROUTES),
    },
    {
        path: 'projects',
        title: 'EscobeDev • Projects',
        loadChildren: () => import('./features/projects').then(m => m.PROJECTS_ROUTES),
    },
    {
        path: 'experience',
        title: 'EscobeDev • Experience',
        pathMatch: 'full',
        loadChildren: () => import('./features/experience').then(m => m.EXPERIENCE_ROUTES),
    },
    {
        path: 'about',
        title: 'EscobeDev • About',
        pathMatch: 'full',
        loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    },
    {
        path: 'contact',
        title: 'EscobeDev • Contact',
        pathMatch: 'full',
        loadChildren: () => import('./features/contact').then(m => m.CONTACT_ROUTES),
    },
    {
        path: 'skills',
        title: 'EscobeDev • Skills',
        pathMatch: 'full',
        loadComponent: () => import('./pages/skills/skills.component').then(m => m.SkillsComponent),
    },
    {
        path: 'skills/:skill',
        title: 'EscobeDev • Skills',
        pathMatch: 'full',
        loadComponent: () => import('./pages/skill/skill.component').then(m => m.SkillComponent),
    },
    {
        path: 'certs',
        title: 'EscobeDev • Certifications',
        pathMatch: 'full',
        loadComponent: () => import('./pages/certs/certs.component').then(m => m.CertsComponent),
    },
    {
        path: '404',
        title: 'EscobeDev • Not Found',
        pathMatch: 'full',
        loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent),
    },
    {
        path: '**',
        redirectTo: '404',
    }
];
