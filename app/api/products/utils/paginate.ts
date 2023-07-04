import { TPaginateInputParams } from "#/types";

export const paginate = ({
  items,
  page,
  limit,
  totalCount,
}: TPaginateInputParams) => {
  const totalPagesCount = Math.ceil(totalCount / limit);

  return {
    items: items.slice((page - 1) * limit, page * limit),
    totalPagesCount,
  };
};
