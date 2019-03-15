import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { DrinksService } from 'src/app/services/drinks.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  drinks: any;

  constructor(private http: HttpClient,
    private router: Router,
    private drinksService: DrinksService) { }

    ngOnInit() {
      this.drinksService.getCategorias().subscribe(rs => {
        console.log(rs);
        this.drinks = rs.drinks;
      });
    }

    buscar(drink: any): void {
      console.log(drink);
      this.router.navigate(['drinks', drink.strCategory]);
    }


}
