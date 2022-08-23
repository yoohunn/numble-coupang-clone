import styled from '@emotion/styled';
import { useState } from 'react';

import { IDetailTab } from '../../../../types/product.interface';

const Tabs = () => {
  const [activeId, setActiveId] = useState(0);

  const tabs: IDetailTab[] = [
    { title: '상품상세', id: 'item-detail' },
    { title: '상품평', id: 'item-review' },
    { title: '상품문의', id: 'item-inquiry' },
    { title: '배송/교환/반품 안내', id: 'item-announcement' },
  ];

  return (
    <Ul>
      {tabs.map((tab, index) => (
        <li
          key={index}
          className={index === activeId ? 'active' : ''}
          onClick={() => setActiveId(index)}
        >
          <a href={`#${tab.id}`}>{tab.title}</a>
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

  li {
    display: inline-block;
    padding: 15px 20px 14px;
    width: 25%;
    border-right: 1px solid #ccc;
    background-color: #fafafa;
    text-align: center;
    color: #555;
    font-weight: bold;
    font-size: 16px;

    a {
      display: inline-block;
      width: 100%;
      height: 100%;
    }
  }

  & > li.active {
    margin-bottom: -2px;
    background: #fff;
    border-bottom: 1px solid #fff;
    color: #111;
  }
`;
