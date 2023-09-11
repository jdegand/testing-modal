/* eslint-disable @angular-eslint/component-class-suffix */
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  template: `
    <h1 mat-dialog-title>Profile</h1>
    <div mat-dialog-content>Name: {{ data.name }}</div>
    <div mat-dialog-actions>
      <button data-cy="cancel" mat-button [mat-dialog-close]="false">Cancel</button>
      <button data-cy="confirmation" mat-button [mat-dialog-close]="true">Confirmation</button>
    </div>
  `,
})
export class ProfileConfirmationDialog {
  data = inject(MAT_DIALOG_DATA);
}