import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListclubComponent } from './listclub.component';

describe('ListclubComponent', () => {
  let component: ListclubComponent;
  let fixture: ComponentFixture<ListclubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListclubComponent]
    });
    fixture = TestBed.createComponent(ListclubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
