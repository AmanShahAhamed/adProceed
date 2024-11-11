"use client";
interface IProps {
  className: string;
  btnName: string;
  clickHandler: () => void;
}

const Btn: React.FC<IProps> = ({ className, btnName, clickHandler }) => {
  return (
    <div className={className} onClick={clickHandler}>
      {btnName}
    </div>
  );
};

export default Btn;
