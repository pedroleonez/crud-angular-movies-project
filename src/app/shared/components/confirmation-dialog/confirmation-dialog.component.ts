import { Component, inject } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-confirmation-dialog',
  imports: [MatButtonModule, CommonModule, MatDialogModule],
  templateUrl: './confirmation-dialog.component.html',
  styleUrl: './confirmation-dialog.component.scss',
})
export class ConfirmationDialogComponent {
  dialogRef = inject(MatDialogRef<ConfirmationDialogComponent>);
  data: string = inject(MAT_DIALOG_DATA);

  onConfirm(result: boolean): void {
    this.dialogRef.close(result);
  }
}
