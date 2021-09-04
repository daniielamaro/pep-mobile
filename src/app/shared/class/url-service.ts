import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable()
export class UrlService {

  static BACKEND_URL = 'http://localhost:54439';

   private header: any;
   private TOKEN = "";

    constructor(private router: Router, private storage: StorageService, private http: HttpClient) {
      this.storage.get("token").then(resp => {
        this.TOKEN = resp;
      });
    }

   getHeaders() {
      this.header = {
         headers: new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Authorization', 'BEARER ' + this.TOKEN)
      };

      return this.header;
   }

   sendRequestPost(url: string, body: string = ""){
      return this.http.post(UrlService.BACKEND_URL+url, body, this.getHeaders());
   }
}
