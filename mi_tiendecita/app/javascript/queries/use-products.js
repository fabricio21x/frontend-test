import { useQuery } from "react-query";
import { read } from "_interfaces/api";

async function getProducts(storeId) {
  const headers = {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE2Mzc5Nzc3MDEsImlhdCI6MTYzNzM3MjkwMX0.s6GD0uofYlzVmCLq1d10V4CAfHIjuymST6RORTZTV6w",
  };

  const { data } = await read(
    "products",
    {
      parentId: storeId,
      parentName: "stores",
    },
    { headers }
  );

  return data;
}

export function useProducts(storeId) {
  return useQuery(["store", storeId, "products"], () => getProducts(storeId), {
    suspense: true,
  });
}
