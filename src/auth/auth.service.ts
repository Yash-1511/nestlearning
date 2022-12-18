import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  signup(): any {
    return {
      success: true,
      message: 'Signup Successfull',
    };
  }
  login(): any {
    return {
      success: true,
      message: 'Login Successfull',
    };
  }
}
