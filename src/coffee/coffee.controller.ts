import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { CoffeeService } from './coffee.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto/pagination-query.dto';

@Controller('coffee')
export class CoffeeController {
  constructor(private readonly coffeeService: CoffeeService) {}
  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeeService.create(createCoffeeDto);
  }

  @Get('')
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.coffeeService.findAll(paginationQuery);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
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
