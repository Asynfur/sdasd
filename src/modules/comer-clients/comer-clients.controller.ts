import { Controller, Get, Put, Query, Post, Body, Param, Delete } from '@nestjs/common';
import {
    ApiBody,
    ApiCreatedResponse,
    ApiOperation,
    ApiParam,
    ApiQuery,
    ApiResponse,
    ApiTags
} from '@nestjs/swagger';
import { ComerClientDto } from './dto/comer-clients.dto'
import { ComerClientService } from './comer-clients.service'
import { PaginationDto } from '../shared/pagination.dto'

@ApiCreatedResponse()
@Controller('comer-clients')
@ApiTags('comer-clients')
export class ComerClientController {
    constructor(private readonly comerClientService: ComerClientService) {

    }

    @ApiOperation({ summary: 'Listado de comer clientes por nombre' })
    @ApiParam({
        name: 'nameClient',
        type: String,
        description: 'Nombre del comer cliente',
        required: true
    })
    @ApiResponse({
        status: 200,
        description: 'Listado de comer clientes',
        type: ComerClientDto,
    })

    @Get(':nameClient')
    async getComerClientByName(@Param('nameClient') nameClient: string, @Query() pagination: PaginationDto) {
        return this.comerClientService.getComerClientByName(nameClient, pagination)
    }

    @ApiOperation({ summary: 'Listado de comer clientes por id' })
    @ApiResponse({
        status: 200,
        description: 'Listado de comer clientes',
        type: ComerClientDto
    })
    @ApiParam({
        name: 'idClient',
        type: Number,
        description: 'Clave del comer cliente'
    })
    @Get('idclient/:idclient')
    async getComerClientById(@Param('idclient') idClient: number) {
        return this.comerClientService.getComerClientById(idClient)
    }

    @ApiOperation({ summary: 'Guardar nuevo comer clientes' })
    @ApiBody({ type: ComerClientDto })
    @ApiResponse({
        status: 200,
        description: 'Comer clientes guardado',
        type: ComerClientDto,
    })
    @Post()
    async createComerClient(@Body() createComerClient: ComerClientDto) {
        return this.comerClientService.createComerClient(createComerClient)
    }

    @ApiOperation({ summary: 'Actualizar comer clientes'})
    @ApiBody({ type: ComerClientDto})
    @ApiParam({ name: 'id', type: Number})
    @ApiResponse({
        status: 200,
        description: 'Comer clientes actualizado',
        type: ComerClientDto,
    })
    @Put(':id')
    async updateComerClient(@Body() updateComerClient: ComerClientDto, @Param() id: number) {
        const result = await this.comerClientService.updateComerClient(id, updateComerClient);
        return result 
        ? result
        : { statusCode: '404', message: 'idClient not found', error: "Not found" };
    }

    @ApiOperation({ summary: 'Eliminar comer clientes'})
    @ApiParam({ name: 'id', type: Number})
    @ApiResponse({
        status: 200,
        description: 'Comer clientes eliminado',
        type: ComerClientDto
    })
    @Delete(':id')
    async deleteComerClient(@Param('id') id: number) {
        const result = await this.comerClientService.deleteComerClient(id);
        return result 
        ? result
        : { statusCode: '404', message: 'idClient not found', error: "Not found" };
    }
}
