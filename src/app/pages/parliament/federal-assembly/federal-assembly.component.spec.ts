import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FederalAssemblyComponent } from './federal-assembly.component';

xdescribe('FederalAssemblyComponent', () => {
  let component: FederalAssemblyComponent;
  let fixture: ComponentFixture<FederalAssemblyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FederalAssemblyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FederalAssemblyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
