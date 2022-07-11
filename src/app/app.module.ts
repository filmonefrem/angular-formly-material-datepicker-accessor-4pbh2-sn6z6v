import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";
import { FormlyModule, FormlyFieldConfig } from "@ngx-formly/core";
import { DemoMaterialModule } from "../app/material-module";
import { FormlyMaterialModule } from "@ngx-formly/material";
import { HttpClientModule } from "@angular/common/http";
import { MatMenuModule } from "@angular/material/menu";
import { AppComponent } from "./app.component";
import { MatButtonModule } from "@angular/material/button";
import { HeaderComponent } from "./components/header/header.component";
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from "@angular/material/form-field";
import { SharedDataService } from "./services/shared-data.service";
import { OverlayContainer } from "@angular/cdk/overlay";
import { FormlyArrayTypeComponent } from "./components/formly-array-type/formly-array-type.component";
import { FormlyObjectTypeComponent } from "./components/formly-object-type/formly-object-type.component";
import { FormlyMultiSchemaTypeComponent } from "./components/formly-multi-schema-type/formly-multi-schema-type.component";
import { FormlyNullTypeComponent } from "./components/formly-null-type/formly-null-type.component";
import { FormlyDatepickerTypeComponent } from "./components/formly-datepicker-type/formly-datepicker-type.component";
import { FormlyTabWrapperComponent } from "./components/formly-tab-wrapper/formly-tab-wrapper.component";
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';
import { DateOnlyDirective } from './components/formly-datepicker-type/date-only.directive';
import { MomentDateModule } from '@angular/material-moment-adapter';
import { MAT_DATE_FORMATS } from '@angular/material/core';

export function minItemsValidationMessage(err, field: FormlyFieldConfig) {
  return `should NOT have fewer than ${field.templateOptions.minItems} items`;
}

export function maxItemsValidationMessage(err, field: FormlyFieldConfig) {
  return `should NOT have more than ${field.templateOptions.maxItems} items`;
}

export function minlengthValidationMessage(err, field: FormlyFieldConfig) {
  return `should NOT be shorter than ${
    field.templateOptions.minLength
  } characters`;
}

export function maxlengthValidationMessage(err, field: FormlyFieldConfig) {
  return `should NOT be longer than ${
    field.templateOptions.maxLength
  } characters`;
}

export function minValidationMessage(err, field: FormlyFieldConfig) {
  return `should be >= ${field.templateOptions.min}`;
}

export function maxValidationMessage(err, field: FormlyFieldConfig) {
  return `should be <= ${field.templateOptions.max}`;
}

export function multipleOfValidationMessage(err, field: FormlyFieldConfig) {
  return `should be multiple of ${field.templateOptions.step}`;
}

export function exclusiveMinimumValidationMessage(
  err,
  field: FormlyFieldConfig
) {
  return `should be > ${field.templateOptions.step}`;
}

export function exclusiveMaximumValidationMessage(
  err,
  field: FormlyFieldConfig
) {
  return `should be < ${field.templateOptions.step}`;
}

export function constValidationMessage(err, field: FormlyFieldConfig) {
  return `should be equal to constant "${field.templateOptions.const}"`;
}

@NgModule({
  imports: [
    MomentDateModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    DemoMaterialModule,
    FormlyMaterialModule,
    HttpClientModule,
    MatMenuModule,
    MatButtonModule,
    FormlyMatDatepickerModule,
    FormlyModule.forRoot({
      wrappers: [{ name: "tabs", component: FormlyTabWrapperComponent }],
      extras: { resetFieldOnHide: true },
      validationMessages: [
        { name: "required", message: "This field is required" },
        { name: "null", message: "should be null" },
        { name: "minlength", message: minlengthValidationMessage },
        { name: "maxlength", message: maxlengthValidationMessage },
        { name: "min", message: minValidationMessage },
        { name: "max", message: maxValidationMessage },
        { name: "multipleOf", message: multipleOfValidationMessage },
        {
          name: "exclusiveMinimum",
          message: exclusiveMinimumValidationMessage
        },
        {
          name: "exclusiveMaximum",
          message: exclusiveMaximumValidationMessage
        },
        { name: "minItems", message: minItemsValidationMessage },
        { name: "maxItems", message: maxItemsValidationMessage },
        { name: "uniqueItems", message: "should NOT have duplicate items" },
        { name: "const", message: constValidationMessage }
      ],
      types: [
        {
          name: "datepicker-custom",
          component: FormlyDatepickerTypeComponent,
          wrappers: ["form-field"],
          defaultOptions: {
            defaultValue: new Date(),
            templateOptions: {
              datepickerOptions: {}
            }
          }
        },
        { name: "string", extends: "input" },
        {
          name: "number",
          extends: "input",
          defaultOptions: {
            templateOptions: {
              type: "number"
            }
          }
        },
        {
          name: "integer",
          extends: "input",
          defaultOptions: {
            templateOptions: {
              type: "number"
            }
          }
        },
        { name: "boolean", extends: "checkbox" },
        { name: "enum", extends: "select" },
        {
          name: "null",
          component: FormlyNullTypeComponent,
          wrappers: ["form-field"]
        },
        { name: "array", component: FormlyArrayTypeComponent },
        {
          name: "object",
          component: FormlyObjectTypeComponent
        },
        { name: "multischema", component: FormlyMultiSchemaTypeComponent }
      ]
    })
  ],
  bootstrap: [AppComponent],
  providers: [
    SharedDataService,
    OverlayContainer,
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: "fill" }
    },
    //{ provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FormlyArrayTypeComponent,
    FormlyObjectTypeComponent,
    FormlyMultiSchemaTypeComponent,
    FormlyNullTypeComponent,
    FormlyDatepickerTypeComponent,
    FormlyTabWrapperComponent,
    DateOnlyDirective
  ]
})
export class AppModule {}

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
