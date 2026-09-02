import { computed, effect, Service, signal } from '@angular/core';

@Service()
export class ThemeService {

    // Source signal
    private readonly _theme = signal<'light-mode' | 'dark-mode'>('light-mode');

    // Public signals
    readonly isLightMode = computed(() => this._theme() === 'light-mode');
    readonly isDarkMode = computed(() => this._theme() === 'dark-mode');

    constructor() {
        const preference =
            window.matchMedia &&
                window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark-mode'
                : 'light-mode';

        const theme = window.localStorage.getItem('theme') || preference;
        this._theme.set(theme === 'light-mode' ? 'light-mode' : 'dark-mode');

        effect(() => {
            const newTheme = this._theme();
            document.documentElement.setAttribute('data-theme', newTheme);
            window.localStorage.setItem('theme', newTheme);
        });
    }

    setLightTheme() {
        this._theme.set('light-mode');
    };

    setDarkTheme() {
        this._theme.set('dark-mode');
    };

    toggleTheme() {
        this._theme.update(
            theme => theme === 'light-mode' ? 'dark-mode' : 'light-mode'
        );
    };
}
