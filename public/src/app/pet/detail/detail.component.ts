/*
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
*/



import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {

  curId:    string;
  formBody: any;
  formErr:  any;

  constructor(private _httpService:HttpService,private _route:ActivatedRoute,private _router:Router){}

  ngOnInit() {
    this.clearFormErr();
    this._route.params.subscribe((params:Params)=>{
      this.curId =  params['id'];
      this.getOne(this.curId);
    });
  }
  
  notErr(err:any) { if(err==undefined||err==null) return true; return false;  }

  clearFormErr()  { this.formErr=null;  this.formBody = { name:""}; }
  
  getOne(id:string) {
    let obs = this._httpService.onePet(id);
    obs.subscribe(data => {
      this.formBody = data['oneObj'];
    });
  }

  onSubmitEdit() {
    this.formBody.likes++;
    this.editObj(this.curId,this.formBody);
  }
  
  editObj(id:any,body:any) {
    let obs = this._httpService.upPet(id,body);
    obs.subscribe(data => {
      this.getOne(this.curId);
    });
  }

  clickCancel() {
    let obs = this._httpService.delPet(this.curId);
    obs.subscribe(data => {
      this._router.navigate(['/pet']);
    });
  }

}
  



  
