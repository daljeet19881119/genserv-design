import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NeedMoreInfoPage } from './need-more-info';

@NgModule({
  declarations: [
    NeedMoreInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(NeedMoreInfoPage),
  ],
})
export class NeedMoreInfoPageModule {}
