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

  async update(id: string) {
    const res = await this.client.patch('/cart-item/' + id);
    return res;
  }

  async delete(id: string) {
    const res = await this.client.delete('/cart-item/' + id);
    return res;
  }
}

export const cartService = new CartService();
