import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from "@angular/common";

@Component({
    selector: 'app-home-hero',
    imports: [RouterLink, NgOptimizedImage],
    templateUrl: './home-hero.html',
    styleUrl: './home-hero.scss',
})
export class HomeHero {

}
