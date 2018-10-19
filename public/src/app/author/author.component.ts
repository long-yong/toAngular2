import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})

export class AuthorComponent implements OnInit {

  allObj: any;

  constructor(private _httpService:HttpService,private _route:ActivatedRoute,private _router:Router){}
  clearObj()  { this.allObj=null;  }
  
  ngOnInit()  { 
    this.clearObj();
    this.getAll(); 
  }

  getAll() {
    let obs = this._httpService.allAuthor();
    obs.subscribe(data => {
      this.allObj = data['allObj'];
    });
  }

  clickView(id:any) {
    this._router.navigate(['/author/quotes/'+id]);
  }

  clickEdit(id:any) {
    this._router.navigate(['/author/editauthor/'+id]);
  }

  clickDel(id:any) {
    let obs = this._httpService.delAuthor(id);
    obs.subscribe(data => {
      this.allObj = data['allObj'];
    });
  }

}

