import { TestBed, inject } from '@angular/core/testing';

import { PacienteDataService } from './paciente-data.service';

describe('PacienteDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PacienteDataService]
    });
  });

  it('should be created', inject([PacienteDataService], (service: PacienteDataService) => {
    expect(service).toBeTruthy();
  }));
});
