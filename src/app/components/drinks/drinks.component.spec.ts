import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinksComponent } from './drinks.component';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { ActivatedRoute } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('DrinksComponent', () => {
  let component: DrinksComponent;
  let fixture: ComponentFixture<DrinksComponent>;
  let activatedRoute = null;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinksComponent ],
      imports: [
        MaterialModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({id: 123})
          }
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    activatedRoute = new ActivatedRoute();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
