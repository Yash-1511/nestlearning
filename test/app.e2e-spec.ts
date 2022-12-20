import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AppModule } from 'src/app.module';

describe('first', () => {
  let app: INestApplication;
  beforeAll(async () => {
    const moduleref = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleref.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      }),
    );
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });
  it.todo('should running');
});
