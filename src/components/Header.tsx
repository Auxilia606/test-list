import { useState } from "react";
import { useMyContext } from "../hooks";
import "./Header.css";

const Header = () => {
  const { virtualize, count, setContext } = useMyContext();
  const [inputCount, setInputCount] = useState(count);

  const onChangeCheckbox = () => {
    setContext((prev) => ({ ...prev, virtualize: !prev.virtualize }));
  };

  const onChangeInputValue: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setInputCount(Number(event.target.value));
  };

  const onClickButton = () => {
    setContext((prev) => ({ ...prev, count: inputCount }));
  };

  return (
    <section className="header">
      <div className="header-option">
        <span>가상화 적용</span>
        <input
          type="checkbox"
          checked={virtualize}
          onChange={onChangeCheckbox}
        />
      </div>
      <div className="header-option">
        <span>리스트 아이템 개수:</span>
        <input
          className="header-input"
          onChange={onChangeInputValue}
          value={inputCount}
        />
        <button onClick={onClickButton}>적용</button>
      </div>
    </section>
  );
};

export default Header;
