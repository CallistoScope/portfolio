import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Experience } from '@app/features/experience';

@Component({
    selector: 'app-home-experience',
    imports: [RouterLink],
    templateUrl: './home-experience.html',
    styleUrl: './home-experience.scss',
})
export class HomeExperience {
    readonly experience = input.required<Experience[]>();
}
