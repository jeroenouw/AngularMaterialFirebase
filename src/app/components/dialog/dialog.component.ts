import { Component } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html'
})
export class DialogComponent {
  titleTwo: string = 'What is your opinion?';
  selectedOption: string;

  constructor(public dialog: MdDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogResultDialog);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
  }
}

@Component({
  selector: 'app-dialog-result',
  templateUrl: './dialog-result.component.html',
})
export class DialogResultDialog {
  constructor(public dialogRef: MdDialogRef<DialogResultDialog>) {}
}
