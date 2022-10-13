import { Injectable, Inject } from '@nestjs/common';
import { ComerClientsRepresentativeDto } from './dto/comer-clients-representative.dto'
import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from '../shared/pagination.dto';

@Injectable()
export class ComerClientsRepresentativeService {
    constructor(
        @Inject('COMER_CLIENTES_REPRESENTANTE') private readonly comerClient: ClientProxy,
    ) { }

    async getComerClientRepresentativeByName(name, pagination: PaginationDto){
        const pattern = { cmd: 'getComerClientRepresentativeByName' };
        const {inicio, pageSize} = pagination;
        const data = {name, inicio, pageSize}
        return this.comerClient.send(pattern, data);
    }

    async getComerClientRepresentativeById(idClientRepresentative) {
        const pattern = { cmd: 'getComerClientRepresentativeById' };
        const data = idClientRepresentative
        return this.comerClient.send(pattern, data);
    }
    async createComerClientRepresentative(createComerClientRepresentative: ComerClientsRepresentativeDto) {
        const pattern = { cmd: 'createComerClientRepresentative' };
        return this.comerClient.send(pattern, createComerClientRepresentative);
    }
    async updateComerClientRepresentative(id: number, params) {
        const pattern = { cmd: 'updateComerClientRepresentative' };
        const data = {
            params, id
        }
        return this.comerClient.send(pattern, data);
    }
    async deleteComerClientRepresentative(id){
        const pattern = { cmd: 'deleteComerClientRepresentative' };
        return this.comerClient.send(pattern, id);
    }
    
    
}
