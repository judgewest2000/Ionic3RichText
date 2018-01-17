import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormControl, FormBuilder, FormGroup } from "@angular/forms";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  item: FormControl;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, private domSanitizer: DomSanitizer) {

  }

  ionViewWillLoad() {
    this.item = this.formBuilder.control('To insert an image, make sure your cursor is somewhere within the text, then click INSERT IMAGE');
  }

  get trustedHtml(){
    const html = this.domSanitizer.bypassSecurityTrustHtml(this.item.value);
    return html
  }

}
