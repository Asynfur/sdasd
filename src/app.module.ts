import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComerClientModule } from './modules/comer-clients/comer-clients.module';
import { ComerClientsRepresentativeModule } from './modules/comer-clients-representative/comer-clients-representative.module';
import { ComerClientXEventModule } from './modules/comer-clientsxevent/comer-clientsxevent.module';


@Module({
  imports: [ComerClientModule, ComerClientsRepresentativeModule, ComerClientXEventModule],
  controllers: [AppController],
  providers: [AppService],
})


export class AppModule {}
