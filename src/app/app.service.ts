import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
  import "rxjs/add/operator/map";

@Injectable()
export class AppService {
  base_url: string = "http://xyz.com/api/";
  resources_endpoint = "resources";
  constructor(private http: Http) {}

  getTasks() {
    return this.http
      .get(this.base_url + this.resources_endpoint)
      .map(res => res.json());
  }

  createTask(resource) {
    return this.http
      .post(this.base_url + this.resources_endpoint, resource)
      .map(res => res.json());
  }

  updateTask(update) {
    return this.http
      .put(this.base_url + this.resources_endpoint, update)
      .map(res => res.json());
  }

  deleteTask(resourceId) {
    return this.http
      .delete(`${this.base_url + this.resources_endpoint}/${resourceId}`)
      .map(res => res.json());
  }
}
