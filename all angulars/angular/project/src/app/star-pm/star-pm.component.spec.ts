import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarPmComponent } from './star-pm.component';

describe('StarPmComponent', () => {
  let component: StarPmComponent;
  let fixture: ComponentFixture<StarPmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarPmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarPmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
