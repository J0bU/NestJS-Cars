import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import {  v4 as uuid } from "uuid";
import { CreateCarDto, UpdateCartDto } from "./dtos/index";

@Injectable()
export class CarsService {

    private cars: Car[] = [];

    getAll(){
        return this.cars;
    }
    getCarById( id: string ){
        const car = this.cars.find( car => (id == car.id));
        if( !car ) throw new NotFoundException(`The car with id ${ id } not found`);
        return car;
    }
    updateCarById(id: string, updateCarDto: UpdateCartDto){

        let carDb = this.getCarById(id);

        this.cars = this.cars.map(car => {
            if(car.id === id){
                carDb = {
                    ...carDb,
                    ...updateCarDto,
                    id
                };

                return carDb;
            }

            return car;
        });

        return carDb;

    }
    deleteCarById(id: string){
        const carDb = this.getCarById(id);
        this.cars = this.cars.filter(car => car.id === id);
    }
    create(createCarDto: CreateCarDto){
        const car: Car = {
            id: uuid(),
            name: createCarDto.name,
            color: createCarDto.color
        }
        
        this.cars.push(car);
        return car;
    }

    fillCarsWithSeedData(carss: Car[]){
        this.cars = carss; 
        console.log(this.cars);
      }
}
