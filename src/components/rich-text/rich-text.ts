import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import { FormControl } from "@angular/forms";


@Component({
  selector: 'rich-text',
  templateUrl: 'rich-text.html'
})
export class RichTextComponent {


  constructor() {

  }

  @ViewChild('editor') editor: ElementRef;
  @ViewChild('decorate') decorate: ElementRef;

  @Input() formControlItem: FormControl;


  private wireupResize() {

    let element = this.editor.nativeElement as HTMLDivElement;

    let height = (window.innerHeight || document.body.clientHeight) - 250;
    let textareaHeight = Math.round((height / 100.00) * 45);
    element.style.height = `${textareaHeight}px`;

  }

  private updateItem() {
    let element = this.editor.nativeElement as HTMLDivElement;
    element.innerHTML = this.formControlItem.value;

    if (element.innerHTML === null || element.innerHTML === '') {
      element.innerHTML = '<div></div>';
    }

    let updateItem = () => {
      this.formControlItem.setValue(element.innerHTML);
    };

    element.onchange = () => updateItem();
    element.onkeyup = () => updateItem();
    element.onpaste = () => updateItem();
    element.oninput = () => updateItem();
  }

  private wireupButtons() {
    let buttons = (this.decorate.nativeElement as HTMLDivElement).getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
      let button = buttons[i];

      let command = button.getAttribute('data-command');

      if (command.includes('|')) {
        let parameter = command.split('|')[1];
        command = command.split('|')[0];

        button.addEventListener('click', () => {
          document.execCommand(command, false, parameter);
        });
      } else {
        button.addEventListener('click', () => {
          document.execCommand(command);
        });
      }
    }

  }

  ngAfterContentInit() {
     
    this.wireupResize();
    this.updateItem();
    this.wireupButtons();
  }

}
