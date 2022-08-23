import Image from 'next/image';

interface IProps {
  url: string;
}

const ImageDetail = ({ url }: IProps) => {
  return (
    <>
      <Image //
        src={`https:${url}`}
        alt='Product Item Detail Image'
        width={410}
        height={410}
        layout='fixed'
      />
    </>
  );
};

export default ImageDetail;
