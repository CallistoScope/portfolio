import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
    selector: 'app-privacy-policy-dialog',
    imports: [
        MatButtonModule,
        MatDialogModule,
    ],
    templateUrl: './privacy-policy-dialog.html',
    styleUrl: './privacy-policy-dialog.scss',
})
export class PrivacyPolicyDialog { }
