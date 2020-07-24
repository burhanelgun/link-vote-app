import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitALinkComponent } from './submit-a-link.component';

describe('SubmitALinkComponent', () => {
  let component: SubmitALinkComponent;
  let fixture: ComponentFixture<SubmitALinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitALinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitALinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
