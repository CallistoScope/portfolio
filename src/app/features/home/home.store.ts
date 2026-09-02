import { effect, inject, Service, signal } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { from } from "rxjs";
import { ExperienceService } from "../experience";
import { ProjectService } from "../projects";
import { SkillGroup } from "../skills";

@Service()
export class HomeStore {

    readonly parallaxScale = signal(1);
    readonly parallaxOpacity = signal(0);

    readonly featuredProjects = toSignal(
        from(inject(ProjectService).getFeaturedProjects()),
        { initialValue: [] },
    );

    readonly experience = toSignal(
        from(inject(ExperienceService).getLatestExperiences()),
        { initialValue: [] },
    );

    readonly skillGroups = signal<SkillGroup[]>([]);
    // readonly skillGroups = toSignal(
    //     from(inject(SkillService).getFeaturedSkills()),
    //     { initialValue: [] },
    // );

    constructor() {
        this.parallaxEffect();
    }

    private parallaxEffect() {
        effect(() => {
            const setPosition = () => {
                const displacement = document.scrollingElement?.scrollTop ?? 0;
                const maxChange = window.innerWidth * 2;
                const change = displacement > maxChange ? maxChange : displacement;
                this.parallaxScale.set(Math.min(6, Math.exp(change / 1200)));
                this.parallaxOpacity.set(.25 * (1 - Math.exp(-(change / 1200))));
            };
            window.addEventListener('scroll', setPosition);
            return () => window.removeEventListener('scroll', setPosition);
        });
    }

}