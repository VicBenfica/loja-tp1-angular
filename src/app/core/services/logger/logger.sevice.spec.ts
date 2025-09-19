import { TestBed } from '@angular/core/testing';

import { LoggerSevice } from './logger.sevice';

describe('LoggerSevice', () => {
  let service: LoggerSevice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggerSevice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
