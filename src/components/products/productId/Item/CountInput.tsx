import styled from '@emotion/styled';

interface IProps {}

const CountInput = ({}: IProps) => {
  return (
    <Wrapper>
      <form>
        <input type='text' defaultValue={1} />
        <div>
          <button>^</button>
          <button>⌵</button>
        </div>
      </form>
    </Wrapper>
  );
};

export default CountInput;

const Wrapper = styled.div`
  display: inline-block;
  margin-right: 7px;

  form {
    display: flex;
    width: 82px;
    border: 1px solid #ccc;

    input {
      vertical-align: top;
      text-align: center;
      width: 61px;
      height: 40px;
      background: transparent;
      font-size: 16px;
      font-weight: bold;
      border-right: 1px solid #eee;
      box-sizing: border-box;
      color: #111;
      line-height: 25px;
      padding: 11px 0 9px 0;
    }
    div {
      display: flex;
      flex-direction: column;
      width: 100%;

      button {
        background-color: white;
        flex: 1 1 0%;
      }
    }
  }
`;
