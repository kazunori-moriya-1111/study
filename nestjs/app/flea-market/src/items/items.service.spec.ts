import { Test } from '@nestjs/testing';
import { ItemsService } from './items.service';
import { Repository } from 'typeorm';
import { Item } from '../entities/item.entity';

const mockItemRepository = () => ({});

describe('ItemsServiceTest', () => {
  let itemsService;
  let itemRepository;
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        ItemsService,
        {
          provide: Repository<Item>,
          useFactory: mockItemRepository,
        },
      ],
    }).compile();

    itemsService = module.get<ItemsService>(ItemsService);
    itemRepository = module.get<Repository<Item>>(Repository<Item>);
  });
});
