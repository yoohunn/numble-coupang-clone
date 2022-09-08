import Metatags from '../common/MetaTag/MetaTage';

type ProductMetaProps = {
  itemName?: string;
  imageUrl?: string;
};

export default function ProductMeta({ itemName, imageUrl }: ProductMetaProps) {
  return (
    <Metatags //
      title={itemName}
      imageUrl={imageUrl}
    />
  );
}
