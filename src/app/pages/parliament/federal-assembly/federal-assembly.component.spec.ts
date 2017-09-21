import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitedFederalAssemblyComponent } from './united-federal-assembly.component';

describe('UnitedFederalAssemblyComponent', () => {
  let component: UnitedFederalAssemblyComponent;
  let fixture: ComponentFixture<UnitedFederalAssemblyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitedFederalAssemblyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitedFederalAssemblyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
