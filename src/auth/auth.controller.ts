import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('signup')
  signup(): any {
    return this.authService.signup();
  }

  @Post('login')
  login(): any {
    return this.authService.login();
  }
}
