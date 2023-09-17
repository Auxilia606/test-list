import { useMemo } from "react";

type UseGenerateListParams = {
  count: number;
};

export type ListItemType = {
  index: number;
  color: string;
};

const useGenerateList = (params: UseGenerateListParams) => {
  const { count } = params;

  const list = useMemo(() => {
    return new Array(count).fill(0).map((_, index) => ({
      index,
      color: `#${Math.floor(Math.random() * 0xffffff).toString(16)}`,
    }));
  }, [count]);

  return list;
};

export default useGenerateList;
