import styled from '@emotion/styled';

interface IProps {
  type: 'fresh' | 'wow' | 'custom';
  color?: 'gray' | 'green' | 'blue' | string;
  title?: string;
}

const Label = ({ title, color, type }: IProps) => {
  const labelData = {
    fresh: {
      color: '#00891a',
      title: '로켓프레쉬 가능',
    },
    wow: {
      color: '#487fda',
      title: '로켓와우 가능',
    },
    custom: {
      color: color || '#555',
      title,
    },
  };

  return <SLabel color={labelData[type].color}>{labelData[type].title}</SLabel>;
};

export default Label;

const SLabel = styled.span<{ color: string }>`
  padding: 0 2px;
  margin: 0 2px;
  font-size: 11px;
  color: ${(props) => props.color};
  border: 1px solid ${(props) => props.color};
  border-radius: 8px;
`;
