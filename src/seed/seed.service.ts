import { Injectable } from '@nestjs/common';
import { BrandsService } from 'src/brands/brands.service';
import { CarsService } from 'src/cars/cars.service';
import { BRANDS_SEED } from './data/brand.seed';
import { CARS_SEED } from './data/car.seed';

@Injectable()
export class SeedService {

  constructor(
    private readonly carService: CarsService,
    private readonly brandService: BrandsService
  ){

  }

  populateDb() {
    this.carService.fillCarsWithSeedData(CARS_SEED);
    this.brandService.fillBrandsWithSeedData(BRANDS_SEED);
    return `Seed executed!`;
  }

}
