import { Directive, forwardRef, ElementRef } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Directive({
  selector: "[appDateOnly]",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateOnlyDirective),
      multi: true
    }
  ],
  host: {
    "(change)": "onChange($event.target.value)",
    "(input)": "onChange($event.target.value)",
    "(blur)": "onTouched()"
  }
})
export class DateOnlyDirective implements ControlValueAccessor {
  onChange;
  onTouched;

  constructor(private elementRef: ElementRef) {}

  writeValue(value: any): void {
    console.log(value);
    this.elementRef.nativeElement.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = value => {
      fn(value);
    };
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
