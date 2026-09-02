import { NgOptimizedImage } from "@angular/common";
import { Component, inject, input } from "@angular/core";
import { ThemeService } from "@app/core/theme.service";
import { Project } from "../models/project";

@Component({
    selector: 'app-project-gallery',
    imports: [NgOptimizedImage],
    templateUrl: './project-gallery.html',
    styleUrl: './project-gallery.scss',
})
export class ProjectGallery {
    public readonly theme = inject(ThemeService);
    readonly images = input.required<Project['images']>();
}
