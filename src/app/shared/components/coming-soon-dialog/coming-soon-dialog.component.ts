import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';

@Component({
    selector: 'app-coming-soon-dialog',
    imports: [
        MatButtonModule,
        MatDialogModule,
        MatDividerModule,
    ],
    templateUrl: './coming-soon-dialog.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './coming-soon-dialog.component.scss'
})
export class ComingSoonDialogComponent {
    protected clearLocalStorage() {
        localStorage.clear();
        window.location.reload();
    }
}
