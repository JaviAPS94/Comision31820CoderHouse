import { Test, TestingModule } from '@nestjs/testing';
import { CatsService } from '../../../src/cats/cats.service';
import { CatsController } from '../../../src/cats/cats.controller';
import { createCatDtoMock, createCatsMock } from './mocks/mock-cats';

describe('CatsController', () => {
  let controller: CatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatsController],
      providers: [CatsService],
    }).compile();

    controller = module.get<CatsController>(CatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return an array of cats', async () => {
    const getCats = (CatsService.prototype.findAll = jest.fn());
    getCats.mockReturnValue(createCatsMock);
    const expectedResult = createCatsMock;

    const returnedValue = await controller.findAll();
    expect(getCats).toHaveBeenCalled();
    expect(returnedValue).toBe(expectedResult);
  });

  it('should save cat', async () => {
    const postCat = (CatsService.prototype.create = jest.fn());
    await controller.create(createCatDtoMock);
    expect(postCat).toHaveBeenCalled();
  });
});
