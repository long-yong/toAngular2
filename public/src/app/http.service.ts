
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient){ }

  allPro() {
    return this._http.get('/allpro');
  }

  onePro(id:any) {
    return this._http.get('/onepro/'+id);
  }

  newPro(body:any) {
    return this._http.post('/newpro', body);
  }

  upPro(id:any,body:any) {
    return this._http.post('/uppro/'+id, body);
  }

  delPro(id:any) {
    return this._http.get('/delpro/'+id);
  }

}
