import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class DrinksService {
  ENDPOINT_categorias =
    "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";

  constructor(private http: HttpClient) {}

  getCategorias(): Observable<any> {
    return this.http.get(this.ENDPOINT_categorias);
  }
}
