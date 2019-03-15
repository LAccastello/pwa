import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {

  ENDPOINT = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=';
  drinks: any;
  category: string;
  constructor(private activeRoute: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private location: Location) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.category = params['category'];
      console.log('category', this.category);
      this.http.get(this.ENDPOINT + this.category).subscribe((rs: any) => {
        console.log(rs);
        this.drinks = rs.drinks;
      });
    });
  }

  buscar(drink): void {
    console.log(drink);
    this.router.navigate(['drink', drink.strDrink]);
  }

  goBack() {
    this.location.back();
  }

}
