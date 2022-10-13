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
import { ComerClientsRepresentativeDto } from './dto/comer-clients-representative.dto'
import { ComerClientsRepresentativeService } from './comer-clients-representative.service'
import { PaginationDto } from '../shared/pagination.dto'

@ApiCreatedResponse()
@Controller('comer-clients-representative')
@ApiTags('comer-clients-representative')
export class ComerClientsRepresentativeController {
    constructor(private readonly comerClientService: ComerClientsRepresentativeService) {

    }
    @ApiOperation({ summary: 'Listado de comer clientes representante por nombre' })
    @ApiResponse({
        status: 200,
        description: 'Listado de comer clientes representante',
        type: ComerClientsRepresentativeDto,
    })
    @ApiParam({
        name: 'nameClientRepresentative',
        type: String,
        description: 'Nombre del comer cliente representante',
        required: true
    })
    @Get(':nameClientRepresentative')
    async getComerClientRepresentativeByName(@Param('nameClientRepresentative') name: string, @Query() pagination: PaginationDto) {
        return this.comerClientService.getComerClientRepresentativeByName(name, pagination)
    }

    @ApiOperation({ summary: 'Listado de comer clientes representante por id' })
    @ApiResponse({
        status: 200,
        description: 'Listado de comer clientes representante',
        type: ComerClientsRepresentativeDto
    })
    @ApiParam({
        name: 'idClientRepresentative',
        type: Number,
        description: 'Clave del comer cliente representante'
    })
    @Get('idclientrepresentative/:idclientrepresentative')
    async getComerClientRepresentativeById(@Param('idclientrepresentative') idClientRepresentative: number) {
        return this.comerClientService.getComerClientRepresentativeById(idClientRepresentative)
    }

    @ApiOperation({ summary: 'Guardar nuevo comer clientes representante' })
    @ApiBody({ type: ComerClientsRepresentativeDto })
    @ApiResponse({
        status: 200,
        description: 'Comer clientes representante guardado',
        type: ComerClientsRepresentativeDto,
    })
    @Post('postClientRepresentative')

    async createComerClientRepresentative(@Body() createComerClientRepresentative: ComerClientsRepresentativeDto) {
        
        const nameResult = await this.comerClientService.createComerClientRepresentative(createComerClientRepresentative)
        return nameResult ? nameResult :
        { statusCode: 503, message: "Este Comer cliente representante no fue creado", error: "Create Error"};
    }
    
    @ApiOperation({ summary: 'Actualizar comer clientes representante'})
    @ApiBody({ type: ComerClientsRepresentativeDto})
    @ApiParam({ name: 'id', type: Number})
    @ApiResponse({
        status: 200,
        description: 'Comer clientes representante actualizado',
        type: ComerClientsRepresentativeDto,
    })
    @Put(':id')
    async updateComerClient(@Body() updateComerClientRepresentative: ComerClientsRepresentativeDto, @Param() id: number) {
        const result = await this.comerClientService.updateComerClientRepresentative(id, updateComerClientRepresentative);
        return result 
        ? result
        : { statusCode: '404', message: 'idRepresentative not found', error: "Not found" };
    }

    @ApiOperation({ summary: 'Eliminar comer clientes representante'})
    @ApiParam({ name: 'id', type: Number})
    @ApiResponse({
        status: 200,
        description: 'Comer clientes representante eliminado',
        type: ComerClientsRepresentativeDto
    })
    @Delete(':id')
    async deleteComerClientRepresentative(@Param('id') id: number) {
        const result = await this.comerClientService.deleteComerClientRepresentative(id);
        return result 
        ? result
        : { statusCode: '404', message: 'idRepresentative not found', error: "Not found" };
    }
}
