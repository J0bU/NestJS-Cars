import { Car } from "src/cars/interfaces/car.interface";
import { v4 as uuid } from "uuid";

export const CARS_SEED: Car[] = [
    {
        id: uuid(),
        name: "Toyota",
        color: "Black"
    },
    {
        id: uuid(),
        name: "Susuki",
        color: "Black"
    },
    {
        id: uuid(),
        name: "Ford",
        color: "Black"
    }
];