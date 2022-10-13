import { Test, TestingModule } from '@nestjs/testing';
import { ComerClientXEventService } from './comer-clientsxevent.service';

describe('ComerClientXEventService', () => {
  let service: ComerClientXEventService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComerClientXEventService],
    }).compile();

    service = module.get<ComerClientXEventService>(ComerClientXEventService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
