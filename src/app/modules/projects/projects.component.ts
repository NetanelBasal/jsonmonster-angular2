import { Component, OnInit } from '@angular/core';
import { CreateApiService } from "../create-api/create-api.service";
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-projects',
  templateUrl: 'projects.component.html',
  styleUrls: ['projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects = [];
  baseUrl = `${environment.BASE_URL}/api/v1/project`;

  constructor( private createApiService : CreateApiService ) {
    this.createApiService.getProjects().subscribe(res => {
      this.projects = res.json().projects;
    });

  }

  ngOnInit() {
  }

}
