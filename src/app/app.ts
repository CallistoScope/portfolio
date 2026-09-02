import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer, Navbar } from './layout';

@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        Footer,
        Navbar,
    ],
    templateUrl: './app.html',
    styleUrl: './app.scss'
})
export class App {
    constructor() { }
}
