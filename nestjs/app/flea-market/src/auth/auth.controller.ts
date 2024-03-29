import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '../entities/user.entity';
import { AuthService } from './auth.service';
import { CredentialsDto } from './dto/credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signup(@Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.authService.singUp(createUserDto);
  }

  @Post('signin')
  async signin(
    @Body() creadentialsDto: CredentialsDto,
  ): Promise<{ accessToken: string }> {
    return await this.authService.singIn(creadentialsDto);
  }
}
