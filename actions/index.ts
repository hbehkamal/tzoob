import { IProduct } from "#/types";

// const getProducts = async () => {
//   try {
//     const response = await fetch("localhost:3000/api/products");
//     console.log("response: ", response);

//     return response.json();
//   } catch (error) {
//     console.log(error);
//   }
// };

async function getProducts() {
  let data;
  try {
    const res = await fetch(`http://localhost:3000/api/products`);
    data = await res.json();
  } catch (error) {
    console.error(error);
  }

  return data;
}

export default getProducts;
