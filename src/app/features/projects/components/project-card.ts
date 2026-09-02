import { NgOptimizedImage } from "@angular/common";
import { Component, computed, inject, input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { ThemeService } from "@app/core/theme.service";
import { ProjectTags } from "./project-tags";
import { Project } from "../models/project";

@Component({
    selector: 'app-project-card',
    imports: [NgOptimizedImage, RouterLink, ProjectTags],
    templateUrl: './project-card.html',
    styleUrl: './project-card.scss',
})
export class ProjectCard {
    private readonly theme = inject(ThemeService);

    readonly project = input.required<Project>();

    readonly image = computed(() => {
        const image = this.project().images[0];
        if (!image) return '';
        return this.theme.isDarkMode() ? image.dark : image.light;
    })
}
