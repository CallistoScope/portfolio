import { Component, inject } from '@angular/core';
import { ExperienceStore } from '../experience.store';

@Component({
    selector: 'app-experience-hero',
    templateUrl: './experience-hero.html',
    styleUrls: [
        './experience-hero.scss',
        './skeleton-base.scss',
    ],
})
export class ExperienceHero {
    readonly store = inject(ExperienceStore);
}
