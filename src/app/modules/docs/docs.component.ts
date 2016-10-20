import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-docs',
  templateUrl: 'docs.component.html',
  styleUrls: ['docs.component.scss']
})
export class DocsComponent implements OnInit {
  baseUrl = `${environment.BASE_URL}/api/v1/project`;

  constructor() {
  }

  ngOnInit() {
  }

}
