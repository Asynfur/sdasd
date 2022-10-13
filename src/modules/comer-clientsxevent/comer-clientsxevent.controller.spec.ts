import { Test, TestingModule } from '@nestjs/testing';
import { ComerClientXEventController } from './comer-clientsxevent.controller';

describe('ComerClientXEventController', () => {
  let controller: ComerClientXEventController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComerClientXEventController],
    }).compile();

    controller = module.get<ComerClientXEventController>(ComerClientXEventController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
