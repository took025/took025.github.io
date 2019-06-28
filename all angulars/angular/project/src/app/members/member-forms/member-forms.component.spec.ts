import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberFormsComponent } from './member-forms.component';

describe('MemberFormsComponent', () => {
  let component: MemberFormsComponent;
  let fixture: ComponentFixture<MemberFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
