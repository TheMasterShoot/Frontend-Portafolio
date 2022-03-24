import { Injectable } from "@angular/core";

@Injectable()
export class UploadService {
    public url:string = "http://localhost:3700/api/"

    constructor(){}
    makeFileRequest(url: string, params: Array<string>, files: Array<File>, name: string){
        return new Promise(function(resolve, reject){
            var formData = new FormData();
            var xhr = new XMLHttpRequest();

            for(var i = 0; i < files.length; i++){
                formData.append(name, files[i].name);
            }

            xhr.onreadystatechange =  function(){
                if(xhr.readyState == 4){
                    if(xhr.status == 200){
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            }

            xhr.open('POST', url, true);
            xhr.send(formData);
        });

    }
}