interface IProp {
  item?: {};
}

const Item = ({ item }: IProp) => (
  <section>
    <Images />
    <Info />
  </section>
);

export default Item;

//
interface IImages {}

const Images = ({}: IImages) => {
  return (
    <section className='Images'>
      {/* ImageItems */}
      {/* ImageDetail */}
    </section>
  );
};

//
interface IInfo {}

const Info = ({}: IInfo) => {
  return (
    <section className='Info'>
      <div>
        <a href=''>BrandName</a>
        <h1>itemName</h1>
        {/* Rating */}
      </div>

      <div>
        <p>originPrice</p>
        {/* SalePrice.span */}
        {/* Bage.img delivery.badgeUrl */}
      </div>

      <div>
        <input type='radio'>
          <span> 내일(목) 7/21 도착 보장</span>
          <span>(23시간 57분 내 주문 시 / 서울⋅경기 기준)</span>
        </input>
      </div>

      <div></div>

      <div>
        <input type='checkbox'>
          <span>options.items[0].title</span>
          <span>price</span>
        </input>
        <p>subTitle</p>
      </div>

      <div>
        <button> 장바구니 담기 </button>
        <button> 바로구매 </button>
      </div>
    </section>
  );
};
