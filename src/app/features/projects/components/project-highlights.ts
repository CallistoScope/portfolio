import { Component, input } from "@angular/core";

@Component({
    selector: 'app-project-highlights',
    templateUrl: './project-highlights.html',
    styleUrl: './project-highlights.scss',
})
export class ProjectHighlights {
    readonly highlights = input.required<string[]>();
}
