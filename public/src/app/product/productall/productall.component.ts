import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-productall',
  templateUrl: './productall.component.html',
  styleUrls: ['./productall.component.css']
})

export class ProductallComponent implements OnInit {

  allObj: any;

  constructor(private _httpService:HttpService,private _route:ActivatedRoute,private _router:Router){}
  clearObj()  { this.allObj=null;  }
  
  ngOnInit()  { 
    this.clearObj(); 
    this.getAll(); 
  }

  getAll() {
    let obs = this._httpService.allPro();
    obs.subscribe(data => {
      this.allObj = data['allPro'];
    });
  }

  clickEdit(id:any) {
    this._router.navigate(['/product/edit/'+id]);
  }

  clickDel(id:any) {
    let obs = this._httpService.delPro(id);
    obs.subscribe(data => {
      this.allObj = data['allPro'];
    });
  }

}
