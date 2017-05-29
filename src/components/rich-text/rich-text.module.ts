import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RichTextComponent } from './rich-text';

@NgModule({
  declarations: [
    RichTextComponent,
  ],
  imports: [
    IonicPageModule.forChild(RichTextComponent),
  ],
  exports: [
    RichTextComponent
  ]
})
export class RichTextComponentModule {}
