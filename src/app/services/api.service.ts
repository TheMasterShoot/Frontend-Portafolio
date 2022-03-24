import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { ProjectI } from "../models/projects";

@Injectable()
export class apiService {
    public url:string = "http://localhost:3700/api/"

    constructor(private _http: HttpClient){}

    saveProject(project: ProjectI): Observable<any>{
        let params = JSON.stringify(project);
        let headers = new HttpHeaders().set('Content Type','application/json');
    
        return this._http.post(this.url+'save-project', params, {headers: headers});
      }
}