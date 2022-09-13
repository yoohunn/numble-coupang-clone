import { useEffect, useState } from 'react';
import { ProductsService } from '../../services';

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
    ProductsService.getItems(productId, vendoritemId).then((data) =>
      setItem(data)
    );

    ProductsService.getDetails(productId, itemId, vendoritemId).then((data) =>
      setDetails(data)
    );

    ProductsService.getOtherItems(productId, itemId, vendoritemId).then(
      (data) => setOthderItems(data)
    );

    ProductsService.getBreadcrumble(productId).then((data) =>
      setBreadcrumble(data)
    );
  }, []);

  return { item, details, breadcrumble, otherItems };
};

export default useProductMock;
