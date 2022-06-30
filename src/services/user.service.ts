import axios from 'axios';
import HttpClient from '../network/axios';
import { getAccessToken } from '../lib/cookie';

class UserService extends HttpClient {
  constructor() {
    super('/users');
  }

  async me() {
    const accessToken = getAccessToken();
    if (!accessToken) {
      return;
    }

    const { data } = await axios.get(
      process.env.NEXT_PUBLIC_API_HOST + '/users/me',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return data;
  }

  async read(id: number) {
    const { data } = await axios.get(
      process.env.NEXT_PUBLIC_API_HOST + '/users/' + id
    );

    return data;
  }
}

export default new UserService();
