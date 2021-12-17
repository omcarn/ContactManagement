import { TestBed, inject } from '@angular/core/testing';

import { ManageContactService } from './manage-contact.service';

describe('ManageContactService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManageContactService]
    });
  });

  it('should be created', inject([ManageContactService], (service: ManageContactService) => {
    expect(service).toBeTruthy();
  }));
});
