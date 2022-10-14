import { Module } from '@nestjs/common';
import { ComerClientsRepresentativeController } from './comer-clients-representative.controller';
import { ComerClientsRepresentativeService } from './comer-clients-representative.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  controllers: [ComerClientsRepresentativeController],
  providers: [ComerClientsRepresentativeService],
  imports: [
    ClientsModule.register([
      {
        name: 'COMER_CUSTOMERS_REPRESENTATIVE',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 3001,
        },
      }
    ]),
  ],
})

export class ComerClientsRepresentativeModule { }
