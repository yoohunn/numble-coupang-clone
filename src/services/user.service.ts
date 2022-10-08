import Service from './service';

class UserService extends Service {
  async me() {
    const accessToken = this.token.get('access');
    if (!accessToken) return;

    const { data } = await this.client.get('/users/me', {
      headers: this.setBearer(),
    });
    return data;
  }

  async read(id: number) {
    const { data } = await this.client.get('/users/' + id);

    return data;
  }
}

export default new UserService();
