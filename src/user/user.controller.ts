import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '@prisma/client';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get("user/:id")
  async getUserById(@Param("id") id: number): Promise<User> {
    return this.userService.findOne({
      id
    })
  }
}
