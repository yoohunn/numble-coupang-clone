export type SignupAgreements = {
  /** 만 14세 이상입니다 */
  terms_fourteen: boolean;
  /** 쿠팡 이용약관 동의 */
  terms_service: boolean;
  /** 전자금융거래 이용약관 동의 */
  terms_commerce: boolean;
  /** 개인정보 수집 및 이용 동의 */
  terms_privacy_collect_use: boolean;
  /** 개인정보 제3차 제공 동의 */
  agree_to_collect_third_part_information: boolean;
  /** 광고성 목적의 개인정보 수집 및 이용 동의 */
  agree_to_collect_for_ads: boolean;
  /** 이메일 수신 동의 */
  agree_to_receive_email: boolean;
  /** SMS,MMS 수신 동의 */
  agree_to_receive_sms: boolean;
  /** 앱 푸시 수신 동의 */
  agree_to_receive_push: boolean;
};

export interface ISignupData extends ILoginData {
  name: string;
  phoneNumber: string;
  agreements: SignupAgreements;
}

export interface ILoginData {
  email: string;
  password: string;
}
