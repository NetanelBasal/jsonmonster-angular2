import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { ShowIfLoggedInDirective } from "../../directives/show-if-logged-in/show-if-logged-in";
import MaxValueValidator from "../../directives/max-value/max-value.validators";
import SpinnerComponent from "../../spinner/spinner";
import { Ng2Focus } from "ng2focus";

@NgModule({
  imports: [CommonModule],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    ShowIfLoggedInDirective,
    MaxValueValidator,
    SpinnerComponent,
    Ng2Focus
  ],
  declarations: [
    ShowIfLoggedInDirective,
    MaxValueValidator,
    SpinnerComponent,
    Ng2Focus
  ]
})
export default class SharedModule {
}
