import styled from '@emotion/styled';

// common
export const H2 = styled.h2`
  padding-left: 2px;
  margin: 30px 0 8px;
  text-align: left;
  font-size: 20px;
  font-weight: 700;
`;

export const Table = styled.div`
  width: 100%;
  border-top: 2px solid #cecece;
`;

// ordersheet
export const Section = styled.section`
  padding-left: 10px;
  width: 1020px;
  margin: 0 auto 20px;
`;

export const H1 = styled.h1`
  margin-top: 5px;
  padding-left: 0;
  line-height: 70px;
  font-size: 30px;
  color: #111;
  border-bottom: 3px solid #777;
`;

// BuyerInfo
export const Input = styled.input`
  width: 220px;
  height: 24px;
  margin-bottom: 10px;
  padding: 0 0 0 5px;
  border: 1px solid #ddd;
  font-size: 12px;
  color: #333;
`;

export const LightSpan = styled.span`
  margin-left: 10px;
  color: #9a9a9a;
`;

// AddressInfo
export const LabelBox = styled.span`
  display: inline-block;
  margin-left: 7px;
`;

// CheckoutInfo
export const Button = styled.button<{
  pressed?: boolean;
  colored?: boolean;
  disabled?: boolean;
}>`
  margin-left: 2px;
  padding: 4px 8px;
  border: 1px solid ${(props) => (props.colored ? '#0085da ' : '#999')};
  color: ${(props) => (props.colored ? '#0085da ' : '#333')};
  border-radius: 2px;
  box-shadow: ${(props) =>
    props.pressed
      ? '0 2px 0 rgba(0,0,0,.1) inset'
      : '0 -2px 0 rgba(0, 0, 0, 0.1) inset'};
  font-size: 11px;
  opacity: ${(props) => (props.disabled ? '0.5' : '1')};
`;

export const Inline = styled.span`
  display: inline-block;
  width: 115px;
`;

export const RedSpan = styled.span`
  color: #ff0025;
`;

export const Content = styled.div`
  margin-top: 10px;
  padding: 10px;
  border: 2px solid #c5c7cd;
  background-color: #f4f6fa;
`;

export const CoupayStyles = styled.div`
  & > header {
    padding-bottom: 10px;
    border-bottom: 1px solid #e4e4e4;
  }
  & > div {
    padding-top: 10px;
    color: #555;
  }
`;

export const ContentSpan = styled.span`
  display: inline-block;
  width: 90px;
  line-height: 21px;
  font-size: 12px;
  font-weight: 700;
  color: #333;
`;

export const Form = styled.form`
  margin-top: 10px;
  padding: 10px 0 10px 115px;
  border-top: 1px solid #eee;
  background-color: #f8f8f8;
`;

export const MessageBox = styled.div`
  margin: 10px 0;
`;
