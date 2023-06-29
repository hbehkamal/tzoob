import { NextRequest } from "next/server";

import { getData } from "./service";

export const GET = async (request: NextRequest) => {
  const params = request.nextUrl.searchParams;

  const { data, totalCount, totalPagesCount } = getData({ params });

  const result = {
    totalCount,
    totalPagesCount,
    data,
  };

  return new Response(JSON.stringify(result), { status: 200 });
};
