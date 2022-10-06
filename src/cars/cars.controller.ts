import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { UpdateCartDto, CreateCarDto } from "./dtos/index";

@Controller('cars')

export class CarsController {
    // private cars = ['Toyota', 'Honda', 'Susuki'];
    constructor(
        public readonly carsService: CarsService
    ){}

    @Get()
    getAllCars(){
        return this.carsService.getAll();
    }

    @Get(':id')
    getCarById( @Param('id', ParseUUIDPipe) id: string ){
       return this.carsService.getCarById(id);
    }
    // Where we can do put pipes?
    // 1. Parameters - 2. Functions - 3. Controllers 
    // Dtos - Use ValidationPipe (install class-validator, class-transformer)
    @Post()
    @UsePipes( ValidationPipe )
    createCar(@Body() createCarDto: CreateCarDto){
        return this.carsService.create(createCarDto);
    }

    @Put(':id')
    updateCarById(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() updateCarDto: UpdateCartDto
        ){
           
        return this.carsService.updateCarById(id, updateCarDto);
    }

    @Delete(':id')
    deleteCarById( @Param('id', ParseUUIDPipe ) id: string){
        return this.carsService.deleteCarById(id);
    }

}
