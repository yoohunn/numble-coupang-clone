import Service from './service';

class ProductsService extends Service {
  async getProducts(params: {}) {
    const res = await this.client.get('/products?', { params });
    return res.data;
  }

  async getItems(productId: number, vendoritemId: number) {
    const res = await this.client.get(
      `/products/${productId}/vendoritems/${vendoritemId}`
    );
    return res.data;
  }

  async getDetails(productId: number, itemId: number, vendoritemId: number) {
    const res = await this.client.get(
      `/products/${productId}/items/${itemId}/vendoritems/${vendoritemId}`
    );
    return res.data;
  }

  async getOtherItems(productId: number, itemId: number, vendoritemId: number) {
    const res = await this.client.get(
      `/products/${productId}/brand-sdp/widget/brand-sdp?itemId=${itemId}&vendoritemId=${vendoritemId}`
    );
    return res.data;
  }

  async getBreadcrumble(productId: number) {
    const res = await this.client.get(
      `/products/${productId}/breadcrumb-gnbmenu`
    );
    return res.data;
  }
}

export const productsService = new ProductsService();
