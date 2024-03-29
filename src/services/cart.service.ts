import { PrivateService } from './service';

class CartService extends PrivateService {
  async getAll() {
    const { data } = await this.client.get('/cart');
    return data;
  }

  async init() {
    const { data } = await this.client.post('/cart/reset');
    return data;
  }

  async update(id: number, quantity: number) {
    const res = await this.client.patch('/cart-items/' + id, { quantity });
    return res;
  }

  async delete(id: number) {
    const res = await this.client.delete('/cart-items/' + id);
    return res;
  }
}

export default new CartService();
