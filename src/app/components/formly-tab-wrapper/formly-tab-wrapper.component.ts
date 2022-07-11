import { Component } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

// https://stackblitz.com/angular/lklgeqrxvny?file=src%2Fapp%2Fapp.component.ts
@Component({
  selector: 'app-formly-tab-wrapper',
  templateUrl: './formly-tab-wrapper.component.html',
  styleUrls: ['./formly-tab-wrapper.component.css']
})
export class FormlyTabWrapperComponent extends FieldWrapper {}