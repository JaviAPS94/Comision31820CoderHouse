import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBadRequestResponse, ApiNotFoundResponse, ApiOkResponse, ApiParam, ApiQuery } from '@nestjs/swagger';
import { Cat } from 'src/interfaces/cat.interface';
import { CreateCatDto } from '../dto/create-cat.dto';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {}

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        await this.catsService.create(createCatDto);
    }

    @Get()
    @ApiParam({ name: 'id', type: 'string' , required: true})
    @ApiQuery({ name: 'breed', type: 'string'})
    @ApiOkResponse({
        description: 'Get cats ok',
        type: CreateCatDto,
    })
    @ApiBadRequestResponse({
        description: 'Get cats bad request'
    })
    @ApiNotFoundResponse({
        description: 'Get cats not found'
    })
    async findAll(): Promise<Cat[]> {
        return await this.catsService.findAll();
    }
}
