import Service from './service';
import type { ISignupData, ILoginData } from '../types/auth.types';

class AuthService extends Service {
  async refresh() {
    const refreshToken = this.token.get('refresh');
    if (!refreshToken) return;

    const { data } = await this.client.post('/auth/refresh', null, {
      headers: this.setBearer(),
    });

    this.token.set(data);
    return data;
  }

  async signup(signupData: ISignupData) {
    const { data } = await this.client.post('/auth/signup', signupData);

    this.token.set(data);
    return data;
  }

  async login(loginData: ILoginData) {
    const { data } = await this.client.post('/auth/login', loginData);

    this.token.set(data);
    return data;
  }

  async logout() {
    // add logout api url
    this.token.remove();
  }
}

export default new AuthService();
