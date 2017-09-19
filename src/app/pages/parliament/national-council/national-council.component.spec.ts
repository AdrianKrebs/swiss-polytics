import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalCouncilComponent } from './national-council.component';

describe('NationalCouncilComponent', () => {
  let component: NationalCouncilComponent;
  let fixture: ComponentFixture<NationalCouncilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NationalCouncilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalCouncilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
