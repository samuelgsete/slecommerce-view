import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxCurrencyModule } from "ngx-currency";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FilesizePipe } from '../pipes/filesize.pipe';
import { DragDropDirective } from '../directives/drag-drop.directive';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { ToastrModule } from 'ngx-toastr';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxMaskModule } from 'ngx-mask'
import { SwiperModule } from "swiper/angular";

import { StarRaterComponent } from './components/star-rater/star-rater.component';
import { TextSmallPipe } from '../pipes/text-small.pipe';
import { ExibirTempoPipe } from '../pipes/exibir-tempo.pipe';

@NgModule({
  declarations: [
    FilesizePipe,
    TextSmallPipe,
    ExibirTempoPipe,
    DragDropDirective,
    StarRaterComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxCurrencyModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatStepperModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatMenuModule,
    MatButtonToggleModule,
    ToastrModule.forRoot(),
    MatExpansionModule,
    DragDropModule,
    NgCircleProgressModule.forRoot({
      radius: 38,
      outerStrokeWidth: 8,
      innerStrokeWidth: 1,
      outerStrokeColor: "#7315F7",
      innerStrokeColor: "#FFBF00",
      animation: true,
      animationDuration: 300,
      showSubtitle: false
    }),
    MatDialogModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
    NgxMaskModule.forRoot(),
    SwiperModule
  ],
  exports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxCurrencyModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatStepperModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatMenuModule,
    FilesizePipe,  
    DragDropDirective,
    MatTooltipModule,
    ToastrModule,
    MatExpansionModule,
    DragDropModule,
    NgCircleProgressModule,
    MatDialogModule,
    MatButtonToggleModule,
    NgxSpinnerModule,
    NgxMaskModule,
    SwiperModule,
    StarRaterComponent,
    TextSmallPipe,
    ExibirTempoPipe
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}