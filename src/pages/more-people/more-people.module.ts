import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MorePeoplePage } from './more-people';

@NgModule({
  declarations: [
    MorePeoplePage,
  ],
  imports: [
    IonicPageModule.forChild(MorePeoplePage),
  ],
})
export class MorePeoplePageModule {}
