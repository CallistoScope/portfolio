import { Component, computed, input } from "@angular/core";
import { Project } from "../models/project";

@Component({
    selector: 'app-project-tags',
    templateUrl: './project-tags.html',
    styleUrl: './project-tags.scss',
})
export class ProjectTags {
    readonly project = input.required<Project>();

    readonly limit = input<number | null>(null);

    readonly visibleTechnologies = computed(() => {
        const technologies = this.project().technologies;
        const limit = this.limit();

        return limit === null
            ? technologies
            : technologies.slice(0, limit);
    });
}
