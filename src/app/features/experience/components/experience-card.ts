import { Component, input } from '@angular/core';
import { Experience } from '../models/experience';
import { formatTimestamp } from '../experience.helpers';

@Component({
    selector: 'app-experience-card',
    templateUrl: './experience-card.html',
    styleUrl: './experience-card.scss',
})
export class ExperienceCard {
    readonly experience = input.required<Experience>();

    readonly isCurrent = () =>
        !this.experience().endDate;

    readonly formattedStartDate = () =>
        formatTimestamp(this.experience().startDate);

    readonly formattedEndDate = () =>
        formatTimestamp(this.experience().endDate);
}
