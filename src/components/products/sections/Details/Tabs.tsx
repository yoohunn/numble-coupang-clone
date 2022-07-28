import styled from '@emotion/styled';
import { useState } from 'react';

interface IProps {}

const Tabs = ({}: IProps) => {
  const [activeId, setActiveId] = useState(0);

  const tabs = [
    { title: '상품상세' },
    { title: '상품평' },
    { title: '상품문의' },
    { title: '배송/교환/반품 안내' },
  ];
  return (
    <Ul>
      {tabs.map((tab, index) => (
        <li //
          key={index}
          className={index === activeId ? 'active' : ''}
        >
          <p>{tab.title}</p>
        </li>
      ))}
    </Ul>
  );
};

export default Tabs;

const Ul = styled.ul`
  border-top: 2px solid #555;
  border-bottom: 1px solid #ccc;
  border-left: 1px solid #ccc;
  font-size: 0;
  width: 100%;

  & > li {
    display: inline-block;
    padding: 15px 20px 14px;
    width: 25%;
    border-right: 1px solid #ccc;
    background-color: #fafafa;
    text-align: center;
    color: #555;
    font-weight: bold;
    font-size: 16px;
  }

  & > li.active {
    margin-bottom: -2px;
    background: #fff;
    border-bottom: 1px solid #fff;
    color: #111;
  }
`;
