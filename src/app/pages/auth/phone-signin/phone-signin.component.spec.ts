import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneSigninComponent } from './phone-signin.component';

describe('PhoneSigninComponent', () => {
  let component: PhoneSigninComponent;
  let fixture: ComponentFixture<PhoneSigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneSigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
