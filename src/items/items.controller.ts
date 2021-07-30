import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { Item } from './interfaces/items.interface';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private itemService: ItemsService) {}

  @Get()
  getAll(): Promise<Item[]> {
    return this.itemService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<Item> {
    return this.itemService.findOne(id);
  }

  @Post()
  create(@Body() createItem: CreateItemDto): Promise<Item> {
    return this.itemService.create(createItem);
  }

  @Put(':id')
  updateItem(
    @Param('id') id,
    @Body() updateItem: CreateItemDto,
  ): Promise<Item> {
    return this.itemService.update(id, updateItem);
  }

  @Delete(':id')
  deleteItem(@Param('id') id): Promise<Item> {
    return this.itemService.delete(id);
  }
}
