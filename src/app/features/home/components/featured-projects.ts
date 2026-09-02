import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project } from '@app/features/projects';
import { ProjectCard } from '@app/features/projects';

@Component({
    selector: 'app-featured-projects',
    imports: [
        RouterLink,
        ProjectCard,
    ],
    templateUrl: './featured-projects.html',
    styleUrl: './featured-projects.scss',
})
export class FeaturedProjects {
    readonly projects = input.required<Project[]>();
}
