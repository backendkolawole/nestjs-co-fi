import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Patch,
  Delete,
  Query,
  Inject,
} from '@nestjs/common';
import { CoffeeService } from './coffee.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto/pagination-query.dto';
import { REQUEST } from '@nestjs/core';
import { Public } from 'src/common/decorators/public.decorator';
import { ParseIntPipe } from 'src/common/pipes/parse-int/parse-int.pipe';
import { Protocol } from 'src/common/decorators/protocols.decorator';

@Controller('coffee')
export class CoffeeController {
  constructor(
    private readonly coffeeService: CoffeeService,
    @Inject(REQUEST) private readonly request: Request,
  ) {}
  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeeService.create(createCoffeeDto);
  }

  @Public()
  @Get()
  findAll(
    @Protocol('https') protocol: string,
    @Query() paginationQuery: PaginationQueryDto,
  ) {
    console.log(protocol);
    return this.coffeeService.findAll(paginationQuery);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    // return `This action returns a #${id} coffee`;
    return this.coffeeService.findOne('' + id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    // return `This action updates a #${id} coffee`;
    return this.coffeeService.update(id, updateCoffeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeeService.remove(id);
    // return `this action removes ${id} coffee`;
  }
}
