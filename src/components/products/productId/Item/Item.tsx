import ItemImages from './ItemImages';
import ItemInfo from './ItemInfo';
import { IItem } from '../../../../types/product.interface';

interface IProps {
  item?: IItem;
}

const Item = ({ item }: IProps) => {
  if (!item) return <p>로딩중...</p>;

  return (
    <section>
      <ItemImages images={item.images} />
      <ItemInfo />
    </section>
  );
};

export default Item;
