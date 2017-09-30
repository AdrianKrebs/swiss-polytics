import { TestBed, inject } from '@angular/core/testing';

import { SentimentsTransformerService } from './sentiments-transformer.service';

describe('SentimentsTransformerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SentimentsTransformerService],
    });
  });

  it('should be created', inject([SentimentsTransformerService], (service: SentimentsTransformerService) => {
    expect(service).toBeTruthy();
  }));
});
