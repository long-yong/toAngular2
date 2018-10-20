
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})

export class PetComponent implements OnInit {

  allObj: any;

  constructor(private _httpService:HttpService,private _route:ActivatedRoute,private _router:Router){}
  clearObj()  { this.allObj=null;  }
  
  ngOnInit()  { 
    this.clearObj();
    this.getAll(); 
  }

  getAll() {
    let obs = this._httpService.allPet();
    obs.subscribe(data => {
      this.allObj = data['allObj'];
    });
  }

  clickView(id:any) {
    this._router.navigate(['/pet/detail/'+id]);
  }

  clickEdit(id:any) {
    this._router.navigate(['/pet/editpet/'+id]);
  }

  clickSort() {
    let obs = this._httpService.allPetSorted();
    obs.subscribe(data => {
      this.allObj = data['allObj'];
    });
  }

}

