import { Component, computed, inject } from "@angular/core";
import { ProjectsStore } from "../projects.store";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { ProjectTags } from "../components/project-tags";
import { ProjectHighlights } from "../components/project-highlights";
import { ProjectGallery } from "../components/project-gallery";
import { ProjectLinks } from "../components/project-links";

@Component({
    selector: 'app-project-page',
    standalone: true,
    imports: [
        RouterLink,
        ProjectTags,
        ProjectGallery,
        ProjectHighlights,
        ProjectLinks,
    ],
    templateUrl: './project-page.html',
    styleUrl: './project-page.scss',
})
export class ProjectPage {
    private readonly route = inject(ActivatedRoute);
    readonly store = inject(ProjectsStore);

    readonly project = computed(
        () => this.store.currentProject()
    );

    constructor() {
        const slug = this.route.snapshot.paramMap.get('slug');

        if (slug) {
            this.store.loadProject(slug);
        }
    }
}