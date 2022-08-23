import axios from 'axios';
import { useEffect, useState } from 'react';

import {
  IBreadcremble,
  IDetails,
  IItem,
  IOtherItems,
} from '../../types/product.interface';

const useProductMock = (props: { itemId?: number; vendoritemid?: number }) => {
  const [item, setItem] = useState<IItem>();
  const [details, setDetails] = useState<IDetails>();
  const [breadcrumble, setBreadcrumble] = useState<IBreadcremble>();
  const [otherItems, setOthderItems] = useState<IOtherItems>();

  const productId = 1;
  const itemId = props.itemId || 1;
  const vendoritemId = props.vendoritemid || 3;

  useEffect(() => {
    axios
      .get(
        `https://coupang.numble.it/api/products/${productId}/vendoritems/${vendoritemId}`
      )
      .then((res) => setItem(res.data));

    axios
      .get(
        `https://coupang.numble.it/api/products/${productId}/items/${itemId}/vendoritems/${vendoritemId}`
      )
      .then((res) => setDetails(res.data));

    axios
      .get(
        `https://coupang.numble.it/api/products/${productId}/brand-sdp/widget/brand-sdp?itemId=${itemId}&vendoritemId=${vendoritemId}`
      )
      .then((res) => setOthderItems(res.data));

    axios
      .get(
        `https://coupang.numble.it/api/products/${productId}/breadcrumb-gnbmenu`
      )
      .then((res) => setBreadcrumble(res.data));
  }, []);

  return { item, details, breadcrumble, otherItems };
};

export default useProductMock;
