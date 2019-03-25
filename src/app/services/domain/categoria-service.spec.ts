import { TestBed } from '@angular/core/testing';

import { CategoriaService } from './categoria-service';

describe('CategoriaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoriaService = TestBed.get(CategoriaService);
    expect(service).toBeTruthy();
  });
});
