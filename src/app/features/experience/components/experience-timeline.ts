import { Component, inject } from "@angular/core";
import { ExperienceStore } from "../experience.store";
import { ExperienceCard } from "./experience-card";

@Component({
    selector: 'app-experience-timeline',
    imports: [ExperienceCard],
    templateUrl: './experience-timeline.html',
    styleUrls: [
        './experience-timeline.scss',
        './skeleton-base.scss',
        './button.scss',
    ],
})
export class ExperienceTimeline {
    readonly store = inject(ExperienceStore);
}
