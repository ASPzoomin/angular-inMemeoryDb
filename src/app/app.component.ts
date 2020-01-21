import { AppService } from './app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  resources: any[] = [];
  myResource: string;
  resourceEdit: string;
  editMode = false;
  loading = false;
  SearchPage: boolean;
  employeeName: string;
  isSearched: boolean;
  employeename: string;
  found: any;
  constructor(private appservice: AppService) {}

  ngOnInit() {
    this.getAllResources();
  }

  getAllResources() {
    this.appservice.getTasks().subscribe(data => {
      this.resources = data;
    });
  }

  create() {
    this.loading = true;
    const postData = {
      name: this.myResource
    };

    this.appservice.createTask(postData).subscribe(data => {
      this.loading = false;
      this.getAllResources();
    });
  }

  edit(resource) {
    this.resourceEdit = Object.assign({}, resource);
    resource.editing = true;
    this.editMode = true;
  }

  saveEdit(resource) {
    this.appservice.updateTask(this.resourceEdit).subscribe(data => {
      this.getAllResources();
      resource.editing = false;
      this.editMode = false;
    });
  }

  delete(resource) {
    this.appservice.deleteTask(resource.id).subscribe(data => {
      this.getAllResources();
    });
  }

  displaysearchedName(event) {
    if (event) {
      this.isSearched = true;
      this.found = this.resources.find(data => data.name === this.employeeName);
      if (this.found) {
        this.employeename = this.employeeName + ` is found in our PwC Database`;
      } else {
        this.employeename = this.employeeName + ` is not found in our PwC Database`;
      }
    }
  }

  clearData(event) {
    if (event) {
      this.employeename = this.employeeName = '';
    }
  }
}
