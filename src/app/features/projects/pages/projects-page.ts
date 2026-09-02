import { Component, inject } from "@angular/core";
import { ProjectsStore } from "../projects.store";
import { ProjectCard } from "../components/project-card";

@Component({
    selector: 'app-projects-page',
    imports: [ProjectCard],
    templateUrl: './projects-page.html',
    styleUrl: './projects-page.scss'
})
export class ProjectsPage {
    readonly store = inject(ProjectsStore);

    constructor() {
        this.store.load();
    }
}
