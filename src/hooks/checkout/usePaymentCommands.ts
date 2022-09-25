import type { IOrderData, IOrdersheet } from '../../types';
import { CheckoutService } from '../../services';

/** 결제 요청 */
export function usePaymentCommands(orderData: IOrderData) {
  const pay = async () => {
    const isNoMobileOption =
      orderData.payMethod === 'mobile' && orderData.mobileCarrier === '';

    if (isNoMobileOption) {
      alert('통신사 종류를 선택해주세요');
      return;
    }

    await CheckoutService.completeOrder(orderData);

    alert('결제 성공');
  };

  const payByRocket = () => {};

  return { pay, payByRocket };
}
