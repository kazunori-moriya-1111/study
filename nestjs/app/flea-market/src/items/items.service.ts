import { Injectable, NotFoundException } from '@nestjs/common';
import { Item } from '../entities/item.entity';
import { ItemStatus } from './item-status.enum';
import { CreateItemDto } from './dto/create-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item)
    private itemRepository: Repository<Item>,
  ) {}
  private items: Item[] = [];
  findAll(): Item[] {
    return this.items;
  }

  findById(id: string): Item {
    const found = this.items.find((item) => item.id === id);
    if (!found) {
      throw new NotFoundException();
    }
    return found;
  }

  async create(createItemDto: CreateItemDto): Promise<Item> {
    const item: Item = {
      id: uuid(),
      ...createItemDto,
      status: ItemStatus.ON_SALE,
      createAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    return await this.itemRepository.save(item);
  }

  updateStatus(id: string): Item {
    const item = this.findById(id);
    item.status = ItemStatus.SOLD_OUT;
    return item;
  }

  delete(id: string): void {
    this.items = this.items.filter((item) => item.id !== id);
  }
}
