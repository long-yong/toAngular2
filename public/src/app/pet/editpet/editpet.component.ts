/*
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-editpet',
  templateUrl: './editpet.component.html',
  styleUrls: ['./editpet.component.css']
})
export class EditpetComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
}
*/

/*
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-editpet',
  templateUrl: './editpet.component.html',
  styleUrls: ['./editpet.component.css']
})

export class EditpetComponent implements OnInit {

  formBody: any;
  formErr:  any;
  
  constructor(private _httpService:HttpService,private _route:ActivatedRoute,private _router:Router){}
  notErr(err:any) { if(err==undefined||err==null) return true; return false;  }
  clearObj()      {  }

  clearFormErr()  { 
    this.formErr=null;
    this.formBody = { };
  }
  
  ngOnInit() {
    this.clearFormErr();
    this.clearObj();
  }

  onSubmitNew() {
    this.newObj(this.formBody);
  }

  newObj(body){
    let obs = this._httpService.newPet(body);
    obs.subscribe(data => {
      this.clearFormErr();
      this.formErr = data['errArr'];
        if(this.notErr(this.formErr)) {
        this._router.navigate(['/pet']);
        }
    });
  }

}

*/



import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-editpet',
  templateUrl: './editpet.component.html',
  styleUrls: ['./editpet.component.css']
})

export class EditpetComponent implements OnInit {

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
    this.editObj(this.curId,this.formBody);
  }
  
  editObj(id:any,body:any) {
    let obs = this._httpService.upPet(id,body);
    obs.subscribe(data => {
      // this.clearFormErr();
      this.formErr = data['errArr'];
        if(this.notErr(this.formErr)) {
          this._router.navigate(['/pet']);
        }
    });
  }

  clickCancel() {
    this._router.navigate(['/pet']);
  }

}
  
