import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkComponent } from './drink.component';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { ActivatedRoute } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { Location, LocationStrategy, PathLocationStrategy, APP_BASE_HREF } from '@angular/common';

describe('DrinkComponent', () => {
  let component: DrinkComponent;
  let fixture: ComponentFixture<DrinkComponent>;
  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkComponent ],
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
         { provide: APP_BASE_HREF, useValue: '/my/app'}
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(DrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
