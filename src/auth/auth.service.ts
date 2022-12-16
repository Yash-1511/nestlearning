import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
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
