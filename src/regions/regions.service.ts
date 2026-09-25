import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateRegionDto } from './dto/create-region.dto.js';
import { UpdateRegionDto } from './dto/update-region.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Region } from './entities/region.entity.js'
import { NotFoundError } from 'rxjs';

@Injectable()
export class RegionsService {
   constructor(
    @InjectRepository(Region)
    private regionRepository: Repository<Region>
   ){}

async create(createRegionDto: CreateRegionDto) {
  return await this.regionRepository.save(createRegionDto);
}

  findAll() {
    return this.regionRepository.find()
  }

  findOne(id: number) {
    const region = this.regionRepository.findOneBy({
      regionId: id
    })
    if(!region) throw new NotFoundException('Region not found')
  }

  async update(id: number, updateRegionDto: UpdateRegionDto) {
    const regionToUpdate = await this.regionRepository.preload({
      regionId: id,
      ...UpdateRegionDto
    })
    if(!regionToUpdate) throw new BadRequestException
    return this.regionRepository.save(regionToUpdate)
  }

  remove(id: number) {
    return this.regionRepository.delete({
      regionId: id,
    })
  }
}
