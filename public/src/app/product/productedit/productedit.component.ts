import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-productedit',
  templateUrl: './productedit.component.html',
  styleUrls: ['./productedit.component.css']
})

export class ProducteditComponent implements OnInit {

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
  clearFormErr()  { this.formErr=null;  this.formBody = { title:"", price:0, url:"" }; }
  
  getOne(id:string) {
    let obs = this._httpService.onePro(id);
    obs.subscribe(data => {
      this.formBody = data['onePro'];
    });
  }

  onSubmitEdit() {
    this.editObj(this.curId,this.formBody);
  }
  
  editObj(id:any,body:any) {
    let obs = this._httpService.upPro(id,body);
    obs.subscribe(data => {
      this.clearFormErr();
      this.formErr = data['errArr'];
        if(this.notErr(this.formErr)) {
          this._router.navigate(['/product/all']);
        }
    });
  }

}
  