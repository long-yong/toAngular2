
/*
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newquote',
  templateUrl: './newquote.component.html',
  styleUrls: ['./newquote.component.css']
})
export class NewquoteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
*/



import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-newquote',
  templateUrl: './newquote.component.html',
  styleUrls: ['./newquote.component.css']
})

export class NewquoteComponent implements OnInit {

  curId: string;
  curObj: any;
  formBody: any;
  formErr:  any;

  constructor(private _httpService:HttpService,private _route:ActivatedRoute,private _router:Router){}

  notErr(err:any) { if(err==undefined||err==null) return true; return false;  }

  clearFormErr()  { this.formErr=null;  this.formBody = { quote:''}; }
  
  clearObj() { this.curObj = { name:''} }

  ngOnInit() {
    this.clearFormErr();
    this.clearObj();
    this._route.params.subscribe((params:Params)=>{
      this.curId =  params['id'];
      this.getOne(this.curId);
    });
  }

  getOne(id:string) {
    let obs = this._httpService.oneAuthor(id);
    obs.subscribe(data => {
      this.curObj = data['oneObj'];
    });
  }
  
  onSubmitAdd() {
    this.addQuote(this.curId,this.formBody);
  }
  
  addQuote(id:any,body:any) {
    let obs = this._httpService.addQuote(id,body);
    obs.subscribe(data => {
      this.clearFormErr();
      this.formErr = data['errArr'];
        if(this.notErr(this.formErr)) {
          this._router.navigate(['/author/quotes/'+this.curId]);
        }
    });
  }

}
  
