import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-editauthor',
  templateUrl: './editauthor.component.html',
  styleUrls: ['./editauthor.component.css']
})

export class EditauthorComponent implements OnInit {

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
    let obs = this._httpService.oneAuthor(id);
    obs.subscribe(data => {
      this.formBody = data['oneObj'];
    });
  }

  onSubmitEdit() {
    this.editObj(this.curId,this.formBody);
  }
  
  editObj(id:any,body:any) {
    let obs = this._httpService.upAuthor(id,body);
    obs.subscribe(data => {
      this.clearFormErr();
      this.formErr = data['errArr'];
        if(this.notErr(this.formErr)) {
          this._router.navigate(['/author']);
        }
    });
  }

}
  
