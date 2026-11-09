import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Res, BadRequestException, Query } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
import { LoginUserDto } from './dto/login-user.dto.js';
import { ApiTags } from '@nestjs/swagger';
import { Response, response } from 'express';
import { PassThrough } from 'stream';
import { TOKEN_NAME } from './constants/jwt.constants.js';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }


  @Post("register/:id")
  registerManager(@Query("role") role: string, @Body() createUserDto: CreateUserDto, @Param("id") id: string) {
    if (role === "manager") {
      return this.authService.registerManager(id, createUserDto);
    } else if (role === "employee") {
      return this.authService.registerEmployee(id, createUserDto);
    }

    throw new BadRequestException("Rol inválido");
  }

  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto, @Res({ passthrough: true }) response: Response) {
    const token = await this.authService.loginUser(loginUserDto)
    response.cookie(TOKEN_NAME, token, {
      httpOnly: false,
      secure: true,
      sameSite: 'none',
      maxAge: 1000 * 60 * 60 * 24 * 7
    })
    return;
  }

  @Patch("/:email")
  updateUser(@Param('email') userEmail: string, @Body() updateUserDto: UpdateUserDto) {
    return this.authService.updateUser(userEmail, updateUserDto)
  }
}
