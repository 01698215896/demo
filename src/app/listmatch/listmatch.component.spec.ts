import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmatchComponent } from './listmatch.component';

describe('ListmatchComponent', () => {
  let component: ListmatchComponent;
  let fixture: ComponentFixture<ListmatchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListmatchComponent]
    });
    fixture = TestBed.createComponent(ListmatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
