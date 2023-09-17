import React, { useCallback, useEffect, useRef, useState } from "react";
import { useMyContext, useGenerateList, useThrottle } from "../hooks";
import { throttle } from "../utils";
import "./List.css";
import { ListItemType } from "../hooks/useGenerateList";
import Item from "./Item";

const ITEM_HEIGHT = 30;

const List = () => {
  const { count, virtualize } = useMyContext();

  const [listWithStyle, setListWithStyle] = useState<
    (ListItemType & { top: number })[]
  >([]);
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef<HTMLElement>(null);

  const { execute } = useThrottle();

  const list = useGenerateList({ count });

  const onScrollCallback = useCallback(
    (event: React.UIEvent<HTMLDivElement, UIEvent>) => {
      return throttle(() => {
        const { currentTarget } = event;
        setScrollTop(currentTarget.scrollTop);
      });
    },
    []
  );

  const onScroll: React.UIEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      execute(onScrollCallback(event), 17);
    },
    [execute, onScrollCallback]
  );

  useEffect(() => {
    if (!containerRef.current || !virtualize) return;
    const containerHeight = containerRef.current.offsetHeight || 0;

    const getRenderRange = () => {
      const start = Math.floor(scrollTop / ITEM_HEIGHT);
      const length = Math.ceil(containerHeight / ITEM_HEIGHT);

      return [Math.max(0, start - 10), start + length + 10];
    };
    console.log("effect???", getRenderRange());

    setListWithStyle(
      list
        .slice(...getRenderRange())
        .map((value) => ({ ...value, top: value.index * 30 }))
    );
  }, [list, scrollTop, virtualize]);

  useEffect(() => {
    if (!containerRef.current || virtualize) return;

    setListWithStyle(
      list.map((value) => ({ ...value, top: value.index * 30 }))
    );
  }, [list, virtualize]);

  return (
    <section className="list-container" onScroll={onScroll} ref={containerRef}>
      <div
        className="scroll-container"
        style={{ height: list.length * ITEM_HEIGHT }}
      >
        {listWithStyle.map((value) => (
          <Item key={`${value.color}_${value.index}`} {...value} />
        ))}
      </div>
    </section>
  );
};

export default React.memo(List);
