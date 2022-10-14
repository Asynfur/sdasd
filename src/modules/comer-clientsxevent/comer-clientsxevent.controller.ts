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
import { ComerClientXEventDto } from './dto/comer-clientsxevent.dto'
import { ComerClientXEventService } from './comer-clientsxevent.service'
import { PaginationDto } from '../shared/pagination.dto'

@ApiCreatedResponse()
@Controller('comer-clientsxevent')
@ApiTags('comer-clientsxevent')
export class ComerClientXEventController {
    constructor(private readonly comerClientService: ComerClientXEventService) {

    }
    @ApiOperation({ summary: 'Listado de comer clientes por evento' })
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
        type: ComerClientXEventDto,
    })
    @Get()
    async findAllComerClientXEventId(@Query() pagination: PaginationDto) {
        return this.comerClientService.findAllComerClientXEventId(pagination)
    }

    @ApiOperation({ summary: 'Listado de comer clientes por evento por id' })
    @ApiResponse({
        status: 200,
        description: 'Listado de comer clientes por evento',
        type: ComerClientXEventDto
    })
    @ApiParam({
        name: 'idClientXEvent',
        type: Number,
        description: 'Clave del comer cliente por evento'
    })
    @Get('idclientxevent/:idclientxevent')
    async getComerClientXEventById(@Param('idclientxevent') idClientXEvent: number) {
        return this.comerClientService.getComerClientXEventById(idClientXEvent)
    }

    @ApiOperation({ summary: 'Guardar nuevo comer clientes por evento' })
    @ApiBody({ type: ComerClientXEventDto })
    @ApiResponse({
        status: 200,
        description: 'Comer clientes por evento guardado',
        type: ComerClientXEventDto,
    })
    @Post('postClientXEvent')
    async createComerClientXEvent(@Body() createComerClientXEvent: ComerClientXEventDto) {
        return this.comerClientService.createComerClientXEvent(createComerClientXEvent)
    }

    @ApiOperation({ summary: 'Actualizar comer clientes por evento'})
    @ApiBody({ type: ComerClientXEventDto})
    @ApiParam({ name: 'id', type: Number})
    @ApiResponse({
        status: 200,
        description: 'Comer clientes por evento actualizado',
        type: ComerClientXEventDto,
    })
    @Put()
    async updateComerClient(@Body() updateComerClientXEvent: ComerClientXEventDto, @Param() id: number) {
        return this.comerClientService.updateComerClientXEvent(id, updateComerClientXEvent)
    }

    @ApiOperation({ summary: 'Eliminar comer clientes por evento'})
    @ApiParam({ name: 'id', type: Number})
    @ApiResponse({
        status: 200,
        description: 'Comer clientes por evento eliminado',
        type: ComerClientXEventDto
    })
    @Delete()
    async deleteComerClientXEvent(@Body() ComerClientXEvent: ComerClientXEventDto) {
        return await this.comerClientService.deleteComerClientXEvent(ComerClientXEvent);
    }
    
}
