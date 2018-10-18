import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.css']
})
export class ParametersComponent implements OnInit {

  paramId:any;

  constructor(private _route: ActivatedRoute, private _router: Router) {}

  ngOnInit() {
    this._route.params.subscribe((params:Params)=>{ 
      this.paramId =  params['id'];
    });
  }

  clickHome() {
    this._router.navigate(['/index/home']);
  }

}
