import { TestBed, inject } from '@angular/core/testing';

import { FederalAssemblyService } from './federal-assembly.service';

describe('FederalAssemblyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FederalAssemblyService]
    });
  });

  it('should be created', inject([FederalAssemblyService], (service: FederalAssemblyService) => {
    expect(service).toBeTruthy();
  }));
});
