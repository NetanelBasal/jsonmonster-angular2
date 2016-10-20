import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";
import { columnsType, normalizeForSelect } from './columns-type';
import CreateApiActions from "../../data/create-api/create-api.actions";
import { select } from "ng2-redux";
import { Observable } from "rxjs";

@Component({
  selector: 'app-create-api',
  templateUrl: 'create-api.component.html',
  styleUrls: ['create-api.component.scss']
})
export class CreateApiComponent {
  apiForm : FormGroup;
  columns : FormArray
  submitted : boolean = false;
  columnsType : Array<Object>;
  @select(["createApi", "fetching"]) showSpinner$ : Observable<boolean>;

  constructor( public fb : FormBuilder, public createApiActions : CreateApiActions ) {
    this.columnsType = normalizeForSelect();
    this.apiForm = this.fb.group({
      projectName: ["", Validators.required],
      tableName: ["", Validators.required],
      numRows: [20, Validators.compose([Validators.required, Validators.maxLength(2)])],
      columns: this.buildColumns()
    });

  }

  /**
   * add column
   */
  public addColumn() {
    this.submitted = false;
    this.columns.push(this.buildColumn());
  }

  /**
   * build the columns structure
   * @returns {FormArray}
   */
  private buildColumns() : FormArray {
    this.columns = this.fb.array([
      this.buildColumn()
    ]);
    return this.columns;
  }

  /**
   * build column structure
   * @returns {FormGroup}
   */
  private buildColumn() : FormGroup {
    return this.fb.group({
      columnSchema: ["", Validators.required],
      name: ["", Validators.required]
    });
  }

  /**
   * Find the group and set on the control for the server
   * @param $event - the selected object
   */
  onChoiceChange( $event ) {
    let model = columnsType.filter(c => c.modelName === $event.value)[0];
    $event.group = model.group;
  }

  /**
   *
   * @param column
   */
  removeColumn( column : FormGroup ) {
    const index = this.columns.controls.indexOf(column);
    this.columns.controls.splice(index, 1);
  }

  /**
   *
   * @param form
   */
  submit( form : FormGroup ) {
    this.submitted = true;
    if( form.invalid ) return;
    this.createApiActions.createApi(form.value);
  }

}
