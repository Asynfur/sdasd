import { Test, TestingModule } from '@nestjs/testing';
import { ComerClientsRepresentativeService } from './comer-clients-representative.service';

describe('ComerClientsRepresentativeService', () => {
  let service: ComerClientsRepresentativeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComerClientsRepresentativeService],
    }).compile();

    service = module.get<ComerClientsRepresentativeService>(ComerClientsRepresentativeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
