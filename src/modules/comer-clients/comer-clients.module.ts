import { Module } from '@nestjs/common';
import { ComerClientController } from './comer-clients.controller';
import { ComerClientService } from './comer-clients.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  controllers: [ComerClientController],
  providers: [ComerClientService],
  imports: [
    ClientsModule.register([
      {
        name: 'COMER_CUSTOMERS',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 3001,
        },
      }
    ]),
  ],
})

export class ComerClientModule { }
