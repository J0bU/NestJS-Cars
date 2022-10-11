import { Injectable, NotFoundException } from '@nestjs/common';
import { NotFoundError } from 'rxjs';
import { v4 as uuid } from "uuid";
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {

  private brands: Brand[] = [
    // {
    //   id: uuid(),
    //   name: "Toyota",
    //   createdAt: new Date().getTime()
    // }
  ] 

  create(createBrandDto: CreateBrandDto) {
    const newBrand: Brand = {
      id: uuid(),
      name: createBrandDto.name,
      createdAt: new Date().getTime()
    };
    this.brands.push(newBrand);
    return newBrand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find( brand => brand.id === id);
    if(!brand) throw new NotFoundException(`The brand with the id: ${id} doesn't exists!`);
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDb = this.findOne(id);
    this.brands.map( brand => {
      if(brand.id === id){
        brandDb.updatedAt = new Date().getTime();
        brandDb = {
          ...brandDb, ...updateBrandDto
        }
        return brandDb;
      }
      return brand;
    });

    return brandDb;
  }

  remove(id: string) {
    this.brands = this.brands.filter( brand => brand.id !== id);
  }

  fillBrandsWithSeedData(brands: Brand[]){
    this.brands = brands; 
  }
}
