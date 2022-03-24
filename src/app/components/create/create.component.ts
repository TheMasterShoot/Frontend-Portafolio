import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectI } from 'src/app/models/projects';
import { apiService } from 'src/app/services/api.service';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [apiService, UploadService]
})
export class CreateComponent implements OnInit {

  public title: string;
  public project: ProjectI;
  public status: string;
  public filesToUpload: Array<File>;

  constructor(private _apiService: apiService, private _uploadService: UploadService) {
    this.title = "Crear proyecto";
    this.project = new ProjectI('','','','',2022,'','');
    this.status = "";
    this.filesToUpload = [];
   }

  ngOnInit(): void {
  }

  onSubmit(form: any){
   
    this._apiService.saveProject(this.project).subscribe(
      response => {
        if(response.project){
          this.status = 'success';

          this._uploadService.makeFileRequest("http://localhost:3700/api/"+"upload-image/"+response.project._id, [], this.filesToUpload, 'image').then((result: any) => {
            console.log(result);
          });

          form.reset();
        } else {
          this.status = 'failed';
        }
      },
      error => {
      console.log(<any>error);
      }
    );
  }

  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }


}
