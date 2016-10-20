import { Directive, forwardRef, OnInit } from '@angular/core';
import { NG_VALIDATORS, FormControl } from '@angular/forms';
import { Input } from "@angular/core";

/**
 *
 * @param maxValue
 * @returns {(c:FormControl)=>{validateMaxValue: {valid: boolean}}}
 */
function validateMaxValue( maxValue : number ) {
  return ( c : FormControl ) => {
    return ( parseInt(c.value) <= maxValue ) ? null : {
      validateMaxValue: {
        valid: false
      }
    };
  };
}

@Directive({
  selector: '[validateMaxValue][ngModel],[validateMaxValue][formControlName]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: forwardRef(() => MaxValueValidator), multi: true}
  ]
})
export default class MaxValueValidator implements OnInit {
  @Input() maxValue : string = "0";
  validator : Function;

  ngOnInit() {
    this.validator = validateMaxValue(parseInt(this.maxValue));
  }

  validate( c : FormControl ) {
    return this.validator(c);
  }
}
