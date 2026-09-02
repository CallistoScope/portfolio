import { Component, input } from '@angular/core';
import { SkillGroup } from '@app/features/skills';

@Component({
    selector: 'app-home-skills',
    templateUrl: './home-skills.html',
    styleUrl: './home-skills.scss',
})
export class HomeSkills {
    readonly groups = input.required<SkillGroup[]>();
}
