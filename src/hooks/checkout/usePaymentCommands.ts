import type { IPaymentData } from '../../types';
import { CheckoutService } from '../../services';

/** 결제 요청 */
export function usePaymentCommands(paymentData: IPaymentData) {
  const pay = async () => {
    const isNoMobileOption =
      paymentData.payMethod === 'mobile' && paymentData.mobileCarrier === '';

    if (isNoMobileOption) {
      alert('통신사 종류를 선택해주세요');
      return;
    }

    await CheckoutService.completeOrder(paymentData);

    alert('결제 성공');
  };

  return { pay };
}
