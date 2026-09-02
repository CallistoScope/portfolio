import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TypingTextComponent } from "../../shared/components/typing-text/typing-text.component";

@Component({
    selector: 'app-not-found',
    imports: [TypingTextComponent],
    templateUrl: './not-found.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {

}
