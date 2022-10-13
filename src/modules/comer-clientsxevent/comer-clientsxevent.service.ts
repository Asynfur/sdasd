import { Injectable, Inject } from '@nestjs/common';
import { ComerClientXEventDto } from './dto/comer-clientsxevent.dto'
import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from '../shared/pagination.dto';

@Injectable()
export class ComerClientXEventService {
    constructor(
        @Inject('COMER_CLIENTESXEVENTO') private readonly comerClient: ClientProxy,
    ) { }
    async getComerClientXEventByName(name, pagination: PaginationDto){
        const pattern = { cmd: 'getComerClientXEventByName' };
        const {inicio, pageSize} = pagination;
        const data = {name, inicio, pageSize}
        return this.comerClient.send(pattern, data);
    }

    async getComerClientXEventById(idClientXEvent) {
        const pattern = { cmd: 'getComerClientXEventById' };
        const data = idClientXEvent
        return this.comerClient.send(pattern, data);
    }
    
    async createComerClientXEvent(createComerClientXEvent: ComerClientXEventDto) {
        const pattern = { cmd: 'createComerClientXEvent' };
        return this.comerClient.send(pattern, createComerClientXEvent);
    }
    async updateComerClientXEvent(id: number, params) {
        const pattern = { cmd: 'updateComerClientXEvent' };
        const data = {
            params, id
        }
        return this.comerClient.send(pattern, data);
    }
    async deleteComerClientXEvent(id){
        const pattern = { cmd: 'deleteComerClientXEvent' };
        return this.comerClient.send(pattern, id);
    }
}
