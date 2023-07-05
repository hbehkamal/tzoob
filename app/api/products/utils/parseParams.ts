import { TOrderBy } from "#/_types";

export const parseParams = (params: URLSearchParams) => {
  // Get sort order - default set to 'asc'
  const orderBy: TOrderBy = (params.get("order") as TOrderBy) || "asc";

  const page = parseInt(params.get("page") || "1");
  const limit = parseInt(params.get("limit") || "8");

  return {
    orderBy,
    page,
    limit,
  };
};
