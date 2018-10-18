import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-productnew',
  templateUrl: './productnew.component.html',
  styleUrls: ['./productnew.component.css']
})

export class ProductnewComponent implements OnInit {

    allObj:   any;
    curObj:   any;
    formBody: any;
    formErr:  any;
    
    constructor(private _httpService:HttpService,private _route:ActivatedRoute,private _router:Router){}
    notErr(err:any) { if(err==undefined||err==null) return true; return false;  }
    clearFormErr()  { this.formErr=null;  this.formBody = { title:"", price:0, url:"" }; }
    clearObj()      { this.curObj=null;  this.allObj=null;  }
    
    ngOnInit() {
      this.clearFormErr();
      this.clearObj();
    }
  
    getAll() {
      let obs = this._httpService.allPro();
      obs.subscribe(data => {
        this.allObj = data['allPro'];
      });
    }

    getOne(id:any) {
      let obs = this._httpService.onePro(id);
      obs.subscribe(data => {
        this.curObj = data['onePro'];
      });
    }
  
    onSubmitNew() {
      this.newObj(this.formBody);
    }
  
    newObj(body){
      let obs = this._httpService.newPro(body);
      obs.subscribe(data => {
        this.clearFormErr();
        this.formErr = data['errArr'];
         if(this.notErr(this.formErr)) {
          this._router.navigate(['/product/all']);
         }
      });
    }

  }
  