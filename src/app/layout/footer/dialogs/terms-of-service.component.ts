import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
    selector: 'app-terms-of-service-dialog',
    imports: [
        MatButtonModule,
        MatDialogModule,
    ],
    templateUrl: './terms-of-service-dialog.html',
    styleUrl: './terms-of-service-dialog.scss',
})
export class TermsOfServiceDialog { }
