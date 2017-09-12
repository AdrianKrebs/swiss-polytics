import { TestBed, inject } from '@angular/core/testing';

import { MentionsService } from './mentions.service';

describe('MentionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MentionsService]
    });
  });

  it('should be created', inject([MentionsService], (service: MentionsService) => {
    expect(service).toBeTruthy();
  }));
});
