import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';
import { createCatBadRequestMock, createCatOkMock } from './mocks/mock-cats';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('/cats (GET)', () => {
    return request(app.getHttpServer())
      .get('/cats')
      .expect(200)
      .expect([])
  });

  it('/cats (POST) 400', () => {
    return request(app.getHttpServer())
      .post('/cats')
      .send(createCatBadRequestMock)
      .expect(400);
  });

  it('/cats (POST) 201', () => {
    return request(app.getHttpServer())
      .post('/cats')
      .send(createCatOkMock)
      .expect(201);
  });
});
