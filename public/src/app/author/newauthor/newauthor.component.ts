/*
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newauthor',
  templateUrl: './newauthor.component.html',
  styleUrls: ['./newauthor.component.css']
})
export class NewauthorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
*/


import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-newauthor',
  templateUrl: './newauthor.component.html',
  styleUrls: ['./newauthor.component.css']
})

export class NewauthorComponent implements OnInit {

    formBody: any;
    formErr:  any;
    
    constructor(private _httpService:HttpService,private _route:ActivatedRoute,private _router:Router){}
    notErr(err:any) { if(err==undefined||err==null) return true; return false;  }
    clearObj()      {  }

    clearFormErr()  { 
      this.formErr=null;  
      this.formBody = { naem:''}; 
    }
    
    ngOnInit() {
      this.clearFormErr();
      this.clearObj();
    }
  
    onSubmitNew() {
      this.newObj(this.formBody);
    }
  
    newObj(body){
      let obs = this._httpService.newAuthor(body);
      obs.subscribe(data => {
        this.clearFormErr();
        this.formErr = data['errArr'];
         if(this.notErr(this.formErr)) {
          this._router.navigate(['/author']);
         }
      });
    }

  }
