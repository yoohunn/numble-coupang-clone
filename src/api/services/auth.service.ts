import HttpClient from '../http';
import { setToken } from '../token';
import { SignupData } from '../../types/auth';

class AuthService extends HttpClient {
  constructor() {
    super('/auth');
  }

  async refresh() {
    const { data } = await this.client.post('/refresh');

    setToken(data);
  }

  async signup(signupData: SignupData) {
    const { data } = await this.client.post('/signup', signupData);

    setToken(data);
  }

  async login(email: string, password: string) {
    const { data } = await this.client.post('/login', { email, password });

    setToken(data);
  }
}

export default new AuthService();
