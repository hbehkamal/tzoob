import { IPageLimitHook } from "./page-limit.type";

export const usePageLimit = ({ setLimit }: IPageLimitHook) => {
  const handleChangeLimit = (limit: number) => () => {
    setLimit(limit);
  };

  return { handleChangeLimit };
};
