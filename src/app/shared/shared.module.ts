import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { UiSidenavComponent } from './ui-sidenav/ui-sidenav.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderComponent } from './loader/loader.component';

const MAT = [
  MatDialogModule,
  MatFormFieldModule,
  MatSelectModule,
  MatCardModule,
  MatTableModule,
  MatMenuModule,
  MatTabsModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatInputModule,
  MatFormFieldModule,
  MatExpansionModule,
  MatProgressBarModule,
  MatSnackBarModule,
  MatRadioModule,
  MatCheckboxModule,
  MatSortModule,
  MatStepperModule,
  MatButtonToggleModule,
  MatAutocompleteModule,
  MatTooltipModule,
  MatSliderModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
];
@NgModule({
  declarations: [UiSidenavComponent, LoaderComponent],
  imports: [...MAT, RouterModule, CommonModule],
  exports: [...MAT, CommonModule, LoaderComponent],
})
export class SharedModule {}
