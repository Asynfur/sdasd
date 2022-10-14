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
    @ApiOperation({ summary: 'Listado de comer clientes representante' })
    @ApiQuery({ 
      name:"inicio", 
      description:'Número de página', 
      type:Number 
    }) 
    @ApiQuery({ 
      name:"pageSize", 
      description:'Cantidad de registros por página', 
      type:Number 
    }) 
   @ApiQuery({ 
      name:"text", 
      description:'Texto a buscar', 
      required:false, 
      type:String 
    })
    @ApiResponse({
        status: 200,
        description: 'Listado de documentos',
        type: ComerClientsRepresentativeDto,
    })
    @Get()
    async findAllComerClientRepresentativeId(@Query() pagination: PaginationDto) {
        return this.comerClientService.findAllComerClientRepresentativeId(pagination)
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
        return this.comerClientService.createComerClientRepresentative(createComerClientRepresentative)
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
        return await this.comerClientService.updateComerClientRepresentative(id, updateComerClientRepresentative);
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
        return await this.comerClientService.deleteComerClientRepresentative(id);
    }
}
