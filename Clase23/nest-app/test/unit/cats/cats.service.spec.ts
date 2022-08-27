import { Test, TestingModule } from '@nestjs/testing';
import { CatsService } from '../../../src/cats/cats.service';
import { createCatMock } from './mocks/mock-cats';

describe('CatsService', () => {
  let service: CatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatsService],
    }).compile();

    service = module.get<CatsService>(CatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return empty array', async () => {
    const cats = await service.findAll();
    expect(cats.length).toEqual(0);
  });

  it('should return array with elements', async () => {
    await service.create(createCatMock);
    const cats = await service.findAll();
    expect(cats.length).toEqual(1);
    expect(cats[0].age).toEqual(10);
    expect(cats[0].name).toEqual('test');
    expect(cats[0].breed).toEqual('test');
  });
});
