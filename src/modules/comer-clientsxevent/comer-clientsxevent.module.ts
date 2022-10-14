import { Module } from '@nestjs/common';
import { ComerClientXEventController } from './comer-clientsxevent.controller';
import { ComerClientXEventService } from './comer-clientsxevent.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  controllers: [ComerClientXEventController],
  providers: [ComerClientXEventService],
  imports: [
    ClientsModule.register([
      {
        name: 'COMER_CUSTOMERSXEVENT',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 3001,
        },
      }
    ]),
  ],
})

export class ComerClientXEventModule { }
