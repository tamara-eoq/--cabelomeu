import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { slideCronogramaPage } from './slideCronograma';
import { CalendarMonthComponent } from './calendar-month/calendar-month';
import { CalendarDayComponent } from './calendar-day/calendar-day';
import { LockSlidesDirective } from './lock-slides.directive';
import { CalendarController } from './calendar-controller';
import { CalendarComponent } from './calendar';

@NgModule({
  imports: [
    IonicPageModule.forChild(slideCronogramaPage),
  ],
  declarations: [
    slideCronogramaPage,
    CalendarComponent,
    CalendarMonthComponent,
    CalendarDayComponent,
    LockSlidesDirective
  ],
  providers: [CalendarController],
  exports: [CalendarComponent]

})
export class slideCronogramaPageModule {
  
}
