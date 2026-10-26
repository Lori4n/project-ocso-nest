import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateLocationDto } from "./dto/create-location.dto";
import { UpdateLocationDto } from "./dto/update-location.dto";
import { Location } from "./entities/location.entity";
import { Manager } from "../managers/entities/manager.entity.js";

@Injectable()
export class LocationsService {
  constructor(
    @InjectRepository(Location)
    private locationRepository: Repository<Location>,
    @InjectRepository(Manager)
    private managerRepository: Repository<Manager>,
  ) {}
  create(createLocationDto: CreateLocationDto) {
    return this.locationRepository.save(createLocationDto);
  }

  findAll() {
    return this.locationRepository.find();
  }

  async findOne(id: number) {
    const location = await this.locationRepository.findOneBy({
      locationId: id,
    });
    if (!location) throw new NotFoundException("Location not found");
    return location;
  }

async update(id: number, updateLocationDto: UpdateLocationDto) {

    await this.managerRepository
      .createQueryBuilder()
      .update()
      .set({ location: null as any })
      .where("locationId = :id", { id })
      .execute();

    const { manager, ...locationDetails } = updateLocationDto;

    const location = await this.locationRepository.preload({
      locationId: id,
      ...locationDetails,
    });

    if (!location) {
      throw new NotFoundException(`Location with id ${id} not found`);
    }

    const savedLocation = await this.locationRepository.save(location);

    if (manager) {
      const updatedManager = await this.managerRepository.preload({
        managerId: manager,
        location: savedLocation,
      });

      if (updatedManager) {
        await this.managerRepository.save(updatedManager);
      }
    }

    return savedLocation;
  }

  remove(id: number) {
    return this.locationRepository.delete({
      locationId: id,
    });
  }
}