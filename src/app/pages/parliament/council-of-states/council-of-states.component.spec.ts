import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouncilOfStatesComponent } from './council-of-states.component';

describe('CouncilOfStatesComponent', () => {
  let component: CouncilOfStatesComponent;
  let fixture: ComponentFixture<CouncilOfStatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouncilOfStatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouncilOfStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
