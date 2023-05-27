import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async singUp(createUserDto: CreateUserDto): Promise<User> {
    const user: User = {
      id: uuid(),
      ...createUserDto,
    };
    return await this.userRepository.save(user);
  }
}
