import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchdetailsComponent } from './matchdetails.component';

describe('MatchdetailsComponent', () => {
  let component: MatchdetailsComponent;
  let fixture: ComponentFixture<MatchdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatchdetailsComponent]
    });
    fixture = TestBed.createComponent(MatchdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
