interface IProp {
  breadcrumble?: [];
}

const Breadcrumble = ({ breadcrumble }: IProp) => {
  return <section>{breadcrumble}</section>;
};

export default Breadcrumble;
