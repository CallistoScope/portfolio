import { Component, effect, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ComingSoonDialogComponent } from '../../shared/components/coming-soon-dialog/coming-soon-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ThemeService } from '../../core/theme.service';

@Component({
    selector: 'app-navbar',
    imports: [
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        RouterLink,
        RouterLinkActive,
    ],
    templateUrl: './navbar.html',
    styleUrl: './navbar.scss',
})
export class Navbar {
    private readonly theme = inject(ThemeService);
    private readonly dialog = inject(MatDialog);

    protected readonly random = signal('');

    private readonly prevScrollPos = signal(window.scrollY);
    protected readonly isHidden = signal(false);
    protected readonly isAtTop = signal(true);

    protected readonly menu = [
        { name: 'Home', path: 'home', icon: 'home' },
        { name: 'Projects', path: 'projects', icon: 'token' },
        { name: 'Experience', path: 'experience', icon: 'work' },
        { name: 'About', path: 'about', icon: 'person' },
        // { name: 'Resume', path: 'resume', icon: 'contextual_token' },
        // { name: 'Skills', path: 'skills', icon: 'electric_bolt' },
        { name: 'Contact', path: 'contact', icon: 'mail' },
        // { name: 'Codex', path: 'codex', icon: 'api' },
    ];

    constructor() {
        this.scrollEffect();
        this.randomTextEffect();
    }

    get isDarkMode() { return this.theme.isDarkMode; }
    get toggleTheme() { return () => this.theme.toggleTheme(); }

    private scrollEffect() {
        effect(() => {
            const scrollHandler = () => {
                const currentScrollPos = window.scrollY;
                this.isHidden.set(currentScrollPos > this.prevScrollPos() && currentScrollPos > 100);
                this.isAtTop.set(currentScrollPos <= 50);
                this.prevScrollPos.set(currentScrollPos);
            };
            window.addEventListener('scroll', scrollHandler);
            return () => window.removeEventListener('scroll', scrollHandler);
        });
    }

    private randomTextEffect() {
        const buffer = ['@', '#', '$', '%', '&', '/', '\\', '?', '!', '<', '>', ':', ';', '=', '{', '}', '[', ']', '|', '(', ')', '*', '+', '-', '.'];
        const intervalId = setInterval(() => {
            let text = '';
            for (let i = 0; i < 8; i++) text += buffer[Math.floor(Math.random() * buffer.length)];
            this.random.set(text);
        }, 10);

        effect(() => () => clearInterval(intervalId));
    }

    public openDialog() {
        this.dialog.open(ComingSoonDialogComponent);
    }
}
