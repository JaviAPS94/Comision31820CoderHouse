import { CreateCatDto } from "src/dto/create-cat.dto";
import { Cat } from "../../../../src/interfaces/cat.interface";

const createCatMock: Cat = {
    name: 'test',
    age: 10,
    breed: 'test'
};

const createCatsMock: Cat[] = [
    {
        name: 'test',
        age: 8,
        breed: 'test',
    },
    {
        name: 'test1',
        age: 10,
        breed: 'test1',
    },
];

const createCatDtoMock: CreateCatDto = {
    name: 'test',
    age: 9,
    breed: 'test',
};

export { createCatMock, createCatsMock, createCatDtoMock };
