import { Component, inject } from '@angular/core';
import { ExperienceCareerIntro } from "../components/experience-career-intro";
import { ExperienceCta } from "../components/experience-cta";
import { ExperienceHero } from "../components/experience-hero";
import { ExperienceTimeline } from '../components/experience-timeline';
import { ExperienceStore } from '../experience.store';

@Component({
    selector: 'app-experience-page',
    imports: [
        ExperienceCareerIntro,
        ExperienceCta,
        ExperienceHero,
        ExperienceTimeline,
    ],
    templateUrl: './experience-page.html',
    styleUrl: './experience-page.scss',
})
export class ExperiencePage {
    readonly store = inject(ExperienceStore);

    constructor() {
        this.store.load();
    }
}
