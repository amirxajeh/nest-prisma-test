import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Prisma, User } from '@prisma/client';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get(":id")
  async getUserById(@Param("id", ParseIntPipe) id: number): Promise<User> {
    return await this.userService.findOne({
      id
    })
  }

  @Post()
  async createUser(@Body() userCreateInput: Prisma.UserCreateInput): Promise<User> {
    console.log(userCreateInput)
    return await this.userService.create(userCreateInput)
  }
}
