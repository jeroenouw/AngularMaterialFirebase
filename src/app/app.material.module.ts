import { NgModule } from '@angular/core';

import {
    MatButtonModule, MatCheckboxModule, MatMenuModule, MatInputModule, MatSnackBarModule,
    MatToolbarModule, MatDialogModule, MatSidenavModule, MatNativeDateModule,
    MatCardModule, MatTabsModule, MatIconModule, MatProgressBarModule,
    MatSlideToggleModule, MatStepperModule, MatTooltipModule,
    MatTableModule, MatDatepickerModule, MatExpansionModule
} from '@angular/Material';

const modules = [
    MatButtonModule, MatCheckboxModule, MatMenuModule, MatInputModule, MatSnackBarModule,
    MatToolbarModule, MatDialogModule, MatSidenavModule, MatNativeDateModule,
    MatCardModule, MatTabsModule, MatIconModule, MatProgressBarModule,
    MatSlideToggleModule, MatStepperModule, MatTooltipModule,
    MatTableModule, MatDatepickerModule, MatExpansionModule
];

@NgModule({
    imports: [modules],
    exports: [modules],
})
export class AppMaterialModule { }
