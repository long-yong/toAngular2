import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-productnew',
  templateUrl: './productnew.component.html',
  styleUrls: ['./productnew.component.css']
})

export class ProductnewComponent implements OnInit {

    formBody: any;
    formErr:  any;
    
    constructor(private _httpService:HttpService,private _route:ActivatedRoute,private _router:Router){}
    notErr(err:any) { if(err==undefined||err==null) return true; return false;  }
    clearObj()      {  }

    clearFormErr()  { 
      this.formErr=null;  
      this.formBody = { title:"", price:0, url:"" }; 
    }
    
    ngOnInit() {
      this.clearFormErr();
      this.clearObj();
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
  