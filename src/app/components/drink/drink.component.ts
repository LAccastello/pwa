import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.css']
})
export class DrinkComponent implements OnInit {

  name: string;
  drink: any = '';
  ENDPOINT = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  constructor(private activeRoute: ActivatedRoute,
    private http: HttpClient,
    private location: Location) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.name = params['name'];
      this.http.get(this.ENDPOINT + this.name)
      .subscribe((rs: any) => {
        console.log(rs);
        this.drink = rs.drinks[0];
      });
    });
  }

  goBack() {
    this.location.back();
  }

}
