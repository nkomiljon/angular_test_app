import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserbuttonComponent } from './update-userbutton.component';

describe('UpdateUserbuttonComponent', () => {
  let component: UpdateUserbuttonComponent;
  let fixture: ComponentFixture<UpdateUserbuttonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateUserbuttonComponent]
    });
    fixture = TestBed.createComponent(UpdateUserbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
