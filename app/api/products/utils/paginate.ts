import { TPaginateInputParams } from "#/app/types";

export const paginate = ({
  items,
  params,
  totalCount,
}: TPaginateInputParams) => {
  const page = parseInt(params.get("page") || "1");
  const perPage = parseInt(params.get("perPage") || "10");

  const totalPagesCount = Math.ceil(totalCount / perPage);

  return {
    items: items.slice((page - 1) * perPage, page * perPage),
    totalPagesCount,
  };
};
