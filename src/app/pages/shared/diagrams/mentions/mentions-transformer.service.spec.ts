import { TestBed, inject } from '@angular/core/testing';

import { MentionsTransformerService } from './mentions-transformer.service';

describe('MentionsTransformerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MentionsTransformerService]
    });
  });

  it('should be created', inject([MentionsTransformerService], (service: MentionsTransformerService) => {
    expect(service).toBeTruthy();
  }));
});
