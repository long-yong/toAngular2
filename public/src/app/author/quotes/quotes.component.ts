import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})

export class QuotesComponent implements OnInit {

  curId: string;
  curObj: any;

  constructor(private _httpService:HttpService,private _route:ActivatedRoute,private _router:Router){}
  
  clear_obj() {
    this.curObj={quotes:null};
  }

  ngOnInit() {
    this.clear_obj();
    this._route.params.subscribe((params:Params)=>{
      this.curId =  params['id'];
      this.getOne(this.curId);
    });
  }

  getOne(id:string) {
    let obs = this._httpService.oneAuthor(id);
    obs.subscribe(data => {
      this.curObj = data['oneObj'];
    });
  }

  clickNewQuote() {
    this._router.navigate(['/author/newquote/'+this.curId]);
  }

  clickDel(quote) {
    let obs = this._httpService.delQuote(this.curId,quote);
      obs.subscribe(data => {
        this.getOne(this.curId);
    });
  }

  clickVoteUp(quote) { 
  }
  
  clickVoteDn(quote) {  
  }

}
