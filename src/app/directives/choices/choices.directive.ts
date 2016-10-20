import { Directive, ElementRef, OnInit, Output, Input, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Directive({
  selector: '[choices]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ChoicesDirective),
      multi: true
    }
  ]
})
export class ChoicesDirective implements OnInit, ControlValueAccessor {

  public choiceEle;
  public selected;
  propagateChange = ( _ : any ) => {};

  @Input() choicesConfig = [];
  @Output() onChange : EventEmitter<any> = new EventEmitter();

  constructor( private ele : ElementRef ) {
  }

  ngOnInit() {
    this.choiceEle = new Choices(this.ele.nativeElement, {
      placeholderValue: 'Search...',
      callbackOnChange: this.callbackOnChange.bind(this)
    });
    this.choiceEle.setChoices(this.choicesConfig, 'value', 'label');
  }

  /**
   * When the input value change notify the model about the value
   */
  private callbackOnChange() {
    this.propagateChange(this.choiceEle.getValue());
    this.onChange.emit(this.choiceEle.getValue());
  }

  /**
   * Bind the value from the model to the view
   * this function called on init
   * @param obj
   */
  writeValue( obj : any ) : void {
    this.choiceEle.setValueByChoice(obj.value);
    this.selected = obj;
  }

  /**
   * Method that registers a handler that should be called when something in the view has changed
   * @param fn
   */
  registerOnChange( fn : any ) : void {
    this.propagateChange = fn;
  }

  /**
   * Similiar to registerOnChange(), this registers a handler specifically for when a control
   * receives a touch event. We don’t need that in our custom control.
   * @param fn
   */
  registerOnTouched( fn : any ) : void {
  }

}
