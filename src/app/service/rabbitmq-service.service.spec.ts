import { TestBed } from '@angular/core/testing';

import { RabbitmqServiceService } from './rabbitmq-service.service';

describe('RabbitmqServiceService', () => {
  let service: RabbitmqServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RabbitmqServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
