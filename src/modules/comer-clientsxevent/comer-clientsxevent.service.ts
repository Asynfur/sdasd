import { Injectable, Inject } from '@nestjs/common';
import { ComerClientXEventDto } from './dto/comer-clientsxevent.dto'
import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from '../shared/pagination.dto';

@Injectable()
export class ComerClientXEventService {
    constructor(
        @Inject('COMER_CUSTOMERSXEVENT') private readonly comerClient: ClientProxy,
    ) { }
    async findAllComerClientXEventId(pagination: PaginationDto) {
        const pattern = { cmd: 'findAllComerClientXEventId' };
        return this.comerClient.send(pattern, pagination);
    }

    async getComerClientXEventById(idClientXEvent) {
        const pattern = { cmd: 'getComerClientXEventById' };
        const data = idClientXEvent
        return await this.comerClient.send(pattern, data);
    }
    
    async createComerClientXEvent(createComerClientXEvent: ComerClientXEventDto) {
        const pattern = { cmd: 'createComerClientXEvent' };
        return await this.comerClient.send(pattern, createComerClientXEvent);
    }
    async updateComerClientXEvent(id: number, params) {
        const pattern = { cmd: 'updateComerClientXEvent' };
        const data = { params, id }
        return await this.comerClient.send(pattern, data);
    }
    async deleteComerClientXEvent(ComerClientXEvent: ComerClientXEventDto) {
        const pattern = { cmd: 'deleteComerClientXEvent' };
        return this.comerClient.send(pattern, ComerClientXEvent);
    }
}
