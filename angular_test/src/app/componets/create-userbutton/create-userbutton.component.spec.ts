import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserbuttonComponent } from './create-userbutton.component';

describe('CreateUserbuttonComponent', () => {
  let component: CreateUserbuttonComponent;
  let fixture: ComponentFixture<CreateUserbuttonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateUserbuttonComponent]
    });
    fixture = TestBed.createComponent(CreateUserbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
