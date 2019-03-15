import { async, ComponentFixture, TestBed, ɵTestingCompilerFactory } from '@angular/core/testing';

import { CategoriesComponent } from './categories.component';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { Location, LocationStrategy, PathLocationStrategy, APP_BASE_HREF } from '@angular/common';
import { DrinksService } from 'src/app/services/drinks.service';

describe('CategoriesComponent', () => {
  let component: CategoriesComponent;
  let fixture: ComponentFixture<CategoriesComponent>;
  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesComponent ],
      imports: [
        MaterialModule,
        HttpClientTestingModule
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({id: 123})
          }
        },
        Location,
        { provide: LocationStrategy, useClass: PathLocationStrategy },
         { provide: APP_BASE_HREF, useValue: '/my/app'},
         {
          provide: Router,
          useValue: {
            params: of({id: 123})
          }
        },
        DrinksService
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(CategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('Debe devolver las categorías', () => {
    component.ngOnInit();

  });
});
