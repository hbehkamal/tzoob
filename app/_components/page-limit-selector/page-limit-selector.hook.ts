import { IPageLimitSelectorHook } from "./page-limit-selector.type";

export const usePageLimitSelector = ({ setLimit }: IPageLimitSelectorHook) => {
  const handleChangeLimit = (limit: number) => () => {
    setLimit(limit);
  };

  return { handleChangeLimit };
};
