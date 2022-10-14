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

    @ApiOperation({ summary: 'Listado de comer clientes' })
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
        type: ComerClientDto,
    })
    @Get()
    async findAllComerClientId(@Query() pagination: PaginationDto) {
        return this.comerClientService.findAllComerClientId(pagination)
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
        return await this.comerClientService.getComerClientByName(nameClient, pagination);
    }

    @ApiOperation({ summary: 'Listado de causa refactura por id' })
    @ApiParam({
    name: 'id',
    description: 'Listado de comer cliente por id'
    })
    @ApiResponse({
    status: 200,
    description: 'Listado de comer cliente por id',
    type: ComerClientDto,
    })

    @Get('idclient/:id')
    async getComerClientById(@Param("id") id: number) {

    return this.comerClientService.getComerClientById(id);
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
        return await this.comerClientService.updateComerClient(id, updateComerClient);
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
        return await this.comerClientService.deleteComerClient(id);
    }
}
