import { TestBed, inject } from "@angular/core/testing";

import { DrinksService } from "./drinks.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { Observable } from "rxjs";
import { HttpClientModule, HttpRequest } from "@angular/common/http";

describe("DrinksService", () => {
  let service: DrinksService;
  let backend: HttpTestingController;

  const expectedData = {
    strCategory: "Ordinary Drink"
  };

  const expectedDataAll = [
    {
      strCategory: "Ordinary Drink"
    },
    {
      strCategory: "Cocktail"
    }
  ]

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [DrinksService]
    });

    backend = TestBed.get(HttpTestingController);
    service = TestBed.get(DrinksService);
  });

  afterEach(inject([ HttpTestingController ], (_backend: HttpTestingController) => {
    _backend.verify();
  }));

  test("should be created", inject(
    [DrinksService],
    (service: DrinksService) => {
      expect(service).toBeTruthy();
    }
  ));

  test('Debe llamar al GET de categorías y devolver resultados', () => {
    let actualDataAll = {};

    service.getCategorias().subscribe(data => actualDataAll = data);

    backend.expectOne((req: HttpRequest<any>) => {
      return req.url === 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
        && req.method === 'GET';
    }, `GET todas las categorías desde https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`)
      .flush(expectedDataAll);

    expect(actualDataAll).toEqual(expectedDataAll);
  })
});
