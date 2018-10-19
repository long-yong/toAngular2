
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient){ }

  // product
  allPro()                { return this._http.get('/allpro');            }
  onePro(id:any)          { return this._http.get('/onepro/'+id);        }
  newPro(body:any)        { return this._http.post('/newpro',    body);  }
  upPro(id:any,body:any)  { return this._http.post('/uppro/'+id, body);  }
  delPro(id:any)          {  return this._http.get('/delpro/'+id);       }

  // author
  allAuthor()                { return this._http.get('/allauthor');            }
  oneAuthor(id:any)          { return this._http.get('/oneauthor/'+id);        }
  newAuthor(body:any)        { return this._http.post('/newauthor',    body);  }
  upAuthor(id:any,body:any)  { return this._http.post('/upauthor/'+id, body);  }
  delAuthor(id:any)          { return this._http.get('/delauthor/'+id);        }
  addQuote(id:any,body:any)  { return this._http.post('/addquote/'+id, body);  }
  delQuote(id,quote)         { return this._http.post('/delquote/'+id, quote); }

  // product
  allPet()                { return this._http.get('/allpet');            }
  onePet(id:any)          { return this._http.get('/onepet/'+id);        }
  newPet(body:any)        { return this._http.post('/newpet',    body);  }
  upPet(id:any,body:any)  { return this._http.post('/uppet/'+id, body);  }
  delPet(id:any)          { return this._http.get('/delpet/'+id);        } 
  allPetSorted()          { return this._http.get('/allpetsorted');      }

}
