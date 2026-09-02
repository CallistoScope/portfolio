import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ThemeService } from '@app/core/theme.service';

@Component({
    selector: 'app-contact-page',
    imports: [NgOptimizedImage],
    templateUrl: './contact-page.html',
    styleUrl: './contact-page.scss',
})
export class ContactPage {
    readonly theme = inject(ThemeService);
}
