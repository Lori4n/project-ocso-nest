import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ManagersService } from './managers.service.js';
import { ManagersController } from './managers.controller.js';
import { Manager } from './entities/manager.entity.js';

@Module({
  imports: [
    TypeOrmModule.forFeature([Manager]),
  ],
  controllers: [ManagersController],
  providers: [ManagersService],
  exports: [TypeOrmModule],
})
export class ManagersModule {}