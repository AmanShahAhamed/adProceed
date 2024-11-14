"use client";

type IBtnName = {
  clickHandler: () => void;
  className: string;
  btnName: string;
  icon?: never;
};
type IBtnICon = {
  clickHandler: () => void;
  className: string;
  btnName?: never;
  icon: JSX.Element;
};
type IProps = IBtnName | IBtnICon;

const Btn: React.FC<IProps> = ({ className, btnName, icon, clickHandler }) => {
  return (
    <div className={className} onClick={clickHandler}>
      <span>{btnName ? btnName : icon}</span>
    </div>
  );
};

export default Btn;
