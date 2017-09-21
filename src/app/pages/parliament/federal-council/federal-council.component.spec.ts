import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FederalCouncilComponent } from './federal-council.component';

describe('FederalCouncilComponent', () => {
  let component: FederalCouncilComponent;
  let fixture: ComponentFixture<FederalCouncilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FederalCouncilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FederalCouncilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
