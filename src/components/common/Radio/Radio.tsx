interface IRadio {
  name: string;
  value: string;
  title: string;
  defaultChecked?: boolean;
}

export default function Radio({ name, value, title, defaultChecked }: IRadio) {
  return (
    <label>
      <input
        type='radio'
        name={name}
        value={value}
        defaultChecked={defaultChecked}
      />
      {title}
    </label>
  );
}
