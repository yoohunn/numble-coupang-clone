import Service from './service';
import type { ISignupData, ILoginData } from '../types/auth.types';

class AuthService extends Service {
  async refresh() {
    const refreshToken = this.token.get('refresh');
    if (!refreshToken) return;

    const { data } = await this.client.post('/auth/refresh', null, {
      headers: this.bearHeader,
    });

    this.token.set(data);
  }

  async signup(signupData: ISignupData) {
    const { data } = await this.client.post('/auth/signup', signupData);

    this.token.set(data);
  }

  async login(loginData: ILoginData) {
    const { data } = await this.client.post('/auth/login', loginData);

    this.token.set(data);
  }
}

export default new AuthService();
