import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from '@app/core/theme.service';
import { PrivacyPolicyDialog } from './dialogs/privacy-policy-dialog';
import { TermsOfServiceDialog } from './dialogs/terms-of-service.component';

@Component({
    selector: 'app-footer',
    imports: [
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
    ],
    templateUrl: './footer.html',
    styleUrl: './footer.scss'
})
export class Footer {
    private readonly dialog = inject(MatDialog);

    readonly YEAR = new Date().getFullYear();

    openDialog(component: 'privacy-policy' | 'terms-of-service') {
        switch (component) {
            case 'privacy-policy':
                this.dialog.open(PrivacyPolicyDialog);
                break;
            case 'terms-of-service':
                this.dialog.open(TermsOfServiceDialog);
                break;
        }
    }
}
