import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity.js';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from './dto/login-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
import { NotFoundError } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>,
    private jwtService: JwtService
  ){}
  registerUser(createUserDto: CreateUserDto){
    createUserDto.userPassword = bcrypt.hashSync(createUserDto.userPassword, 5)
    return this.userRepository.save(createUserDto)
  }
  async loginUser(loginUserDto: LoginUserDto) {
    const user = await this.userRepository.findOne({
      where: {
        userEmail: loginUserDto.userEmail
      }
    })
    if (user == null) throw new BadRequestException
    const match = await bcrypt.compare(
      loginUserDto.userPassword, 
      user.userPassword
    );
    if (!match) throw new UnauthorizedException('No estas autorizado');
    const payload = {
      userEmail: user.userEmail,
      userpassword: user.userPassword,
      userRoles: user.userRoles
    }
    const token = this.jwtService.sign(payload)
    return token
  }
  async updateUser(userEmail: string, updateUserDto: UpdateUserDto) {
    const newUserData = await this.userRepository.preload({
      userEmail,
      ...updateUserDto
    })
    if (!newUserData) {
      throw new NotFoundException('Usuario no encontrado');
    }

    return await this.userRepository.save(newUserData)
  }
}
