import { Test, TestingModule } from '@nestjs/testing';
import { ComerClientsRepresentativeController } from './comer-clients-representative.controller';

describe('ComerClientsRepresentativeController', () => {
  let controller: ComerClientsRepresentativeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComerClientsRepresentativeController],
    }).compile();

    controller = module.get<ComerClientsRepresentativeController>(ComerClientsRepresentativeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
