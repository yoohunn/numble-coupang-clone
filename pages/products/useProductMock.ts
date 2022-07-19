import { useEffect, useState } from 'react';
import axios from 'axios';

const useProductMock = () => {
  const [item, setItem] = useState();
  const [details, setDetails] = useState();
  const [breadcrumble, setBreadcrumble] = useState();
  const [otherItems, setOthderItems] = useState();

  const productId = 1;
  const itemId = 1;
  const vendoritemId = 3;

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

  return [item, details, breadcrumble, otherItems];
};

export default useProductMock;
