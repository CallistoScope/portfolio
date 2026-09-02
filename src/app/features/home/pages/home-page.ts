import { Component, inject } from "@angular/core";
import { HomeStore } from "../home.store";
import { HomeHero } from "../components/home-hero";
import { FeaturedProjects } from "../components/featured-projects";
import { HomeExperience } from "../components/home-experience";
// import { HomeSkills } from "../components/home-skills";
import { HomeCta } from "../components/home-cta";

@Component({
    selector: 'app-home-page',
    imports: [
        HomeHero,
        FeaturedProjects,
        HomeExperience,
        // HomeSkills,
        HomeCta,
    ],
    templateUrl: './home-page.html',
    styleUrl: './home-page.scss'
})
export class HomePage {
    readonly store = inject(HomeStore);
}
