import HttpClient from '../network/axios';
import { setToken } from '../lib/cookie';

type SignupAgreements = {
  privacy: boolean;
  ad:
    | {
        email: boolean;
        sms: boolean;
        app: boolean;
      }
    | false;
};

class AuthService extends HttpClient {
  constructor() {
    super('/auth');
  }

  async refresh() {
    const { data } = await this.client.post('/refresh');

    setToken(data);
  }

  async signup(
    email: string,
    password: string,
    name: string,
    phoneNumber: string,
    agreements: SignupAgreements
  ) {
    const { data } = await this.client.post('/signup', {
      email,
      password,
      name,
      phoneNumber,
      agreements,
    });

    setToken(data);
  }

  async login(email: string, password: string) {
    const { data } = await this.client.post('/login', { email, password });

    setToken(data);
  }
}

export default new AuthService();
