import { Injectable } from '@nestjs/common';
import { CreateTaskInput } from './dto/createTask.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { Task } from '@prisma/client';

@Injectable()
export class TaskService {
  constructor(private readonly prismaServie: PrismaService) {}

  async getTasks(): Promise<Task[]> {
    return await this.prismaServie.task.findMany();
  }

  async createTask(createTaskInput: CreateTaskInput): Promise<Task> {
    const { name, dueDate, description } = createTaskInput;
    return await this.prismaServie.task.create({
      data: {
        name,
        dueDate,
        description,
      },
    });
  }
}
