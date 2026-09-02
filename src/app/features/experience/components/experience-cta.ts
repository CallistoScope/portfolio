import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-experience-cta',
    imports: [RouterLink],
    templateUrl: './experience-cta.html',
    styleUrls: [
        './experience-cta.scss',
        './button.scss',
    ],
})
export class ExperienceCta { }
