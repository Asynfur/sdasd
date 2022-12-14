import { Injectable, Inject } from '@nestjs/common';
import { ComerClientDto } from './dto/comer-clients.dto'
import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from '../shared/pagination.dto';

@Injectable()
export class ComerClientService {
    constructor(
        @Inject('COMER_CUSTOMERS') private readonly comerClient: ClientProxy,
    ) { }
    
    async findAllComerClientId(pagination: PaginationDto) {
        const pattern = { cmd: 'findAllComerClientId' };
        return this.comerClient.send(pattern, pagination);
    }

    async getComerClientByName(name, pagination: PaginationDto){
        const pattern = { cmd: 'getComerClientByName' };
        const {inicio, pageSize} = pagination;
        const data = {name, inicio, pageSize}
        return this.comerClient.send(pattern, data);
    }
    
    async getComerClientById(id) {
        const pattern = { cmd: 'getComerClientById' };
        return this.comerClient.send(pattern, id);
    }
    async createComerClient(createComerClient: ComerClientDto) {
        const pattern = { cmd: 'createComerClient' };
        return this.comerClient.send(pattern, createComerClient);
    }

    async updateComerClient(id: number, params) {
        const pattern = { cmd: 'updateComerClient' };
        const data = {
            params, id
        }
        return this.comerClient.send(pattern, data);
    }

    async deleteComerClient(id){
        const pattern = { cmd: 'deleteComerClient' };
        return this.comerClient.send(pattern, id);
    }
}
