import { Component, input } from "@angular/core";
import { Project } from "../models/project";

@Component({
    selector: 'app-project-links',
    templateUrl: './project-links.html',
    styleUrl: './project-links.scss',
})
export class ProjectLinks {
    readonly project = input.required<Project>();
}