import { Injectable } from '@nestjs/common';
import { Cat } from '../interfaces/cat.interface';

@Injectable()
export class CatsService {
    private readonly cats: Cat[] = [];

    async create(cat: Cat) {
        await this.cats.push(cat);
    }

    async findAll(): Promise<Cat[]> {
        return await this.cats;
    }
}
