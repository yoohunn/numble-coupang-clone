import { PrivateService } from './service';
import type { IOrderData } from '../types/checkout.types';

class CheckoutService extends PrivateService {
  async getOrdersheet(id: number, accessToken?: string) {
    const bearerHeader = { Authorization: `Bearer ${accessToken}` };

    const { data } = await this.client.get('/ordersheet/' + id, {
      headers: { ...bearerHeader },
    });

    return data;
  }

  async getAddress() {
    const { data } = await this.client.get('/address');
    return data;
  }

  async completeOrder(completeData: IOrderData) {
    return await this.client.post('/order/complete', completeData);
  }
}

export default new CheckoutService();