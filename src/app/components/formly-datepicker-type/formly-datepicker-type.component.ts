import { Component } from "@angular/core";
import { FieldType } from "@ngx-formly/material";
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },

};

// https://stackblitz.com/edit/angular-gkwj6z?file=app/app.component.ts
@Component({
  selector: "app-formly-datepicker-type",
  templateUrl: "./formly-datepicker-type.component.html",
  styleUrls: ["./formly-datepicker-type.component.css"],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class FormlyDatepickerTypeComponent extends FieldType {
  ngOnInit() {
    console.log(this.field);
    this.field.hooks.onInit = () => {
        console.log("here");
    };
  }
}
