import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegionsService } from './regions.service.js';
import { RegionsController } from './regions.controller.js';
import { Region } from './entities/region.entity.js'; // <-- Importa la entidad Region

@Module({
  imports: [
    TypeOrmModule.forFeature([Region]), // <-- AGREGA ESTA LÍNEA
  ],
  controllers: [RegionsController],
  providers: [RegionsService],
  exports: [TypeOrmModule], // Opcional, por si necesitas usar RegionRepository en otros módulos
})
export class RegionsModule {}