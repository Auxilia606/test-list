import React from "react";
import { ListItemType } from "../hooks/useGenerateList";
import "./Item.css";

type ItemProps = ListItemType & { top: number };

const Item: React.FC<ItemProps> = (props) => {
  const { color, index, top } = props;

  return (
    <div className="item-container" style={{ backgroundColor: color, top }}>
      아이템 {index}
    </div>
  );
};

export default Item;
