import {Injectable} from '@angular/core';
import {HttpClient, HttpRequest, HttpEvent, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import { BASE_URL } from './base-url';
import {RequestOptions, Request, RequestMethod} from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(private http: HttpClient) { }

  pushFileToStorage(file: File,userId:any,investigationId:any,investigationDate:any,investigationName:any): Observable<HttpEvent<{}>> {
    debugger;
    let formData:FormData = new FormData();
    formData.append('file',file,file.name);
    
    const paramseters = new HttpParams();
    formData.append('user_id', userId);
    formData.set('invs_id', investigationId);
    formData.set('invs_date', investigationDate);
    formData.set('invs_name',investigationName)
    
    const req = new HttpRequest('POST', BASE_URL+'user/upload-multi-file-new1', formData);

    return this.http.request(req);
  }

  imgipload(file: File,userId:any,investigationId:any,investigationDate:any,investigationName:any): Observable<HttpEvent<{}>> {
    debugger;
    let formData:FormData = new FormData();
    formData.append('file',file,file.name);
    
    const paramseters = new HttpParams();
    formData.append('user_id', userId);
    formData.set('invs_id', investigationId);
    formData.set('invs_date', investigationDate);
    formData.set('invs_name',investigationName)
    
    const req = new HttpRequest('POST', BASE_URL+'user/uploadProfileImage', formData);
    
    return this.http.request(req);
    }
}

